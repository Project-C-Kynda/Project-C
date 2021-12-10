import { Component, OnInit } from '@angular/core';
import { RestService } from '../database/services/rest.service';
import { Template } from '../database/models/template';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  template = new Template();
  templates: any = [];

  constructor(private restservice : RestService, private router: Router) {
  }

  ngOnInit(): void {
    this.getTemplates();
  }

  getTemplates(companyId:string = "0") {
    //JSON.parse(localStorage.getItem('user') || '{}').companyid
    console.log('running');
    this.restservice.GetTemplates(companyId)
    .subscribe(data => {
      console.log(data);
      this.templates = data;
    })
  }

  //Save the templateName into localstorage?
  loadTempalte(templateName:string) {
    const jsonData = JSON.stringify(templateName);
    localStorage.setItem('templateName', jsonData);
    this.router.navigate(['/template']);
  }

}
