import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Company } from '../database/models/company';
import { User } from '../database/models/user';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  page: number = 1;
  count = 0;
  tableSizes = [5, 10, 20];
  companies: any = [];
  user: any = [];
  currentUser = new User();

  constructor(private restservice : RestService, private router: Router, private cookieService: CookieService) { 
    this.getCompanies();
    this.user = JSON.parse(this.cookieService.get('user') || '{}');
    this.currentUser = this.user[0];
  }

  ngOnInit(): void {
    if (this.currentUser == undefined || this.currentUser.roleid != 0)
    {
      this.router.navigate(['/no-access']);
    }
  }

  getCompanies() {
    console.log("running ");
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
