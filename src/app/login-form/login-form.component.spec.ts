import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinLengthValidator } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 2 controls', () =>{
    expect(component.form.contains('username')).toBeTrue();
    expect(component.form.contains('password')).toBeTrue();
  })

  it('should make the name control required', () => {
    let control = component.username;
    control.setValue('');
    expect(control.valid).toBeFalse();
  })

  it('should make the name control does not contain spaces', () => {
    let control = component.username;
    control.setValue('d a r i o n');
    expect(control.valid).toBeFalse();
  })

  it('should make the name control length at least 3 charaters', () =>{
    let control = component.username;
    control.setValue('tw');
    expect(control.valid).toBeFalse();
  })

  it('should make the password control required', () =>{
    let control = component.password;
    control.setValue('');
    expect(control.valid).toBeFalse();
  }) 

  it('should make the password length at least 8 characters', () =>{
    let control = component.password;
    control.setValue('passwor');
    expect(control.valid).toBeFalse();
  }) 

  it('should make the password control does not contain spaces', () =>{
    let control = component.password;
    control.setValue('pas swor');
    expect(control.valid).toBeFalse();
  })

});
