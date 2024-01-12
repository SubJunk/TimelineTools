import { each } from 'lodash-es';

const series        = [];
const seriesVolumes = [];

/**
 * The prototype for comic series.
 * A series always contains at least one SeriesVolume.
 *
 * @param title   the title of the series
 * @param volumes an object that maps volumes to start years
 *                e.g. { 1: 1978, 3: 2010 }
 * @param creators a comma-delimited list of series creators
 *                 used to narrow down Marvel API matches
 * @see SeriesVolume
 */
function Series(title: string, volumes: { [key: number]: { startYear: number, creators?: string } }) {
  this.id = title.replace(/[\W+]/g, '');
  this.title = title;

  each(volumes, (volumeDetails, volume) => {
    seriesVolumes.push(
      new SeriesVolume(
        this.id,
        volume,
        volumeDetails.startYear,
        title,
        volumeDetails.creators,
      )
    );
  });
}

/**
 * The prototype for comic series volume.
 * A SeriesVolume always matches a Series.
 *
 * @param startYear needed for Marvel API
 * @param creators a comma-delimited list of series creators
 *                 used to narrow down Marvel API matches
 * @see Series
 */
function SeriesVolume(seriesId: string, volume: string, startYear: number, title: string, creators?: string) {
  this.id = seriesId + 'Vol' + volume;
  this.creators = creators;
  this.seriesId = seriesId;
  this.volume = volume;
  this.startYear = startYear;
  this.title = title;
  this.titleWithVolume = title;
  if (Number(volume) > 1) {
    this.titleWithVolume += ' Vol. ' + volume;
  }
  this.searchTitleWithVolume = title + ' Vol. ' + volume;
}

