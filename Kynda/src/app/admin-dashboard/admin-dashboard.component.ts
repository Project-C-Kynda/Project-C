import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Company } from '../database/models/company';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  page = 1;
  pageSize = 4;
  companies: any = [];
  collectionSize = this.companies.length;

  constructor(private restservice : RestService) { 
    this.remapCompanies();
  }

  ngOnInit(): void {
  }

  getCompanies() {
    this.restservice.GetCompanies()
    .subscribe(data => {
      this.companies = data; 
    })
  }

  remapCompanies() {
    this.companies.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
