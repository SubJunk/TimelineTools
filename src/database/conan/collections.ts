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
    'The Complete Chronicles of Conan',
    '2006-1',
    [
      'TheHyborianAgeVol11',
      'TheHowardCollectorVol17',
      'WeirdTalesVol206',
      'WeirdTalesVol211',
      'WeirdTalesVol213',
      'WeirdTalesVol216',
      'WeirdTalesVol223',
      'WeirdTalesVol224',
      'WeirdTalesVol231',
      'WeirdTalesVol234',
      'WeirdTalesVol235',
      'WeirdTalesVol242',
      'WeirdTalesVol243',
      'WeirdTalesVol244',
      'WeirdTalesVol245',
      'WeirdTalesVol246',
      'WeirdTalesVol253',
      'WeirdTalesVol255',
      'WeirdTalesVol256',
      'WeirdTalesVol265',
      'WeirdTalesVol266',
      'WeirdTalesVol271',
      'WeirdTalesVol272',
      'WeirdTalesVol273',
      'WeirdTalesVol274',
      'WeirdTalesVol281',
      'WeirdTalesVol282',
      'WeirdTalesVol283',
    ]
  ),
);

export class CollectionsConan {
  public static getCollections() {
    return collections;
  }
}
