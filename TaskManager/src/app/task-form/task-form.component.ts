import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Output()
  onNewTask = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]]
  })

  handleSubmit() {
    const taskName = this.form.value.name;

    if(taskName)
      this.onNewTask.emit(taskName);

    this.form.reset();
  }

}
