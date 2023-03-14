import { Component, ViewChildren, ContentChildren, QueryList, AfterViewInit, AfterContentInit } from '@angular/core';
import { SimpleComponent } from '../simple/simple.component';

@Component({
  selector: 'app-view-content-children-test',
  templateUrl: './view-content-children-test.component.html',
  styleUrls: ['./view-content-children-test.component.scss']
})
export class ViewContentChildrenTestComponent implements AfterViewInit, AfterContentInit  {

  @ViewChildren(SimpleComponent)
  viewSimple!: QueryList<SimpleComponent>

  @ContentChildren(SimpleComponent)
  contentSimple!: QueryList<SimpleComponent>

  handleClick() {
    console.log(this.viewSimple);
    console.log(this.contentSimple);
  }

  ngAfterViewInit(): void {
    console.log(this.viewSimple);
  }

  ngAfterContentInit(): void {
    console.log(this.contentSimple);
  }

}
