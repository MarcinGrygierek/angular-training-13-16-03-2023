import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  constructor(private usersService: UsersService) {}

  form = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  handleSubmit() {
    if(this.form.value.name) {
      this.usersService.addUser(this.form.value.name);
      this.form.reset();
    }
  }

}
