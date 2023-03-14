import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';

  usersCount: number = 5;

  value: number = 100;
  isVisible: boolean = true;
  items: number[] = [];

  addToItems() {
    // this.items.push(Math.round(Math.random() * 1000))
    this.items = [...this.items, Math.round(Math.random() * 1000)];
  }

  increaseUsersCount = () => {
    console.log('Click', this);
    this.usersCount++;
  }
}
