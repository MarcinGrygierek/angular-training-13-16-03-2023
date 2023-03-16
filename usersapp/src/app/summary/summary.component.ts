import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {

  constructor(private usersService: UsersService) { }

  users: string[] = [];
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.usersService.users$.subscribe(users => {
      this.users = users;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
