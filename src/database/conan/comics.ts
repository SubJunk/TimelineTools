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

addComicsInSeriesVolume('TheHowardCollectorVol1', [[7, '1965-6', ['Cimmeria']]]);
addComicsInSeriesVolume('TheHyborianAgeVol1', [[1, '1938-1', ['The Hyborian Age']]]);
addComicsInSeriesVolume('WeirdTalesVol20', [
  [6, '1932-12', ['The Phoenix on the Sword']],
]);
addComicsInSeriesVolume('WeirdTalesVol21', [
  [1, '1933-1', ['The Scarlet Citadel']],
  [3, '1933-3', ['The Tower of the Elephant']],
  [6, '1933-6', ['Black Colossus']],
]);
addComicsInSeriesVolume('WeirdTalesVol22', [
  [3, '1933-9', ['The Slithering Shadow']],
  [4, '1933-10', ['The Pool of the Black One']],
]);
addComicsInSeriesVolume('WeirdTalesVol23', [
  [1, '1934-1', ['Rogues in the House']],
  [4, '1934-4', ['Iron Shadows in the Moon']],
  [5, '1934-5', ['Queen of the Black Coast']],
]);
addComicsInSeriesVolume('WeirdTalesVol24', [
  [2, '1934-8', ['The Devil in Iron']],
  [3, '1934-9', ['The People of the Black Circle (Part 1)']],
  [4, '1934-10', ['The People of the Black Circle (Part 2)']],
  [5, '1934-11', ['The People of the Black Circle (Part 3)']],
  [6, '1934-12', ['A Witch Shall Be Born']],
]);
addComicsInSeriesVolume('WeirdTalesVol25', [
  [3, '1935-3', ['Jewels of Gwahlur']],
  [5, '1935-5', ['Beyond the Black River (Part 1)']],
  [6, '1935-6', ['Beyond the Black River (Part 2)']],
]);
addComicsInSeriesVolume('WeirdTalesVol26', [
  [5, '1935-11', ['Shadows in Zamboula']],
  [6, '1935-12', ['The Hour of the Dragon (Part 1)']],
]);
addComicsInSeriesVolume('WeirdTalesVol27', [
  [1, '1936-1', ['The Hour of the Dragon (Part 2)']],
  [2, '1936-2', ['The Hour of the Dragon (Part 3)']],
  [3, '1936-3', ['The Hour of the Dragon (Part 4)']],
  [4, '1936-4', ['The Hour of the Dragon (Part 5)']],
]);
addComicsInSeriesVolume('WeirdTalesVol28', [
  [1, '1936-7', ['Red Nails (Part 1)']],
  [2, '1936-9', ['Red Nails (Part 2)']],
  [3, '1936-10', ['Red Nails (Part 3)']],
]);

export class ComicsConan {
  public static getComics() {
    return comics;
  }
}
