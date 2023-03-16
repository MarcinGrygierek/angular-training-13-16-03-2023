import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { interval, map, observable, Observable } from 'rxjs';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  users!: Observable<string[]>;
  secret: number = 0;
  random!: Observable<number>;

 ngOnInit(): void {
  this.secret = this.usersService.getRandomValue();
  this.users = this.usersService.users$;

  // this.random = new Observable(observer => {
  //   setInterval(() => {
  //     observer.next(Math.round(Math.random() * 1000))
  //   }, 1000)
  // })

  this.random = interval(1000).pipe(
    map(val => Math.round(Math.random() * 1000))
  );
 }
}
