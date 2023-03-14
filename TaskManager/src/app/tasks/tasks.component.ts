import { ChangeDetectionStrategy, Component } from '@angular/core';
import { v4 } from 'uuid';
import { ChangeTaskStatusEvent, SingleTask, TaskStatus } from '../types/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent {
  tasks: SingleTask[] = [];

  addNewTask() {
    const newTask: SingleTask = {
      id: v4(),
      name: 'Lorem Ipsum',
      status: TaskStatus.New,
      hidden: false
    }

    // Wersja mutująca oryginalną tablicę
    // this.tasks.push(newTask);

    // Wersja niemutująca tworząca nową tablicę
    this.tasks = [...this.tasks, newTask];
  }

  changeStatus(event: ChangeTaskStatusEvent) {
    // Wersja niemutująca
    this.tasks = this.tasks.map(task => {
      if(task.id === event.taskId) return {
        ...task,
        status: event.newStatus
      }
      return task;
    })

    // wersja mutująca - zadziała bo komponent emituje zdarzenai
    // const taskToChange = this.tasks.find(task => task.id === event.taskId);

    // if(!taskToChange) return;

    // taskToChange.status = event.newStatus;
  }

  deleteTask(taskId: string) {
    // Usuwanie
    // this.tasks = this.tasks.filter(task => task.id !== taskId);

    // Ukrywanie
    this.tasks = this.tasks.map(task => {
      if(task.id === taskId) return {
        ...task,
        hidden: true
      }
      return task;
    })
  }
}
