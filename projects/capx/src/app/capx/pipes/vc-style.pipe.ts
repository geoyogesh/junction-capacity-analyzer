import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vcStyle'
})
export class VcStylePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
