import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../database/models/login';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validationMessage!: string;

  User: any = [];
  login!: FormGroup;
  loginCredentials = new Login();

  userName!: FormControl;
  password!: FormControl;

  constructor(private restservice: RestService, private router: Router) { }

  ngOnInit() {
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.login = new FormGroup(
      {
        'userName': this.userName,
        'password': this.password
      }
    )
  }

  validateUser() {
    this.loginCredentials.accountname = "testgebruiker";
    this.loginCredentials.password = "efI0mKgu";
    this.restservice.ValidateLogin(this.loginCredentials)
    .subscribe(data => {
      console.log(data);
    })
  }

  checkUser(name: string, pass: string) {
    this.restservice.getUser(name)
      .subscribe(data => {
        console.log(data);
        this.User = data;
        if(this.User.length >= 1) {
          if (this.User[0].password == pass)
          {
            this.validationMessage = "";
            this.router.navigate(['/template'])
            return this.validationMessage;
          }
          else{
            this.validationMessage = "De gebruikersnaam of wachtwoord klopt niet";
            return this.validationMessage;
          }
        } else {
          this.validationMessage = "De gebruikersnaam of wachtwoord klopt niet";
          return this.validationMessage;
        }
      })
  }
}
