var comics        = [];
var collections   = [];
var series        = [];
var seriesVolumes = [];

/**
 * The prototype for individual comics.
 *
 * @param {string[]} [titles]
 * @param {number}   issue
 * @param {number}   yearPublished
 * @param {number}   monthPublished
 * @param {string}   seriesVolumeId
 */
function Comic(titles, issue, yearPublished, monthPublished, seriesVolumeId) {
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
}

/**
 * The prototype for collections.
 * 
 * @param {string}   title
 * @param {number}   yearPublished
 * @param {number}   monthPublished
 * @param {string[]} comicIds
 */
function Collection(title, yearPublished, monthPublished, comicIds) {
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
function Series(title) {
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
function SeriesVolume(seriesId, volume) {
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
    'GiantSize',
    1975,
    5,
    'UncannyXMenVol1'
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
    null,
    1,
    1983,
    12,
    'MagikLimitedSeriesVol1'
  ),
  new Comic(
    null,
    2,
    1984,
    1,
    'MagikLimitedSeriesVol1'
  ),
  new Comic(
    null,
    3,
    1984,
    2,
    'MagikLimitedSeriesVol1'
  ),
  new Comic(
    null,
    4,
    1984,
    3,
    'MagikLimitedSeriesVol1'
  ),
  new Comic(
    null,
    5,
    1983,
    1,
    'MarvelGraphicNovelVol1'
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
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Warhunt!'],
    95,
    1975,
    10,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Night of the Demon!'],
    96,
    1975,
    12,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['My Brother, My Enemy!'],
    97,
    1976,
    2,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Merry Christmas, X-Men — The Sentinels Have Returned!'],
    98,
    1976,
    4,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Deathstar, Rising!'],
    99,
    1976,
    6,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Greater Love Hath No X-Man...'],
    100,
    1976,
    8,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Like a Phoenix, from the Ashes'],
    101,
    1976,
    10,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Who Will Stop the Juggernaut?'],
    102,
    1976,
    12,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['The Fall of the Tower'],
    103,
    1977,
    2,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['The Gentleman\'s Name is Magneto'],
    104,
    1977,
    4,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Phoenix Unleashed!'],
    105,
    1977,
    6,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Dark Shroud of the Past!'],
    106,
    1977,
    8,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Where No X-Man Has Gone Before!'],
    107,
    1977,
    10,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Armageddon Now'],
    108,
    1977,
    12,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Home are the Heroes!'],
    109,
    1978,
    2,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['The \'X\'-Sanction'],
    110,
    1978,
    4,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Mindgames!'],
    111,
    1978,
    6,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Magneto Triumphant!'],
    112,
    1978,
    8,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Showdown!'],
    113,
    1978,
    9,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Desolation'],
    114,
    1978,
    10,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Visions of Death!'],
    115,
    1978,
    11,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['To Save the Savage Land'],
    116,
    1978,
    12,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Psi War!'],
    117,
    1979,
    1,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['The Submergence of Japan'],
    118,
    1979,
    2,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['\'Twas the Night Before Christmas...'],
    119,
    1979,
    3,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Wanted: Wolverine! Dead or Alive!'],
    120,
    1979,
    4,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Shoot-Out at the Stampede!'],
    121,
    1979,
    5,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Cry for the Children!'],
    122,
    1979,
    6,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Listen -- Stop Me if You\'ve Heard It -- But This One Will Kill You!'],
    123,
    1979,
    7,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['He Only Laughs When I Hurt!'],
    124,
    1979,
    8,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['A Fire in the Sky!'],
    'Annual #3',
    1979,
    8,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['There\'s Something Awful on Muir Island!'],
    125,
    1979,
    9,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['How Sharper Than a Serpent\'s Tooth...!'],
    126,
    1979,
    10,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['The Quality of Hatred!'],
    127,
    1979,
    11,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['The Action of the Tiger!'],
    128,
    1979,
    12,
    'UncannyXMenVol1'
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
    ['Elegy'],
    138,
    1980,
    10,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Nightcrawler\'s Inferno'],
    'Annual #4',
    1980,
    11,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['...Something Wicked This Way Comes!'],
    139,
    1980,
    11,
    'UncannyXMenVol1'
  ),
  new Comic(
    ['Rage!'],
    140,
    1980,
    12,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    141,
    1981,
    1,
    'UncannyXMenVol1'
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
    'UncannyXMenVol1'
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
    null,
    160,
    1982,
    8,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    161,
    1982,
    9,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    162,
    1982,
    10,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    163,
    1982,
    11,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    'Annual #6',
    1982,
    11,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    164,
    1982,
    12,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    165,
    1983,
    1,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    166,
    1983,
    2,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    167,
    1983,
    3,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    168,
    1983,
    4,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    169,
    1983,
    5,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    170,
    1983,
    6,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    171,
    1983,
    7,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    172,
    1983,
    8,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    173,
    1983,
    9,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    174,
    1983,
    10,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    175,
    1983,
    11,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    176,
    1983,
    12,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    'Annual #7',
    1983,
    12,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    177,
    1984,
    1,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    178,
    1984,
    2,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    179,
    1984,
    3,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    180,
    1984,
    4,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    181,
    1984,
    5,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    182,
    1984,
    6,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    183,
    1984,
    7,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    184,
    1984,
    8,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    185,
    1984,
    9,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    186,
    1984,
    10,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    187,
    1984,
    11,
    'UncannyXMenVol1'
  ),
  new Comic(
    null,
    188,
    1984,
    12,
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
    null,
    1,
    1982,
    9,
    'WolverineVol1'
  ),
  new Comic(
    null,
    2,
    1982,
    10,
    'WolverineVol1'
  ),
  new Comic(
    null,
    3,
    1982,
    11,
    'WolverineVol1'
  ),
  new Comic(
    null,
    4,
    1982,
    12,
    'WolverineVol1'
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
  new Series('Iron Fist'),
  new Series('Magik (Limited Series)'),
  new Series('Marvel Graphic Novel'),
  new Series('Marvel Team-Up'),
  new Series('Uncanny X-Men'),
  new Series('Wolverine'),
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
  new SeriesVolume('IronFist', 1),
  new SeriesVolume('MagikLimitedSeries', 1),
  new SeriesVolume('MarvelGraphicNovel', 1),
  new SeriesVolume('MarvelTeamUp', 1),
  new SeriesVolume('UncannyXMen', 1),
  new SeriesVolume('Wolverine', 1),
  new SeriesVolume('XMenManifestDestiny', 1),
  new SeriesVolume('XMenFreeComicBookDay', 2008),
  new SeriesVolume('HeroicAgeXMen', 1),
  new SeriesVolume('SecondComingPrepare', 1),
  new SeriesVolume('XMenSecondComing', 1),
  new SeriesVolume('XForce', 3),
  new SeriesVolume('XMenLegacy', 1),
  new SeriesVolume('NewMutants', 3)
);

