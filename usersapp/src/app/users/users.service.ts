import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    randomValue = Math.round(Math.random() * 1000)
    private users = new BehaviorSubject<string[]>(['Jan', 'Tomasz']);
    public users$: Observable<string[]>;

    public test = new ReplaySubject<string[]>(2, 2500)

    private version = new Subject<Date>();
    public version$: Observable<Date>;

    constructor() {
      this.users$ = this.users.asObservable();
      this.version$ = this.version.asObservable();
      this.test.next(['Jan']);
      this.test.next(['Adam']);
      this.test.next(['Jan', 'Adam']);
      setTimeout(() => {
        this.test.next(['Adam', 'Łukasz'])
      }, 1500)
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
