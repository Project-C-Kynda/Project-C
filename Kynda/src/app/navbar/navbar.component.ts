import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../database/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any[];
  currentUser = new User();

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.currentUser = this.user[0];
   }

  ngOnInit(): void {
  }

}
