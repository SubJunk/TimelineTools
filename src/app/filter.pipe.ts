import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    // split the search string into an array of individual words
    const searchTextAsWords = searchText.match(/\S+/g) || [];

    return items.filter( item => {
      // results should contain all search words
      return searchTextAsWords.every(wordItem => {
        return item.displayText.toLowerCase().includes(wordItem);
      });
    });
  }
}
