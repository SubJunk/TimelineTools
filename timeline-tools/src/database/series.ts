import _ from 'lodash';

const series        = [];
const seriesVolumes = [];

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
  this.id = title.replace(/[\W+]/g, '');
  this.title = title;

  _.each(volumes, (startYear, volume) => {
    seriesVolumes.push(
      new SeriesVolume(
        this.id,
        volume,
        startYear,
        title
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
function SeriesVolume(seriesId, volume, startYear, title) {
  this.id = seriesId + 'Vol' + volume;
  this.seriesId = seriesId;
  this.volume = volume;
  this.startYear = startYear;
  this.title = title;
  this.titleWithVolume = title;
  if (volume > 1) {
    this.titleWithVolume += ' Vol. ' + volume;
  }
}

series.push(
  new Series('Adventures of Cyclops & Phoenix', {1: 1994}),
  new Series('Age of Apocalypse: The Chosen', {1: 1995}),
  new Series('Angel: Revelations', {1: 2008}),
  new Series('Archangel', {1: 1996}),
  new Series('Askani\'son', {1: 1996}),
  new Series('Amazing Adventures', {2: 1970}),
  new Series('Amazing X-Men', {1: 1995}),
  new Series('Astonishing X-Men', {1: 1995, 2: 1999, 3: 2004}),
  new Series('Astonishing X-Men: Ghost Boxes', {1: 2008}),
  new Series('Avengers', {1: 1963}),
  new Series('Avengers: The Initiative', {1: 2007}),
  new Series('Avengers West Coast', {2: 1985}),
  new Series('Avengers Annual', {1: 1967}),
  new Series('Bishop', {1: 1994}),
  new Series('Baby\'s First Deadpool Book', {1: 1998}),
  new Series('Bishop: The Last X-Man', {1: 1999}),
  new Series('Black Panther', {3: 1998, 4: 2005}),
  new Series('Blink', {1: 2001}),
  new Series('Cable', {1: 1993, 2: 2008}),
  new Series('Cable & Deadpool', {1: 2004}),
  new Series('Cable: Blood & Metal', {1: 1992}),
  new Series('Cable/Machine Man Annual', {1: 1998}),
  new Series('Cable Annual', {1: 1999}),
  new Series('Captain America', {1: 1968}),
  new Series('Cerebro\'s Guide to the X-Men', {1: 1998}),
  new Series('Civil War', {1: 2006}),
  new Series('Civil War: X-Men', {1: 2006}),
  new Series('Daredevil', {1: 1964}),
  new Series('Deadpool', {1: 1994, 2: 1997}),
  new Series('Deadpool Team-Up', {1: 1998}),
  new Series('Defenders', {1: 1972}),
  new Series('Daredevil/Deadpool Annual', {1: 1997}),
  new Series('Decimation: House of M - The Day After', {1: 2005}),
  new Series('Deadpool: The Circle Chase', {1: 1993}),
  new Series('Deadpool and Death Annual', {1: 1998}),
  new Series('Deadpool vs. X-Force', {1: 2014}),
  new Series('District X', {1: 2004}),
  new Series('Domino', {1: 1997, 2: 2003}),
  new Series('Emma Frost', {1: 2003}),
  new Series('Excalibur', {1: 1988, 3: 2004}),
  new Series('Factor X', {1: 1995}),
  new Series('Fantastic Four', {1: 1961}),
  new Series('Fantastic Four vs. the X-Men', {1: 1987}),
  new Series('Further Adventures of Cyclops & Phoenix', {1: 1996}),
  new Series('Gambit', {1: 1993, 2: 1997, 4: 2004}),
  new Series('Gambit and the X-Ternals', {1: 1995}),
  new Series('Generation M', {1: 2005}),
  new Series('Generation Next', {1: 1995}),
  new Series('Generation X', {1: 1994}),
  new Series('Generation X Annual', {1: 1995}),
  new Series('Ghost Rider', {3: 1990, 5: 2006}),
  new Series('Giant-Size Astonishing X-Men', {1: 2008}),
  new Series('Giant-Size Fantastic Four', {1: 1974}),
  new Series('Giant-Size Wolverine', {1: 2006}),
  new Series('Giant Size X-Men', {1: 1975}),
  new Series('Giant-Size X-Men: First Class', {1: 2008}),
  new Series('Green Goblin', {1: 1995}),
  new Series('House of M', {1: 2005}),
  new Series('Icons: Cyclops', {1: 2001}),
  new Series('Incredible Hulk', {1: 1962, 2: 1999}),
  new Series('Iron Fist', {1: 1975}),
  new Series('Iron Man', {1: 1968}),
  new Series('Iron Man: Director of S.H.I.E.L.D.', {1: 2007}),
  new Series('Irredeemable Ant-Man', {1: 2006}),
  new Series('Ka-Zar', {1: 1970}),
  new Series('Logan', {1: 2008}),
  new Series('Machine Man/Bastion Annual', {1: 1998}),
  new Series('Madrox', {1: 2004}),
  new Series('Magik', {1: 1983}),
  new Series('Magneto Rex', {1: 1999}),
  new Series('Marvel Graphic Novel', {1: 1982}),
  new Series('Marvel Tales', {2: 1964}),
  new Series('Marvel Team-Up', {1: 1972}),
  new Series('Mystic Arcana', {1: 2007}),
  new Series('Mystique', {1: 2003}),
  new Series('New Excalibur', {1: 2005}),
  new Series('New Mutants', {1: 1983, 2: 2003, 3: 2009}),
  new Series('New Mutants Annual', {1: 1984}),
  new Series('New Warriors', {1: 1990}),
  new Series('New X-Men', {1: 2001, 2: 2004}),
  new Series('New X-Men: Academy X Yearbook Special', {1: 2005}),
  new Series('New X-Men: Hellions', {1: 2005}),
  new Series('New X-Men Annual', {1: 2001}),
  new Series('Nightcrawler', {1: 1985, 3: 2004}),
  new Series('Nomad', {2: 1992}),
  new Series('NYX', {1: 2003}),
  new Series('Onslaught: Epilogue', {1: 1997}),
  new Series('Onslaught: Marvel Universe', {1: 1996}),
  new Series('Onslaught: X-Men', {1: 1996}),
  new Series('Origin', {1: 2001}),
  new Series('Ororo: Before the Storm', {1: 2005}),
  new Series('Power Pack', {1: 1984}),
  new Series('Punisher', {3: 1995}),
  new Series('Rogue', {1: 1995, 3: 2004}),
  new Series('Secret Invasion: War of Kings', {1: 2008}),
  new Series('Secrets of the House of M', {1: 2005}),
  new Series('Second Coming: Prepare', {1: 2010}),
  new Series('Sabretooth', {1: 1993, 2: 2004}),
  new Series('Sabretooth Special', {1: 1995}),
  new Series('Secret Wars', {1: 1984}),
  new Series('Soldier X', {1: 2002}),
  new Series('Spider-Man', {1: 1990}),
  new Series('Stryfe\'s Strike File', {1: 1993}),
  new Series('The Amazing Spider-Man', {1: 1963}),
  new Series('Tales from the Age of Apocalypse: Sinster Bloodlines', {1: 1997}),
  new Series('Tales from the Age of Apocalypse: By the Light', {1: 1996}),
  new Series('Thor', {1: 1966}),
  new Series('Uncanny X-Men', {1: 1963}),
  new Series('Uncanny X-Men/Fantastic Four Annual', {1: 1998}),
  new Series('Uncanny X-Men Annual', {1: 1996, 2: 1999, 3: 2001, 4: 2006}),
  new Series('War of Kings Saga', {1: 2008}),
  new Series('Weapon X', {1: 1995}),
  new Series('What If?', {2: 1989}),
  new Series('Wolverine', {1: 1982, 2: 1988, 3: 2003}),
  new Series('Wolverine: Knight of Terra', {1: 1995}),
  new Series('Wolverine: Manifest Destiny', {1: 2008}),
  new Series('Wolverine: Origins Annual', {1: 2007}),
  new Series('Wolverine Origins', {1: 2006}),
  new Series('Wolverine & Gambit: Victims', {1: 1995}),
  new Series('Wolverine Annual', {1: 1995, 2: 1999}),
  new Series('Wolverine/Cable: Guts and Glory', {1: 1999}),
  new Series('World War Hulk: X-Men', {1: 2007}),
  new Series('X-23', {1: 2005}),
  new Series('X-23: Target X', {1: 2006}),
  new Series('X-51', {1: 2000}),
  new Series('X-Calibre', {1: 1995}),
  new Series('X-Factor', {1: 1986, 2: 2002, 3: 2005}),
  new Series('X-Factor: Layla Miller', {1: 2008}),
  new Series('X-Factor: The Quick and the Dead', {1: 2008}),
  new Series('X-Factor Annual', {1: 1986}),
  new Series('X-Force', {1: 1991, 2: 2004, 3: 2008}),
  new Series('X-Force/Cable Annual', {1: 1995}),
  new Series('X-Force: Sex and Violence', {1: 2010}),
  new Series('X-Force Annual', {1: 1992}),
  new Series('X-Man', {1: 1995}),
  new Series('X-Man Annual', {1: 1996}),
  new Series('X-Men', {2: 1991, 3: 2004}),
  new Series('X-Men/Alpha Flight', {1: 1985}),
  new Series('X-Men/ClanDestine', {1: 1996}),
  new Series('X-Men/Dr. Doom Annual', {1: 1998}),
  new Series('X-Men/Spider-Man', {1: 2008}),
  new Series('X-Men Annual', {1: 1970, 2: 1991, 3: 1995, 4: 1999, 5: 2000, 6: 2007}),
  new Series('X-Men Chronicles', {1: 1995}),
  new Series('X-Men Free Comic Book Day', {2008: 2008}),
  new Series('X-Men Legacy', {1: 2008}),
  new Series('X-Men Unlimited', {1: 1993, 2: 2004}),
  new Series('X-Men vs. Brood', {1: 1996}),
  new Series('X-Men vs. the Avengers', {1: 1987}),
  new Series('X-Men: Age of Apocalypse', {1: 2005}),
  new Series('X-Men: Age of Apocalypse One Shot', {1: 2005}),
  new Series('X-Men: Alpha', {1: 1995}),
  new Series('X-Men: Black Sun', {1: 2000}),
  new Series('X-Men: Books of Askani', {1: 1995}),
  new Series('X-Men: Colossus Bloodline', {1: 2005}),
  new Series('X-Men: Deadly Genesis', {1: 2005}),
  new Series('X-Men: Die by the Sword', {1: 2007}),
  new Series('X-Men: Divided We Stand', {1: 2008}),
  new Series('X-Men: Endangered Species', {1: 2007}),
  new Series('X-Men: Emperor Vulcan', {1: 2007}),
  new Series('X-Men: First Class', {1: 2006, 2: 2007}),
  new Series('X-Men: First Class Finals', {1: 2009}),
  new Series('X-Men: First Class Special', {1: 2007}),
  new Series('X-Men: Kingbreaker', {1: 2008}),
  new Series('X-Men: Kitty Pryde- Shadow & Flame', {1: 2005}),
  new Series('X-Men: Magneto Testament', {1: 2008}),
  new Series('X-Men: Manifest Destiny', {1: 2008}),
  new Series('X-Men: Manifest Destiny - Nightcrawler', {1: 2009}),
  new Series('X-Men: Messiah Complex', {1: 2007}),
  new Series('X-Men: Messiah Complex - Mutant Files', {1: 2007}),
  new Series('X-Men: Odd Men Out', {1: 2008}),
  new Series('X-Men: Omega', {1: 1995}),
  new Series('X-Men: Original Sin', {1: 2008}),
  new Series('X-Men: Phoenix', {1: 1999}),
  new Series('X-Men: Phoenix - Endsong', {1: 2005}),
  new Series('X-Men: Phoenix - Warsong', {1: 2006}),
  new Series('X-Men: Prime', {1: 1995}),
  new Series('X-Men: Road to Onslaught', {1: 1996}),
  new Series('X-Men: Search for Cyclops', {1: 2000}),
  new Series('X-Men: Second Coming', {1: 2010}),
  new Series('X-Men: The 198', {1: 2006}),
  new Series('X-Men: The Hidden Years', {1: 1999}),
  new Series('X-MEN: THE MAGNETO WAR 1', {1: 1999}),
  new Series('X-Men: The Unlikely Saga of Xavier, Magneto and Stan', {1: 2006}),
  new Series('X-Men: The Wedding Album', {1: 1994}),
  new Series('X-Treme X-Men', {1: 2001}),
  new Series('X-Treme X-Men Annual', {1: 2002}),
  new Series('X-Treme X-Men: Mekanix', {1: 2001}),
  new Series('X-Treme X-Men: The Savage Land', {1: 2001}),
  new Series('X-Treme X-Men: X-Pose', {1: 2003}),
  new Series('X-Universe', {1: 1995}),
  new Series('X-Terminators', {1: 1988}),
  new Series('Xavier Institute Alumni Yearbook', {1: 1996}),
  new Series('Young X-Men', {1: 2008})
);

class SeriesVolumes {
  public static getSeries() {
    return series;
  }

  public static getSeriesVolumes() {
    return seriesVolumes;
  }
}

export { SeriesVolumes };
