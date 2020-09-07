import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clvStyle'
})
export class ClvStylePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
