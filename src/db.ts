import * as angular from 'angular';

var comics        = [];
var collections   = [];
var series        = [];
var seriesVolumes = [];

/**
 * The prototype for individual comics.
 *
 * @param {string[]}        [titles]
 * @param {number | string} issue
 * @param {number}          yearPublished
 * @param {number}          monthPublished
 * @param {string}          seriesVolumeId
 * @param {string[]}        [referencedBy] The comic/s that reference this comic.
 *                                         Used only for comics that are not in the main collections.
 */
function Comic(
  titles: string[],
  issue: number | string,
  yearPublished: number,
  monthPublished: number,
  seriesVolumeId: string,
  referencedBy?: string[]
) {
  // Sanitize strings like annuals
  if (angular.isString(issue)) {
    issue = issue.replace(/[\W+]/g, '');
  }

  this.id = seriesVolumeId + issue;
  this.titles = titles;
  this.issue = issue;
  this.yearPublished = yearPublished;
  this.monthPublished = monthPublished;
  this.seriesVolumeId = seriesVolumeId;
  this.referencedBy = referencedBy;
}

/**
 * The prototype for collections.
 * 
 * @param {string}   title
 * @param {number}   yearPublished
 * @param {number}   monthPublished
 * @param {string[]} comicIds
 */
function Collection(title: string, yearPublished: number, monthPublished: number, comicIds: string[]) {
  this.id = title.replace(/[\W+]/g, '');
  this.title = title;
  this.yearPublished = yearPublished;
  this.monthPublished = monthPublished;
  this.comicIds = comicIds;
}

/**
 * The prototype for comic series.
 * A series always contains at least one SeriesVolume.
 *
 * @param {string} title
 * @see SeriesVolume
 */
function Series(title: string) {
  this.id = title.replace(/[\W+]/g, '');
  this.title = title;
}

/**
 * The prototype for comic series volume.
 * A SeriesVolume always matches a Series.
 *
 * @param {string} seriesId
 * @param {number} volume 
 * @see Series
 */
function SeriesVolume(seriesId: string, volume: number) {
  this.id = seriesId + 'Vol' + volume;
  this.seriesId = seriesId;
  this.volume = volume;
}

