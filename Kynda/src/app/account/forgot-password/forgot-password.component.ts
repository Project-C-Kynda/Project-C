import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validators';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  isShown: boolean = false;

  forgotPassword: FormGroup = new FormGroup({});
  passWord1!: FormControl;
  passWord2!: FormControl;
  emailAddress!: FormControl;

  constructor(private fb: FormBuilder) { 
    this.forgotPassword = fb.group(
      {
        passWord1: ['', [Validators.required]],
        passWord2: ['', [Validators.required]],
        emailAddress: ['', [Validators.required, Validators.email]]
      },
      { 
        validator: ConfirmedValidator('passWord1', 'passWord2')
      }
    )
  }

  ngOnInit(): void {
  }

  get f(){
    return this.forgotPassword.controls;
  }

  submit()
  {
    this.isShown = true;
  }
}