// These should be in reading order
collections.push(
  new Collection(
    'X-Men Epic Collection Vol. 5: Second Genesis',
    2017,
    4,
    [
      'UncannyXMenVol1GiantSize',
      'UncannyXMenVol194',
      'UncannyXMenVol195',
      'UncannyXMenVol196',
      'UncannyXMenVol197',
      'UncannyXMenVol198',
      'UncannyXMenVol199',
      'UncannyXMenVol1100',
      'UncannyXMenVol1101',
      'UncannyXMenVol1102',
      'UncannyXMenVol1103',
      'UncannyXMenVol1104',
      'UncannyXMenVol1105',
      'UncannyXMenVol1106',
      'UncannyXMenVol1107',
      'UncannyXMenVol1108',
      'IronFistVol114',
      'IronFistVol115',
      'UncannyXMenVol1109',
      'MarvelTeamUpVol11976',
      'MarvelTeamUpVol153',
      'UncannyXMenVol1110',
      'MarvelTeamUpVol169',
      'MarvelTeamUpVol170',
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 3',
    2011,
    1,
    [
      'UncannyXMenVol1111',
      'UncannyXMenVol1112',
      'UncannyXMenVol1113',
      'UncannyXMenVol1114',
      'UncannyXMenVol1115',
      'UncannyXMenVol1116',
      'UncannyXMenVol1117',
      'UncannyXMenVol1118',
      'UncannyXMenVol1119',
      'UncannyXMenVol1120',
      'UncannyXMenVol1121',
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 4',
    2012,
    2,
    [
      'UncannyXMenVol1122',
      'UncannyXMenVol1123',
      'UncannyXMenVol1124',
      'UncannyXMenVol1Annual3',
      'UncannyXMenVol1125',
      'UncannyXMenVol1126',
      'UncannyXMenVol1127',
      'UncannyXMenVol1128',
      'UncannyXMenVol1129',
      'UncannyXMenVol1130',
      'UncannyXMenVol1131'
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 5',
    2012,
    7,
    [
      'UncannyXMenVol1132',
      'UncannyXMenVol1133',
      'UncannyXMenVol1134',
      'UncannyXMenVol1135',
      'UncannyXMenVol1136',
      'UncannyXMenVol1137',
      'UncannyXMenVol1138',
      'UncannyXMenVol1Annual4',
      'UncannyXMenVol1139',
      'UncannyXMenVol1140'
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 6',
    2008,
    2,
    [
      'UncannyXMenVol1141',
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
      'UncannyXMenVol1Annual5',
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
    'Marvel Masterworks: The Uncanny X-Men Vol. 8',
    2012,
    2,
    [
      'UncannyXMenVol1160',
      'UncannyXMenVol1161',
      'UncannyXMenVol1162',
      'UncannyXMenVol1163',
      'UncannyXMenVol1164',
      'UncannyXMenVol1165',
      'UncannyXMenVol1166',
      'UncannyXMenVol1167',
      'UncannyXMenVol1Annual6'
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 9',
    2015,
    1,
    [
      'MarvelGraphicNovelVol15',
      'UncannyXMenVol1168',
      'UncannyXMenVol1169',
      'UncannyXMenVol1170',
      'UncannyXMenVol1171',
      'WolverineVol11',
      'WolverineVol12',
      'WolverineVol13',
      'WolverineVol14',
      'UncannyXMenVol1172',
      'UncannyXMenVol1173',
      'UncannyXMenVol1174',
      'UncannyXMenVol1175',
      'UncannyXMenVol1Annual7'
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 10',
    2017,
    2,
    [
      'MagikLimitedSeriesVol11',
      'MagikLimitedSeriesVol12',
      'MagikLimitedSeriesVol13',
      'MagikLimitedSeriesVol14',
      'UncannyXMenVol1176',
      'UncannyXMenVol1177',
      'UncannyXMenVol1178',
      'UncannyXMenVol1179',
      'UncannyXMenVol1180',
      'UncannyXMenVol1181',
      'UncannyXMenVol1182',
      'UncannyXMenVol1183',
      'UncannyXMenVol1184',
      'UncannyXMenVol1185',
      'UncannyXMenVol1186',
      'UncannyXMenVol1187',
      'UncannyXMenVol1188'
    ]
  ),
  new Collection(
    'Cable Vol. 1: Messiah War',
    2008,
    12,
    ['CableVol21']
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
