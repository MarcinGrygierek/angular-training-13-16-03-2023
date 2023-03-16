import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksSummaryComponent } from './tasks-summary/tasks-summary.component';


@NgModule({
  declarations: [
    ManagerComponent,
    TaskComponent,
    TasksComponent,
    TasksListComponent,
    TaskFormComponent,
    TasksSummaryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
