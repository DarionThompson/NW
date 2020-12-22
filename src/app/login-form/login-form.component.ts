import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginRepsonse } from '../Model/login.service';
import { AuthenticationService } from '../Service/authentication.service';
import {LoginValidators} from '../Validators/login.validators';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private router:Router, private authService: AuthenticationService){}

  logthang : LoginRepsonse

  errorMessage : string;
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

  login(){
      let loginModel = 
      { 
        username : this.username.value,
        password : this.password.value
      }
       var response = this.authService.Login(loginModel).subscribe(
         data => {
          console.log(data)
          this.logthang = data
          this.router.navigateByUrl('')

         }, error => {
           this.errorMessage = error.errorMessage
           console.log(error);
         }
       )
  }
}
