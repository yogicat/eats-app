import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleStatus'
})
export class TitleStatusPipe implements PipeTransform {

  transform(catList: string[], status: string) {

  }
}
