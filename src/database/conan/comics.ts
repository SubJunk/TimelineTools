import _ from 'lodash';
import moment from 'moment';

/**
 * The prototype for individual comics.
 */
function Comic(issue: string, datePublished: string, seriesVolumeId: string, titles: string) {
  if (!_.isEmpty(titles) && !_.isArray(titles)) {
    throw new Error('Expected comic title to be an array, got' + titles);
  }

  let year: string;
  let month: string;
  let day: string;

  const datePublishedSplit = datePublished.split(/[^0-9]/);
  year = datePublishedSplit[0];
  month = datePublishedSplit[1];
  day = datePublishedSplit[2] || '01';

  // Pad the month and day
  if (month.length === 1) {
    month = '0' + month;
  }
  if (day.length === 1) {
    day = '0' + day;
  }

  // Create a Date object from the datePublished string
  this.classes = {};
  this.date = moment(year + '-' + month + '-' + day);
  this.id = seriesVolumeId + issue;
  this.issue = issue;
  this.yearPublished = this.date.year();
  this.monthPublished = this.date.month() + 1;
  this.seriesVolumeId = seriesVolumeId;
  this.titles = titles ? titles : [];
}

const comics = [];

/**
 * Add multiple comics in a seriesVolume.
 */
function addComicsInSeriesVolume(seriesVolumeId, comicsInSeriesVolume) {
  _.each(comicsInSeriesVolume, (comic) => {
    comics.push(
      new Comic(
        comic[0],
        comic[1],
        seriesVolumeId,
        comic[2]
      )
    );
  });
}

addComicsInSeriesVolume('WeirdTalesVol20', [
  [6, '1932-12', ['The Phoenix on the Sword']],
]);

addComicsInSeriesVolume('WeirdTalesVol21', [
  [1, '1933-1', ['The Scarlet Citadel']],
  [3, '1933-3', ['The Tower of the Elephant']],
  [6, '1933-6', ['Black Colossus']],
]);

export class ComicsConan {
  public static getComics() {
    return comics;
  }
}
