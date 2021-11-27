import { Component, OnInit } from '@angular/core';
import { Company } from '../database/models/company';
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

  constructor(private restservice : RestService) { 
    this.getCompanies();
  }

  ngOnInit(): void {
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
