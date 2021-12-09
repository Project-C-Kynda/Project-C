import { Component, OnInit } from '@angular/core';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-companyadmin-dashboard',
  templateUrl: './companyadmin-dashboard.component.html',
  styleUrls: ['./companyadmin-dashboard.component.css']
})
export class CompanyadminDashboardComponent implements OnInit {

  templates: any = [];

  constructor(private restservice: RestService) { }

  ngOnInit(): void {
    this.getTemplates();
  }

  getTemplates(companyId:string = "1") {
    //JSON.parse(localStorage.getItem('user') || '{}').companyid
    console.log('running');
    this.restservice.GetTemplates(companyId)
    .subscribe(data => {
      console.log(data);
      this.templates = data;
    })
  }

}
