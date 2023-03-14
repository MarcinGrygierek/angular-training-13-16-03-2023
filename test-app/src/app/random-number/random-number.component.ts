import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.scss']
})
export class RandomNumberComponent implements OnInit, OnDestroy {
  value: number = 0;
  interval!: NodeJS.Timer;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.value = Math.round(Math.random() * 1000);
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
