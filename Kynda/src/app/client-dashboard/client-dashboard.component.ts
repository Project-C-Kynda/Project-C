import { Component, OnInit } from '@angular/core';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  templates: any = [];

  constructor(private restservice : RestService) { 
  }

  ngOnInit(): void {
    this.getTemplates("1"); 
  }

  getTemplates(companyId:string) {
    //JSON.parse(localStorage.getItem('user') || '{}').companyid
    console.log('running');
    this.restservice.GetTemplates(companyId)
    .subscribe(data => {
      console.log(data);
      this.templates = data;
    })
  }

}
