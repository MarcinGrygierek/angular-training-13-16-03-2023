import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-smart-div',
  templateUrl: './not-smart-div.component.html',
  styleUrls: ['./not-smart-div.component.scss']
})
export class NotSmartDivComponent implements OnInit {

  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

}
