import _ from 'lodash';
import $ from 'jquery';
import angular from 'angular';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import * as db from './db.js';

angular.module('app', [])
.controller('DataController', ['$timeout', function($timeout) {
  var vm = this;

  var comics        = db.comics;
  var collections   = db.collections;
  var series        = db.series;
  var seriesVolumes = db.seriesVolumes;

  var firstYear;
  var firstMonth;
  var lastYear;
  var lastMonth;
  var monthsSinceFirst;
  var globalVerticalPositionCounter = 0;

  // Date data
  vm.incrementBy = 'month';
  var bodyStyle = {};
  // Pixel counts
  var verticalIncrement = 60;
  var horizontalIncrement = 60;

  var $jqWindow = $(window);

  vm.expandedComicId;
  vm.expandedCollection;
  vm.prevComic;
  vm.nextComic;
  var currentComicIndexInCollection;
  vm.toggleExpandComic = function(currentComic) {
    if (!angular.isObject(currentComic)) {
      return;
    }

    // Unset the sticky styles if they exist
    var $expandedComic = $('.expanded .comic');
    $expandedComic.removeClass('sticky-top');
    $expandedComic.removeClass('sticky-left');
    $expandedComic.removeClass('sticky-right');
    $expandedComic.removeClass('sticky-bottom');
    $expandedComic.css('marginLeft',   '');
    $expandedComic.css('marginTop',    '');
    $expandedComic.css('marginRight',  '');
    $expandedComic.css('marginBottom', '');

    vm.prevComic = undefined;
    vm.nextComic = undefined;

    if (vm.expandedComicId === currentComic.id) {
      vm.expandedComicId    = undefined;
      vm.expandedCollection = undefined;
    } else {
      if (vm.expandedComicId) {
        var expandedComic = _.find(comics, ['id', vm.expandedComicId]);
        var positionDifference = {};
        positionDifference.left = expandedComic.containerStyles.left - currentComic.containerStyles.left;
        positionDifference.top  = expandedComic.containerStyles.top  - currentComic.containerStyles.top;
        $('html, body').animate({
          scrollLeft: $jqWindow.scrollLeft() - positionDifference.left,
          scrollTop:  $jqWindow.scrollTop()  - positionDifference.top
        });
      }

      vm.expandedComicId = currentComic.id;
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
      if (currentComicIndexInCollection > 0) {
        vm.prevComic = vm.expandedCollection.comics[currentComicIndexInCollection - 1];
      }
      if (vm.expandedCollection.comics[currentComicIndexInCollection + 1]) {
        vm.nextComic = vm.expandedCollection.comics[currentComicIndexInCollection + 1];
      }
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
  _.each(comics, function(comic) {
    var currentSeriesVolume = seriesVolumes[_.findKey(seriesVolumes, { 'id': comic.seriesVolumeId })];
    var currentSeries = series[_.findKey(series, { 'id': currentSeriesVolume.seriesId })];

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

      // Match the width of the page to the width of the content
      // TODO: Replace magic number
      bodyStyle.width = comic.containerStyles.left + horizontalIncrement + 3000;
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

    // Metadata
    comic.series = currentSeries.title;
    comic.image = comic.series.replace(/ /g, '_') + '_Vol_' + currentSeriesVolume.volume + '_' + comic.issue;

    if (currentSeriesVolume.volume > 1) {
      comic.series += ' Vol. ' + currentSeriesVolume.volume;
    }

    previousYearMonthVolume = comic.yearPublished + comic.monthPublished + comic.seriesVolumeId;
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
   * Generates random color.
   *
   * @returns hslColor
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

  $jqWindow.scroll(repositionExpandedPanel);

  // Pass our transformed db objects to the view
  vm.comics        = comics;
  vm.collections   = collections;
  vm.series        = series;
  vm.seriesVolumes = seriesVolumes;
}]);
