var comics        = [];
var collections   = [];
var series        = [];
var seriesVolumes = [];

/**
 * The prototype for individual comics.
 *
 * @param {number}   issue
 * @param {string}   datePublished
 * @param {string}   seriesVolumeId
 * @param {string[]} [titles]
 */
function Comic(issue, datePublished, seriesVolumeId, titles) {
  // Sanitize strings like annuals
  if (angular.isString(issue)) {
    issue = issue.replace(/[\W+]/g, '');
  }

  // Create a Date object from the datePublished string
  this.date = new Date(datePublished);

  this.id = seriesVolumeId + issue;
  this.issue = issue;
  this.yearPublished = this.date.getFullYear();
  this.monthPublished = this.date.getMonth() + 1;
  this.seriesVolumeId = seriesVolumeId;
  this.titles = titles;
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
 * @param {string}   title
 * @param {number[]} volumes
 * @see SeriesVolume
 */
function Series(title, volumes) {
  var self = this;
  self.id = title.replace(/[\W+]/g, '');
  self.title = title;

  volumes.forEach(function(volume) {
    seriesVolumes.push(
      new SeriesVolume(
        self.id,
        volume
      )
    );
  });
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
    'Annual #10',
    '1981-10',
    'AvengersVol1'
  ),
  new Comic(
    1,
    '2008-5',
    'CableVol2',
    ['War Baby (Chapter 1)']
  ),
  new Comic(
    14,
    '1977-8',
    'IronFistVol1',
    ['Snowfire']
  ),
  new Comic(
    15,
    '1977-9',
    'IronFistVol1',
    ['Enter, the X-Men']
  ),
  new Comic(
    1,
    '1983-12',
    'MagikLimitedSeriesVol1'
  ),
  new Comic(
    2,
    '1984-1',
    'MagikLimitedSeriesVol1'
  ),
  new Comic(
    3,
    '1984-2',
    'MagikLimitedSeriesVol1'
  ),
  new Comic(
    4,
    '1984-3',
    'MagikLimitedSeriesVol1'
  ),
  new Comic(
    5,
    '1983-1',
    'MarvelGraphicNovelVol1'
  ),
  new Comic(
    1976,
    '1976-12',
    'MarvelTeamUpVol1',
    ['The Lords of Light and Darkness!']
  ),
  new Comic(
    53,
    '1977-1',
    'MarvelTeamUpVol1',
    ['Nightmare in New Mexico!']
  ),
  new Comic(
    69,
    '1978-5',
    'MarvelTeamUpVol1',
    ['Night of the Living God!']
  ),
  new Comic(
    70,
    '1978-6',
    'MarvelTeamUpVol1',
    ['Whom Gods Destroy!']
  ),
  new Comic(
    1,
    '1985-11',
    'NightcrawlerVol1'
  ),
  new Comic(
    2,
    '1985-12',
    'NightcrawlerVol1'
  ),
  new Comic(
    3,
    '1986-1',
    'NightcrawlerVol1'
  ),
  new Comic(
    4,
    '1986-2',
    'NightcrawlerVol1'
  ),
  new Comic(
    'GiantSize',
    '1975-5',
    'UncannyXMenVol1',
    ['Deadly Genesis!', 'Call Him...Cyclops', 'I, the Iceman', 'The Female of the Species!']
  ),
  new Comic(
    94,
    '1975-8',
    'UncannyXMenVol1',
    ['The Doomsmith Scenario!']
  ),
  new Comic(
    95,
    '1975-10',
    'UncannyXMenVol1',
    ['Warhunt!']
  ),
  new Comic(
    96,
    '1975-12',
    'UncannyXMenVol1',
    ['Night of the Demon!']
  ),
  new Comic(
    97,
    '1976-2',
    'UncannyXMenVol1',
    ['My Brother, My Enemy!']
  ),
  new Comic(
    98,
    '1976-4',
    'UncannyXMenVol1',
    ['Merry Christmas, X-Men — The Sentinels Have Returned!']
  ),
  new Comic(
    99,
    '1976-6',
    'UncannyXMenVol1',
    ['Deathstar, Rising!']
  ),
  new Comic(
    100,
    '1976-8',
    'UncannyXMenVol1',
    ['Greater Love Hath No X-Man...']
  ),
  new Comic(
    101,
    '1976-10',
    'UncannyXMenVol1',
    ['Like a Phoenix, from the Ashes']
  ),
  new Comic(
    102,
    '1976-12',
    'UncannyXMenVol1',
    ['Who Will Stop the Juggernaut?']
  ),
  new Comic(
    103,
    '1977-2',
    'UncannyXMenVol1',
    ['The Fall of the Tower']
  ),
  new Comic(
    104,
    '1977-4',
    'UncannyXMenVol1',
    ['The Gentleman\'s Name is Magneto']
  ),
  new Comic(
    105,
    '1977-6',
    'UncannyXMenVol1',
    ['Phoenix Unleashed!']
  ),
  new Comic(
    106,
    '1977-8',
    'UncannyXMenVol1',
    ['Dark Shroud of the Past!']
  ),
  new Comic(
    107,
    '1977-10',
    'UncannyXMenVol1',
    ['Where No X-Man Has Gone Before!']
  ),
  new Comic(
    108,
    '1977-12',
    'UncannyXMenVol1',
    ['Armageddon Now']
  ),
  new Comic(
    109,
    '1978-2',
    'UncannyXMenVol1',
    ['Home are the Heroes!']
  ),
  new Comic(
    110,
    '1978-4',
    'UncannyXMenVol1',
    ['The \'X\'-Sanction']
  ),
  new Comic(
    111,
    '1978-6',
    'UncannyXMenVol1',
    ['Mindgames!']
  ),
  new Comic(
    112,
    '1978-8',
    'UncannyXMenVol1',
    ['Magneto Triumphant!']
  ),
  new Comic(
    113,
    '1978-9',
    'UncannyXMenVol1',
    ['Showdown!']
  ),
  new Comic(
    114,
    '1978-10',
    'UncannyXMenVol1',
    ['Desolation']
  ),
  new Comic(
    115,
    '1978-11',
    'UncannyXMenVol1',
    ['Visions of Death!']
  ),
  new Comic(
    116,
    '1978-12',
    'UncannyXMenVol1',
    ['To Save the Savage Land']
  ),
  new Comic(
    117,
    '1979-1',
    'UncannyXMenVol1',
    ['Psi War!']
  ),
  new Comic(
    118,
    '1979-2',
    'UncannyXMenVol1',
    ['The Submergence of Japan']
  ),
  new Comic(
    119,
    '1979-3',
    'UncannyXMenVol1',
    ['\'Twas the Night Before Christmas...']
  ),
  new Comic(
    120,
    '1979-4',
    'UncannyXMenVol1',
    ['Wanted: Wolverine! Dead or Alive!']
  ),
  new Comic(
    121,
    '1979-5',
    'UncannyXMenVol1',
    ['Shoot-Out at the Stampede!']
  ),
  new Comic(
    122,
    '1979-6',
    'UncannyXMenVol1',
    ['Cry for the Children!']
  ),
  new Comic(
    123,
    '1979-7',
    'UncannyXMenVol1',
    ['Listen -- Stop Me if You\'ve Heard It -- But This One Will Kill You!']
  ),
  new Comic(
    124,
    '1979-8',
    'UncannyXMenVol1',
    ['He Only Laughs When I Hurt!']
  ),
  new Comic(
    'Annual #3',
    '1979-8',
    'UncannyXMenVol1',
    ['A Fire in the Sky!']
  ),
  new Comic(
    125,
    '1979-9',
    'UncannyXMenVol1',
    ['There\'s Something Awful on Muir Island!']
  ),
  new Comic(
    126,
    '1979-10',
    'UncannyXMenVol1',
    ['How Sharper Than a Serpent\'s Tooth...!']
  ),
  new Comic(
    127,
    '1979-11',
    'UncannyXMenVol1',
    ['The Quality of Hatred!']
  ),
  new Comic(
    128,
    '1979-12',
    'UncannyXMenVol1',
    ['The Action of the Tiger!']
  ),
  new Comic(
    129,
    '1980-1',
    'UncannyXMenVol1',
    ['God Spare the Child...']
  ),
  new Comic(
    130,
    '1980-2',
    'UncannyXMenVol1',
    ['Dazzler']
  ),
  new Comic(
    131,
    '1980-3',
    'UncannyXMenVol1',
    ['Run for Your Life!']
  ),
  new Comic(
    132,
    '1980-4',
    'UncannyXMenVol1',
    ['And Hellfire is Their Name!']
  ),
  new Comic(
    133,
    '1980-5',
    'UncannyXMenVol1',
    ['Wolverine: Alone!']
  ),
  new Comic(
    134,
    '1980-6',
    'UncannyXMenVol1',
    ['Too Late, the Heroes!']
  ),
  new Comic(
    135,
    '1980-7',
    'UncannyXMenVol1',
    ['Dark Phoenix']
  ),
  new Comic(
    136,
    '1980-8',
    'UncannyXMenVol1',
    ['Child of Light and Darkness!']
  ),
  new Comic(
    137,
    '1980-9',
    'UncannyXMenVol1',
    ['The Fate of the Phoenix!']
  ),
  new Comic(
    138,
    '1980-10',
    'UncannyXMenVol1',
    ['Elegy']
  ),
  new Comic(
    'Annual #4',
    '1980-11',
    'UncannyXMenVol1',
    ['Nightcrawler\'s Inferno']
  ),
  new Comic(
    139,
    '1980-11',
    'UncannyXMenVol1',
    ['...Something Wicked This Way Comes!']
  ),
  new Comic(
    140,
    '1980-12',
    'UncannyXMenVol1',
    ['Rage!']
  ),
  new Comic(
    141,
    '1981-1',
    'UncannyXMenVol1'
  ),
  new Comic(
    142,
    '1981-2',
    'UncannyXMenVol1'
  ),
  new Comic(
    143,
    '1981-3',
    'UncannyXMenVol1'
  ),
  new Comic(
    144,
    '1981-4',
    'UncannyXMenVol1'
  ),
  new Comic(
    145,
    '1981-5',
    'UncannyXMenVol1'
  ),
  new Comic(
    146,
    '1981-6',
    'UncannyXMenVol1'
  ),
  new Comic(
    147,
    '1981-7',
    'UncannyXMenVol1'
  ),
  new Comic(
    148,
    '1981-8',
    'UncannyXMenVol1'
  ),
  new Comic(
    149,
    '1981-9',
    'UncannyXMenVol1'
  ),
  new Comic(
    150,
    '1981-10',
    'UncannyXMenVol1'
  ),
  new Comic(
    'Annual #5',
    '1981-11',
    'UncannyXMenVol1'
  ),
  new Comic(
    151,
    '1981-11',
    'UncannyXMenVol1'
  ),
  new Comic(
    152,
    '1981-12',
    'UncannyXMenVol1'
  ),
  new Comic(
    153,
    '1982-1',
    'UncannyXMenVol1'
  ),
  new Comic(
    154,
    '1982-2',
    'UncannyXMenVol1'
  ),
  new Comic(
    155,
    '1982-3',
    'UncannyXMenVol1'
  ),
  new Comic(
    156,
    '1982-4-10',
    'UncannyXMenVol1'
  ),
  new Comic(
    157,
    '1982-5',
    'UncannyXMenVol1'
  ),
  new Comic(
    158,
    '1982-6',
    'UncannyXMenVol1'
  ),
  new Comic(
    159,
    '1982-7',
    'UncannyXMenVol1'
  ),
  new Comic(
    160,
    '1982-8',
    'UncannyXMenVol1'
  ),
  new Comic(
    161,
    '1982-9',
    'UncannyXMenVol1'
  ),
  new Comic(
    162,
    '1982-10',
    'UncannyXMenVol1'
  ),
  new Comic(
    163,
    '1982-11',
    'UncannyXMenVol1'
  ),
  new Comic(
    'Annual #6',
    '1982-11',
    'UncannyXMenVol1'
  ),
  new Comic(
    164,
    '1982-12',
    'UncannyXMenVol1'
  ),
  new Comic(
    165,
    '1983-1',
    'UncannyXMenVol1'
  ),
  new Comic(
    166,
    '1983-2',
    'UncannyXMenVol1'
  ),
  new Comic(
    167,
    '1983-3',
    'UncannyXMenVol1'
  ),
  new Comic(
    168,
    '1983-4',
    'UncannyXMenVol1'
  ),
  new Comic(
    169,
    '1983-5',
    'UncannyXMenVol1'
  ),
  new Comic(
    170,
    '1983-6',
    'UncannyXMenVol1'
  ),
  new Comic(
    171,
    '1983-7',
    'UncannyXMenVol1'
  ),
  new Comic(
    172,
    '1983-8',
    'UncannyXMenVol1'
  ),
  new Comic(
    173,
    '1983-9',
    'UncannyXMenVol1'
  ),
  new Comic(
    174,
    '1983-10',
    'UncannyXMenVol1'
  ),
  new Comic(
    175,
    '1983-11',
    'UncannyXMenVol1'
  ),
  new Comic(
    176,
    '1983-12',
    'UncannyXMenVol1'
  ),
  new Comic(
    'Annual #7',
    '1983-12',
    'UncannyXMenVol1'
  ),
  new Comic(
    177,
    '1984-1',
    'UncannyXMenVol1'
  ),
  new Comic(
    178,
    '1984-2',
    'UncannyXMenVol1'
  ),
  new Comic(
    179,
    '1984-3',
    'UncannyXMenVol1'
  ),
  new Comic(
    180,
    '1984-4',
    'UncannyXMenVol1'
  ),
  new Comic(
    181,
    '1984-5',
    'UncannyXMenVol1'
  ),
  new Comic(
    182,
    '1984-6',
    'UncannyXMenVol1'
  ),
  new Comic(
    183,
    '1984-7',
    'UncannyXMenVol1'
  ),
  new Comic(
    184,
    '1984-8',
    'UncannyXMenVol1'
  ),
  new Comic(
    185,
    '1984-9',
    'UncannyXMenVol1'
  ),
  new Comic(
    'Annual #8',
    '1984-9',
    'UncannyXMenVol1'
  ),
  new Comic(
    186,
    '1984-10',
    'UncannyXMenVol1'
  ),
  new Comic(
    187,
    '1984-11',
    'UncannyXMenVol1'
  ),
  new Comic(
    188,
    '1984-12',
    'UncannyXMenVol1'
  ),
  new Comic(
    189,
    '1985-1',
    'UncannyXMenVol1'
  ),
  new Comic(
    190,
    '1985-2',
    'UncannyXMenVol1'
  ),
  new Comic(
    191,
    '1985-3',
    'UncannyXMenVol1'
  ),
  new Comic(
    192,
    '1985-4',
    'UncannyXMenVol1'
  ),
  new Comic(
    193,
    '1985-5',
    'UncannyXMenVol1'
  ),
  new Comic(
    194,
    '1985-6',
    'UncannyXMenVol1'
  ),
  new Comic(
    195,
    '1985-7',
    'UncannyXMenVol1'
  ),
  new Comic(
    196,
    '1985-8',
    'UncannyXMenVol1'
  ),
  new Comic(
    197,
    '1985-9',
    'UncannyXMenVol1'
  ),
  new Comic(
    198,
    '1985-10',
    'UncannyXMenVol1'
  ),
  new Comic(
    492,
    '2008-1',
    'UncannyXMenVol1',
    ['Messiah Complex: Chapter Two']
  ),
  new Comic(
    493,
    '2008-2',
    'UncannyXMenVol1',
    ['Messiah Complex: Chapter Six']
  ),
  new Comic(
    494,
    '2008-3',
    'UncannyXMenVol1',
    ['Messiah Complex: Chapter Ten']
  ),
  new Comic(
    495,
    '2008-4',
    'UncannyXMenVol1',
    ['X-Men: Divided (Part 1)']
  ),
  new Comic(
    496,
    '2008-5',
    'UncannyXMenVol1',
    ['X-Men: Divided (Part 2)']
  ),
  new Comic(
    497,
    '2008-6',
    'UncannyXMenVol1',
    ['X-Men: Divided (Part 3)']
  ),
  new Comic(
    500,
    '2008-9',
    'UncannyXMenVol1',
    ['SFX (1 of 3)']
  ),
  new Comic(
    501,
    '2008-10',
    'UncannyXMenVol1',
    ['SFX (2 of 3): All Tomorrow\'s Parties']
  ),
  new Comic(
    502,
    '2008-11',
    'UncannyXMenVol1',
    ['SFX (3 of 3) - Beginning to See the Light']
  ),
  new Comic(
    503,
    '2008-12',
    'UncannyXMenVol1',
    ['Beginning To See The Light']
  ),
  new Comic(
    1,
    '2008-5',
    'XMenFreeComicBookDayVol2008',
    ['X-Men: Pixies & Demons']
  ),
  new Comic(
    1,
    '2008-11',
    'XMenManifestDestinyVol1',
    ['Untitled']
  ),
  new Comic(
    2,
    '2008-12',
    'XMenManifestDestinyVol1',
    ['Kill or Cure (Part 2)','Good With the Bad','Flaw']
  ),
  new Comic(
    3,
    '2009-1',
    'XMenManifestDestinyVol1',
    ['Kill or Cure (Part 3)','Abomination','Uncheerable']
  ),
  new Comic(
    4,
    '2009-2',
    'XMenManifestDestinyVol1',
    ['Kill or Cure (Part 4)','Mercury','Work It Out']
  ),
  new Comic(
    5,
    '2009-3',
    'XMenManifestDestinyVol1',
    ['Kill or Cure (Part 5)','Nick\'s','Dazzler: Solo']
  ),
  new Comic(
    540,
    '2011-9',
    'UncannyXMenVol1',
    ['Uncanny X-Men Vol 1 #540']
  ),
  new Comic(
    541,
    '2011-9',
    'UncannyXMenVol1',
    ['Uncanny X-Men Vol 1 #541']
  ),
  new Comic(
    542,
    '2011-10',
    'UncannyXMenVol1',
    ['Uncanny X-Men Vol 1 #542']
  ),
  new Comic(
    543,
    '2011-11',
    'UncannyXMenVol1',
    ['Uncanny X-Men Vol 1 #543']
  ),
  new Comic(
    544,
    '2011-12',
    'UncannyXMenVol1',
    ['Uncanny']
  ),
  new Comic(
    534.1,
    '2011-6',
    'UncannyXMenVol1',
    ['Uncanny X-Men Vol 1 #534.1']
  ),
  new Comic(
    535,
    '2011-6',
    'UncannyXMenVol1',
    ['Breaking Point (Part One)']
  ),
  new Comic(
    536,
    '2011-6',
    'UncannyXMenVol1',
    ['Breaking Point: Part Two']
  ),
  new Comic(
    537,
    '2011-7',
    'UncannyXMenVol1',
    ['Breaking Point (Part 3)']
  ),
  new Comic(
    538,
    '2011-8',
    'UncannyXMenVol1',
    ['Breaking Point (Conclusion)']
  ),
  new Comic(
    539,
    '2011-8',
    'UncannyXMenVol1',
    ['Losing Hope']
  ),
  new Comic(
    530,
    '2011-1',
    'UncannyXMenVol1',
    ['Quarantine: Part 1']
  ),
  new Comic(
    531,
    '2011-2',
    'UncannyXMenVol1',
    ['Quarantine (Part Two)']
  ),
  new Comic(
    532,
    '2011-3',
    'UncannyXMenVol1',
    ['Quarantine (Part Three)']
  ),
  new Comic(
    533,
    '2011-4',
    'UncannyXMenVol1',
    ['Quarantine (Part Four)']
  ),
  new Comic(
    534,
    '2011-5',
    'UncannyXMenVol1',
    ['Quarantine (Part Five)']
  ),
  new Comic(
    526,
    '2010-9',
    'UncannyXMenVol1',
    ['The Five Lights (Part 1): Freak Like Me', 'Rebuilding']
  ),
  new Comic(
    527,
    '2010-10',
    'UncannyXMenVol1',
    ['The Five Lights (Part 2) - Velocidad']
  ),
  new Comic(
    528,
    '2010-11',
    'UncannyXMenVol1',
    ['The Five Lights (Part 3)']
  ),
  new Comic(
    529,
    '2010-12',
    'UncannyXMenVol1',
    ['The Five Lights (Part Four)']
  ),
  new Comic(
    1,
    '1982-9',
    'WolverineVol1'
  ),
  new Comic(
    2,
    '1982-10',
    'WolverineVol1'
  ),
  new Comic(
    3,
    '1982-11',
    'WolverineVol1'
  ),
  new Comic(
    4,
    '1982-12',
    'WolverineVol1'
  ),
  new Comic(
    1,
    '1985-12',
    'XMenandAlphaFlightVol1'
  ),
  new Comic(
    2,
    '1986-1',
    'XMenandAlphaFlightVol1'
  ),
  new Comic(
    1,
    '2011-2',
    'HeroicAgeXMenVol1',
    ['Heroic Age: X-Men Vol 1 #1']
  ),
  new Comic(
    1,
    '2010-4',
    'SecondComingPrepareVol1',
    ['Where Were You?']
  ),
  new Comic(
    2,
    '2010-9',
    'XMenSecondComingVol1',
    ['Second Coming Chapter XIV']
  ),
  new Comic(
    1,
    '2010-5',
    'XMenSecondComingVol1',
    ['Second Coming, Chapter One']
  ),
  new Comic(
    525,
    '2010-8',
    'UncannyXMenVol1',
    ['Second Coming (Chapter Ten)']
  ),
  new Comic(
    524,
    '2010-7',
    'UncannyXMenVol1',
    ['Second Coming (Chapter Six)']
  ),
  new Comic(
    523,
    '2010-6',
    'UncannyXMenVol1',
    ['Second Coming (Chapter Two)']
  ),
  new Comic(
    14,
    '2010-8',
    'NewMutantsVol3',
    ['Second Coming (Chapter Eleven)']
  ),
  new Comic(
    13,
    '2010-7',
    'NewMutantsVol3',
    ['Second Coming (Chapter Seven)']
  ),
  new Comic(
    12,
    '2010-6',
    'NewMutantsVol3',
    ['Second Coming (Chapter Three)']
  ),
  new Comic(
    237,
    '2010-8',
    'XMenLegacyVol1',
    ['Second Coming (Chapter Twelve)']
  ),
  new Comic(
    236,
    '2010-7',
    'XMenLegacyVol1',
    ['Second Coming (Chapter Eight)']
  ),
  new Comic(
    235,
    '2010-6',
    'XMenLegacyVol1',
    ['Second Coming (Chapter Four)']
  ),
  new Comic(
    26,
    '2010-6',
    'XForceVol3',
    ['Second Coming (Chapter Five)']
  ),
  new Comic(
    27,
    '2010-7',
    'XForceVol3',
    ['Second Coming (Chapter Nine)']
  ),
  new Comic(
    28,
    '2010-9',
    'XForceVol3',
    ['Second Coming, Chapter 13']
  )
);