series.push(
  new Series('Adventures of Cyclops & Phoenix', {1: { startYear: 1994 }}),
  new Series('Age of Apocalypse', {1: { startYear: 2011 }}),
  new Series('Age of Apocalypse: The Chosen', {1: { startYear: 1995 }}),
  new Series('Age of X: Alpha', {1: { startYear: 2010 }}),
  new Series('Age of X: Universe', {1: { startYear: 2011 }}),
  new Series('Angel: Revelations', {1: { startYear: 2008 }}),
  new Series('Archangel', {1: { startYear: 1996 }}),
  new Series('Askani\'son', {1: { startYear: 1996 }}),
  new Series('All-New X-Men', {1: { startYear: 2012 }}),
  new Series('Amazing Adventures', {2: { startYear: 1970 }}),
  new Series('Amazing X-Men', {1: { startYear: 1995 }}),
  new Series('Astonishing Spider-Man/Wolverine', {1: { startYear: 2010 }}),
  new Series('Astonishing Tales', {1: { startYear: 1970 }}),
  new Series('Astonishing X-Men', {1: { startYear: 1995 }, 2: { startYear: 1999 }, 3: { startYear: 2004 }}),
  new Series('Astonishing X-Men Annual', {1: { startYear: 2012 }}),
  new Series('Astonishing X-Men: Ghost Boxes', {1: { startYear: 2008 }}),
  new Series('Astonishing X-Men: Xenogenesis', {1: { startYear: 2010 }}),
  new Series('Avengers', {1: { startYear: 1963 }}),
  new Series('Avengers: The Initiative', {1: { startYear: 2007 }}),
  new Series('Avengers: X-Sanction', {1: { startYear: 2011 }}),
  new Series('Avengers Annual', {1: { startYear: 1967 }}),
  new Series('Avengers Vs. X-Men', {1: { startYear: 2012 }}),
  new Series('Avengers Vs. X-Men: Consequences', {1: { startYear: 2012 }}),
  new Series('Avengers Vs. X-Men: Versus', {1: { startYear: 2011, creators: '4306' }}),
  new Series('Avengers West Coast', {2: { startYear: 1985 }}),
  new Series('Bishop', {1: { startYear: 1994 }}),
  new Series('Baby\'s First Deadpool Book', {1: { startYear: 1998 }}),
  new Series('Bishop: The Last X-Man', {1: { startYear: 1999 }}),
  new Series('Black Panther', {3: { startYear: 1998 }, 4: { startYear: 2005 }}),
  new Series('Blink', {1: { startYear: 2001 }}),
  new Series('Cable', {1: { startYear: 1993 }, 2: { startYear: 2008 }}),
  new Series('Cable & Deadpool', {1: { startYear: 2004 }}),
  new Series('Cable: Blood & Metal', {1: { startYear: 1992 }}),
  new Series('Cable/Machine Man Annual', {1: { startYear: 1998 }}),
  new Series('Cable Annual', {1: { startYear: 1999 }}),
  new Series('Captain America', {1: { startYear: 1968 }}),
  new Series('Cerebro\'s Guide to the X-Men', {1: { startYear: 1998 }}),
  new Series('Civil War', {1: { startYear: 2006 }}),
  new Series('Civil War: X-Men', {1: { startYear: 2006 }}),
  new Series('Daken: Dark Wolverine', {1: { startYear: 2010 }}),
  new Series('Daredevil', {1: { startYear: 1964 }}),
  new Series('Dark Avengers', {1: { startYear: 2009 }}),
  new Series('Dark Avengers/Uncanny X-Men: Exodus', {1: { startYear: 2009 }}),
  new Series('Dark Avengers/Uncanny X-Men: Utopia', {1: { startYear: 2009 }}),
  new Series('Dark Reign: The Cabal', {1: { startYear: 2009 }}),
  new Series('Dark Reign: The List - X-Men', {1: { startYear: 2009 }}),
  new Series('Dark X-Men', {1: { startYear: 2009 }}),
  new Series('Dark X-Men: The Beginning', {1: { startYear: 2009 }}),
  new Series('Dark X-Men: The Confession', {1: { startYear: 2009 }}),
  new Series('Deadpool', {1: { startYear: 1994 }, 2: { startYear: 1997 }, 3: { startYear: 2008 }}),
  new Series('Deadpool & Cable', {1: { startYear: 2010 }}),
  new Series('Deadpool Team-Up', {1: { startYear: 1998 }}),
  new Series('Defenders', {1: { startYear: 1972 }}),
  new Series('Daredevil/Deadpool Annual', {1: { startYear: 1997 }}),
  new Series('Decimation: House of M - The Day After', {1: { startYear: 2005 }}),
  new Series('Deadpool: The Circle Chase', {1: { startYear: 1993 }}),
  new Series('Deadpool and Death Annual', {1: { startYear: 1998 }}),
  new Series('Deadpool vs. X-Force', {1: { startYear: 2014 }}),
  new Series('District X', {1: { startYear: 2004 }}),
  new Series('Domino', {1: { startYear: 1997 }, 2: { startYear: 2003 }}),
  new Series('Emma Frost', {1: { startYear: 2003 }}),
  new Series('Eternals Annual', {2: { startYear: 2008 }}),
  new Series('Eternals: Manifest Destiny', {1: { startYear: 2008 }}),
  new Series('Excalibur', {1: { startYear: 1988 }, 3: { startYear: 2004 }}),
  new Series('Exiled', {1: { startYear: 2011 }}),
  new Series('Factor X', {1: { startYear: 1995 }}),
  new Series('Fantastic Four', {1: { startYear: 1961 }}),
  new Series('Fantastic Four vs. the X-Men', {1: { startYear: 1987 }}),
  new Series('Fear Itself', {1: { startYear: 2011 }}),
  new Series('Fear Itself: The Deep', {1: { startYear: 2011 }}),
  new Series('Fear Itself: Uncanny X-Force', {1: { startYear: 2011 }}),
  new Series('Fear Itself: Wolverine', {1: { startYear: 2011 }}),
  new Series('Fear Itself: The Book of the Skull', {1: { startYear: 2011 }}),
  new Series('Further Adventures of Cyclops & Phoenix', {1: { startYear: 1996 }}),
  new Series('Gambit', {1: { startYear: 1993 }, 2: { startYear: 1997 }, 3: { startYear: 1999 }, 4: { startYear: 2004 }}),
  new Series('Gambit and the X-Ternals', {1: { startYear: 1995 }}),
  new Series('Generation Hope', {1: { startYear: 2010 }}),
  new Series('Generation M', {1: { startYear: 2005 }}),
  new Series('Generation Next', {1: { startYear: 1995 }}),
  new Series('Generation X', {1: { startYear: 1994 }}),
  new Series('Generation X Annual', {1: { startYear: 1995 }}),
  new Series('Ghost Rider', {3: { startYear: 1990 }, 5: { startYear: 2006 }}),
  new Series('Giant-Size Astonishing X-Men', {1: { startYear: 2008 }}),
  new Series('Giant-Size Fantastic Four', {1: { startYear: 1974 }}),
  new Series('Giant-Size Wolverine', {1: { startYear: 2006 }}),
  new Series('Giant Size X-Men', {1: { startYear: 1975 }}),
  new Series('Giant-Size X-Men: First Class', {1: { startYear: 2008 }}),
  new Series('Green Goblin', {1: { startYear: 1995 }}),
  new Series('House of M', {1: { startYear: 2005 }}),
  new Series('Hulk', {1: { startYear: 1999 }}),
  new Series('Icons: Cyclops', {1: { startYear: 2001 }}),
  new Series('Incredible Hulk', {1: { startYear: 1962 }}),
  new Series('Iron Fist', {1: { startYear: 1975 }}),
  new Series('Iron Man', {1: { startYear: 1968 }}),
  new Series('Iron Man: Director of S.H.I.E.L.D.', {1: { startYear: 2007 }}),
  new Series('Irredeemable Ant-Man', {1: { startYear: 2006 }}),
  new Series('Journey into Mystery', {3: { startYear: 2011 }}),
  new Series('Ka-Zar', {1: { startYear: 1970 }}),
  new Series('King-Size Cable Spectacular', {1: { startYear: 2008 }}),
  new Series('Kitty Pryde and Wolverine', {1: { startYear: 1984 }}),
  new Series('Logan', {1: { startYear: 2008 }}),
  new Series('Machine Man/Bastion Annual', {1: { startYear: 1998 }}),
  new Series('Madrox', {1: { startYear: 2004 }}),
  new Series('Magik', {1: { startYear: 1983 }}),
  new Series('Magneto: Dark Seduction', {1: { startYear: 2000 }}),
  new Series('Magneto Rex', {1: { startYear: 1999 }}),
  new Series('Marvel Graphic Novel', {1: { startYear: 1982 }}),
  new Series('Marvel Spotlight', {3: { startYear: 2005 }}),
  new Series('Marvel Tales', {2: { startYear: 1964 }}),
  new Series('Marvel Team-Up', {1: { startYear: 1972 }}),
  new Series('Mystic Arcana', {1: { startYear: 2007 }}),
  new Series('Mystique', {1: { startYear: 2003 }}),
  new Series('Nation X', {1: { startYear: 2009 }}),
  new Series('Nation X: X-Factor', {1: { startYear: 2010 }}),
  new Series('New Excalibur', {1: { startYear: 2005 }}),
  new Series('New Exiles', {1: { startYear: 2008 }}),
  new Series('New Mutants', {1: { startYear: 1983 }, 2: { startYear: 2003 }, 3: { startYear: 2009 }}),
  new Series('New Mutants Annual', {1: { startYear: 1984 }}),
  new Series('New Warriors', {1: { startYear: 1990 }}),
  new Series('New X-Men', {1: { startYear: 2001 }, 2: { startYear: 2004 }}),
  new Series('New X-Men: Academy X Yearbook Special', {1: { startYear: 2005 }}),
  new Series('New X-Men: Hellions', {1: { startYear: 2005 }}),
  new Series('New X-Men Annual', {1: { startYear: 2001 }}),
  new Series('Nightcrawler', {1: { startYear: 1985 }, 3: { startYear: 2004 }}),
  new Series('Nomad', {2: { startYear: 1992 }}),
  new Series('NYX', {1: { startYear: 2003 }}),
  new Series('NYX: No Way Home', {1: { startYear: 2008 }}),
  new Series('Onslaught: Epilogue', {1: { startYear: 1997 }}),
  new Series('Onslaught: Marvel Universe', {1: { startYear: 1996 }}),
  new Series('Onslaught: X-Men', {1: { startYear: 1996 }}),
  new Series('Origin', {1: { startYear: 2001 }}),
  new Series('Ororo: Before the Storm', {1: { startYear: 2005 }}),
  new Series('Power Pack', {1: { startYear: 1984 }}),
  new Series('Psylocke', {1: { startYear: 2009 }}),
  new Series('Punisher', {3: { startYear: 1995 }}),
  new Series('Rogue', {1: { startYear: 1995 }, 3: { startYear: 2004 }}),
  new Series('Sabretooth', {1: { startYear: 1993 }, 2: { startYear: 2004 }}),
  new Series('Sabretooth Special', {1: { startYear: 1995 }}),
  new Series('Secret Invasion: War of Kings', {1: { startYear: 2008 }}),
  new Series('Secret Invasion: X-Men', {1: { startYear: 2008 }}),
  new Series('Secrets of the House of M', {1: { startYear: 2005 }}),
  new Series('Second Coming: Prepare', {1: { startYear: 2010 }}),
  new Series('Secret Wars', {1: { startYear: 1984 }}),
  new Series('She-Hulk', {2: { startYear: 2005 }}),
  new Series('Soldier X', {1: { startYear: 2002 }}),
  new Series('Spider-Man', {1: { startYear: 1990 }}),
  new Series('Stryfe\'s Strike File', {1: { startYear: 1993 }}),
  new Series('S.W.O.R.D.', {1: { startYear: 2009 }}),
  new Series('The Amazing Spider-Man', {1: { startYear: 1963 }}),
  new Series('Thunderbolts', {2: { startYear: 2006 }}),
  new Series('Tales from the Age of Apocalypse: Sinster Bloodlines', {1: { startYear: 1997 }}),
  new Series('Tales from the Age of Apocalypse: By the Light', {1: { startYear: 1996 }}),
  new Series('Thor', {1: { startYear: 1966 }}),
  new Series('Uncanny X-Force', {1: { startYear: 2010 }}),
  new Series('Uncanny X-Men', {1: { startYear: 1963 }, 2: { startYear: 2011 }, 3: { startYear: 2013 }}),
  new Series('Uncanny X-Men/Fantastic Four Annual', {1: { startYear: 1998 }}),
  new Series('Uncanny X-Men Annual', {1: { startYear: 1996 }, 2: { startYear: 1999 }, 3: { startYear: 2001 }, 4: { startYear: 2006 }}),
  new Series('Uncanny X-Men: The Heroic Age', {1: { startYear: 2010 }}),
  new Series('War of Kings Saga', {1: { startYear: 2008 }}),
  new Series('Weapon X', {1: { startYear: 1995 }}),
  new Series('Weapon X: First Class', {1: { startYear: 2008 }}),
  new Series('What If?', {2: { startYear: 1989 }}),
  new Series('Wolverine', {1: { startYear: 1982 }, 2: { startYear: 1988 }, 3: { startYear: 2003 }, 4: { startYear: 2010 }}),
  new Series('Wolverine: Knight of Terra', {1: { startYear: 1995 }}),
  new Series('Wolverine: Manifest Destiny', {1: { startYear: 2008 }}),
  new Series('Wolverine: Origins Annual', {1: { startYear: 2007 }}),
  new Series('Wolverine: Road to Hell', {1: { startYear: 2010 }}),
  new Series('Wolverine & Gambit: Victims', {1: { startYear: 1995 }}),
  new Series('Wolverine & the X-Men', {1: { startYear: 2011, creators: '12208' }}),
  new Series('Wolverine & the X-Men Annual', {1: { startYear: 2013 }}),
  new Series('Wolverine & the X-Men: Alpha & Omega', {1: { startYear: 2011 }}),
  new Series('Wolverine Origins', {1: { startYear: 2006 }}),
  new Series('Wolverine Annual', {1: { startYear: 1995 }, 2: { startYear: 1999 }}),
  new Series('Wolverine/Cable: Guts and Glory', {1: { startYear: 1999 }}),
  new Series('World War Hulk: X-Men', {1: { startYear: 2007 }}),
  new Series('X-23', {1: { startYear: 2005 }, 3: { startYear: 2010 }}),
  new Series('X-23: Target X', {1: { startYear: 2006 }}),
  new Series('X-51', {1: { startYear: 2000 }}),
  new Series('X-Calibre', {1: { startYear: 1995 }}),
  new Series('X-Factor', {1: { startYear: 1986 }, 2: { startYear: 2002 }, 3: { startYear: 2005 }}),
  new Series('X-Factor: Layla Miller', {1: { startYear: 2008 }}),
  new Series('X-Factor: The Quick and the Dead', {1: { startYear: 2008 }}),
  new Series('X-Factor Annual', {1: { startYear: 1986 }}),
  new Series('X-Force', {1: { startYear: 1991 }, 2: { startYear: 2004 }, 3: { startYear: 2008 }}),
  new Series('X-Force/Cable Annual', {1: { startYear: 1995 }}),
  new Series('X-Force/Cable: Messiah War Prologue', {1: { startYear: 2009 }}),
  new Series('X-Force: Sex and Violence', {1: { startYear: 2010 }}),
  new Series('X-Force Annual', {1: { startYear: 1992 }, 2: { startYear: 2009 }}),
  new Series('X-Infernus', {1: { startYear: 2008 }}),
  new Series('X-Infernus Saga', {1: { startYear: 2008 }}),
  new Series('X-Man', {1: { startYear: 1995 }}),
  new Series('X-Man Annual', {1: { startYear: 1996 }}),
  new Series('X-Men', {2: { startYear: 1991 }, 3: { startYear: 2004 }, 4: { startYear: 2010 }, 5: { startYear: 2013 }}),
  new Series('X-Men/Alpha Flight', {1: { startYear: 1985 }}),
  new Series('X-Men/ClanDestine', {1: { startYear: 1996 }}),
  new Series('X-Men/Dr. Doom Annual', {1: { startYear: 1998 }}),
  new Series('X-Men/Spider-Man', {1: { startYear: 2008 }}),
  new Series('X-Men Annual', {1: { startYear: 1970 }, 2: { startYear: 1991 }, 3: { startYear: 1995 }, 4: { startYear: 1999 }, 5: { startYear: 2000 }, 6: { startYear: 2007 }}),
  new Series('X-Men Chronicles', {1: { startYear: 1995 }}),
  new Series('X-Men Declassified', {1: { startYear: 2000 }}),
  new Series('X-Men Free Comic Book Day', {2008: { startYear: 2008 }}),
  new Series('X-Men Forever', {1: { startYear: 2001 }}),
  new Series('X-Men Giant-Size', {1: { startYear: 2011 }}),
  new Series('X-Men Legacy', {1: { startYear: 2008 }}),
  new Series('X-Men Unlimited', {1: { startYear: 1993 }, 2: { startYear: 2004 }}),
  new Series('X-Men vs. Brood', {1: { startYear: 1996 }}),
  new Series('X-Men vs. the Avengers', {1: { startYear: 1987 }}),
  new Series('X-Men: Age of Apocalypse', {1: { startYear: 2005 }}),
  new Series('X-Men: Age of Apocalypse One Shot', {1: { startYear: 2005 }}),
  new Series('X-Men: Alpha', {1: { startYear: 1995 }}),
  new Series('X-Men: Battle of the Atom', {1: { startYear: 2013 }}),
  new Series('X-Men: Black Sun', {1: { startYear: 2000 }}),
  new Series('X-Men: Books of Askani', {1: { startYear: 1995 }}),
  new Series('X-Men: Colossus Bloodline', {1: { startYear: 2005 }}),
  new Series('X-Men: Deadly Genesis', {1: { startYear: 2005 }}),
  new Series('X-Men: Die by the Sword', {1: { startYear: 2007 }}),
  new Series('X-Men: Divided We Stand', {1: { startYear: 2008 }}),
  new Series('X-Men: Endangered Species', {1: { startYear: 2007 }}),
  new Series('X-Men: Emperor Vulcan', {1: { startYear: 2007 }}),
  new Series('X-Men: First Class', {1: { startYear: 2006 }, 2: { startYear: 2007 }}),
  new Series('X-Men: First Class Finals', {1: { startYear: 2009 }}),
  new Series('X-Men: First Class Special', {1: { startYear: 2007 }}),
  new Series('X-Men: Future History - The Messiah War Sourcebook', {1: { startYear: 2009 }}),
  new Series('X-Men: Hellbound', {1: { startYear: 2010 }}),
  new Series('X-Men: Hope', {1: { startYear: 2010 }}),
  new Series('X-Men: Kingbreaker', {1: { startYear: 2008 }}),
  new Series('X-Men: Kitty Pryde- Shadow & Flame', {1: { startYear: 2005 }}),
  new Series('X-Men: Legacy Annual', {1: { startYear: 2009 }}),
  new Series('X-Men: Magneto Testament', {1: { startYear: 2008 }}),
  new Series('X-Men: Manifest Destiny', {1: { startYear: 2008 }}),
  new Series('X-Men: Manifest Destiny - Nightcrawler', {1: { startYear: 2009 }}),
  new Series('X-Men: Messiah Complex', {1: { startYear: 2007 }}),
  new Series('X-Men: Messiah Complex - Mutant Files', {1: { startYear: 2007 }}),
  new Series('X-Men: Odd Men Out', {1: { startYear: 2008 }}),
  new Series('X-Men: Omega', {1: { startYear: 1995 }}),
  new Series('X-Men: Original Sin', {1: { startYear: 2008 }}),
  new Series('X-Men: Phoenix', {1: { startYear: 1999 }}),
  new Series('X-Men: Phoenix - Endsong', {1: { startYear: 2005 }}),
  new Series('X-Men: Phoenix - Warsong', {1: { startYear: 2006 }}),
  new Series('X-Men: Prelude to Schism', {1: { startYear: 2011 }}),
  new Series('X-Men: Prime', {1: { startYear: 1995 }}),
  new Series('X-Men: Regenesis', {1: { startYear: 2011 }}),
  new Series('X-Men: Road to Onslaught', {1: { startYear: 1996 }}),
  new Series('X-Men: Schism', {1: { startYear: 2011 }}),
  new Series('X-Men: Search for Cyclops', {1: { startYear: 2000 }}),
  new Series('X-Men: Second Coming', {1: { startYear: 2010 }}),
  new Series('X-Men: Second Coming - Revelations: Blind Science', {1: { startYear: 2010 }}),
  new Series('X-Men: Sword of the Braddocks', {1: { startYear: 2009 }}),
  new Series('X-Men: The 198', {1: { startYear: 2006 }}),
  new Series('X-Men: The Hidden Years', {1: { startYear: 1999 }}),
  new Series('X-Men: The Lives and Times of Lucas Bishop', {1: { startYear: 2009 }}),
  new Series('X-MEN: THE MAGNETO WAR 1', {1: { startYear: 1999 }}),
  new Series('X-Men: The Unlikely Saga of Xavier, Magneto and Stan', {1: { startYear: 2006 }}),
  new Series('X-Men: The Wedding Album', {1: { startYear: 1994 }}),
  new Series('X-Men: Worlds Apart', {1: { startYear: 2008 }}),
  new Series('X-Treme X-Men', {1: { startYear: 2001 }, 2: { startYear: 2012 }}),
  new Series('X-Treme X-Men Annual', {1: { startYear: 2002 }}),
  new Series('X-Treme X-Men: Mekanix', {1: { startYear: 2001 }}),
  new Series('X-Treme X-Men: The Savage Land', {1: { startYear: 2001 }}),
  new Series('X-Treme X-Men: X-Pose', {1: { startYear: 2003 }}),
  new Series('X-Universe', {1: { startYear: 1995 }}),
  new Series('X-Terminators', {1: { startYear: 1988 }}),
  new Series('X-Termination', {1: { startYear: 2013 }}),
  new Series('X Necrosha', {1: { startYear: 2009 }}),
  new Series('X Necrosha: The Gathering', {1: { startYear: 2009 }}),
  new Series('Xavier Institute Alumni Yearbook', {1: { startYear: 1996 }}),
  new Series('Young X-Men', {1:{ startYear:  2008 }})
);

export class SeriesVolumes {
  public static getSeries() {
    return series;
  }

  public static getSeriesVolumes() {
    return seriesVolumes;
  }
}
