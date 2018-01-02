angular.module('app', ['angular-md5'])
.constant('_', window._)
.run(function ($rootScope) {
  $rootScope._ = window._;
})
.controller('DataController', function($http, $location, $timeout, $window, md5) {
  var vm = this;

  var comics        = $window.comics;
  var collections   = $window.collections;
  var series        = $window.series;
  var seriesVolumes = $window.seriesVolumes;

  var firstYear;
  var firstMonth;
  var lastYear;
  var lastMonth;
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
  var apiKeyPublic = '46a863fa31f601aacb87dae9cb8f7c45';
  var apiKeyPrivate = '';
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
    $location.hash(vm.expandedComicId);

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
  lastYear = lastComic.yearPublished;
  lastMonth = lastComic.monthPublished;
  firstYear = firstComic.yearPublished;
  firstMonth = firstComic.monthPublished;
  var dates = {};
  var i;
  var i2;
  for (i = firstYear; i <= lastYear; i++) {
    dates[i] = {};

    if (i === lastYear) {
      for (i2 = 1; i2 <= lastMonth; i2++) {
        dates[i][i2] = { number: i2, styles: { width: horizontalIncrement } };
      }
    } else if (i === firstYear) {
      for (i2 = firstMonth; i2 <= 12; i2++) {
        dates[i][i2] = { number: i2, styles: { width: horizontalIncrement } };
      }
    } else {
      for (i2 = 1; i2 <= 12; i2++) {
        dates[i][i2] = { number: i2, styles: { width: horizontalIncrement } };
      }
    }
  }

  var previousYearMonthVolume;
  var globalHorizontalOffset = 0;
  var latestVerticalHorizontalOffsets = {};
  _.each(comics, function(comic) {
    var currentSeriesVolume = seriesVolumes[_.findKey(seriesVolumes, { 'id': comic.seriesVolumeId })];
    if (!currentSeriesVolume) {
      throw new Error(comic.seriesVolumeId + " not found");
    }

    var currentSeries = series[_.findKey(series, { 'id': currentSeriesVolume.seriesId })];
    if (!currentSeries) {
      throw new Error(comic.seriesId + " not found");
    }

    // Horizontal positioning
    comic.containerStyles = {};
    comic.styles = {};
    if (!firstYear) {
      firstYear = comic.yearPublished;
      firstMonth = comic.monthPublished;
      comic.containerStyles.left = 0;
    } else {
      monthsSinceFirst = (comic.yearPublished - firstYear) * 12;
      monthsSinceFirst -= firstMonth;
      monthsSinceFirst += comic.monthPublished;
      comic.containerStyles.left = (monthsSinceFirst <= 0 ? 0 : monthsSinceFirst) * horizontalIncrement;
    }

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
    if (!latestVerticalHorizontalOffsets[currentSeriesVolume.verticalPosition] || latestVerticalHorizontalOffsets[currentSeriesVolume.verticalPosition] < horizontalClearanceLimit) {
      /**
       * It has been a while since the last issue of this comic
       * appeared in the timeline so let's put this occurrence on
       * a higher line if possible
       */

      for (i = 0; i < globalVerticalPositionCounter; i++) {
        if (!latestVerticalHorizontalOffsets[i] || latestVerticalHorizontalOffsets[i] < horizontalClearanceLimit) {
          currentSeriesVolume.verticalPosition = i;
          comic.containerStyles.top = i * verticalIncrement;
          break;
        }
      }
    }

    /**
     * Store a reference to the last horizontal position used
     * by the vertical position currently used by this series volume.
     */
    latestVerticalHorizontalOffsets[currentSeriesVolume.verticalPosition] = comic.containerStyles.left;

    // Metadata
    comic.series = currentSeries.title;
    comic.image = comic.series.replace(/[ /]/g, '_').replace(/[():]/g, '') + '_Vol_' + currentSeriesVolume.volume + '_' + comic.issue;

    if (currentSeriesVolume.volume > 1) {
      comic.series += ' Vol. ' + currentSeriesVolume.volume;
    }

    previousYearMonthVolume = comic.yearPublished + comic.monthPublished + comic.seriesVolumeId;

    // Match the width of the page to the width of the content
    bodyStyle.width = comic.containerStyles.left + horizontalIncrement - bodyStyle.padding;
  });

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
    _.each(collection.comicIds, function(comicId) {
      comicIndex = _.findKey(comics, { 'id': comicId });
      if (!comicIndex) {
        throw new Error(comicId + ' not found in the comics db');
      }
      comics[comicIndex].styles.background = collectionColor;
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
    hslColor += Math.floor(Math.random() * ((75-35) + 1) + 35) + '%, ';
    hslColor += opacity + ')';

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
  if ($location.hash() && $location.hash().length > 1) {
    var comicFromUrl = comics[_.findKey(comics, { 'id': $location.hash() })];
    vm.toggleExpandComic(comicFromUrl);
    $timeout(function() {
      $('html, body').animate({
        scrollLeft: comicFromUrl.containerStyles.left - 200,
        scrollTop:  comicFromUrl.containerStyles.top
      });
    });
  }

  // Special sauce
  var searchParams = $location.search();
  if (searchParams.highlight) {
    vm.enableHighlighting = Boolean(searchParams.highlight);
  }
});
