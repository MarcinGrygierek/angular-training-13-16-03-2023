import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    randomValue = Math.round(Math.random() * 1000)
    private users = new BehaviorSubject<string[]>([]);
    public users$: Observable<string[]>;

    private version = new Subject<Date>();
    public version$: Observable<Date>;

    constructor() {
      this.users$ = this.users.asObservable();
      this.version$ = this.version.asObservable();
     }

    addUser(name: string) {
     const users = this.users.getValue();
     this.users.next([...users, name]);
     this.version.next(new Date());
    }

    fetchUsers(): void {
      this.users.next(['Marcin', 'Marian', 'Karolina', 'Anna']);
      this.version.next(new Date());
    }

    getRandomValue() {
      return this.randomValue;
    }
}
