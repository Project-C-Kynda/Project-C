import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var validation: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  companies = ['Apple', 'Microsoft', 'Kynda'];

  addUser!: FormGroup;

  username!: FormControl;
  password!: FormControl;
  emailAddress!: FormControl;
  company!: FormControl;


  constructor() { }

  ngOnInit() {
    this.username = new FormControl('',Validators.required);
    this.password = new FormControl('',[Validators.required, Validators.minLength(8)]);
    this.emailAddress = new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
    this.company = new FormControl('',Validators.required);

    this.addUser =  new FormGroup({
      'username': this.username,
      'password': this.password,
      'emailAddress': this.emailAddress,
      'company': this.company
    });
  }   
}
