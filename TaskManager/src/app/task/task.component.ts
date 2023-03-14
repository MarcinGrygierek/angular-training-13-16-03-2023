import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChangeTaskStatusEvent, SingleTask, TaskStatus } from '../types/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input()
  task!: SingleTask;

  @Output()
  onStatusChange = new EventEmitter<ChangeTaskStatusEvent>();

  @Output()
  onDelete = new EventEmitter<string>();

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
  }

  changeToInProgress() {
    this.onStatusChange.emit({
      taskId: this.task.id,
      newStatus: TaskStatus.InProgress
    })
  }

  changeToDone() {
    this.onStatusChange.emit({
      taskId: this.task.id,
      newStatus: TaskStatus.Done
    })
  }

  delete() {
    this.onDelete.emit(this.task.id);
  }
}
