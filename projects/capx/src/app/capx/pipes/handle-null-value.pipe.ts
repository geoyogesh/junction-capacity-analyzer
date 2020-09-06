import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'handleNullValue'
})
export class HandleNullValuePipe implements PipeTransform {

  transform(value: unknown): unknown {
    if (value !== null) {
      return value;
    }
    return ' - ';
  }

}
