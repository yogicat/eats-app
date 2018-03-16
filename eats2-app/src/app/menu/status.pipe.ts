import { Pipe, PipeTransform } from '@angular/core';
import { Imenu } from '../menu.interface';
@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(items: Imenu[], status: string): Imenu[] {
    return items.filter( item => {
      switch (status) {
        case 'juice':
          return item.category === 'juice';
        case 'mylk':
          return item.category === 'mylk';
        case 'smoothie':
          return item.category === 'smoothie';
        default:
          return items;
      }
    });
  }
}
