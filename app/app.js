angular.module('app', [])
.constant('_', window._)
.run(function ($rootScope) {
  $rootScope._ = window._;
})
.controller('DataController', function() {
  var vm = this;

  vm.comics = [
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
      id: 'FOOMVol110',
      title: [
        'Mutation of the Species',
        'X-Men! X-Men! Read All About \'Em!',
        'Doctor Foom',
        'Fan Art',
        'Marvel at the Con!',
        'Eggsmen',
        'Dept. of Infoomation'
      ],
      issue: 10,
      yearPublished: 1975,
      monthPublished: 6,
      seriesVolumeId: 'FOOMVol1'
    },
    {
      id: 'GiantSizeXMenVol11',
      title: ['Deadly Genesis!', 'Call Him...Cyclops', 'I, the Iceman', 'The Female of the Species!'],
      issue: 1,
      yearPublished: 1975,
      monthPublished: 5,
      seriesVolumeId: 'GiantSizeXMenVol1'
    },
    {
      id: 'IronFistVol114',
      title: ['Snowfire'],
      issue: 14,
      yearPublished: 1977,
      monthPublished: 8,
      seriesVolumeId: 'IronFistVol1'
    },
    {
      id: 'IronFistVol115',
      title: ['Enter, the X-Men'],
      issue: 15,
      yearPublished: 1977,
      monthPublished: 9,
      seriesVolumeId: 'IronFistVol1'
    },
    {
      id: 'MarvelTeamUpVol11976',
      title: ['The Lords of Light and Darkness!'],
      issue: 1976,
      yearPublished: 1976,
      monthPublished: 12,
      seriesVolumeId: 'MarvelTeamUpVol1'
    },
    {
      id: 'MarvelTeamUpVol153',
      title: ['Nightmare in New Mexico!'],
      issue: 53,
      yearPublished: 1977,
      monthPublished: 1,
      seriesVolumeId: 'MarvelTeamUpVol1'
    },
    {
      id: 'MarvelTeamUpVol169',
      title: ['Night of the Living God!'],
      issue: 69,
      yearPublished: 1978,
      monthPublished: 5,
      seriesVolumeId: 'MarvelTeamUpVol1'
    },
    {
      id: 'MarvelTeamUpVol170',
      title: ['Whom Gods Destroy!'],
      issue: 70,
      yearPublished: 1978,
      monthPublished: 6,
      seriesVolumeId: 'MarvelTeamUpVol1'
    },
    {
      id: 'XMenVol194',
      title: ['The Doomsmith Scenario!'],
      issue: 94,
      yearPublished: 1975,
      monthPublished: 8,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol195',
      title: ['Warhunt!'],
      issue: 95,
      yearPublished: 1975,
      monthPublished: 10,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol196',
      title: ['Night of the Demon!'],
      issue: 96,
      yearPublished: 1975,
      monthPublished: 12,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol197',
      title: ['My Brother, My Enemy!'],
      issue: 97,
      yearPublished: 1976,
      monthPublished: 2,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol198',
      title: ['Merry Christmas, X-Men — The Sentinels Have Returned!'],
      issue: 98,
      yearPublished: 1976,
      monthPublished: 4,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol199',
      title: ['Deathstar, Rising!'],
      issue: 99,
      yearPublished: 1976,
      monthPublished: 6,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol1100',
      title: ['Greater Love Hath No X-Man...'],
      issue: 100,
      yearPublished: 1976,
      monthPublished: 8,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol1101',
      title: ['Like a Phoenix, from the Ashes'],
      issue: 101,
      yearPublished: 1976,
      monthPublished: 10,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol1102',
      title: ['Who Will Stop the Juggernaut?'],
      issue: 102,
      yearPublished: 1976,
      monthPublished: 12,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol1103',
      title: ['The Fall of the Tower'],
      issue: 103,
      yearPublished: 1977,
      monthPublished: 2,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol1104',
      title: ['The Gentleman\'s Name is Magneto'],
      issue: 104,
      yearPublished: 1977,
      monthPublished: 4,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol1105',
      title: ['Phoenix Unleashed!'],
      issue: 105,
      yearPublished: 1977,
      monthPublished: 6,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol1106',
      title: ['Dark Shroud of the Past!'],
      issue: 106,
      yearPublished: 1977,
      monthPublished: 8,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol1107',
      title: ['Where No X-Man Has Gone Before!'],
      issue: 107,
      yearPublished: 1977,
      monthPublished: 10,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol1108',
      title: ['Armageddon Now'],
      issue: 108,
      yearPublished: 1977,
      monthPublished: 12,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol1109',
      title: ['Home are the Heroes!'],
      issue: 109,
      yearPublished: 1978,
      monthPublished: 2,
      seriesVolumeId: 'XMenVol1'
    },
    {
      id: 'XMenVol1110',
      title: ['The \'X\'-Sanction'],
      issue: 110,
      yearPublished: 1978,
      monthPublished: 4,
      seriesVolumeId: 'XMenVol1'
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
      monthPublished: 5,
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
      monthPublished: 1,
      seriesVolumeId: 'XMenManifestDestinyVol1'
    },
    {
      id: 'XMenManifestDestinyVol14',
      title: ['Kill or Cure (Part 4)','Mercury','Work It Out'],
      issue: 4,
      yearPublished: 2009,
      monthPublished: 2,
      seriesVolumeId: 'XMenManifestDestinyVol1'
    },
    {
      id: 'XMenManifestDestinyVol15',
      title: ['Kill or Cure (Part 5)','Nick\'s','Dazzler: Solo'],
      issue: 5,
      yearPublished: 2009,
      monthPublished: 3,
      seriesVolumeId: 'XMenManifestDestinyVol1'
    },
    {
      id: 'UncannyXMenVol1540',
      title: ['Uncanny X-Men Vol 1 #540'],
      issue: 540,
      yearPublished: 2011,
      monthPublished: 9,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1541',
      title: ['Uncanny X-Men Vol 1 #541'],
      issue: 541,
      yearPublished: 2011,
      monthPublished: 9,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1542',
      title: ['Uncanny X-Men Vol 1 #542'],
      issue: 542,
      yearPublished: 2011,
      monthPublished: 10,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1543',
      title: ['Uncanny X-Men Vol 1 #543'],
      issue: 543,
      yearPublished: 2011,
      monthPublished: 11,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1544',
      title: ['Uncanny'],
      issue: 544,
      yearPublished: 2011,
      monthPublished: 12,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1534.1',
      title: ['Uncanny X-Men Vol 1 #534.1'],
      issue: 534.1,
      yearPublished: 2011,
      monthPublished: 6,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1535',
      title: ['Breaking Point (Part One)'],
      issue: 535,
      yearPublished: 2011,
      monthPublished: 6,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1536',
      title: ['Breaking Point: Part Two'],
      issue: 536,
      yearPublished: 2011,
      monthPublished: 6,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1537',
      title: ['Breaking Point (Part 3)'],
      issue: 537,
      yearPublished: 2011,
      monthPublished: 7,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1538',
      title: ['Breaking Point (Conclusion)'],
      issue: 538,
      yearPublished: 2011,
      monthPublished: 8,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1539',
      title: ['Losing Hope'],
      issue: 539,
      yearPublished: 2011,
      monthPublished: 8,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1530',
      title: ['Quarantine: Part 1'],
      issue: 530,
      yearPublished: 2011,
      monthPublished: 1,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1531',
      title: ['Quarantine (Part Two)'],
      issue: 531,
      yearPublished: 2011,
      monthPublished: 2,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1532',
      title: ['Quarantine (Part Three)'],
      issue: 532,
      yearPublished: 2011,
      monthPublished: 3,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1533',
      title: ['Quarantine (Part Four)'],
      issue: 533,
      yearPublished: 2011,
      monthPublished: 4,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1534',
      title: ['Quarantine (Part Five)'],
      issue: 534,
      yearPublished: 2011,
      monthPublished: 5,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1526',
      title: ['The Five Lights (Part 1): Freak Like Me', 'Rebuilding'],
      issue: 526,
      yearPublished: 2010,
      monthPublished: 9,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1527',
      title: ['The Five Lights (Part 2) - Velocidad'],
      issue: 527,
      yearPublished: 2010,
      monthPublished: 10,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1528',
      title: ['The Five Lights (Part 3)'],
      issue: 528,
      yearPublished: 2010,
      monthPublished: 11,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1529',
      title: ['The Five Lights (Part Four)'],
      issue: 529,
      yearPublished: 2010,
      monthPublished: 12,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'HeroicAgeXMenVol11',
      title: ['Heroic Age: X-Men Vol 1 #1'],
      issue: 1,
      yearPublished: 2011,
      monthPublished: 2,
      seriesVolumeId: 'HeroicAgeXMenVol1'
    },
    {
      id: 'SecondComingPrepareVol11',
      title: ['Where Were You?'],
      issue: 1,
      yearPublished: 2010,
      monthPublished: 4,
      seriesVolumeId: 'SecondComingPrepareVol1'
    },
    {
      id: 'XMenSecondComingVol12',
      title: ['Second Coming Chapter XIV'],
      issue: 2,
      yearPublished: 2010,
      monthPublished: 9,
      seriesVolumeId: 'XMenSecondComingVol1'
    },
    {
      id: 'XMenSecondComingVol11',
      title: ['Second Coming, Chapter One'],
      issue: 1,
      yearPublished: 2010,
      monthPublished: 5,
      seriesVolumeId: 'XMenSecondComingVol1'
    },
    {
      id: 'UncannyXMenVol1525',
      title: ['Second Coming (Chapter Ten)'],
      issue: 525,
      yearPublished: 2010,
      monthPublished: 8,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1524',
      title: ['Second Coming (Chapter Six)'],
      issue: 524,
      yearPublished: 2010,
      monthPublished: 7,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'UncannyXMenVol1523',
      title: ['Second Coming (Chapter Two)'],
      issue: 523,
      yearPublished: 2010,
      monthPublished: 6,
      seriesVolumeId: 'UncannyXMenVol1'
    },
    {
      id: 'NewMutantsVol314',
      title: ['Second Coming (Chapter Eleven)'],
      issue: 14,
      yearPublished: 2010,
      monthPublished: 8,
      seriesVolumeId: 'NewMutantsVol3'
    },
    {
      id: 'NewMutantsVol313',
      title: ['Second Coming (Chapter Seven)'],
      issue: 13,
      yearPublished: 2010,
      monthPublished: 7,
      seriesVolumeId: 'NewMutantsVol3'
    },
    {
      id: 'NewMutantsVol312',
      title: ['Second Coming (Chapter Three)'],
      issue: 12,
      yearPublished: 2010,
      monthPublished: 6,
      seriesVolumeId: 'NewMutantsVol3'
    },
    {
      id: 'XMenLegacyVol1237',
      title: ['Second Coming (Chapter Twelve)'],
      issue: 237,
      yearPublished: 2010,
      monthPublished: 8,
      seriesVolumeId: 'XMenLegacyVol1'
    },
    {
      id: 'XMenLegacyVol1236',
      title: ['Second Coming (Chapter Eight)'],
      issue: 236,
      yearPublished: 2010,
      monthPublished: 7,
      seriesVolumeId: 'XMenLegacyVol1'
    },
    {
      id: 'XMenLegacyVol1235',
      title: ['Second Coming (Chapter Four)'],
      issue: 235,
      yearPublished: 2010,
      monthPublished: 6,
      seriesVolumeId: 'XMenLegacyVol1'
    },
    {
      id: 'XForceVol326',
      title: ['Second Coming (Chapter Five)'],
      issue: 26,
      yearPublished: 2010,
      monthPublished: 6,
      seriesVolumeId: 'XForceVol3'
    },
    {
      id: 'XForceVol327',
      title: ['Second Coming (Chapter Nine)'],
      issue: 27,
      yearPublished: 2010,
      monthPublished: 7,
      seriesVolumeId: 'XForceVol3'
    },
    {
      id: 'XForceVol328',
      title: ['Second Coming, Chapter 13'],
      issue: 28,
      yearPublished: 2010,
      monthPublished: 9,
      seriesVolumeId: 'XForceVol3'
    }
  ];

  vm.series = [
    {
      id: 'Cable',
      title: 'Cable'
    },
    {
      id: 'FOOM',
      title: 'FOOM'
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
      id: 'FOOMVol1',
      seriesId: 'FOOM',
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
  vm.collections = [
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
        'XMenFreeComicBookDay2008',
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
  ];

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
      currentComic.styles.top = currentSeriesVolume.verticalPosition * verticalIncrement;
    } else {
      if (angular.isDefined(vm.expandedComic)) {
        var previousComic = vm.comics[_.findKey(vm.comics, { 'id': vm.expandedComic })];
        previousComic.styles.top = currentSeriesVolume.verticalPosition * verticalIncrement;
      }

      vm.expandedComic = currentComic.id;
      currentComic.styles.top = (currentSeriesVolume.verticalPosition * verticalIncrement) - 175;
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
