import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooService {

  constructor() { }

  getValue() {
    return Math.round(Math.random() * 10000)
  }
}
