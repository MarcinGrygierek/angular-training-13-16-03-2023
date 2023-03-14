import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeTaskStatusEvent, SingleTask } from '../types/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent {
  @Input()
  tasks: SingleTask[] = [];

  @Output()
  onStatusChange = new EventEmitter<ChangeTaskStatusEvent>();

  @Output()
  onDelete = new EventEmitter<string>();

  trackById(index: number, task: SingleTask) {
    return task.id;
  }


  changeStatus(event: ChangeTaskStatusEvent) {
    this.onStatusChange.emit(event);
  }

  deleteTask(taskId: string) {
    this.onDelete.emit(taskId);
  }
}
