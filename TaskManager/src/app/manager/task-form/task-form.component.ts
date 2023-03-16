import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskFormComponent {
  constructor(private fb: FormBuilder, private tasksService: TasksService) { }

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]]
  })

  handleSubmit() {
    const taskName = this.form.value.name;

    if(taskName)
      this.tasksService.addNewTask(taskName);

    this.form.reset();
  }

}
