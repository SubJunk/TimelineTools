/**
 * The prototype for comic series.
 * A series always contains at least one SeriesVolume.
 *
 * @param {string} title   the title of the series
 * @param {object} volumes an object that maps volumes to start years
 *                         e.g. { 1: 1978, 3: 2010 }
 * @see SeriesVolume
 */
function Series(title, volumes) {
  var self = this;
  self.id = title.replace(/[\W+]/g, '');
  self.title = title;

  _.each(volumes, function(startYear, volume) {
    seriesVolumes.push(
      new SeriesVolume(
        self.id,
        volume,
        startYear
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
 * @param {number} startYear needed for Marvel API
 * @see Series
 */
function SeriesVolume(seriesId, volume, startYear) {
  this.id = seriesId + 'Vol' + volume;
  this.seriesId = seriesId;
  this.volume = volume;
  this.startYear = startYear;

  // Ugly hack to make the Uncanny series sit on the top row
  if (this.id === 'GiantSizeXMenVol1') {
    this.verticalPosition = 1;
  }
}

var series        = [];
var seriesVolumes = [];
series.push(
  new Series('Adventures of Cyclops & Phoenix', {1: 1994}),
  new Series('Askani\'son', {1: 1996}),
  new Series('Avengers', {1: 1963}),
  new Series('Avengers West Coast', {2: 1985}),
  new Series('Avengers Annual', {1: 1967}),
  new Series('Black Knight: Exodus', {1: 1996}),
  new Series('Cable', {1: 1993, 2: 2008}),
  new Series('Cable: Blood & Metal', {1: 1992}),
  new Series('Captain America', {1: 1968}),
  new Series('Daredevil', {1: 1964}),
  new Series('Deadpool', {1: 1994}),
  new Series('Deadpool: The Circle Chase', {1: 1993}),
  new Series('Deadpool vs. X-Force', {1: 2014}),
  new Series('Excalibur', {1: 1988}),
  new Series('Fantastic Four', {1: 1961}),
  new Series('Gambit', {1: 1993}),
  new Series('Ghost Rider', {3: 1990}),
  new Series('Giant Size X-Men', {1: 1975}),
  new Series('Incredible Hulk', {1: 1962}),
  new Series('Iron Fist', {1: 1975}),
  new Series('Magik', {1: 1983}),
  new Series('Marvel Graphic Novel', {1: 1982}),
  new Series('Marvel Team-Up', {1: 1972}),
  new Series('New Mutants', {1: 1983, 3: 2009}),
  new Series('New Mutants Annual', {1: 1984}),
  new Series('New Warriors', {1: 1990}),
  new Series('Nightcrawler', {1: 1985}),
  new Series('Nomad', {2: 1992}),
  new Series('Power Pack', {1: 1984}),
  new Series('Second Coming: Prepare', {1: 2010}),
  new Series('Secret Wars', {1: 1984}),
  new Series('Spider-Man', {1: 1990}),
  new Series('Stryfe\'s Strike File', {1: 1993}),
  new Series('Thor', {1: 1966}),
  new Series('Uncanny X-Men', {1: 1963}),
  new Series('What If?', {2: 1989}),
  new Series('Wolverine', {1: 1982, 2: 1988}),
  new Series('X-Factor', {1: 1986}),
  new Series('X-Factor Annual', {1: 1986}),
  new Series('X-Force', {1: 1991, 3: 2008}),
  new Series('X-Force Annual', {1: 1992}),
  new Series('X-Men', {2: 1991}),
  new Series('X-Men/Alpha Flight', {1: 1985}),
  new Series('X-Men Annual', {1: 1970, 2: 1991}),
  new Series('X-Men Free Comic Book Day', {2008: 2008}),
  new Series('X-Men Legacy', {1: 2008}),
  new Series('X-Men Unlimited', {1: 1993}),
  new Series('X-Men: Books of Askani', {1: 1995}),
  new Series('X-Men: Manifest Destiny', {1: 2008}),
  new Series('X-Men: Phoenix', {1: 1999}),
  new Series('X-Men: Second Coming', {1: 2010}),
  new Series('X-Men: The Wedding Album', {1: 1994}),
  new Series('X-Terminators', {1: 1988})
);
