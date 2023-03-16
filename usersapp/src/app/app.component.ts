import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private usersService: UsersService) {
   
  }

  version!: Observable<Date>;
  isVisible = true;

  ngOnInit(): void {
    this.usersService.fetchUsers();
    this.version = this.usersService.version$;
  }

  toggleSummary() {
    this.isVisible = !this.isVisible;
  }
}
