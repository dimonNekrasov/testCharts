import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'device'
})
export class DevicePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (/windows phone/i.test(value)) {
      return 'Windows Phone';
    }

    if (/android/i.test(value)) {
      return 'Android';
    }

    if (/iPad|iPhone|iPod/.test(value) && !window.MSStream) {
      return 'iOS';
    }

    return 'desktop';
  }

}
