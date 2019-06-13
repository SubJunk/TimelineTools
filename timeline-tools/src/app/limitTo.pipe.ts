import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {
  transform(items: any[], limit: number): any[] {
    if (!items) {
      return [];
    }
    items.length = limit || 20;
    return items;
  }
}
