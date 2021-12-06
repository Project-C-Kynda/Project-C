import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../database/models/company';
import { User } from '../database/models/user';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  page: number = 1;
  count = 0;
  tableSizes = [5, 10, 20];
  companies: any = [];
  user: any = [];
  currentUser = new User();

  constructor(private restservice : RestService, private router: Router) { 
    this.getCompanies();
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.currentUser = this.user[0];
  }

  ngOnInit(): void {
    if (this.currentUser == undefined || this.currentUser.roleid != 2)
    {
      this.router.navigate(['/no-access']);
    }
  }

  getCompanies() {
    this.restservice.GetCompanies()
    .subscribe(data => {
      this.companies = data; 
    })
  }

  onDataChanged(event: any) {
    this.page = 1;
    this.getCompanies();
  }

  onTableSizeChanged(event: any): void {
    this.page = 1;
    this.getCompanies();
  }

}
