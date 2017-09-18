angular.module('app', [])
.constant('_', window._)
.run(function ($rootScope) {
  $rootScope._ = window._;
})
.controller('DataController', function() {
  var vm = this;
  vm.comics = [];
  vm.collections =[];

  /**
   * The prototype for individual comics.
   *
   * @param {string[]} title
   * @param {number}   issue
   * @param {number}   yearPublished
   * @param {number}   monthPublished
   * @param {string}   seriesVolumeId
   * @param {string}   [officialLink]
   * @param {string[]} [referencedBy] The comic/s that reference this comic.
   *                                  Used only for comics that are not in the main collections.
   */
  function Comic(title, issue, yearPublished, monthPublished, seriesVolumeId, officialLink, referencedBy) {
    this.id = seriesVolumeId + issue;
    this.title = title;
    this.issue = issue;
    this.yearPublished = yearPublished;
    this.monthPublished = monthPublished;
    this.seriesVolumeId = seriesVolumeId;
    this.officialLink = officialLink;
    this.referencedBy = referencedBy;
  }
  /**
   * The prototype for collections.
   * 
   * @param {string}   title
   * @param {number}   yearPublished
   * @param {number}   monthPublished
   * @param {string[]} comicIds
   * @param {string}   [officialLink]
   */
  function Collection(title, yearPublished, monthPublished, comicIds, officialLink) {
    this.id = title.replace(/[\W+]/g, '');
    this.title = title;
    this.yearPublished = yearPublished;
    this.monthPublished = monthPublished;
    this.comicIds = comicIds;
    this.officialLink = officialLink;    
  }
  vm.comics.push(
    new Comic(
      ['War Baby (Chapter 1)'],
      1,
      2008,
      5,
      'CableVol2',
      'https://comicstore.marvel.com/Cable-2008-2010-1/digital-comic/10350'
    ),
    new Comic(
      ['Alpha, the Ultimate Mutant!'],
      16,
      1974,
      10,
      'DefendersVol1',
      undefined,
      ['XMenVol1104']
    ),
    new Comic(
      [
        'Mutation of the Species',
        'X-Men! X-Men! Read All About \'Em!',
        'Doctor Foom',
        'Fan Art',
        'Marvel at the Con!',
        'Eggsmen',
        'Dept. of Infoomation'
      ],
      10,
      1975,
      6,
      'FOOMVol1'
    ),
    new Comic(
      ['Madrox the Multiple Man', 'We Have to Fight the X-Men!', 'Gallery of FF\'s Most Famous Foes'],
      4,
      1975,
      2,
      'GiantSizeFantasticFourVol1',
      undefined,
      ['XMenVol1104']
    ),
    new Comic(
      ['Deadly Genesis!', 'Call Him...Cyclops', 'I, the Iceman', 'The Female of the Species!'],
      1,
      1975,
      5,
      'GiantSizeXMenVol1'
    ),
    new Comic(
      ['Snowfire'],
      14,
      1977,
      8,
      'IronFistVol1'
    ),
    new Comic(
      ['Enter, the X-Men'],
      15,
      1977,
      9,
      'IronFistVol1'
    ),
    new Comic(
      ['The Lords of Light and Darkness!'],
      1976,
      1976,
      12,
      'MarvelTeamUpVol1'
    ),
    new Comic(
      ['Nightmare in New Mexico!'],
      53,
      1977,
      1,
      'MarvelTeamUpVol1'
    ),
    new Comic(
      ['Night of the Living God!'],
      69,
      1978,
      5,
      'MarvelTeamUpVol1'
    ),
    new Comic(
      ['Whom Gods Destroy!'],
      70,
      1978,
      6,
      'MarvelTeamUpVol1'
    ),
    new Comic(
      ['The Doomsmith Scenario!'],
      94,
      1975,
      8,
      'XMenVol1'
    ),
    new Comic(
      ['Warhunt!'],
      95,
      1975,
      10,
      'XMenVol1'
    ),
    new Comic(
      ['Night of the Demon!'],
      96,
      1975,
      12,
      'XMenVol1'
    ),
    new Comic(
      ['My Brother, My Enemy!'],
      97,
      1976,
      2,
      'XMenVol1',
      undefined,
      ['XMenVol1104']
    ),
    new Comic(
      ['Merry Christmas, X-Men — The Sentinels Have Returned!'],
      98,
      1976,
      4,
      'XMenVol1'
    ),
    new Comic(
      ['Deathstar, Rising!'],
      99,
      1976,
      6,
      'XMenVol1'
    ),
    new Comic(
      ['Greater Love Hath No X-Man...'],
      100,
      1976,
      8,
      'XMenVol1'
    ),
    new Comic(
      ['Like a Phoenix, from the Ashes'],
      101,
      1976,
      10,
      'XMenVol1'
    ),
    new Comic(
      ['Who Will Stop the Juggernaut?'],
      102,
      1976,
      12,
      'XMenVol1',
      undefined,
      ['XMenVol1103']
    ),
    new Comic(
      ['The Fall of the Tower'],
      103,
      1977,
      2,
      'XMenVol1'
    ),
    new Comic(
      ['The Gentleman\'s Name is Magneto'],
      104,
      1977,
      4,
      'XMenVol1'
    ),
    new Comic(
      ['Phoenix Unleashed!'],
      105,
      1977,
      6,
      'XMenVol1'
    ),
    new Comic(
      ['Dark Shroud of the Past!'],
      106,
      1977,
      8,
      'XMenVol1'
    ),
    new Comic(
      ['Where No X-Man Has Gone Before!'],
      107,
      1977,
      10,
      'XMenVol1'
    ),
    new Comic(
      ['Armageddon Now'],
      108,
      1977,
      12,
      'XMenVol1'
    ),
    new Comic(
      ['Home are the Heroes!'],
      109,
      1978,
      2,
      'XMenVol1'
    ),
    new Comic(
      ['The \'X\'-Sanction'],
      110,
      1978,
      4,
      'XMenVol1'
    ),
    new Comic(
      ['God Spare the Child...'],
      129,
      1980,
      1,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Dazzler'],
      130,
      1980,
      2,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Run for Your Life!'],
      131,
      1980,
      3,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['And Hellfire is Their Name!'],
      132,
      1980,
      4,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Wolverine: Alone!'],
      133,
      1980,
      5,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Too Late, the Heroes!'],
      134,
      1980,
      6,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Dark Phoenix'],
      135,
      1980,
      7,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Child of Light and Darkness!'],
      136,
      1980,
      8,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['The Fate of the Phoenix!'],
      137,
      1980,
      9,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Messiah Complex: Chapter Two'],
      492,
      2008,
      1,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Messiah Complex: Chapter Six'],
      493,
      2008,
      2,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Messiah Complex: Chapter Ten'],
      494,
      2008,
      3,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['X-Men: Divided (Part 1)'],
      495,
      2008,
      4,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['X-Men: Divided (Part 2)'],
      496,
      2008,
      5,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['X-Men: Divided (Part 3)'],
      497,
      2008,
      6,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['SFX (1 of 3)'],
      500,
      2008,
      9,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['SFX (2 of 3): All Tomorrow\'s Parties'],
      501,
      2008,
      10,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['SFX (3 of 3) - Beginning to See the Light'],
      502,
      2008,
      11,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Beginning To See The Light'],
      503,
      2008,
      12,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['X-Men: Pixies & Demons'],
      1,
      2008,
      5,
      'XMenFreeComicBookDay2008'
    ),
    new Comic(
      ['Untitled'],
      1,
      2008,
      11,
      'XMenManifestDestinyVol1'
    ),
    new Comic(
      ['Kill or Cure (Part 2)','Good With the Bad','Flaw'],
      2,
      2008,
      12,
      'XMenManifestDestinyVol1'
    ),
    new Comic(
      ['Kill or Cure (Part 3)','Abomination','Uncheerable'],
      3,
      2009,
      1,
      'XMenManifestDestinyVol1'
    ),
    new Comic(
      ['Kill or Cure (Part 4)','Mercury','Work It Out'],
      4,
      2009,
      2,
      'XMenManifestDestinyVol1'
    ),
    new Comic(
      ['Kill or Cure (Part 5)','Nick\'s','Dazzler: Solo'],
      5,
      2009,
      3,
      'XMenManifestDestinyVol1'
    ),
    new Comic(
      ['Uncanny X-Men Vol 1 #540'],
      540,
      2011,
      9,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Uncanny X-Men Vol 1 #541'],
      541,
      2011,
      9,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Uncanny X-Men Vol 1 #542'],
      542,
      2011,
      10,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Uncanny X-Men Vol 1 #543'],
      543,
      2011,
      11,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Uncanny'],
      544,
      2011,
      12,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Uncanny X-Men Vol 1 #534.1'],
      534.1,
      2011,
      6,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Breaking Point (Part One)'],
      535,
      2011,
      6,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Breaking Point: Part Two'],
      536,
      2011,
      6,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Breaking Point (Part 3)'],
      537,
      2011,
      7,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Breaking Point (Conclusion)'],
      538,
      2011,
      8,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Losing Hope'],
      539,
      2011,
      8,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Quarantine: Part 1'],
      530,
      2011,
      1,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Quarantine (Part Two)'],
      531,
      2011,
      2,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Quarantine (Part Three)'],
      532,
      2011,
      3,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Quarantine (Part Four)'],
      533,
      2011,
      4,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Quarantine (Part Five)'],
      534,
      2011,
      5,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['The Five Lights (Part 1): Freak Like Me', 'Rebuilding'],
      526,
      2010,
      9,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['The Five Lights (Part 2) - Velocidad'],
      527,
      2010,
      10,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['The Five Lights (Part 3)'],
      528,
      2010,
      11,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['The Five Lights (Part Four)'],
      529,
      2010,
      12,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Heroic Age: X-Men Vol 1 #1'],
      1,
      2011,
      2,
      'HeroicAgeXMenVol1'
    ),
    new Comic(
      ['Where Were You?'],
      1,
      2010,
      4,
      'SecondComingPrepareVol1'
    ),
    new Comic(
      ['Second Coming Chapter XIV'],
      2,
      2010,
      9,
      'XMenSecondComingVol1'
    ),
    new Comic(
      ['Second Coming, Chapter One'],
      1,
      2010,
      5,
      'XMenSecondComingVol1'
    ),
    new Comic(
      ['Second Coming (Chapter Ten)'],
      525,
      2010,
      8,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Second Coming (Chapter Six)'],
      524,
      2010,
      7,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Second Coming (Chapter Two)'],
      523,
      2010,
      6,
      'UncannyXMenVol1'
    ),
    new Comic(
      ['Second Coming (Chapter Eleven)'],
      14,
      2010,
      8,
      'NewMutantsVol3'
    ),
    new Comic(
      ['Second Coming (Chapter Seven)'],
      13,
      2010,
      7,
      'NewMutantsVol3'
    ),
    new Comic(
      ['Second Coming (Chapter Three)'],
      12,
      2010,
      6,
      'NewMutantsVol3'
    ),
    new Comic(
      ['Second Coming (Chapter Twelve)'],
      237,
      2010,
      8,
      'XMenLegacyVol1'
    ),
    new Comic(
      ['Second Coming (Chapter Eight)'],
      236,
      2010,
      7,
      'XMenLegacyVol1'
    ),
    new Comic(
      ['Second Coming (Chapter Four)'],
      235,
      2010,
      6,
      'XMenLegacyVol1'
    ),
    new Comic(
      ['Second Coming (Chapter Five)'],
      26,
      2010,
      6,
      'XForceVol3'
    ),
    new Comic(
      ['Second Coming (Chapter Nine)'],
      27,
      2010,
      7,
      'XForceVol3'
    ),
    new Comic(
      ['Second Coming, Chapter 13'],
      28,
      2010,
      9,
      'XForceVol3'
    )
  );

  vm.series = [
    {
      id: 'Cable',
      title: 'Cable'
    },
    {
      id: 'Defenders',
      title: 'Defenders'
    },
    {
      id: 'FOOM',
      title: 'FOOM'
    },
    {
      id: 'GiantSizeFantasticFour',
      title: 'Giant-Size Fantastic Four'
    },
    {
      id: 'GiantSizeXMen',
      title: 'Giant-Size X-Men'
    },
    {
      id: 'IronFist',
      title: 'Iron Fist'
    },
    {
      id: 'MarvelTeamUp',
      title: 'Marvel Team-Up'
    },
    {
      id: 'UncannyXMen',
      title: 'Uncanny X-Men'
    },
    {
      id: 'XMen',
      title: 'X-Men'
    },
    {
      id: 'XMenManifestDestiny',
      title: 'X-Men Manifest Destiny'
    },
    {
      id: 'XMenFreeComicBookDay',
      title: 'X-Men Free Comic Book Day'
    },
    {
      id: 'HeroicAgeXMen',
      title: 'Heroic Age X-Men'
    },
    {
      id: 'SecondComingPrepare',
      title: 'Second Coming Prepare',
    },
    {
      id: 'XMenSecondComing',
      title: 'X-Men Second Coming',
    },
    {
      id: 'XForce',
      title: 'X-Force'
    },
    {
      id: 'XMenLegacy',
      title: 'X-Men Legacy'
    },
    {
      id: 'NewMutants',
      title: 'New Mutants'
    }
  ];

  vm.seriesVolume = [
    {
      id: 'CableVol2',
      seriesId: 'Cable',
      volume: 2
    },
    {
      id: 'DefendersVol1',
      seriesId: 'Defenders',
      volume: 1
    },
    {
      id: 'FOOMVol1',
      seriesId: 'FOOM',
      volume: 1
    },
    {
      id: 'GiantSizeFantasticFourVol1',
      seriesId: 'GiantSizeFantasticFour',
      volume: 1
    },
    {
      id: 'GiantSizeXMenVol1',
      seriesId: 'GiantSizeXMen',
      volume: 1
    },
    {
      id: 'IronFistVol1',
      seriesId: 'IronFist',
      volume: 1
    },
    {
      id: 'MarvelTeamUpVol1',
      seriesId: 'MarvelTeamUp',
      volume: 1
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
      id: 'XMenVol1',
      seriesId: 'XMen',
      volume: 1
    },
    {
      id: 'XMenFreeComicBookDay2008',
      seriesId: 'XMenFreeComicBookDay',
      volume: 2008
    },
    {
      id: 'HeroicAgeXMenVol1',
      seriesId: 'HeroicAgeXMen',
      volume: 1
    },
    {
      id: 'SecondComingPrepareVol1',
      seriesId: 'SecondComingPrepare',
      volume: 1
    },
    {
      id: 'XMenSecondComingVol1',
      seriesId: 'XMenSecondComing',
      volume: 1
    },
    {
      id: 'XForceVol3',
      seriesId: 'XForce',
      volume: 3
    },
    {
      id: 'XMenLegacyVol1',
      seriesId: 'XMenLegacy',
      volume: 1
    },
    {
      id: 'NewMutantsVol3',
      seriesId: 'NewMutants',
      volume: 3
    }
  ];
  vm.collections.push(
    new Collection(
      'CableVol1MessiahWar',
      'Cable Vol. 1: Messiah War',
      2008,
      12,
      'https://comicstore.marvel.com/Cable-2008-2010-1/digital-comic/10350',
      ['CableVol21']
    ),
    new Collection(
      'XMenEpicCollectionVol5SecondGenesis',
      'X-Men Epic Collection Vol. 5: Second Genesis',
      2017,
      4,
      [
        'GiantSizeXMenVol11',
        'XMenVol194',
        'XMenVol195',
        'XMenVol196',
        'XMenVol197',
        'XMenVol198',
        'XMenVol199',
        'XMenVol1100',
        'XMenVol1101',
        'XMenVol1102',
        'XMenVol1103',
        'XMenVol1104',
        'XMenVol1105',
        'XMenVol1106',
        'XMenVol1107',
        'XMenVol1108',
        'XMenVol1109',
        'XMenVol1110',
        'FOOMVol110',
        'IronFistVol114',
        'IronFistVol115',
        'MarvelTeamUpVol11976',
        'MarvelTeamUpVol153',
        'MarvelTeamUpVol169',
        'MarvelTeamUpVol170',
      ]
    )
  );
 /* vm.collections = [
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
      id: 'XMenEpicCollectionVol5SecondGenesis',
      title: 'X-Men Epic Collection Vol. 5: Second Genesis',
      yearPublished: 2017,
      monthPublished: 4,
      comicIds: [
        'GiantSizeXMenVol11',
        'XMenVol194',
        'XMenVol195',
        'XMenVol196',
        'XMenVol197',
        'XMenVol198',
        'XMenVol199',
        'XMenVol1100',
        'XMenVol1101',
        'XMenVol1102',
        'XMenVol1103',
        'XMenVol1104',
        'XMenVol1105',
        'XMenVol1106',
        'XMenVol1107',
        'XMenVol1108',
        'XMenVol1109',
        'XMenVol1110',
        'FOOMVol110',
        'IronFistVol114',
        'IronFistVol115',
        'MarvelTeamUpVol11976',
        'MarvelTeamUpVol153',
        'MarvelTeamUpVol169',
        'MarvelTeamUpVol170',
      ]
    },
    {
      id: 'XMenMessiahComplex',
      title: 'X-Men: Messiah Complex',
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
      title: 'X-Men: The Dark Phoenix Saga',
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
      title: 'Uncanny X-Men: Divided We Stand',
      yearPublished: 2008,
      monthPublished: 10,
      comicIds: [
        'UncannyXMenVol1495',
        'UncannyXMenVol1496'
      ]
    },
    {
      id: 'UncannyXMenManifestDestiny',
      title: 'Uncanny X-Men: Manifest Destiny',
      yearPublished: 2009,
      monthPublished: 10,
      comicIds: [
        'UncannyXMenVol1500',
        'UncannyXMenVol1501',
        'UncannyXMenVol1502',
        'UncannyXMenVol1503',
        'XMenFreeComicBookDay20081',
        'XMenManifestDestinyVol11',
        'XMenManifestDestinyVol12',
        'XMenManifestDestinyVol13',
        'XMenManifestDestinyVol14',
        'XMenManifestDestinyVol15'
      ]
    },
    {
      id: 'UncannyXMenFearItself',
      title: ['Uncanny X-Men: Fear Itself'],
      yearPublished: 2012,
      monthPublished: 3,
      comicIds: [
        'UncannyXMenVol1540',
        'UncannyXMenVol1541',
        'UncannyXMenVol1542',
        'UncannyXMenVol1543',
        'UncannyXMenVol1544'
      ]
    },
    {
      id: 'UncannyXMenBreakingPoint',
      title: ['Uncanny X-Men: Breaking Point'],
      yearPublished: 2011,
      monthPublished: 9,
      comicIds: [
        'UncannyXMenVol1534.1',
        'UncannyXMenVol1535',
        'UncannyXMenVol1536',
        'UncannyXMenVol1537',
        'UncannyXMenVol1538',
        'UncannyXMenVol1539'
      ]
    },
    {
      id: 'UncannyXMenQuarantine',
      title: ['Uncanny X-Men: Quarantine'],
      yearPublished: 2011,
      monthPublished: 6,
      comicIds: [
        'UncannyXMenVol1530',
        'UncannyXMenVol1531',
        'UncannyXMenVol1532',
        'UncannyXMenVol1533',
        'UncannyXMenVol1534'
      ]
    },
    {
      id: 'UncannyXMenTheFiveLights',
      title: ['Uncanny X-Men: The Five Lights (aka Uncanny X-Men: The Birth of Generation Hope)'],
      yearPublished: 2010,
      monthPublished: 12,
      comicIds: [
        'UncannyXMenVol1526',
        'UncannyXMenVol1527',
        'UncannyXMenVol1528',
        'UncannyXMenVol1529',
        'UncannyXMenVol1534'
      ]
    },
    {
      id: 'UncannyXMenSecondComing',
      title: ['X-Men: Second Coming'],
      yearPublished: 2011,
      monthPublished: 6,
      comicIds: [
        'SecondComingPrepareVol11',
        'XMenSecondComingVol11',
        'XMenSecondComingVol12',
        'UncannyXMenVol1523',
        'UncannyXMenVol1524',
        'UncannyXMenVol1525',
        'NewMutantsVol312',
        'NewMutantsVol313',
        'NewMutantsVol314',
        'XMenLegacyVol1235',
        'XMenLegacyVol1236',
        'XMenLegacyVol1237',
        'XForceVol326',
        'XForceVol327',
        'XForceVol328'
      ]
    }
  ];*/

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
