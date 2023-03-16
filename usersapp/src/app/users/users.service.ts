import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class UsersService {
    randomValue = Math.round(Math.random() * 1000)

    constructor() {
      console.log('UsersService init');
     }

    getUsers(): string[] {
      return ['Marcin', 'Marian', 'Karolina', 'Anna']
    }

    getRandomValue() {
      return this.randomValue;
    }
}
