import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks.service';
import { TaskStatus } from '../types/task';

@Component({
  selector: 'app-tasks-summary',
  templateUrl: './tasks-summary.component.html',
  styleUrls: ['./tasks-summary.component.scss']
})
export class TasksSummaryComponent {

  tasksTotal = 0;
  tasksNew = 0;
  tasksInProgress = 0;
  tasksDone = 0;
  tasksDeleted = 0;

  constructor(private tasksService: TasksService) { 
    this.tasksService.tasks$.subscribe(newTasks => {
      this.tasksTotal = newTasks.length;
      this.tasksNew = newTasks.filter(task => !task.hidden && task.status === TaskStatus.New).length;
      this.tasksInProgress = newTasks.filter(task => !task.hidden && task.status === TaskStatus.InProgress).length;
      this.tasksDone = newTasks.filter(task => !task.hidden &&  task.status === TaskStatus.Done).length;
      this.tasksDeleted = newTasks.filter(task => task.hidden === true).length;
    })
  }

}
