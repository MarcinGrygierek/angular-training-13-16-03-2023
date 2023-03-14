import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FooComponent } from './foo/foo.component';
import { SmartDivComponent } from './smart-div/smart-div.component';
import { NotSmartDivComponent } from './not-smart-div/not-smart-div.component';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FooComponent,
    SmartDivComponent,
    NotSmartDivComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
