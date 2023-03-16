import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent {

  constructor(private usersService: UsersService) { }

  users = this.usersService.getUsers();
  secret = this.usersService.getRandomValue();
}
