import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from '../../database/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validationMessage!: string;

  public User: any = [];
  login!: FormGroup;

  userName!: FormControl;
  password!: FormControl;

  constructor(private restservice: RestService, private router: Router, private cookieService: CookieService ) { }

  ngOnInit() {
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.cookieService.delete('user');

    this.login = new FormGroup(
      {
        'userName': this.userName,
        'password': this.password
      }
    )
  }

  logout(){
    this.cookieService.delete('user');
    this.router.navigate(['/']);
  }


  Login(name: string, pass: string) {
    this.restservice.getUser(name)
      .subscribe(data => {
        this.User = data;
        if(this.User.length >= 1 && this.User[0].password == pass) {
          this.cookieService.set('user', JSON.stringify(this.User));
          if (this.User[0].roleid == 2)
          {
            this.router.navigate(['/admin-dashboard']);
          }
          else
          {
            this.router.navigate(['/template']);
          }
        }
        return this.validationMessage = "De gebruikersnaam of wachtwoord klopt niet";
      })
  }
}
