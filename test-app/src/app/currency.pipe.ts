import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currency: string): string {

    const thousands = Math.floor(value / 1000);
    const rest = value % 1000;

    return thousands ? `${thousands},${rest.toFixed(2)} ${currency}` : `${rest.toFixed(2)} ${currency}`;
  }

}
