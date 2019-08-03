const collections = [];

/**
 * The prototype for collections.
 *
 * @param title         the title of the collection
 * @param datePublished a string to be converted to a date object
 * @param comicIds      the comics in the collection, in order
 */
function Collection(title: string, datePublished: string, comicIds: string[]) {
  this.allCollectionComicIds = [];
  this.id = title.replace(/[\W+]/g, '');
  this.title = title;

  // Create a Date object from the datePublished string
  this.date = new Date(datePublished);

  this.yearPublished = this.date.getFullYear();
  this.monthPublished = this.date.getMonth() + 1;
  this.comicIds = comicIds;
}

// These should be in reading order
collections.push(
  new Collection(
    'The Complete Chronicles of Conan: Centenary Edition',
    '1932-12',
    [
      'WeirdTalesVol206',
      'WeirdTalesVol211',
      'WeirdTalesVol213',
      'WeirdTalesVol216',
    ]
  ),
);

export class CollectionsConan {
  public static getCollections() {
    return collections;
  }
}
