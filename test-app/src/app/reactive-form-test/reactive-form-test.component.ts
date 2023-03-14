import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.scss']
})
export class ReactiveFormTestComponent {
  constructor(private fb: FormBuilder) {
    this.form.valueChanges.subscribe(newValues => {
      console.log(newValues);
    })
  }

  form = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  hasError(field: string, error: string): boolean {
    const formField = this.form.get(field);

    if(!formField || formField.untouched) return false;

    const fieldErrors = formField.errors;

    if(!fieldErrors) return false;

    if(fieldErrors[error]) return true;
    return false;
  }

  handleSubmit() {
    console.log(this.form.value);
    this.form.reset();
  }

  clearLogin() {
    this.form.patchValue({
      login: ''
    })
  }
}
