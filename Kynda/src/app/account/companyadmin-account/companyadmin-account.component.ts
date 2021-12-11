import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Company } from 'src/app/database/models/company';
import { User } from '../../database/models/user';
import { RestService } from '../../database/services/rest.service';

@Component({
  selector: 'app-account',
  templateUrl: './companyadmin-account.component.html',
  styleUrls: ['./companyadmin-account.component.css']
})
export class CompanyadminAccountComponent implements OnInit {

  isShown: boolean = false;
  selectedOption!: string;
  id: any = 0;

  users!: User[];
  user = new User();

  userForm!: FormGroup;
  username!: FormControl;
  emailAddress!: FormControl;
  company!: any;


  constructor(private restservice: RestService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.username = new FormControl(null,Validators.required);
    this.emailAddress = new FormControl(null,[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);

    this.userForm =  this.formBuilder.group({
      'username': this.username,
      'emailAddress': this.emailAddress
    });
    this.company = this.restservice.getCompany("APple");
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
    this.user.companyid = this.company.id;
    this.user.password =  this.generatePassword(8);
    this.user.roleid = 1;
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

