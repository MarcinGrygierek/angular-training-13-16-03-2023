import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container/page-container.component';
import { TimePipe } from './time.pipe';

@NgModule({
  declarations: [
    PageContainerComponent,
    TimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageContainerComponent,
    TimePipe
  ]
})
export class SharedModule { }
