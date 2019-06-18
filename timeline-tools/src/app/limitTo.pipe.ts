import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {
  transform(items: any[], limit: number = 20): any[] {
    if (!items) {
      return [];
    }

    if (items.length > limit) {
      items.length = limit;
    }

    return items;
  }
}
