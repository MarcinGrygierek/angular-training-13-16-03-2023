import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FooComponent } from './foo/foo.component';
import { SmartDivComponent } from './smart-div/smart-div.component';
import { NotSmartDivComponent } from './not-smart-div/not-smart-div.component';
import { SimpleComponent } from './simple/simple.component';
import { ViewContentChildrenTestComponent } from './view-content-children-test/view-content-children-test.component';
import { RandomNumberComponent } from './random-number/random-number.component';
import { NumbersInfoComponent } from './numbers-info/numbers-info.component';
import { TemplateFormTestComponent } from './template-form-test/template-form-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormTestComponent } from './reactive-form-test/reactive-form-test.component';
import { AppRoutingModule } from './app-routing.module';
import { CurrencyPipe } from './currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FooComponent,
    SmartDivComponent,
    NotSmartDivComponent,
    SimpleComponent,
    ViewContentChildrenTestComponent,
    RandomNumberComponent,
    NumbersInfoComponent,
    TemplateFormTestComponent,
    ReactiveFormTestComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
