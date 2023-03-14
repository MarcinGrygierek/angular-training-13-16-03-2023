import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FooComponent } from './foo/foo.component';
import { SmartDivComponent } from './smart-div/smart-div.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FooComponent,
    SmartDivComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
