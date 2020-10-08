import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vcStyle'
})
export class VcStylePipe implements PipeTransform {

  transform(cv: number): string {
    let color = '#666';
    if (cv !== null) {
      if (cv < 0.75) {
        color = '#ffffb2';
      } else if (cv >= 0.75 && cv < 0.875) {
        color = '#fecc5c';
      } else if (cv >= 0.875 && cv < 1) {
        color = '#fd8d3c';
      } else if (cv > 1) {
        color = '#e31a1c';
      }
    }
    return color;
  }

}
