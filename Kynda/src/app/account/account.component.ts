import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../database/models/user';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  isShown: boolean = false;
  selectedOption!: string;
  id: any = 0;
  companies: any = [];

  users!: User[];
  user = new User();

  userForm!: FormGroup;
  username!: FormControl;
  emailAddress!: FormControl;
  company!: FormControl;

  userlist: any = [];
  currentUser = new User();

  constructor(private restservice: RestService, private formBuilder: FormBuilder, private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.currentUser = this.userlist[0];
   }

  ngOnInit() {
    this.username = new FormControl(null,Validators.required);
    this.emailAddress = new FormControl(null,[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
    this.company = new FormControl();

    this.userForm =  this.formBuilder.group({
      'username': this.username,
      'emailAddress': this.emailAddress,
      'company': this.company
    });

    this.getCompanies();

    if (this.currentUser == undefined || this.currentUser.roleid != 2)
    {
      this.router.navigate(['/no-access']);
    }
  }

  changeValue(e: any): void {
    this.id = this.companies.find(function (c: { name: any; }) {
        return c.name == e.target.value;
      });
  }

  getCompanies(){
    this.restservice.GetCompanies()
      .subscribe(data => {
        this.companies = data;
      }
      )
  }

  generatePassword(length: number){
    var numberChar = "01234567890";
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var allChar = numberChar + upperChar + lowerChar;
    var randPasswordArray = Array(length);
    randPasswordArray[0] = numberChar;
    randPasswordArray[1] = upperChar;
    randPasswordArray[2] = lowerChar;
    randPasswordArray = randPasswordArray.fill(allChar, 3);
    return this.shuffleArray(randPasswordArray.map(function(x) {return x[Math.floor(Math.random() * x.length)] })).join('');
}

  shuffleArray(array: number[]){
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }

  toggleShow() {
    this.isShown = ! this.isShown;
    }

  makeUser()
  {
    this.user.companyid = this.id.id || 0;
    this.user.password =  this.generatePassword(8);
    this.user.roleid = 2;
    this.addUser();
    this.toggleShow();
  }

  addUser()
  {
    this.restservice.AddUser(this.user)
    .subscribe(data => {
      console.log(data);
    })
  }

//===================EMAIL===================
  sendMail()
  {
    this.restservice.SendMail()
    .subscribe(data => {
      console.log(data);
    })
  }
}

