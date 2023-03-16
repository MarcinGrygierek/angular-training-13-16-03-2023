import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { TasksService } from 'src/app/tasks.service';
import { SingleTask, TaskStatus } from '../types/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit {

  @Input()
  task!: SingleTask;

  constructor(private tasksService: TasksService) {}

  public time!: Observable<number>;

  ngOnInit() {
    this.time = interval(1000);
  }

  formatStatus(status: TaskStatus) {
    switch(status) {
      case TaskStatus.New: return 'Nowe';
      case TaskStatus.InProgress: return 'W trakcie';
      case TaskStatus.Done: return 'Zakończone';
    }
  }

  isNew() {
    return this.task.status === TaskStatus.New;
  }

  isInProgress() {
    return this.task.status === TaskStatus.InProgress;
  }

  isDone() {
    return this.task.status === TaskStatus.Done;
  }

  changeToNew() {
    this.tasksService.changeStatus(this.task.id, TaskStatus.New);
  }

  changeToInProgress() {
    this.tasksService.changeStatus(this.task.id, TaskStatus.InProgress);
  }

  changeToDone() {
    this.tasksService.changeStatus(this.task.id, TaskStatus.Done);
  }


  delete() {
    this.tasksService.deleteTask(this.task.id);
  }
}
