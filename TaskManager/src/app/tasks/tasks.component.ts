import { Component } from '@angular/core';
import { v4 } from 'uuid';
import { ChangeTaskStatusEvent, SingleTask, TaskStatus } from '../types/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: SingleTask[] = [];

  trackById(index: number, task: SingleTask) {
    return task.id;
  }

  addNewTask() {
    const newTask: SingleTask = {
      id: v4(),
      name: 'Lorem Ipsum',
      status: TaskStatus.New,
    }

    // Wersja mutująca oryginalną tablicę
    // this.tasks.push(newTask);

    // Wersja niemutująca tworząca nową tablicę
    this.tasks = [...this.tasks, newTask];
  }

  changeStatus(event: ChangeTaskStatusEvent) {
    this.tasks = this.tasks.map(task => {
      if(task.id === event.taskId) return {
        ...task,
        status: event.newStatus
      }
      return task;
    })
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
