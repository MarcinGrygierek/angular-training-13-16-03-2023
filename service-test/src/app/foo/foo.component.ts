import { Component, OnInit } from '@angular/core';
import { FooService } from '../foo.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  constructor(private fooService: FooService) { }

  data: number = 0;

  ngOnInit(): void {
    this.data = this.fooService.getValue();
  }

}
