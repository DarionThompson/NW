import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {LoginValidators} from '../Validators/login.validators';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  form = new FormGroup({
    'username': new FormControl('', 
    [
      Validators.minLength(3),
      Validators.required,
      LoginValidators.cannotContainSpace],
    ),
    'password': new FormControl('', 
    [
      Validators.required,
      Validators.minLength(8),
      LoginValidators.cannotContainSpace]
    )
  })

  get username(){
    return this.form.get('username')
  }

  get password(){
    return this.form.get('password')
  }
}
