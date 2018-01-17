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

  var firstYear;
  var firstMonth;
  var finalYear;
  var finalMonth;
  var monthsSinceFirst;
  var globalVerticalPositionCounter = 0;
  var bodyStyle = {
    width: null,
    padding: 20
  };

  // Pixel counts
  var verticalIncrement = 60;
  var horizontalIncrement = 60;

  var $jqWindow = $(window);

  vm.expandedComicId;
  vm.expandedCollection;
  var expandedSeriesVolume;
  var expandedSeries;
  vm.prevComic;
  vm.nextComic;
  var currentComicIndexInCollection;
  var currentCollectionIndexInCollections;

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
      if (response.data.data.results.length === 0) {
        return;
      }

      var firstAPIResult = response.data.data.results[0];

      comic.link = firstAPIResult.digitalId ? 'https://read.marvel.com/#book/' + firstAPIResult.digitalId : null;

      // Set the title unless it is a generic placeholder from the API.
      // TODO: Is this ever not a generic placeholder?
      // if (firstAPIResult.title.indexOf(expandedSeries.title) !== 0) {
      //   comic.titles.push(firstAPIResult.title);
      // }
    }, function errorCallback(err) {
      throw new Error(err);
    });
  }

  var getExtraAPIParamsString = function() {
    if (!_.isEmpty(apiKeyPrivate) && $location.protocol() === 'file') {
      timestamp = Date.now() /1000 |0;
      apiHash = md5.createHash(timestamp + apiKeyPrivate + apiKeyPublic);
      return '?ts=' + timestamp + '&hash=' + apiHash;
    }

    return '';
  }

  vm.toggleExpandComic = function(currentComic) {
    if (!angular.isObject(currentComic)) {
      return;
    }

    // Unset the sticky styles if they exist
    $('.comic')
        .removeClass('sticky-top sticky-left sticky-right sticky-bottom')
        .css({marginLeft: '', marginTop: '', marginRight: '', marginBottom: '' });

    vm.prevComic = undefined;
    vm.nextComic = undefined;

    // If these match, close the expanded box
    if (_.isEmpty(currentComic) || vm.expandedComicId === currentComic.id) {
      $location.search('id', null);

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
    if (vm.expandedComicId) {
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
    var expandedComic = _.find(comics, ['id', vm.expandedComicId]);
    repositionExpandedPanel();

    // Get the collection containing this comic
    vm.expandedCollection = _.find(collections, function(collection) {
      return collection.comicIds.indexOf(currentComic.id) > -1;
    });

    // Copy the comics into the expandedCollection object to make them easier to use
    vm.expandedCollection.comics = [];
    _.each(vm.expandedCollection.comicIds, function(comicId) {
      vm.expandedCollection.comics.push(
        _.find(comics, ['id', comicId])
      );
    });

    currentComicIndexInCollection = vm.expandedCollection.comicIds.indexOf(currentComic.id);
    currentCollectionIndexInCollections = collections.indexOf(vm.expandedCollection);

    // Find the previous comic
    if (currentComicIndexInCollection > 0) {
      vm.prevComic = vm.expandedCollection.comics[currentComicIndexInCollection - 1];
    } else {
      /**
       * The expanded comic is the first one in a collection, so we need to find out
       * the last comic in the previous collection.
       */
      if (currentCollectionIndexInCollections > 0) {
        // There is a previous collection
        var previousCollection = collections[currentCollectionIndexInCollections - 1];
        var prevComicId = previousCollection.comicIds[previousCollection.comicIds.length - 1];
        vm.prevComic = _.find(comics, ['id', prevComicId]);
      }
    }

    // Find the next comic
    if (vm.expandedCollection.comics[currentComicIndexInCollection + 1]) {
      vm.nextComic = vm.expandedCollection.comics[currentComicIndexInCollection + 1];
    } else {
      /**
       * The expanded comic is the last one in a collection, so we need to find out
       * the first comic in the next collection.
       */
      if (vm.collections[currentCollectionIndexInCollections + 1]) {
        // There is a next collection
        var nextCollection = collections[currentCollectionIndexInCollections + 1];
        var nextComicId = nextCollection.comicIds[0];
        vm.nextComic = _.find(comics, ['id', nextComicId]);
      }
    }

    $location.search('id', vm.expandedComicId);

    // Get the series volume containing this comic
    expandedSeriesVolume = _.find(vm.seriesVolumes, function(seriesVolume) {
      return seriesVolume.id === currentComic.seriesVolumeId;
    });

    expandedSeries = series[_.findKey(series, { 'id': expandedSeriesVolume.seriesId })];
    if (!expandedSeries) {
      throw new Error(expandedSeriesVolume.seriesId + " not found");
    }

    if (expandedSeriesVolume.marvelId) {
      setAPIComicData(expandedComic, expandedSeriesVolume.marvelId);
    } else {
      $http({
        method: 'GET',
        url: apiBaseUrl + 'series' + getExtraAPIParamsString(),
        params: {
          title: expandedSeries.title,
          startYear: expandedSeriesVolume.startYear,
          apikey: apiKeyPublic
        }
      }).then(function successCallback(response) {
        expandedSeriesVolume.marvelId = response.data.data.results[0].id;
        setAPIComicData(expandedComic, expandedSeriesVolume.marvelId);
      }, function errorCallback(err) {
        throw new Error(err);
      });
    }
  };

  // Sort the data by date
  comics = _.sortBy(comics, ['yearPublished', 'monthPublished', 'seriesVolume']);

  // Calculate the years and months spanned
  var lastComic = _.last(comics);
  var firstComic = _.first(comics);
  finalYear = lastComic.yearPublished;
  finalMonth = lastComic.monthPublished;
  firstYear = firstComic.yearPublished;
  firstMonth = firstComic.monthPublished;
  var dates = {};
  var yearIncrement;
  var monthIncrement;

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
  for (yearIncrement = firstYear; yearIncrement <= finalYear; yearIncrement++) {
    dates[yearIncrement] = {};

    if (yearIncrement === finalYear) {
      // In this final year we stop the counter at the final month
      for (monthIncrement = 1; monthIncrement <= finalMonth; monthIncrement++) {
        dates[yearIncrement][monthIncrement] = { number: monthIncrement, styles: { width: horizontalIncrement } };
      }
    } else if (yearIncrement === firstYear) {
      // In this first year we start the counter at the first month
      for (monthIncrement = firstMonth; monthIncrement <= 12; monthIncrement++) {
        dates[yearIncrement][monthIncrement] = { number: monthIncrement, styles: { width: horizontalIncrement } };
      }
    } else {
      // In this in-between year we always add 12 months
      for (monthIncrement = 1; monthIncrement <= 12; monthIncrement++) {
        dates[yearIncrement][monthIncrement] = { number: monthIncrement, styles: { width: horizontalIncrement } };
      }
    }
  }

  var previousYearMonthVolume;
  var globalHorizontalOffset = 0;
  var latestVerticalHorizontalOffsets = {};
  _.each(comics, function(comic) {
    /**
     * Look up the volume and series for this comic and
     * throw errors for obvious problems before proceeding.
     */
    var currentSeriesVolume = seriesVolumes[_.findKey(seriesVolumes, { 'id': comic.seriesVolumeId })];
    if (!currentSeriesVolume) {
      throw new Error(comic.seriesVolumeId + " not found");
    }

    var currentSeries = series[_.findKey(series, { 'id': currentSeriesVolume.seriesId })];
    if (!currentSeries) {
      throw new Error(comic.seriesId + " not found");
    }

    comic.containerStyles = {};
    comic.styles = {};

    // Horizontal positioning
    monthsSinceFirst = (comic.yearPublished - firstYear) * 12;
    monthsSinceFirst -= firstMonth;
    monthsSinceFirst += comic.monthPublished;
    comic.containerStyles.left = (monthsSinceFirst <= 0 ? 0 : monthsSinceFirst) * horizontalIncrement;

    // Manage multiple releases of the same series in the same month
    if (previousYearMonthVolume === (comic.yearPublished + comic.monthPublished + comic.seriesVolumeId)) {
      dates[comic.yearPublished][comic.monthPublished].styles.width += horizontalIncrement;
      comic.containerStyles.left += horizontalIncrement + globalHorizontalOffset;
      globalHorizontalOffset += horizontalIncrement;
    } else {
      comic.containerStyles.left += globalHorizontalOffset;
    }

    // Vertical positioning
    if (angular.isDefined(currentSeriesVolume.verticalPosition)) {
      comic.containerStyles.top = currentSeriesVolume.verticalPosition * verticalIncrement;
    } else {
      currentSeriesVolume.verticalPosition = globalVerticalPositionCounter;
      comic.containerStyles.top = globalVerticalPositionCounter * verticalIncrement;
      globalVerticalPositionCounter++;
    }

    /**
     * The maximum horizontal offset allowed until we recycle the
     * vertical position.
     */
    var horizontalClearanceLimit = comic.containerStyles.left - $jqWindow.innerWidth();
    if (
      !latestVerticalHorizontalOffsets[currentSeriesVolume.verticalPosition] ||
      (
        latestVerticalHorizontalOffsets[currentSeriesVolume.verticalPosition].seriesVolumeId !== currentSeriesVolume.id &&
        latestVerticalHorizontalOffsets[currentSeriesVolume.verticalPosition].offset < horizontalClearanceLimit
      )
    ) {
      /**
       * It has been a while since the last issue of this series
       * appeared in the timeline so let's put this occurrence on
       * a higher line if possible.
       */
      for (var i = 0; i < globalVerticalPositionCounter; i++) {
        if (
          !latestVerticalHorizontalOffsets[i] ||
          latestVerticalHorizontalOffsets[i].offset < horizontalClearanceLimit
        ) {
          currentSeriesVolume.verticalPosition = i;
          comic.containerStyles.top = i * verticalIncrement;

          /**
           * If ww are about to insert this seriesVolume into a vertical position
           * that has already been used before, so we remove the reference to
           * that position in the previous seriesVolume. This allows a new vertical
           * position to be generated if another occurrence of the previous
           * seriesVolume pops up.
           */
          if (latestVerticalHorizontalOffsets[i]) {
            var previousSeriesVolume = seriesVolumes[_.findKey(seriesVolumes, { 'id': latestVerticalHorizontalOffsets[i].seriesVolumeId })];
            if (!previousSeriesVolume) {
              throw new Error(comic.seriesVolumeId + " not found");
            }
            previousSeriesVolume.verticalPosition = null;
          }

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
    comic.series = currentSeries.title;

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
    comic.image = comic.series.replace(/[():&]/g, '').replace(/\s+|\//g, '_') + '_Vol_' + currentSeriesVolume.volume + '_' + comic.issue;

    if (currentSeriesVolume.volume > 1) {
      comic.series += ' Vol. ' + currentSeriesVolume.volume;
    }

    previousYearMonthVolume = comic.yearPublished + comic.monthPublished + comic.seriesVolumeId;

    // Match the width of the page to the width of the content
    bodyStyle.width = comic.containerStyles.left + horizontalIncrement - bodyStyle.padding;
  });

  // Using $timeout lets Angular play nicer with jQuery
  $timeout(function() {
    bodyStyle.width += $('.scroll-anchor').width();
    bodyStyle.height = (globalVerticalPositionCounter * verticalIncrement);
    $('[data-toggle="tooltip"]').tooltip()
  });

  vm.dates = dates;
  vm.bodyStyle = bodyStyle;

  // Render collections as groups of comics
  var comicIndex;
  _.each(collections, function(collection) {
    var collectionColor = getRandomColor();
    // console.log('1',collectionColor);
    var textColor = getContrastColor(collectionColor);
    // console.log('3',textColor);
    _.each(collection.comicIds, function(comicId) {
      comicIndex = _.findKey(comics, { 'id': comicId });
      if (!comicIndex) {
        throw new Error(comicId + ' not found in the comics db');
      }
      comics[comicIndex].styles.background = collectionColor;
      // comics[comicIndex].styles.color= textColor;
    });
  });

  /**
   * Generates a color in HSLA format, e.g. hsla(1, 2, 3, 4).
   *
   * @return {string} HSLA color
   */
  var startColor;
  function getRandomColor() {
    var opacity = 1;
    var stepChange = 30;
    var hslColor = 'hsla(';
    if (angular.isDefined(startColor)) {
      if ((startColor + stepChange) > 360) {
        startColor -= 360;
      }
      startColor += stepChange;
    } else {
      startColor = Math.floor(Math.random() * 360);
    }

    hslColor += startColor + ', ';
    hslColor += Math.floor(Math.random() * ((75-35) + 1) + 35) + '%, ';
    hslColor += Math.floor(Math.random() * ((75-60) + 1) + 60) + '%, ';
    hslColor += opacity + ')';
  //  console.log(hslColor);
    return hslColor;
  }

  /**
   * Given a color in HSLA format, generates a contrasting color in HSLA format, e.g. hsla(1, 2, 3, 4).
   *
   * @return {string} HSLA color
   */
  var startColor;
  function getContrastColor(backgroundColor) {
    // console.log('2',backgroundColor);
    var opacity = 1;
    var stepChange = 30;
    var h = a;
    var n = backgroundColor.search(/h/);
    var s = "";
    var l = "";
    var a = "1";


    var hslColor = 'hsla(';
    if (angular.isDefined(startColor)) {
      if ((startColor + stepChange) > 360) {
        startColor -= 360;
      }
      startColor += stepChange;
    } else {
      startColor = Math.floor(Math.random() * 360);
    }

    hslColor += startColor + ', ';
    hslColor += Math.floor(Math.random() * ((75-35) + 1) + 35) + '%, ';
    hslColor += Math.floor(Math.random() * ((75-60) + 1) + 60) + '%, ';
    hslColor += opacity + ')';
  //  console.log(hslColor);
    return hslColor;
  }

  /**
   * Use jQuery to manipulate classes and styles to make the expanded
   * panels always fit in the viewport.
   */
  var repositionExpandedPanel = function() {
    $timeout(function() {
      var $expandedComic = $('.expanded .comic');
      var $stickyAnchor = $('.expanded .scroll-anchor');

      if ($expandedComic.length) {
        var anchorTopPosition    = $stickyAnchor.offset().top;
        var anchorLeftPosition   = $stickyAnchor.offset().left;
        var anchorRightPosition  = $stickyAnchor.offset().left + $expandedComic.width();
        var anchorBottomPosition = $stickyAnchor.offset().top  + $expandedComic.height();

        var scrollRight  = $jqWindow.scrollLeft() + $jqWindow.innerWidth();
        var scrollBottom = $jqWindow.scrollTop() + $jqWindow.innerHeight();

        var isStickyTop    = Boolean($jqWindow.scrollTop()  > anchorTopPosition);
        var isStickyLeft   = Boolean($jqWindow.scrollLeft() > anchorLeftPosition);
        var isStickyRight  = Boolean(scrollRight  < anchorRightPosition);
        var isStickyBottom = Boolean(scrollBottom < anchorBottomPosition);

        $expandedComic.toggleClass('sticky-top', isStickyTop);
        $expandedComic.toggleClass('sticky-left', isStickyLeft);
        $expandedComic.toggleClass('sticky-right', isStickyRight);
        $expandedComic.toggleClass('sticky-bottom', isStickyBottom);

        if ((isStickyTop || isStickyBottom) && !isStickyLeft && !isStickyRight) {
          $expandedComic.css('marginLeft', '-' + $jqWindow.scrollLeft());
          $expandedComic.css('marginTop', '');
        } else if ((isStickyLeft || isStickyRight) && !isStickyTop && !isStickyBottom) {
          $expandedComic.css('marginTop', '-' + $jqWindow.scrollTop());
          $expandedComic.css('marginLeft', '');
        } else {
          $expandedComic.css('marginLeft', '');
          $expandedComic.css('marginTop', '');
        }
      }
    });
  }

  /**
   * Handle arrow keys.
   *
   * @link https://stackoverflow.com/questions/1402698/binding-arrow-keys-in-js-jquery
   */
  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
        if (vm.prevComic) {
          vm.toggleExpandComic(vm.prevComic);
        }
        break;

      case 39: // right
        if (vm.nextComic) {
          vm.toggleExpandComic(vm.nextComic);
        }
        break;

      default:
        return; // exit this handler for other keys
    }
  });

  // Reposition the expanded panel when the user scrolls the viewport
  $jqWindow.scroll(repositionExpandedPanel);

  // Catch clicks
  $jqWindow.on('click', function(data) {
    // Close the expanded comic if the click happened on a blank area
    if (data.target.localName === 'body' && vm.expandedComicId) {
      vm.toggleExpandComic({});
    }
  });

  // Pass our transformed db objects to the view
  vm.comics        = comics;
  vm.collections   = collections;
  vm.series        = series;
  vm.seriesVolumes = seriesVolumes;

  // Expand the comic from the URL on load
  if ($location.search()) {
    var searchParams = $location.search();

    if (searchParams.id) {
      var comicFromUrl = comics[_.findKey(comics, { 'id': searchParams.id })];
      vm.toggleExpandComic(comicFromUrl);

      $timeout(function() {
        $('html, body').animate({
          scrollLeft: comicFromUrl.containerStyles.left - 200,
          scrollTop:  comicFromUrl.containerStyles.top
        });
      });
    }

    if (searchParams.highlight) {
      vm.enableHighlighting = Boolean(searchParams.highlight);
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
      var gcConsolePrepend = 'Garbage Collector: ';

      // Check that each comic is referenced by a collection
      _.each(comics, function(comic) {
        foundComic = _.find(collections, function(collection) {
          return collection.comicIds.indexOf(comic.id) > -1;
        });

        if (!foundComic) {
          $log.warn(gcConsolePrepend + 'The comic ' + comic.id + ' is not referenced by any collections.');
        }
      });

      // Check that each seriesVolume is referenced by a comic
      _.each(seriesVolumes, function(seriesVolume) {
        foundComic = _.find(comics, function(comic) {
          return comic.seriesVolumeId === seriesVolume.id;
        });

        if (!foundComic) {
          $log.warn(gcConsolePrepend + 'The seriesVolume ' + seriesVolume.id + ' is not referenced by any comics.');
        }
      });
    }
  }
});
