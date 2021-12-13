import { Component, OnInit } from '@angular/core';
import { User } from '../../database/models/user';

@Component({
  selector: 'app-no-access',
  templateUrl: './no-access.component.html',
  styleUrls: ['./no-access.component.scss']
})
export class NoAccessComponent implements OnInit {

  user: any = [];
  currentUser = new User();

  constructor() { 
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.currentUser = this.user[0];
  }

  ngOnInit(): void {
  }

}
