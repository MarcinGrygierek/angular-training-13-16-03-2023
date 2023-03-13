import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';

  usersCount: number = 5;

  increaseUsersCount = () => {
    console.log('Click', this);
    this.usersCount++;
  }
}
