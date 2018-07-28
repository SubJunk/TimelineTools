angular.module('app', ['angular-md5'])
  .constant('_', window._)
  .run(function ($rootScope) {
    $rootScope._ = window._;
  })
  .controller('DataController', function($http, $location, $log, $timeout, $window, md5) {
    var vm = this;

    var comics        = $window.comics;
    var collections   = $window.collections;
    var series        = $window.series;
    var seriesVolumes = $window.seriesVolumes;

    const BODY_PADDING = 20;
    const LEFT_MARGIN = 200;
    const TOP_MARGIN = 300;

    //Colour constants used in multiple functions
    const LIGHTNESS_MIN = 30;   //Lightness can be in the range 0-100
    const LIGHTNESS_MAX = 85;
    const PERCENT_MULTIPLIER = 100;
    const SATURATION_MIN = 35;  //Saturation can be in the range 0-100
    const SATURATION_MAX = 75;  //We choose a mid range that's easy to see
    const STEP_CHANGE = 30;     //define how far to step around the colour wheel each time
    const COMPLETE_COLOR_WHEEL_DEGREES = 360;     //360 degrees in colour wheel

    var globalVerticalPositionCounter = 0;
    var bodyStyles = {
      width: null,
      padding: BODY_PADDING,
      background: null
    };
    var seriesVolumeLabels = [];

    // Pixel counts
    const VISUAL_BLOCK_SIZE = 60;

    /*
     * How far away the left edge of labels are from the left
     * of the first thumbnail of a series volume.
     */
    const LABEL_OFFSET = 150;

    var $jqWindow = $(window);

    vm.expandedComicId;
    vm.expandedCollectionId;
    vm.expandedCollection;
    var expandedSeriesVolume;
    vm.prevComic;
    vm.nextComic;
    var currentComicIndexInCollection;
    var currentCollectionIndexInCollections;
    vm.isShowCollections = false;
    vm.finishedLoading = false;

    // API variables
    var apiBaseUrl = 'https://gateway.marvel.com/v1/public/';
    var apiKeyPublic = _.isEmpty($window.apiKeyPublic) ? '46a863fa31f601aacb87dae9cb8f7c45' : $window.apiKeyPublic;
    var apiKeyPrivate = $window.apiKeyPrivate;
    var timestamp;
    var apiHash;

    var setAPIComicData = function(comic, seriesVolumeMarvelID) {
      $http({
        method: 'GET',
        url: apiBaseUrl + 'comics' + getExtraAPIParamsString(),
        params: {
          issueNumber: comic.issue,
          series: seriesVolumeMarvelID,
          apikey: apiKeyPublic
        }
      }).then(function successCallback(response) {
        if (_.isEmpty(response.data.data.results)) {
          return;
        }

        var firstAPIResult = _.first(response.data.data.results);
        comic.link = firstAPIResult.digitalId ? 'https://read.marvel.com/#book/' + firstAPIResult.digitalId : null;
      }, function errorCallback(err) {
        throw new Error(err);
      });
    };

    const ONE_SECOND_IN_MILLISECONDS = 1000;
    var getExtraAPIParamsString = function() {
      if (!_.isEmpty(apiKeyPrivate) && $location.protocol() === 'file') {
        timestamp = Date.now() / ONE_SECOND_IN_MILLISECONDS | 0;
        apiHash = md5.createHash(timestamp + apiKeyPrivate + apiKeyPublic);
        return '?ts=' + timestamp + '&hash=' + apiHash;
      }

      return '';
    };

    /**
     * Figure out what the name of the image on the server will be
     * based on the series, volume and issue.
     *
     * Notes:
     * This uses two regular expressions to sanitize/standardize the
     * series name:
     * 1) Remove all occurrences of the characters ():&
     * 2) Replace all occurrences of whitespace (including multiple
     *    in a row) and forward slashes with underscores.
     * Finally it appends the volume and issue.
     */
    var getSanitizedString = function(isComic, seriesOrCollection, volume, issue) {
      seriesOrCollection = seriesOrCollection
        .replace(/[():&?'.,]/g, '')
        .replace(/\s+|\//g, '_');

      if (isComic) {
        issue = issue.toString().replace(/[.]/g, '');

        seriesOrCollection +=
            '_Vol_' +
            volume +
            '_' +
            issue;
      } else {
        seriesOrCollection = seriesOrCollection.replace(/_Partial/g, '');
      }

      return seriesOrCollection;
    };

    var prevComicId;
    var nextComicId;
    vm.toggleExpandComic = function(currentComic, isForceScroll) {
      if (!angular.isObject(currentComic)) {
        return;
      }

      // Unset the sticky styles if they exist
      $('.comic')
        .removeClass('stickyTop stickyLeft stickyRight stickyBottom')
        .css({marginLeft: '', marginTop: '', marginRight: '', marginBottom: '' });

      vm.prevComic = undefined;
      vm.nextComic = undefined;

      // If these match, close the expanded box
      if (_.isEmpty(currentComic) || vm.expandedComicId === currentComic.id) {
        $location.search('id', '');

        return $timeout(function() {
          vm.expandedComicId    = undefined;
          vm.expandedCollection = undefined;
        });
      }

      /**
       * If there is already a comic expanded, and we have already confirmed
       * above that we want to expand a different one, this block maintains
       * the expanded box's position on the page by scrolling the viewport.
       */
      if (isForceScroll) {
        $('html, body').animate({
          scrollLeft: currentComic.containerStyles.left - LEFT_MARGIN,
          scrollTop:  currentComic.containerStyles.top + TOP_MARGIN
        });
      } else if (vm.expandedComicId) {
        var previouslyExpandedComic = vm.expandedCollection.comics[currentComicIndexInCollection];
        var positionDifference = {
          left: previouslyExpandedComic.containerStyles.left - currentComic.containerStyles.left,
          top: previouslyExpandedComic.containerStyles.top  - currentComic.containerStyles.top
        };

        $('html, body').animate({
          scrollLeft: $jqWindow.scrollLeft() - positionDifference.left,
          scrollTop:  $jqWindow.scrollTop()  - positionDifference.top
        });
      }

      vm.expandedComicId = currentComic.id;

      // Make sure the panel is fully visible
      repositionStickyElements();

      // Get the collection containing this comic
      vm.expandedCollection = _.find(collections, function(collection, index) {
        currentComicIndexInCollection = collection.comicIds.indexOf(currentComic.id);
        if (collection.comicIds.includes(currentComic.id)) {
          currentCollectionIndexInCollections = index;
          return true;
        }
        return false;
      });

      // if this is the first collection
      if (_.isEqual(collections[currentCollectionIndexInCollections], _.first(collections))) {
        vm.prevCollection = undefined;
        vm.prevCollectionFirstComic = undefined;
      } else  {
        vm.prevCollection = collections[currentCollectionIndexInCollections - 1];
        vm.prevCollectionFirstComic = _.find(comics, ['id', _.first(vm.prevCollection.comicIds)]);
      }

      // check for the last collection
      if (_.isEqual(collections[currentCollectionIndexInCollections], _.last(collections))) {
        vm.nextCollection = undefined;
        vm.nextCollectionFirstComic = undefined;
      } else {
        vm.nextCollection = collections[currentCollectionIndexInCollections + 1];
        vm.nextCollectionFirstComic = _.find(comics, ['id', _.first(vm.nextCollection.comicIds)]);
      }

      // Find the previous comic
      if (currentComicIndexInCollection > 0) {
        vm.prevComic = vm.collections[currentCollectionIndexInCollections].comics[currentComicIndexInCollection - 1];
      } else if (vm.prevCollection) {
        /**
         * The expanded comic is the first one in a collection, so we need to find out
         * the last comic in the previous collection.
         */
        prevComicId = vm.prevCollection.comicIds[vm.prevCollection.comicIds.length - 1];
        vm.prevComic = _.find(comics, ['id', prevComicId]);
      }

      // Find the next comic
      if (vm.collections[currentCollectionIndexInCollections].comics[currentComicIndexInCollection + 1]) {
        vm.nextComic = vm.collections[currentCollectionIndexInCollections].comics[currentComicIndexInCollection + 1];
      } else if (vm.nextCollection) {
        /**
         * The expanded comic is the last one in a collection, so we need to find out
         * the first comic in the next collection.
         */
        nextComicId = vm.nextCollection.comicIds[0];
        vm.nextComic = _.find(comics, ['id', nextComicId]);
      }

      $location.search('id', vm.expandedComicId);

      // Get the series volume containing this comic
      expandedSeriesVolume = _.find(vm.seriesVolumes, function(seriesVolume) {
        return seriesVolume.id === currentComic.seriesVolumeId;
      });

      var expandedComic = _.find(comics, ['id', vm.expandedComicId]);
      if (expandedSeriesVolume.marvelId) {
        setAPIComicData(expandedComic, expandedSeriesVolume.marvelId);
      } else {
        $http({
          method: 'GET',
          url: apiBaseUrl + 'series' + getExtraAPIParamsString(),
          params: {
            title: expandedSeriesVolume.title,
            startYear: expandedSeriesVolume.startYear,
            apikey: apiKeyPublic
          }
        }).then(function successCallback(response) {
          if (response.data.data.results.length) {
            expandedSeriesVolume.marvelId = _.first(response.data.data.results).id;
            setAPIComicData(expandedComic, expandedSeriesVolume.marvelId);
          }
        }, function errorCallback(err) {
          throw new Error(err);
        });
      }
    };

    vm.toggleExpandCollection = function(collection) {
      vm.expandedCollectionId = vm.expandedCollectionId === collection.id ? null : collection.id;
    };

    var doSpeedProfile = false;
    if (doSpeedProfile) var startTimeInitialLoad = new Date();

    // Sort the data by date
    comics = _.sortBy(comics, ['yearPublished', 'monthPublished', 'seriesVolume']);

    /**
     * This loop populates the dates object with an array of years
     * which contains arrays of months, represented as numbers.
     *
     * This is to ensure that if there are no comics in our db for
     * a month, we still have that month displaying for consistency.
     *
     * While we are at it, we set the width of each month here, since
     * that lets us reuse our magic number instead of having a duplicate
     * in the CSS.
     */
    var lastComic = _.last(comics);
    var firstComic = _.first(comics);
    var monthsSinceFirst;
    var finalYear = lastComic.yearPublished;
    var finalMonth = lastComic.monthPublished;
    var firstYear = firstComic.yearPublished;
    var firstMonth = firstComic.monthPublished;
    var dates = {};
    var yearIncrement;
    var monthIncrement;
    const ONE_YEAR_IN_MONTHS = 12;

    for (yearIncrement = firstYear; yearIncrement <= finalYear; yearIncrement++) {
      dates[yearIncrement] = {};

      if (yearIncrement === finalYear) {
        // In this final year we stop the counter at the final month
        for (monthIncrement = 1; monthIncrement <= finalMonth; monthIncrement++) {
          dates[yearIncrement][monthIncrement] = { number: monthIncrement, styles: { width: VISUAL_BLOCK_SIZE } };
        }
      } else if (yearIncrement === firstYear) {
        // In this first year we start the counter at the first month
        for (monthIncrement = firstMonth; monthIncrement <= ONE_YEAR_IN_MONTHS; monthIncrement++) {
          dates[yearIncrement][monthIncrement] = { number: monthIncrement, styles: { width: VISUAL_BLOCK_SIZE } };
        }
      } else {
        // In this in-between year we always add 12 months
        for (monthIncrement = 1; monthIncrement <= ONE_YEAR_IN_MONTHS; monthIncrement++) {
          dates[yearIncrement][monthIncrement] = { number: monthIncrement, styles: { width: VISUAL_BLOCK_SIZE } };
        }
      }
    }

    var previousYearMonthVolume;
    var globalHorizontalOffset = 0;
    var latestVerticalHorizontalOffsets = {};
    var newLabelNeeded = false;
    var windowWidth = $jqWindow.innerWidth();
    _.each(comics, function(comic) {
      /**
       * Look up the volume and series for this comic and
       * throw errors for obvious problems before proceeding.
       */
      var currentSeriesVolume = seriesVolumes[_.findKey(seriesVolumes, { 'id': comic.seriesVolumeId })];
      if (!currentSeriesVolume) {
        throw new Error(comic.seriesVolumeId + ' not found');
      }

      comic.containerStyles = {};
      comic.classes = {};
      comic.styles = {};

      // Horizontal positioning
      monthsSinceFirst = (comic.yearPublished - firstYear) * ONE_YEAR_IN_MONTHS;
      monthsSinceFirst -= firstMonth;
      monthsSinceFirst += comic.monthPublished;
      comic.containerStyles.left = (monthsSinceFirst <= 0 ? 0 : monthsSinceFirst) * VISUAL_BLOCK_SIZE;

      /**
       * Manage multiple releases of the same series in the same month
       * by making the month wider.
       */
      if (previousYearMonthVolume === (comic.yearPublished + comic.monthPublished + comic.seriesVolumeId)) {
        dates[comic.yearPublished][comic.monthPublished].styles.width += VISUAL_BLOCK_SIZE;
        comic.containerStyles.left += VISUAL_BLOCK_SIZE + globalHorizontalOffset;
        globalHorizontalOffset += VISUAL_BLOCK_SIZE;
      } else {
        comic.containerStyles.left += globalHorizontalOffset;
      }

      /**
       * Vertical positioning ensures that each seriesVolume gets
       * its own row on the page. The exception is if a seriesVolume
       * has not had any new issues for a whole page width, then we
       * allow the next seriesVolume that is looking for a row, to slot in.
       *
       * This is a two-step process.
       * First, in this block, we either use the current position for the
       * seriesVolume or we use the globalVerticalPositionCounter to go onto
       * the last row.
       * Step two documented below.
       */
      if (angular.isDefined(currentSeriesVolume.verticalPosition)) {
        comic.containerStyles.top = currentSeriesVolume.verticalPosition * VISUAL_BLOCK_SIZE;
      } else {
        currentSeriesVolume.verticalPosition = globalVerticalPositionCounter;
        comic.containerStyles.top = globalVerticalPositionCounter * VISUAL_BLOCK_SIZE;
        globalVerticalPositionCounter++;
        newLabelNeeded = true;
      }

      /**
       * Step two of vertical positioning:
       * At this point, the seriesVolume has a row to use, but in this
       * block we check if there is a row further up the page to slot into
       * so we take up less vertical space.
       */

      /**
       * The maximum horizontal offset allowed until we recycle the
       * vertical position.
       */
      var horizontalClearanceLimit = comic.containerStyles.left - windowWidth;
      if (
        !latestVerticalHorizontalOffsets[currentSeriesVolume.verticalPosition] ||
        (
          latestVerticalHorizontalOffsets[currentSeriesVolume.verticalPosition].seriesVolumeId !== currentSeriesVolume.id &&
          latestVerticalHorizontalOffsets[currentSeriesVolume.verticalPosition].offset < horizontalClearanceLimit
        )
      ) {
        /**
         * It has been a while (if ever) since the last issue of this
         * series appeared in the timeline so let's put this one on a
         * higher row if possible.
         *
         * Counter starts at 1 to keep Uncanny always at the top.
         */
        for (var i = 1; i < globalVerticalPositionCounter; i++) {
          if (
            !latestVerticalHorizontalOffsets[i] ||
            latestVerticalHorizontalOffsets[i].offset < horizontalClearanceLimit
          ) {
            currentSeriesVolume.verticalPosition = i;
            comic.containerStyles.top = i * VISUAL_BLOCK_SIZE;

            /**
             * We are about to insert this seriesVolume into a vertical position
             * that has already been used before, so we remove the reference to
             * that position in the previous seriesVolume. This allows a new vertical
             * position to be generated for that previous seriesVolume if one appears.
             */
            if (latestVerticalHorizontalOffsets[i]) {
              var previousSeriesVolume = seriesVolumes[_.findKey(seriesVolumes, { 'id': latestVerticalHorizontalOffsets[i].seriesVolumeId })];
              if (!previousSeriesVolume) {
                throw new Error(comic.seriesVolumeId + ' not found');
              }
              previousSeriesVolume.verticalPosition = null;
            }
            newLabelNeeded = true;

            break;
          }
        }
      }

      /**
       * Store a reference to the last horizontal position used
       * by the vertical position currently used by this series volume.
       */
      latestVerticalHorizontalOffsets[currentSeriesVolume.verticalPosition] = {
        offset: comic.containerStyles.left,
        seriesVolumeId: currentSeriesVolume.id
      };

      // Store the name of the series in the comic object
      comic.series = currentSeriesVolume.title;
      comic.image = getSanitizedString(true, comic.series, currentSeriesVolume.volume, comic.issue);

      previousYearMonthVolume = comic.yearPublished + comic.monthPublished + comic.seriesVolumeId;

      /**
       * Match the width of the page to the width of the content, which
       * includes one horizontal increment (the width of the current
       * comic thumbnail) and 2 body padding units to make up for the
       * left and right padding of the page.
       */
      bodyStyles.width = comic.containerStyles.left + VISUAL_BLOCK_SIZE + (bodyStyles.padding * 2);
      if (newLabelNeeded) {
        seriesVolumeLabels.push({
          text: currentSeriesVolume.titleWithVolume,
          right: comic.containerStyles.left,
          id: 'label-' + seriesVolumeLabels.length,
          containerStyles: {
            top: comic.containerStyles.top,
            left: comic.containerStyles.left - LABEL_OFFSET
          },
          labelClasses: {},
          labelStyles: {},
        });

        newLabelNeeded = false;
      } else if (currentSeriesVolume.title !== 'Giant Size X-Men') {
        // Really ugly exception for Giant Size to stop it taking up the first row
        var seriesVolumeLabelIndex = _.findLastIndex(seriesVolumeLabels, function(seriesVolumeLabel) {
          return seriesVolumeLabel.text === currentSeriesVolume.titleWithVolume;
        });

        if (seriesVolumeLabelIndex === -1) {
          throw new Error(currentSeriesVolume.titleWithVolume + ' not found in the seriesVolumeLabelIndex');
        }

        seriesVolumeLabels[seriesVolumeLabelIndex].right = comic.containerStyles.left;
      }
    });

    if (doSpeedProfile) {
      var endTime = new Date();
      var timeDiff = endTime - startTimeInitialLoad;
      $log.warn('Time to run initial db loop:', timeDiff + 'ms');
    }

    // Render collections as groups of comics
    var collectionColorsIndex = {};
    var comicIndex;
    _.each(collections, function(collection) {
      var collectionColor = getCollectionColors(collection.title);
      _.each(collection.comicIds, function(comicId) {
        comicIndex = _.findKey(comics, { 'id': comicId });
        if (!comicIndex) {
          throw new Error(comicId + ' not found in the comics db');
        }
        comics[comicIndex].styles.background = collectionColor.backgroundColor;
        comics[comicIndex].styles.color = collectionColor.textColor;
      });
    });

    /**
     * Returns either the existing color for the collection, or
     * generates a color in HSL format, e.g. hsl(1, 2, 3)
     * converts it to RGB to find a light or dark contrasting color,
     * returns a background color and text color.
     *
     * @param  {string} collectionTitle
     * @return {object} background and text colors
     */
    var backgroundLightness;
    var hue;
    var saturation;
    var lightness;
    var chroma;
    var huePrime;
    var secondComponent;
    var red;
    var green;
    var blue;
    var lightnessAdjustment;
    var rgbColor;
    function getCollectionColors(collectionTitle) {
      if (!collectionColorsIndex[collectionTitle]) {
        var startColor;
        collectionColorsIndex[collectionTitle] = {};
        collectionColorsIndex[collectionTitle].collectionTitle = collectionTitle;
        collectionColorsIndex[collectionTitle].hslColor = 'hsl(';
        if (angular.isDefined(startColor)) {
          if ((startColor + STEP_CHANGE) > COMPLETE_COLOR_WHEEL_DEGREES) {
            startColor -= COMPLETE_COLOR_WHEEL_DEGREES;
          }
          startColor += STEP_CHANGE;
        } else {
          startColor = Math.floor(Math.random() * COMPLETE_COLOR_WHEEL_DEGREES);
        }
        hue = startColor;
        collectionColorsIndex[collectionTitle].hslColor += startColor + ', ';
        saturation = parseFloat('0.' + Math.floor(Math.random() * ((SATURATION_MAX - SATURATION_MIN)) + SATURATION_MIN));
        collectionColorsIndex[collectionTitle].hslColor += saturation * PERCENT_MULTIPLIER + '%, ';
        lightness = parseFloat('0.' + Math.floor(Math.random() * ((LIGHTNESS_MAX - LIGHTNESS_MIN)) + LIGHTNESS_MIN));
        collectionColorsIndex[collectionTitle].hslColor += lightness * PERCENT_MULTIPLIER  + '%)';

        /**
         * Start the conversion of the HSL color to RGB
         * Converts an HSLA color value to RGB. Conversion formula
         * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
         * Assumes h, s, and l are contained in the set [0, 1] and
         * assigns r, g, and b in the set [0, 255].
         *
         * @see https://github.com/kayellpeee/hsl_rgb_converter
         */
        const RGB_MAX = 255;
        const HUE_SEGMENT = 60; // 60 degrees, one sixth of the colour wheel
        const MOD = 2;
        const CHROMA_MAX = 1;

        chroma = (CHROMA_MAX - Math.abs((lightness + lightness) - CHROMA_MAX)) * saturation;
        huePrime = hue / HUE_SEGMENT;
        secondComponent = chroma * (CHROMA_MAX - Math.abs((huePrime % MOD) - CHROMA_MAX));

        huePrime = Math.floor(huePrime);

        // Reset the values each time
        red = 0;
        green = 0;
        blue = 0;

        switch (huePrime) {
          case 0:
            red = chroma;
            green = secondComponent;
            break;
          case 1:
            red = secondComponent;
            green = chroma;
            break;
          case 2:
            green = chroma;
            blue = secondComponent;
            break;
          case 3:
            green = secondComponent;
            blue = chroma;
            break;
          case 4:
            red = secondComponent;
            blue = chroma;
            break;
          case 5:
            red = chroma;
            blue = secondComponent;
        }

        lightnessAdjustment = lightness - (chroma / 2);
        red += lightnessAdjustment;
        green += lightnessAdjustment;
        blue += lightnessAdjustment;

        rgbColor = [Math.round(red * RGB_MAX), Math.round(green * RGB_MAX), Math.round(blue * RGB_MAX)];
        /**
         * Given a color in RGB format, assign either a light
         * or dark color.
         *
         * @see https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
         */

        const RGB_CUTOFF = 0.03928;  // See http://entropymine.com/imageworsener/srgbformula/
        const RGB_SLOPE = 0.055;
        const RGB_DENOMINATOR = 1.055;
        const RGB_EXPONENT = 2.4;
        const LINEAR_RGB = 12.92;      // R, G, B * LINEAR_RBG = RGB_CUTTOFF
        const PERCEIVED_WEIGHTING_RED_LIGHT = 0.2126;
        const PERCEIVED_WEIGHTING_GREEN_LIGHT = 0.7152;
        const PERCEIVED_WEIGHTING_BLUE_LIGHT = 0.0722; //Given equal quantities of RGB, humans perceive them in a weighted way
        const LIGHT_DARK_THRESHOLD = 0.179;

        for (var i = 0; i < rgbColor.length; ++i) {
          rgbColor[i] /= RGB_MAX;

          if (rgbColor[i] <= RGB_CUTOFF) {
            rgbColor[i] = rgbColor[i] / LINEAR_RGB ;
          } else {
            rgbColor[i] = Math.pow((rgbColor[i] + RGB_SLOPE) / RGB_DENOMINATOR, RGB_EXPONENT);
          }
        }

        var iterator = 0;

        backgroundLightness = PERCEIVED_WEIGHTING_RED_LIGHT * rgbColor[iterator];
        iterator++;
        backgroundLightness +=  PERCEIVED_WEIGHTING_GREEN_LIGHT * rgbColor[iterator];
        iterator++;
        backgroundLightness += PERCEIVED_WEIGHTING_BLUE_LIGHT * rgbColor[iterator];

        if (backgroundLightness > LIGHT_DARK_THRESHOLD) {
          collectionColorsIndex[collectionTitle].textColor = '#444';
        } else {
          collectionColorsIndex[collectionTitle].textColor = '#ccc';
        }
      }
      return {
        backgroundColor: collectionColorsIndex[collectionTitle].hslColor,
        textColor: collectionColorsIndex[collectionTitle].textColor
      };
    }

    /**
     * Use jQuery to manipulate classes and styles to make the expanded
     * panels always fit in the viewport, and series volume labels stick
     * to the left.
     */
    var $expandedComic;
    var scrollLeft;
    var scrollTop;
    var isScrolledPastLeft;
    var anchorTopPosition;
    var anchorLeftPosition;
    var anchorRightPosition;
    var anchorBottomPosition;
    var scrollRight;
    var scrollBottom;
    var isStickyTop;
    var isStickyLeft;
    var isStickyRight;
    var isStickyBottom;
    var repositionStickyElements = function() {
      if (doSpeedProfile) var startTimeReposition = new Date();

      // The scroll position of the page, minus the main padding
      scrollLeft = $jqWindow.scrollLeft() - BODY_PADDING;
      scrollTop  = $jqWindow.scrollTop();

      /**
       * Label positioning:
       */
      _.each(vm.seriesVolumeLabels, function(seriesVolumeLabel) {
        isScrolledPastLeft = Boolean(scrollLeft > seriesVolumeLabel.containerStyles.left);

        seriesVolumeLabel.labelClasses.stickyLeft = isScrolledPastLeft;

        if (isScrolledPastLeft) {
          seriesVolumeLabel.labelStyles.marginTop = '-' + scrollTop;

          // If the browser is scrolled past the right, hide the label
          if (
            (scrollLeft - seriesVolumeLabel.right) > -LABEL_OFFSET &&
            (scrollLeft - seriesVolumeLabel.right) < 0
          ) {
            seriesVolumeLabel.visible = true;
            seriesVolumeLabel.labelStyles.left = (seriesVolumeLabel.right - scrollLeft - LABEL_OFFSET);
          } else if (seriesVolumeLabel.right < (scrollLeft + LABEL_OFFSET)) {
            seriesVolumeLabel.visible = false;
          } else {
            seriesVolumeLabel.visible = true;
            seriesVolumeLabel.labelStyles.left = '0';
          }
        } else {
          seriesVolumeLabel.visible = true;
          seriesVolumeLabel.labelStyles.marginTop = false;
        }
      });

      // Exit early and force render if there is no comic expanded
      if (!vm.expandedComicId) {
        return $timeout();
      }

      var expandedComic = _.find(comics, ['id', vm.expandedComicId]);
      if (!expandedComic) {
        return $log.error('The comic ' + vm.expandedComicId + ' could not be found.');
      }

      // Expanded panel positioning
      $timeout(function() {
        $expandedComic = $('.expanded .comic');
        if (!$expandedComic.length) {
          return;
        }

        var stickyAnchorOffset = $('.expanded .scroll-anchor').offset();
        anchorTopPosition    = stickyAnchorOffset.top;
        anchorLeftPosition   = stickyAnchorOffset.left;
        anchorRightPosition  = stickyAnchorOffset.left + $expandedComic.width();
        anchorBottomPosition = stickyAnchorOffset.top  + $expandedComic.height();

        scrollRight  = scrollLeft + $jqWindow.innerWidth();
        scrollBottom = scrollTop  + $jqWindow.innerHeight();

        isStickyTop    = Boolean(scrollTop  > anchorTopPosition);
        isStickyLeft   = Boolean(scrollLeft > anchorLeftPosition);
        isStickyRight  = Boolean(scrollRight  < anchorRightPosition);
        isStickyBottom = Boolean(scrollBottom < anchorBottomPosition);

        expandedComic.classes.stickyTop = isStickyTop;
        expandedComic.classes.stickyRight = isStickyRight;
        expandedComic.classes.stickyBottom = isStickyBottom;
        expandedComic.classes.stickyLeft = isStickyLeft;

        if ((isStickyTop || isStickyBottom) && !isStickyLeft && !isStickyRight) {
          expandedComic.styles.marginLeft = '-' + (scrollLeft + bodyStyles.padding);
          expandedComic.styles.marginTop = '';
        } else if ((isStickyLeft || isStickyRight) && !isStickyTop && !isStickyBottom) {
          expandedComic.styles.marginLeft = '';
          expandedComic.styles.marginTop = '-' + scrollTop;
        } else {
          expandedComic.styles.marginLeft = '';
          expandedComic.styles.marginTop = '';
        }

        if (doSpeedProfile) {
          var endTime = new Date();
          var timeDiff = endTime - startTimeReposition;
          $log.warn('Time to run repositionStickyElements:', timeDiff + 'ms');
        }
      });
    };

    /**
     * Handle arrow keys.
     *
     * @link https://stackoverflow.com/questions/1402698/binding-arrow-keys-in-js-jquery
     */
    const ESCAPE_KEYPRESS = 27;
    const LEFT_KEYPRESS = 37;
    const RIGHT_KEYPRESS = 39;

    $(document).keydown(function(e) {
      switch (e.which) {
        case ESCAPE_KEYPRESS:
          vm.toggleExpandComic({});
          break;

        case LEFT_KEYPRESS:
          if (vm.prevComic) {
            vm.toggleExpandComic(vm.prevComic);
          }
          break;

        case RIGHT_KEYPRESS:
          if (vm.nextComic) {
            vm.toggleExpandComic(vm.nextComic);
          }
          break;

        default:
          return; // exit this handler for other keys
      }
    });

    // Reposition the expanded panel when the user scrolls the viewport
    $jqWindow.on('load scroll', repositionStickyElements);

    // Catch clicks
    $jqWindow.on('click', function(data) {
      // Close the expanded comic if the click happened on a blank area
      if (data.target.localName === 'body' && vm.expandedComicId) {
        vm.toggleExpandComic({});
      }
    });

    var uniqueCollections = {};
    _.each(collections, function(collection) {
      // While we are here we add the image string for lookup
      collection.image = getSanitizedString(false, collection.title);

      if (uniqueCollections[collection.id]) {
        uniqueCollections[collection.id].allCollectionComicIds = _.concat(uniqueCollections[collection.id].allCollectionComicIds, collection.comicIds);
      } else {
        uniqueCollections[collection.id] = collection;
        uniqueCollections[collection.id].allCollectionComicIds = collection.comicIds;
      }

      _.each(collections, function(collectionInner) {
        if (collectionInner.title === collection.title) {
          collection.allCollectionComicIds = uniqueCollections[collection.id].allCollectionComicIds;
        }
      });
    });

    /**
     * Copy all of the comicIds from other parts of the same collection
     * into allCollectionComics so we can display them within the
     * expanded view and allow interaction with them, but still have the
     * arrow keys work chronologically.
     */
    _.each(uniqueCollections, function(uniqueCollection) {
      uniqueCollection.allCollectionComics = [];
      _.each(uniqueCollection.allCollectionComicIds, function(comicId) {
        uniqueCollection.allCollectionComics.push(
          _.find(comics, ['id', comicId])
        );
      });

      _.each(collections, function(collection) {
        if (collection.title === uniqueCollection.title) {
          collection.allCollectionComics = uniqueCollection.allCollectionComics;
        }
      });
    });

    // Copy the comics into the collection objects on load
    _.each(collections, function(collection) {
      collection.comics = [];

      _.each(collection.comicIds, function(comicId) {
        collection.comics.push(
          _.find(comics, ['id', comicId])
        );
      });
    });

    /**
     * Add a copy of the comic collection to each comic node.
     *
     * This is super inefficient from a memory perspective but
     * it turns out to be much more performant because the bottleneck
     * is the browser adding new things to the DOM, so we get a
     * big performance boost by always having everything in there.
     */
    _.each(comics, function(comic) {
      // Get the collection containing this comic
      comic.collection = _.find(collections, function(collection) {
        return collection.comicIds.includes(comic.id);
      });
    });

    // Pass our transformed db objects to the view
    vm.comics            = [];
    vm.collections       = collections;
    vm.uniqueCollections = uniqueCollections;
    vm.series            = series;
    vm.seriesVolumes     = seriesVolumes;

    // Pass the other things the view needs
    vm.dates = dates;
    vm.bodyStyles = bodyStyles;
    vm.seriesVolumeLabels = seriesVolumeLabels;

    /**
     * This chunk limits the flow of comics being added to the
     * DOM, which is needed to stop the loading spinner from
     * freezing while it loads.
     */
    {
      // How many comics to add per loop
      const COMIC_CHUNKS = 20;

      // How many milliseconds delay between chunks
      const COMIC_LOOP_DELAY = 1;

      var comicsIterator = 0;
      var pushComicChunkToVm = function() {
        var currentChunkEnd = comicsIterator + COMIC_CHUNKS;
        for (var currentChunkIterator = comicsIterator; currentChunkIterator < currentChunkEnd; currentChunkIterator++) {
          if (comics[currentChunkIterator]) {
            vm.comics.push(comics[currentChunkIterator]);
            continue;
          }

          /**
           * We get here if the comic doesn't exist, which means
           * we reached the end of our comics. We set the comic
           * iterator to the accurate number since it is currently
           * chunked, then stop the loop.
           */
          comicsIterator = currentChunkIterator;
          break;
        }
      };

      var pushComicChunkToVmFactory = function() {
        // If we have finished looping, toggle the loader
        if (comicsIterator === comics.length) {
          return finishedLoading();
        }

        // Update the loop iterator for the next chunk
        comicsIterator += COMIC_CHUNKS;

        // Run this function again after a delay
        $timeout(pushComicChunkToVmFactory, COMIC_LOOP_DELAY);

        // Push the next chunk of comics to the DOM
        pushComicChunkToVm();

        // Update the loader
        vm.loadPercent = ((comicsIterator / comics.length) * 100).toFixed(0);
      };

      // Do this first comic chunk instantly
      pushComicChunkToVm();

      // Initialize the chunk pushing factory
      pushComicChunkToVmFactory();
    }

    var infoModalInstance;
    var finishedLoading = function() {
      vm.finishedLoading = true;

      $timeout(function() {
        // Make room for the farthest-right expanded panel
        vm.bodyStyles.width += $('.scroll-anchor').width();

        // Make room for the farthest-bottom expanded panel
        vm.bodyStyles.height = $(document).height() + $(window).height();

        vm.bodyStyles.background = 'hsl(216, 8%, 25%)';

        // Init floating menu on the right
        $('.fixed-action-btn').floatingActionButton({direction: 'left'});

        // Init "Info & Credits" modal
        var infoModal = $('#info');
        infoModalInstance = _.first(M.Modal.init(infoModal));

        useGetParameters();

        /**
         * The extra timeout is here because without it,
         * the tooltips initialization freezes the rest of the execution
         */
        $timeout(function() {
          // Init tooltips
          $('[data-toggle="tooltip"]').tooltip({container: 'body', placement: 'bottom'});
        });
      });
    };

    vm.toggleInfoModal = function() {
      if (infoModalInstance.isOpen) {
        infoModalInstance.close();
      } else {
        infoModalInstance.open();
      }
    };

    /*
    * Launches the initial expand and scroll on load, and
    * the garbage collector, if the relevant GET parameters
    * are specified (id and gc)
    */
    var useGetParameters = function(){
      if ($location.search()) {
        var searchParams = $location.search();

        if (searchParams.id) {
          var comicFromUrl = comics[_.findKey(comics, { 'id': searchParams.id })];
          vm.toggleExpandComic(comicFromUrl);

          $timeout(function() {
            $('html, body').animate({
              scrollLeft: comicFromUrl.containerStyles.left - LEFT_MARGIN,
              scrollTop:  comicFromUrl.containerStyles.top
            });
          });
        }

        /**
         * The garbage collector.
         *
         * This picks up any orphaned comics and series that would
         * not cause errors but just take up space.
         *
         * Note there is no need to check that the comicIds in
         * collections map to comics, because that would cause big
         * errors that we already watch out for.
         */
        if (searchParams.gc) {
          var foundComic;
          var isClean = true;
          var gcConsolePrepend = 'Garbage Collector: ';

          // Check that each comic is referenced by a collection
          _.each(comics, function(comic) {
            foundComic = _.find(collections, function(collection) {
              return collection.comicIds.includes(comic.id);
            });

            if (!foundComic) {
              isClean = false;
              $log.warn(gcConsolePrepend + 'The comic ' + comic.id + ' is not referenced by any collections.');
            }
          });

          if (isClean) {
            $log.info(gcConsolePrepend + 'All comics are referenced by collections.');
          }

          // Check that each seriesVolume is referenced by a comic
          isClean = true;
          _.each(seriesVolumes, function(seriesVolume) {
            foundComic = _.find(comics, function(comic) {
              return comic.seriesVolumeId === seriesVolume.id;
            });

            if (!foundComic) {
              isClean = false;
              $log.warn(gcConsolePrepend + 'The seriesVolume ' + seriesVolume.id + ' is not referenced by any comics.');
            }
          });

          if (isClean) {
            $log.info(gcConsolePrepend + 'All seriesVolumes are referenced by comics.');
          }
        }
      }
    };
  });