comics.push(
  new Comic(
    null,
    'Annual #10',
    1981,
    10,
    'AvengersVol1'
  ),
  new Comic(
    ['War Baby (Chapter 1)'],
    1,
    2008,
    5,
    'CableVol2'
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
    'XMenVol1',
    ['XMenVol1106']
  ),
  new Comic(
    ['Warhunt!'],
    95,
    1975,
    10,
    'XMenVol1',
    ['XMenVol1106']
  ),
  new Comic(
    ['Night of the Demon!'],
    96,
    1975,
    12,
    'XMenVol1',
    ['XMenVol1104', 'XMenVol1106']
  ),
  new Comic(
    ['My Brother, My Enemy!'],
    97,
    1976,
    2,
    'XMenVol1',
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
    'XMenVol1',
    ['XMenVol1104']
  ),
  new Comic(
    ['Who Will Stop the Juggernaut?'],
    102,
    1976,
    12,
    'XMenVol1',
    ['XMenVol1103', 'XMenVol1104']
  ),
  new Comic(
    ['The Fall of the Tower'],
    103,
    1977,
    2,
    'XMenVol1',
    ['XMenVol1104']
  ),
  new Comic(
    ['The Gentleman\'s Name is Magneto'],
    104,
    1977,
    4,
    'XMenVol1',
    ['XMenVol1105', 'XMenVol1107']
  ),
  new Comic(
    ['Phoenix Unleashed!'],
    105,
    1977,
    6,
    'XMenVol1',
    ['XMenVol1106', 'XMenVol1107']
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
    ['Mindgames!'],
    111,
    1978,
    6,
    'XMenVol1'
  ),
  new Comic(
    ['Magneto Triumphant!'],
    112,
    1978,
    8,
    'XMenVol1'
  ),
  new Comic(
    ['Showdown!'],
    113,
    1978,
    9,
    'XMenVol1'
  ),
  new Comic(
    ['Desolation'],
    114,
    1978,
    10,
    'XMenVol1'
  ),
  new Comic(
    ['Visions of Death!'],
    115,
    1978,
    11,
    'XMenVol1'
  ),
  new Comic(
    ['To Save the Savage Land'],
    116,
    1978,
    12,
    'XMenVol1'
  ),
  new Comic(
    ['Psi War!'],
    117,
    1979,
    1,
    'XMenVol1'
  ),
  new Comic(
    ['The Submergence of Japan'],
    118,
    1979,
    2,
    'XMenVol1'
  ),
  new Comic(
    ['\'Twas the Night Before Christmas...'],
    119,
    1979,
    3,
    'XMenVol1'
  ),
  new Comic(
    ['Wanted: Wolverine! Dead or Alive!'],
    120,
    1979,
    4,
    'XMenVol1'
  ),
  new Comic(
    ['Shoot-Out at the Stampede!'],
    121,
    1979,
    5,
    'XMenVol1'
  ),
  new Comic(
    ['Cry for the Children!'],
    122,
    1979,
    6,
    'XMenVol1'
  ),
  new Comic(
    ['Listen -- Stop Me if You\'ve Heard It -- But This One Will Kill You!'],
    123,
    1979,
    7,
    'XMenVol1'
  ),
  new Comic(
    ['He Only Laughs When I Hurt!'],
    124,
    1979,
    8,
    'XMenVol1'
  ),
  new Comic(
    ['A Fire in the Sky!'],
    'Annual #3',
    1979,
    8,
    'XMenVol1'
  ),
  new Comic(
    ['There\'s Something Awful on Muir Island!'],
    125,
    1979,
    9,
    'XMenVol1'
  ),
  new Comic(
    ['How Sharper Than a Serpent\'s Tooth...!'],
    126,
    1979,
    10,
    'XMenVol1'
  ),
  new Comic(
    ['The Quality of Hatred!'],
    127,
    1979,
    11,
    'XMenVol1'
  ),
  new Comic(
    ['The Action of the Tiger!'],
    128,
    1979,
    12,
    'XMenVol1'
  ),
  new Comic(
    ['God Spare the Child...'],
    129,
    1980,
    1,
    'XMenVol1'
  ),
  new Comic(
    ['Dazzler'],
    130,
    1980,
    2,
    'XMenVol1'
  ),
  new Comic(
    ['Run for Your Life!'],
    131,
    1980,
    3,
    'XMenVol1'
  ),
  new Comic(
    ['And Hellfire is Their Name!'],
    132,
    1980,
    4,
    'XMenVol1'
  ),
  new Comic(
    ['Wolverine: Alone!'],
    133,
    1980,
    5,
    'XMenVol1'
  ),
  new Comic(
    ['Too Late, the Heroes!'],
    134,
    1980,
    6,
    'XMenVol1'
  ),
  new Comic(
    ['Dark Phoenix'],
    135,
    1980,
    7,
    'XMenVol1'
  ),
  new Comic(
    ['Child of Light and Darkness!'],
    136,
    1980,
    8,
    'XMenVol1'
  ),
  new Comic(
    ['The Fate of the Phoenix!'],
    137,
    1980,
    9,
    'XMenVol1'
  ),
  new Comic(
    ['Elegy'],
    138,
    1980,
    10,
    'XMenVol1'
  ),
  new Comic(
    ['Nightcrawler\'s Inferno'],
    'Annual #4',
    1980,
    11,
    'XMenVol1'
  ),
  new Comic(
    ['...Something Wicked This Way Comes!'],
    139,
    1980,
    11,
    'XMenVol1'
  ),
  new Comic(
    ['Rage!'],
    140,
    1980,
    12,
    'XMenVol1'
  ),
  new Comic(
    null,
    141,
    1981,
    1,
    'XMenVol1'
  ),
  new Comic(
    null,
    142,
    1981,
    2,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    143,
    1981,
    3,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    144,
    1981,
    4,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    145,
    1981,
    5,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    146,
    1981,
    6,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    147,
    1981,
    7,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    148,
    1981,
    8,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    149,
    1981,
    9,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    150,
    1981,
    10,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    'Annual #5',
    1981,
    11,
    'XMenVol1'
  ),
  new Comic(
    null,
    151,
    1981,
    11,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    152,
    1981,
    12,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    153,
    1982,
    1,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    154,
    1982,
    2,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    155,
    1982,
    3,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    156,
    1982,
    4,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    157,
    1982,
    5,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    158,
    1982,
    6,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    159,
    1982,
    7,
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
    'XMenFreeComicBookDayVol2008'
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

series.push(
  new Series('Avengers'),
  new Series('Cable'),
  new Series('Defenders'),
  new Series('Giant-Size Fantastic Four'),
  new Series('Giant-Size X-Men'),
  new Series('Iron Fist'),
  new Series('Marvel Team-Up'),
  new Series('Uncanny X-Men'),
  new Series('X-Men'),
  new Series('X-Men Manifest Destiny'),
  new Series('X-Men Free Comic Book Day'),
  new Series('Heroic Age X-Men'),
  new Series('Second Coming Prepare'),
  new Series('X-Men Second Coming'),
  new Series('X-Force'),
  new Series('X-Men Legacy'),
  new Series('New Mutants')
);

seriesVolumes.push(
  new SeriesVolume('Avengers', 1),
  new SeriesVolume('Cable', 2),
  new SeriesVolume('Defenders', 1),
  new SeriesVolume('GiantSizeFantasticFour', 1),
  new SeriesVolume('GiantSizeXMen', 1),
  new SeriesVolume('IronFist', 1),
  new SeriesVolume('MarvelTeamUp', 1),
  new SeriesVolume('UncannyXMen', 1),
  new SeriesVolume('XMenManifestDestiny', 1),
  new SeriesVolume('XMen', 1),
  new SeriesVolume('XMenFreeComicBookDay', 2008),
  new SeriesVolume('HeroicAgeXMen', 1),
  new SeriesVolume('SecondComingPrepare', 1),
  new SeriesVolume('XMenSecondComing', 1),
  new SeriesVolume('XForce', 3),
  new SeriesVolume('XMenLegacy', 1),
  new SeriesVolume('NewMutants', 3)
);

collections.push(
  new Collection(
    'Cable Vol. 1: Messiah War',
    2008,
    12,
    ['CableVol21']
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 3',
    2011,
    1,
    [
      'XMenVol1111',
      'XMenVol1112',
      'XMenVol1113',
      'XMenVol1114',
      'XMenVol1115',
      'XMenVol1116',
      'XMenVol1117',
      'XMenVol1118',
      'XMenVol1119',
      'XMenVol1120',
      'XMenVol1121',
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 4',
    2012,
    2,
    [
      'XMenVol1122',
      'XMenVol1123',
      'XMenVol1124',
      'XMenVol1Annual3',
      'XMenVol1125',
      'XMenVol1126',
      'XMenVol1127',
      'XMenVol1128',
      'XMenVol1129',
      'XMenVol1130',
      'XMenVol1131'
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 5',
    2012,
    7,
    [
      'XMenVol1132',
      'XMenVol1133',
      'XMenVol1134',
      'XMenVol1135',
      'XMenVol1136',
      'XMenVol1137',
      'XMenVol1138',
      'XMenVol1Annual4',
      'XMenVol1139',
      'XMenVol1140'
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 6',
    2008,
    2,
    [
      'XMenVol1141',
      'UncannyXMenVol1142',
      'UncannyXMenVol1143',
      'UncannyXMenVol1144',
      'UncannyXMenVol1145',
      'UncannyXMenVol1146',
      'UncannyXMenVol1147',
      'UncannyXMenVol1148',
      'UncannyXMenVol1149',
      'UncannyXMenVol1150',
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 7',
    2011,
    1,
    [
      'AvengersVol1Annual10',
      'XMenVol1Annual5',
      'UncannyXMenVol1151',
      'UncannyXMenVol1152',
      'UncannyXMenVol1153',
      'UncannyXMenVol1154',
      'UncannyXMenVol1155',
      'UncannyXMenVol1156',
      'UncannyXMenVol1157',
      'UncannyXMenVol1158',
      'UncannyXMenVol1159'
    ]
  ),
  new Collection(
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
      'IronFistVol114',
      'IronFistVol115',
      'XMenVol1109',
      'MarvelTeamUpVol11976',
      'MarvelTeamUpVol153',
      'XMenVol1110',
      'MarvelTeamUpVol169',
      'MarvelTeamUpVol170',
    ]
  ),
  new Collection(
    'X-Men: Messiah Complex',
    2008,
    11,
    [
      'UncannyXMenVol1492',
      'UncannyXMenVol1493',
      'UncannyXMenVol1494'
   ]
  ),
  new Collection(
    'Uncanny X-Men: Divided We Stand',
    2008,
    10,
    [
      'UncannyXMenVol1495',
      'UncannyXMenVol1496'
    ]
  ),
  new Collection(
    'Uncanny X-Men: Manifest Destiny',
    2009,
    10,
    [
      'UncannyXMenVol1500',
      'UncannyXMenVol1501',
      'UncannyXMenVol1502',
      'UncannyXMenVol1503',
      'XMenFreeComicBookDayVol20081',
      'XMenManifestDestinyVol11',
      'XMenManifestDestinyVol12',
      'XMenManifestDestinyVol13',
      'XMenManifestDestinyVol14',
      'XMenManifestDestinyVol15'
    ]
  ),
  new Collection(
    'Uncanny X-Men: Fear Itself',
    2012,
    3,
    [
      'UncannyXMenVol1540',
      'UncannyXMenVol1541',
      'UncannyXMenVol1542',
      'UncannyXMenVol1543',
      'UncannyXMenVol1544'
    ]
  ),
  new Collection(
    'Uncanny X-Men: Breaking Point',
    2011,
    9,
    [
      'UncannyXMenVol1534.1',
      'UncannyXMenVol1535',
      'UncannyXMenVol1536',
      'UncannyXMenVol1537',
      'UncannyXMenVol1538',
      'UncannyXMenVol1539'
    ]
  ),
  new Collection(
    'Uncanny X-Men: Quarantine',
    2011,
    6,
     [
      'UncannyXMenVol1530',
      'UncannyXMenVol1531',
      'UncannyXMenVol1532',
      'UncannyXMenVol1533',
      'UncannyXMenVol1534'
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Five Lights (aka Uncanny X-Men: The Birth of Generation Hope)',
    2010,
    12,
    [
      'UncannyXMenVol1526',
      'UncannyXMenVol1527',
      'UncannyXMenVol1528',
      'UncannyXMenVol1529',
      'UncannyXMenVol1534'
    ]
  ),
  new Collection(
    'X-Men: Second Coming',
    2011,
    6,
    [
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
  )
);

export { collections, comics, series, seriesVolumes };
