import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { TasksService } from 'src/app/tasks.service';
import { SingleTask } from '../types/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent implements OnInit {
  totalTime: number = 0;

  constructor(private tasksService: TasksService) {
    this.tasksService.tasks$.subscribe(newTasks => {
      this.tasksDetails = newTasks;
    })
  }

  tasks = this.tasksService.tasks$;
  tasksDetails: SingleTask[] = [];
  interval!: NodeJS.Timer;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.calculateTasksTime();
    }, 1000);
  }

  calculateTasksTime() {
    if(this.tasksDetails.length === 0) return;

    this.totalTime = this.tasksDetails
      .filter(task => !task.hidden)
      .map(task => Math.round((new Date().getTime() - task.createdAt.getTime()) / 1000))
      .reduce((acc, curr) => acc + curr);
  }

  trackById(index: number, task: SingleTask) {
    return task.id;
  }

  ngOnDestory() {
    clearInterval(this.interval);
  }
}
