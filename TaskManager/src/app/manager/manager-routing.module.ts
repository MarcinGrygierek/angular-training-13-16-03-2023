import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { TasksSummaryComponent } from './tasks-summary/tasks-summary.component';

const routes: Routes = [
  { path: '', component: ManagerComponent },
  { path: 'summary', component: TasksSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
