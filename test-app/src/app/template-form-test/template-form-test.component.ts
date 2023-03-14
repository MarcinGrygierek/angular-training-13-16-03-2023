import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form-test',
  templateUrl: './template-form-test.component.html',
  styleUrls: ['./template-form-test.component.scss']
})
export class TemplateFormTestComponent {
  data = {
    login: '',
    password: ''
  }

  handleSubmit(event: Event) {
    console.log(this.data);
  }
}
