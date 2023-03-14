import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smart-div',
  templateUrl: './smart-div.component.html',
  styleUrls: ['./smart-div.component.scss']
})
export class SmartDivComponent  {
  @Input()
  title: string = '';
}