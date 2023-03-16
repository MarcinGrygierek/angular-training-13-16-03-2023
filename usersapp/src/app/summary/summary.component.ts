import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  users: string[] = [];

  ngOnInit(): void {
    this.usersService.users$.subscribe(users => {
      this.users = users;
    })
  }

}
