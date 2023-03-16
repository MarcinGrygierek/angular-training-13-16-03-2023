import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 } from 'uuid';
import { SingleTask, TaskStatus } from './manager/types/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = new BehaviorSubject<SingleTask[]>([]);
  public tasks$: Observable<SingleTask[]>;

  constructor() {
    this.tasks$ = this.tasks.asObservable();
   }

  addNewTask(taskName: string) {
    const newTask: SingleTask = {
      id: v4(),
      name: taskName,
      status: TaskStatus.New,
      hidden: false,
      createdAt: new Date()
    }

    const tasks = this.tasks.getValue();

    this.tasks.next([...tasks, newTask]);
  }

  changeStatus(taskId: string, newStatus: TaskStatus) {
    const tasks = this.tasks.getValue();

    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {
        ...task,
        status: newStatus
      }
      return task;
    })

    this.tasks.next(newTasks);
  }

  deleteTask(taskId: string) {
    const tasks = this.tasks.getValue();

    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {
        ...task,
        hidden: true
      }
      return task;
    })

    this.tasks.next(newTasks);
  }
}
