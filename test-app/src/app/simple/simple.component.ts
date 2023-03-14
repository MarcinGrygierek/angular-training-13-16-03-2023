import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent {
  @Input()
  text: string = '';

  secret: string = 'secret password'
}
