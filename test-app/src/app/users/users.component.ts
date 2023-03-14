import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface User {
  name: string;
  surname: string;
  id: number;
  hidden: boolean;
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input()
  title!: string;

  @Input()
  count!: number;

  @Input()
  onClick!: Function;

  @Output() onButtonClick = new EventEmitter();

  private _text: string = 'Lista użytkowników';

  users: User[] = [
    {
      id: 1,
      name: "Marian",
      surname: "Kowalski",
      hidden: true
    },
    {
      id:2 ,
      name: "Marianna",
      surname: "Kowalczyk",
      hidden: false
    }
  ]

  constructor() { }

  get text() {
    return this._text;
  }

  handleButtonClick() {
    this.onButtonClick.emit();
  }

  trackByUserId(index: number, user: User) {
    return user.id;
  }

  ngOnInit(): void {
  }

}