series.push(
  new Series('Avengers', [1]),
  new Series('Cable', [2]),
  new Series('Defenders', [1]),
  new Series('Giant-Size Fantastic Four', [1]),
  new Series('Heroic Age X-Men', [1]),
  new Series('Iron Fist', [1]),
  new Series('Magik (Limited Series)', [1]),
  new Series('Marvel Graphic Novel', [1]),
  new Series('Marvel Team-Up', [1]),
  new Series('New Mutants', [3]),
  new Series('Nightcrawler', [1]),
  new Series('Second Coming Prepare', [1]),
  new Series('Uncanny X-Men', [1]),
  new Series('Wolverine', [1]),
  new Series('X-Force', [3]),
  new Series('X-Men and Alpha Flight', [1]),
  new Series('X-Men Free Comic Book Day', [2008]),
  new Series('X-Men Legacy', [1]),
  new Series('X-Men Manifest Destiny', [1]),
  new Series('X-Men Second Coming', [1])
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
    'X-Men Epic Collection Vol. 12: The Gift',
    2016,
    1,
    [
      'UncannyXMenVol1189',
      'UncannyXMenVol1190',
      'UncannyXMenVol1191',
      'UncannyXMenVol1192',
      'UncannyXMenVol1Annual8',
      'XMenandAlphaFlightVol11',
      'XMenandAlphaFlightVol12',
      'UncannyXMenVol1193',
      'UncannyXMenVol1194',
      'UncannyXMenVol1195',
      'UncannyXMenVol1196',
      'UncannyXMenVol1197',
      'UncannyXMenVol1198',
      'NightcrawlerVol11',
      'NightcrawlerVol12',
      'NightcrawlerVol13',
      'NightcrawlerVol14'
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
