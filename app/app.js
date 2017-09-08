angular.module('app', [])
.constant('_', window._)
.run(function ($rootScope) {
  $rootScope._ = window._;
})
.controller('dataController', ['$scope', '$http', function($scope, $http) {
  // Date data
  $scope.incrementBy = 'month';
  var bodyStyle = {};

  // Pixel counts
  var verticalIncrement = 180;
  var horizontalIncrement = 210;

  $scope.comics = [
    {
      id: 'CableVol21',
      title: ['War Baby (Chapter 1)'],
      issue: 1,
      yearPublished: 2008,
      monthPublished: 5,
      seriesVolumeId: 'CableVol2',
      officialLink: 'https://comicstore.marvel.com/Cable-2008-2010-1/digital-comic/10350'
    },
    {
      id: 'UncannyXMenVol1129',
      title: ['God Spare the Child...'],
      issue: 129,
      yearPublished: 1980,
      monthPublished: 1,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1130',
      title: ['Dazzler'],
      issue: 130,
      yearPublished: 1980,
      monthPublished: 2,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1131',
      title: ['Run for Your Life!'],
      issue: 131,
      yearPublished: 1980,
      monthPublished: 3,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1132',
      title: ['And Hellfire is Their Name!'],
      issue: 132,
      yearPublished: 1980,
      monthPublished: 4,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1133',
      title: ['Wolverine: Alone!'],
      issue: 133,
      yearPublished: 1980,
      monthPublished: 5,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1134',
      title: ['Too Late, the Heroes!'],
      issue: 134,
      yearPublished: 1980,
      monthPublished: 6,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1135',
      title: ['Dark Phoenix'],
      issue: 135,
      yearPublished: 1980,
      monthPublished: 7,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1136',
      title: ['Child of Light and Darkness!'],
      issue: 136,
      yearPublished: 1980,
      monthPublished: 8,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1137',
      title: ['The Fate of the Phoenix!'],
      issue: 137,
      yearPublished: 1980,
      monthPublished: 9,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1492',
      title: ['Messiah Complex: Chapter Two'],
      issue: 492,
      yearPublished: 2008,
      monthPublished: 1,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1493',
      title: ['Messiah Complex: Chapter Six'],
      issue: 493,
      yearPublished: 2008,
      monthPublished: 2,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1494',
      title: ['Messiah Complex: Chapter Ten'],
      issue: 494,
      yearPublished: 2008,
      monthPublished: 3,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1495',
      title: ['X-Men: Divided (Part 1)'],
      issue: 495,
      yearPublished: 2008,
      monthPublished: 4,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1496',
      title: ['X-Men: Divided (Part 2)'],
      issue: 496,
      yearPublished: 2008,
      monthPublished: 5,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1497',
      title: ['X-Men: Divided (Part 3)'],
      issue: 497,
      yearPublished: 2008,
      monthPublished: 6,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1500',
      title: ['SFX (1 of 3)'],
      issue: 500,
      yearPublished: 2008,
      monthPublished: 9,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1501',
      title: ['SFX (2 of 3): All Tomorrow\'s Parties'],
      issue: 501,
      yearPublished: 2008,
      monthPublished: 10,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1502',
      title: ['SFX (3 of 3) - Beginning to See the Light'],
      issue: 502,
      yearPublished: 2008,
      monthPublished: 11,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1503',
      title: ['Beginning To See The Light'],
      issue: 503,
      yearPublished: 2008,
      monthPublished: 12,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'XMenFreeComicBookDay2008',
      title: ['X-Men: Pixies & Demons'],
      issue: 1,
      yearPublished: 2008,
      monthPublished: 05,
      seriesVolumeId: 'XMenFreeComicBookDay2008'
    },
    {
      id: 'XMenManifestDestinyVol11',
      title: ['Untitled'],
      issue: 1,
      yearPublished: 2008,
      monthPublished: 11,
      seriesVolumeId: 'XMenManifestDestinyVol1'
    },
    {
      id: 'XMenManifestDestinyVol12',
      title: ['Kill or Cure (Part 2)','Good With the Bad','Flaw'],
      issue: 2,
      yearPublished: 2008,
      monthPublished: 12,
      seriesVolumeId: 'XMenManifestDestinyVol1'
    },
    {
      id: 'XMenManifestDestinyVol13',
      title: ['Kill or Cure (Part 3)','Abomination','Uncheerable'],
      issue: 3,
      yearPublished: 2009,
      monthPublished: 01,
      seriesVolumeId: 'XMenManifestDestinyVol1'
    },
    {
      id: 'XMenManifestDestinyVol14',
      title: ['Kill or Cure (Part 4)','Mercury','Work It Out'],
      issue: 4,
      yearPublished: 2009,
      monthPublished: 02,
      seriesVolumeId: 'XMenManifestDestinyVol1'
    },
    {
      id: 'XMenManifestDestinyVol15',
      title: ['Kill or Cure (Part 5)','Nick\'s','Dazzler: Solo'],
      issue: 5,
      yearPublished: 2009,
      monthPublished: 03,
      seriesVolumeId: 'XMenManifestDestinyVol1'
    }
  ];
  $scope.series = [
    {
      id: 'Cable',
      title: 'Cable'
    },
    {
      id: 'UncannyXMen',
      title: 'Uncanny X-Men'
    },
    {
      id:'XMenManifestDestiny',
      title: 'X-Men Manifest Destiny'
    },
    {
      id: 'XMenFreeComicBookDay',
      title: 'X-Men Free Comic Book Day'
    }
  ];
  $scope.seriesVolume = [
    {
      id: 'CableVol2',
      seriesId: 'Cable',
      volume: 2
    },
    {
      id: 'UncannyXMenVol1',
      seriesId: 'UncannyXMen',
      volume: 1
    },
    {
      id: 'XMenManifestDestinyVol1',
      seriesId: 'XMenManifestDestiny',
      volume: 1
    },
    {
      id: 'XMenFreeComicBookDay2008',
      seriesId: 'XMenFreeComicBookDay',
      volume: 2008
    }
  ];
  $scope.collections = [
    {
      id: 'CableVol1MessiahWar',
      title: 'Cable Vol. 1: Messiah War',
      yearPublished: 2008,
      monthPublished: 12,
      comicIds: [
        'CableVol21'
      ],
      officialLink: 'https://comicstore.marvel.com/Cable-Vol-1-Messiah-War/digital-comic/27342'
    },
    {
      id: 'XMenMessiahComplex',
      title: ['X-Men: Messiah Complex'],
      yearPublished: 2008,
      monthPublished: 11,
      comicIds: [
        'UncannyXMenVol1492',
        'UncannyXMenVol1493',
        'UncannyXMenVol1494'
      ]
    },
    {
      id: 'XMenTheDarkPhoenixSaga',
      title: ['X-Men: The Dark Phoenix Saga'],
      yearPublished: 2006,
      monthPublished: 4,
      comicIds: [
        'UncannyXMenVol1129',
        'UncannyXMenVol1130',
        'UncannyXMenVol1131',
        'UncannyXMenVol1132',
        'UncannyXMenVol1133',
        'UncannyXMenVol1134',
        'UncannyXMenVol1135',
        'UncannyXMenVol1136',
        'UncannyXMenVol1137'
      ]
    },
    {
      id: 'UncannyXMenDividedWeStand',
      title: ['Uncanny X-Men: Divided We Stand'],
      yearPublished: 2008,
      monthPublished: 10,
      comicIds: [
        'UncannyXMenVol1495',
        'UncannyXMenVol1496'
      ]
    },
    {
      id: 'UncannyXMenManifestDestiny',
      title: ['Uncanny X-Men: Manifest Destiny'],
      yearPublished: 2009,
      monthPublished: 10,
      comicIds: [
        'UncannyXMenVol1500',
        'UncannyXMenVol1501',
        'UncannyXMenVol1502',
        'UncannyXMenVol1503',
        'XMenFreeComicBookDay2008',
        'XMenManifestDestinyVol11',
        'XMenManifestDestinyVol12',
        'XMenManifestDestinyVol13',
        'XMenManifestDestinyVol14',
        'XMenManifestDestinyVol15'
      ]
    }
  ];

  var datePublished;
  var year;
  var month;
  var firstYear;
  var firstMonth;
  var lastYear;
  var lastMonth;
  var monthsSinceFirst;
  var globalVerticalPositionCounter = 0;

  $scope.expandedComic = '';
  $scope.toggleExpandComic = function(comicId) {
    if ($scope.expandedComic === comicId) {
      $scope.expandedComic = '';
    } else {
      $scope.expandedComic = comicId;
    }
  };
  
  $scope.expandedCollection = '';
  $scope.toggleExpandCollection = function(collectionId) {
    if ($scope.expandedCollection === collectionId) {
      $scope.expandedCollection = '';
    } else {
      $scope.expandedCollection = collectionId;
    }
  };

  // Sort the data by date
  $scope.comics = _.sortBy($scope.comics, ['yearPublished', 'monthPublished']);

  _.each($scope.comics, function(comic, key) {
    var currentSeriesVolume = $scope.seriesVolume[_.findKey($scope.seriesVolume, { 'id': comic.seriesVolumeId })];
    var currentSeries = $scope.series[_.findKey($scope.series, { 'id': currentSeriesVolume.seriesId })];

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
      bodyStyle.width = comic.styles.left + horizontalIncrement;
    }

    // Vertical positioning
    if (typeof currentSeriesVolume.verticalPosition !== 'undefined') {
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

  var lastComic = _.last($scope.comics);
  lastYear = lastComic.yearPublished;
  lastMonth = lastComic.monthPublished;
  var totalYearsSpan = lastYear - firstYear;
  var dates = {};
  for (i = firstYear; i <= lastYear; i++) {
    dates[i] = {};

    if (i === lastYear) {
      for (i2 = 1; i2 < lastMonth; i2++) {
        dates[i][i2] = i2;
      }
    } else {
      for (i2 = 1; i2 < 13; i2++) {
        dates[i][i2] = i2;
      }
    }
  }

  var collectionOpacity = '0.5';
  var globalColorIndex = 0;
  var colors = [
    'rgba(11,  61,  167, ' + collectionOpacity + ')', // #0b3da7
    'rgba(17,  167, 11,  ' + collectionOpacity + ')', // #11a70b
    'rgba(167, 161, 11,  ' + collectionOpacity + ')', // #a7a10b
    'rgba(111, 167, 11,  ' + collectionOpacity + ')', // #6fa70b
    'rgba(11,  167, 142  ' + collectionOpacity + ')', // #0ba78e
    'rgba(168, 11,  11   ' + collectionOpacity + ')', // #a70b0b
    'rgba(57,  222, 236  ' + collectionOpacity + ')', // #39deec
  ];

  // Render collections as groups of comics
  var comicIndex;
  _.each($scope.collections, function(collection, key) {
    _.each(collection.comicIds, function(comicId) {
      comicIndex = _.findKey($scope.comics, { 'id': comicId });
      $scope.comics[comicIndex].styles.background = colors[globalColorIndex];
    });

    globalColorIndex++;
    if (globalColorIndex > colors.length) {
      globalColorIndex = 0;
    }
  });

  $scope.dates = dates;
  $scope.bodyStyle = bodyStyle;
}]);