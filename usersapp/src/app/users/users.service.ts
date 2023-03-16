import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    randomValue = Math.round(Math.random() * 1000)
    private users = new BehaviorSubject<string[]>([]);
    public users$: Observable<string[]>;

    constructor() {
      this.users$ = this.users.asObservable();
     }

    addUser(name: string) {
     const users = this.users.getValue();
     this.users.next([...users, name]);
    }

    fetchUsers(): void {
      this.users.next(['Marcin', 'Marian', 'Karolina', 'Anna']);
    }

    getRandomValue() {
      return this.randomValue;
    }
}
