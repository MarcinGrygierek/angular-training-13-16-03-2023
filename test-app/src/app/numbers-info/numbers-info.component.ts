import { Component, AfterViewChecked, ViewChildren, QueryList } from '@angular/core';
import { RandomNumberComponent } from '../random-number/random-number.component';

@Component({
  selector: 'app-numbers-info',
  templateUrl: './numbers-info.component.html',
  styleUrls: ['./numbers-info.component.scss']
})
export class NumbersInfoComponent implements AfterViewChecked {
  @ViewChildren(RandomNumberComponent)
  numbers!: QueryList<RandomNumberComponent>

  average: number = 0;

  constructor() { }

  ngAfterViewChecked(): void {
    this.calculateAverage();
    console.log('View checked')
  }

  calculateAverage() {
    const sum = this.numbers
      .map(componentNumber => componentNumber.value)
      .reduce((acc, curr) => acc + curr) 

    this.average = sum / this.numbers.length;
  }
}
