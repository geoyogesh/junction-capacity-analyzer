import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vcStyle'
})
export class VcStylePipe implements PipeTransform {

  transform(cv: number): string {
    let color = '#666';
    if (cv !== null) {
      if (cv < 0.75) {
        color = '#00FF00';
      } else if (cv >= 0.75 && cv < 0.875) {
        color = '#FFFF00';
      } else if (cv >= 0.875 && cv < 1) {
        color = '#FFA500';
      } else if (cv > 1) {
        color = '#FF0000';
      }
    }
    return color;
  }

}
