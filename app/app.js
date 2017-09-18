angular.module('app', [])
.constant('_', window._)
.run(function ($rootScope) {
  $rootScope._ = window._;
})
.controller('DataController', function($window) {
  var vm = this;

  vm.comics       = $window.comics;
  vm.collections  = $window.collections;
  vm.series       = $window.series;
  vm.seriesVolume = $window.seriesVolume;

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
    var currentSeriesVolume = vm.seriesVolume[_.findKey(vm.seriesVolume, { 'id': currentComic.seriesVolumeId })];

    if (vm.expandedComic === currentComic.id) {
      vm.expandedComic = undefined;
      // currentComic.styles.top = currentSeriesVolume.verticalPosition * verticalIncrement;
    } else {
      if (angular.isDefined(vm.expandedComic)) {
        var previousComic = vm.comics[_.findKey(vm.comics, { 'id': vm.expandedComic })];
        // previousComic.styles.top = currentSeriesVolume.verticalPosition * verticalIncrement;
      }

      vm.expandedComic = currentComic.id;
      // currentComic.styles.top = (currentSeriesVolume.verticalPosition * verticalIncrement) - 175;
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
  vm.comics = _.sortBy(vm.comics, ['yearPublished', 'monthPublished']);

  _.each(vm.comics, function(comic) {
    var currentSeriesVolume = vm.seriesVolume[_.findKey(vm.seriesVolume, { 'id': comic.seriesVolumeId })];
    var currentSeries = vm.series[_.findKey(vm.series, { 'id': currentSeriesVolume.seriesId })];

    // Horizontal positioning
    comic.styles = {};
    if (!firstYear) {
      firstYear = comic.yearPublished;
      firstMonth = comic.monthPublished;
      comic.styles.left = 0;
    } else {
      monthsSinceFirst = (comic.yearPublished - firstYear) * 12;
      monthsSinceFirst -= firstMonth;
      monthsSinceFirst += comic.monthPublished;
      comic.styles.left = (monthsSinceFirst <= 0 ? 0 : monthsSinceFirst) * horizontalIncrement;

      // Match the width of the page to the width of the content
      // TODO: Replace magic number
      bodyStyle.width = comic.styles.left + horizontalIncrement + 3000;
    }

    // Vertical positioning
    if (angular.isDefined(currentSeriesVolume.verticalPosition)) {
      comic.styles.top = currentSeriesVolume.verticalPosition * verticalIncrement;
    } else {
      currentSeriesVolume.verticalPosition = globalVerticalPositionCounter;
      comic.styles.top = globalVerticalPositionCounter * verticalIncrement;
      globalVerticalPositionCounter++;
    }

    // Metadata
    comic.series = currentSeries.title;
    comic.image = comic.series.replace(/ /g, '_') + '_Vol_' + currentSeriesVolume.volume + '_' + comic.issue;

    if (currentSeriesVolume.volume > 1) {
      comic.series += ' Vol. ' + currentSeriesVolume.volume;
    }
  });

  // Calculate the years and months spanned
  var lastComic = _.last(vm.comics);
  lastYear = lastComic.yearPublished;
  lastMonth = lastComic.monthPublished;
  var dates = {};
  var i;
  var i2;
  for (i = firstYear; i <= lastYear; i++) {
    dates[i] = {};

    if (i === lastYear) {
      for (i2 = 1; i2 <= lastMonth; i2++) {
        dates[i][i2] = i2;
      }
    } else if (i === firstYear) {
      for (i2 = firstMonth; i2 <= 12; i2++) {
        dates[i][i2] = i2;
      }
    } else {
      for (i2 = 1; i2 <= 12; i2++) {
        dates[i][i2] = i2;
      }
    }
  }

  var collectionOpacity = '1';
  var globalColorIndex = 0;
  var colors = [
    'rgba(11,  61,  167, ' + collectionOpacity + ')', // #0b3da7
    'rgba(17,  167, 11,  ' + collectionOpacity + ')', // #11a70b
    'rgba(167, 161, 11,  ' + collectionOpacity + ')', // #a7a10b
    'rgba(111, 167, 11,  ' + collectionOpacity + ')', // #6fa70b
    'rgba(11,  167, 142, ' + collectionOpacity + ')', // #0ba78e
    'rgba(168, 11,  11,  ' + collectionOpacity + ')', // #a70b0b
    'rgba(57,  222, 236, ' + collectionOpacity + ')', // #39deec
  ];

  // Render collections as groups of comics
  var comicIndex;
  _.each(vm.collections, function(collection) {
    _.each(collection.comicIds, function(comicId) {
      comicIndex = _.findKey(vm.comics, { 'id': comicId });
      if (!comicIndex) {
        throw new Error(comicId + ' not found in the comics db');
      }
      vm.comics[comicIndex].styles.background = colors[globalColorIndex];
    });

    globalColorIndex++;
    if (globalColorIndex > colors.length) {
      globalColorIndex = 0;
    }
  });

  vm.dates = dates;
  vm.bodyStyle = bodyStyle;
});
