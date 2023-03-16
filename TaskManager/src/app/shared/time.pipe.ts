import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number | null): string {
    const minutes = Math.floor((value || 0) / 60);
    const seconds = (value || 0) % 60;

    // const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    // const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    // return `${formattedMinutes}:${formattedSeconds}`;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

}
