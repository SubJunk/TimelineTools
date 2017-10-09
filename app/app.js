import _ from 'lodash';
import $ from 'jquery';
import angular from 'angular';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import * as db from './db.js';

angular.module('app', [])
.controller('DataController', ['$timeout', function($timeout) {
  var vm = this;

  vm.comics       = db.comics;
  vm.collections  = db.collections;
  vm.series       = db.series;
  vm.seriesVolume = db.seriesVolume;

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

  vm.expandedComic;
  vm.toggleExpandComic = function(currentComic) {
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

    if (vm.expandedComic === currentComic.id) {
      vm.expandedComic = undefined;
    } else {
      vm.expandedComic = currentComic.id;
      repositionExpandedPanel();
    }
  };
  
  vm.expandedCollection = '';
  vm.toggleExpandCollection = function(collectionId) {
    if (vm.expandedCollection === collectionId) {
      vm.expandedCollection = '';
    } else {
      vm.expandedCollection = collectionId;
    }
  };

  // Sort the data by date
  vm.comics = _.sortBy(vm.comics, ['yearPublished', 'monthPublished', 'seriesVolume']);

  // Calculate the years and months spanned
  var lastComic = _.last(vm.comics);
  var firstComic = _.first(vm.comics);
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
  _.each(vm.comics, function(comic) {
    var currentSeriesVolume = vm.seriesVolume[_.findKey(vm.seriesVolume, { 'id': comic.seriesVolumeId })];
    var currentSeries = vm.series[_.findKey(vm.series, { 'id': currentSeriesVolume.seriesId })];

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

  // Render collections as groups of comics
  var comicIndex;
  _.each(vm.collections, function(collection) {
    var collectionColor = getRandomColor();
    _.each(collection.comicIds, function(comicId) {
      comicIndex = _.findKey(vm.comics, { 'id': comicId });
      if (!comicIndex) {
        throw new Error(comicId + ' not found in the comics db');
      }
      vm.comics[comicIndex].styles.background = collectionColor;
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

  vm.dates = dates;
  vm.bodyStyle = bodyStyle;

  var $jqWindow = $(window);

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

        if (isStickyTop && !isStickyLeft && !isStickyRight || isStickyBottom && !isStickyRight && !isStickyLeft) {
          $expandedComic.css('marginLeft', '-' + $jqWindow.scrollLeft());
          $expandedComic.css('marginTop', '');
        } else if (isStickyLeft && !isStickyTop && !isStickyBottom|| isStickyRight && !isStickyBottom && !isStickyTop) {
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
}]);
