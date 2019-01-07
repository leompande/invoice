import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'including'
})
export class IncludingPipe implements PipeTransform {

  transform(value: any[], property: string, val: any): any {
    if (!property) {
      return value;
    }
    if (!value) {
      return value;
    }
    return value.filter((v) => v[property] === val);
  }

}
