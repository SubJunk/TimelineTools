import _ from 'lodash';

const series        = [];
const seriesVolumes = [];

/**
 * The prototype for comic series.
 * A series always contains at least one SeriesVolume.
 *
 * @param title   the title of the series
 * @param volumes an object that maps volumes to start years
 *                         e.g. { 1: 1978, 3: 2010 }
 * @see SeriesVolume
 */
function Series(title: string, volumes: object) {
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
 * @param startYear needed for Marvel API
 * @see Series
 */
function SeriesVolume(seriesId: string, volume: string, startYear: number, title) {
  this.id = seriesId + 'Vol' + volume;
  this.seriesId = seriesId;
  this.volume = volume;
  this.startYear = startYear;
  this.title = title;
  this.titleWithVolume = title;
  if (Number(volume) > 1) {
    this.titleWithVolume += ' Vol. ' + volume;
  }
}

series.push(new Series('Weird Tales', {20: 1923}));

export class SeriesVolumesConan {
  public static getSeries() {
    return series;
  }

  public static getSeriesVolumes() {
    return seriesVolumes;
  }
}
