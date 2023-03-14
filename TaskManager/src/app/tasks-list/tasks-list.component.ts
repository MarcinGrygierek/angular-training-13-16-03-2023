import { AfterViewChecked, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { ChangeTaskStatusEvent, SingleTask } from '../types/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TasksListComponent implements AfterViewChecked {
  @ViewChildren(TaskComponent)
  taskComponents!: QueryList<TaskComponent>

  @Input()
  tasks: SingleTask[] = [];

  @Output()
  onStatusChange = new EventEmitter<ChangeTaskStatusEvent>();

  @Output()
  onDelete = new EventEmitter<string>();

  totalTime: number = 0;

  ngAfterViewChecked() {
    if(!this.taskComponents || this.taskComponents.length === 0) return;
    
    this.totalTime = this.taskComponents
      .map(taskComponent => taskComponent.time)
      .reduce((acc, curr) => acc + curr);
  }

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
