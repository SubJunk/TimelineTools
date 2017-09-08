angular.module('app', [])
.constant('_', window._)
.run(function ($rootScope) {
  $rootScope._ = window._;
})
.controller('dataController', ['$scope', '$http', function($scope, $http) {
  // Date data
  $scope.incrementBy = 'month';

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
  $scope.series = {
    'Cable': {
      id: 'Cable',
      title: 'Cable'
    },
    'UncannyXMen': {
      id: 'UncannyXMen',
      title: 'Uncanny X-Men'
    },
    'XMenManifestDestiny': {
      id:'XMenManifestDestiny',
      title: 'X-Men Manifest Destiny'
    },
    'XMenFreeComicBookDay': {
      id: 'XMenFreeComicBookDay',
      title: 'X-Men Free Comic Book Day'
    }
  };
  $scope.seriesVolume = {
    'CableVol2': {
      id: 'CableVol2',
      seriesId: 'Cable',
      volume: 2
    },
    'UncannyXMenVol1': {
      id: 'UncannyXMenVol1',
      seriesId: 'UncannyXMen',
      volume: 1
    },
    'XMenManifestDestinyVol1': {
      id: 'XMenManifestDestinyVol1',
      seriesId: 'XMenManifestDestiny',
      volume: 1
    },
    'XMenFreeComicBookDay2008': {
      id: 'XMenFreeComicBookDay2008',
      seriesId: 'XMenFreeComicBookDay',
      volume: 2008
    }
  };
  $scope.collections = {
    'CableVol1MessiahWar': {
      id: 'CableVol1MessiahWar',
      title: 'Cable Vol. 1: Messiah War',
      yearPublished: 2008,
      monthPublished: 12,
      comicIds: [
        'CableVol21'
      ],
      officialLink: 'https://comicstore.marvel.com/Cable-Vol-1-Messiah-War/digital-comic/27342'
    },
    'XMenMessiahComplex': {
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
    'UncannyXMenDividedWeStand': {
      id: 'UncannyXMenDividedWeStand',
      title: ['Uncanny X-Men: Divided We Stand'],
      yearPublished: 2008,
      monthPublished: 10,
      comicIds: [
        'UncannyXMenVol1495',
        'UncannyXMenVol1496'
      ]
    },
    'UncannyXMenManifestDestiny': {
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
  };

  var datePublished;
  var year;
  var month;
  var firstYear;
  var firstMonth;
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
    // Build the relevant dates
    $scope.dates = $scope.dates || {};
    $scope.dates[comic.yearPublished] = $scope.dates[comic.yearPublished] || {};
    $scope.dates[comic.yearPublished][comic.monthPublished] = comic.monthPublished;
    // TODO: Fill in blanks

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
    }

    // Vertical positioning
    if ($scope.seriesVolume[comic.seriesVolumeId].verticalPosition) {
      comic.styles.top = $scope.seriesVolume[comic.seriesVolumeId].verticalPosition * verticalIncrement;
    } else {
      globalVerticalPositionCounter++;
      $scope.seriesVolume[comic.seriesVolumeId].verticalPosition = globalVerticalPositionCounter;
      comic.styles.top = globalVerticalPositionCounter * verticalIncrement;
    }

    // Metadata
    comic.series = $scope.series[$scope.seriesVolume[comic.seriesVolumeId].seriesId].title;
    comic.image = comic.series.replace(/ /g, '_') + '_Vol_' + $scope.seriesVolume[comic.seriesVolumeId].volume + '_' + comic.issue;

    if ($scope.seriesVolume[comic.seriesVolumeId].volume > 1) {
      comic.series += ' Vol. ' + $scope.seriesVolume[comic.seriesVolumeId].volume;
    }
  });

  var globalColorIndex = 0;
  var colors = [
    'rgba(11,  61,  167, 0.2)', // #0b3da7
    'rgba(17,  167, 11,  0.2)', // #11a70b
    'rgba(167, 161, 11,  0.2)', // #a7a10b
    'rgba(111, 167, 11,  0.2)', // #6fa70b
    'rgba(11,  167, 142  0.2)', // #0ba78e
    'rgba(168, 11,  11   0.2)', // #a70b0b
    'rgba(57,  222, 236  0.2)', // #39deec
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
}]);