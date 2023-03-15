import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { ChangeTaskStatusEvent, SingleTask, TaskStatus } from '../types/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TaskComponent implements OnInit, OnDestroy {

  @Input()
  task!: SingleTask;

  @Output()
  onStatusChange = new EventEmitter<ChangeTaskStatusEvent>();

  @Output()
  onDelete = new EventEmitter<string>();

  private interval!: NodeJS.Timer;
  public time: number = 0;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.time++;
    }, 1000);
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
      this.onStatusChange.emit({
        taskId: this.task.id,
        newStatus: TaskStatus.New
      })
      // this.task.status = TaskStatus.New;
  }

  changeToInProgress() {
    this.onStatusChange.emit({
      taskId: this.task.id,
      newStatus: TaskStatus.InProgress
    })
    // this.task.status = TaskStatus.InProgress;
  }

  changeToDone() {
    this.onStatusChange.emit({
      taskId: this.task.id,
      newStatus: TaskStatus.Done
    })
    // this.task.status = TaskStatus.Done;
  }


  delete() {
    this.onDelete.emit(this.task.id);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
