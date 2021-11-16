import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User: any = [];
  login!: FormGroup;

  userName!: FormControl;
  password!: FormControl;

  constructor(private restservice: RestService) { }

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

  checkUser(name: string, pass: string) {
    this.restservice.getUser(name)
      .subscribe(data => {
        console.log(data);
        this.User = data;
        if(this.User.length >= 1) {
          if (this.User[0].password == pass)
          {
            console.log("Pass!!");
          }
          else{
            console.log("Fail");
          }
        } else {
            console.log("user not found!");
        }
      })
  }
}
