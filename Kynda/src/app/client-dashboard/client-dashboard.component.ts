import { Component, OnInit } from '@angular/core';
import { RestService } from '../database/services/rest.service';
import { Template } from '../database/models/template';
import { Router } from '@angular/router';
import { User } from '../database/models/user';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  template = new Template();
  templates: any = [];
  user: any = [];
  currentUser = new User();

  constructor(private restservice : RestService, private router: Router, private cookieService : CookieService) 
  {
    this.user = JSON.parse(this.cookieService.get('user') || '{}');
    this.currentUser = this.user[0];
  }

  ngOnInit(): void 
  {
    if (this.currentUser == undefined || this.currentUser.roleid != 2)
    {
      this.router.navigate(['/no-access']);
    }

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

  //Save the templateName into localstorage?
  loadTempalte(templateName:string) {
    const jsonData = JSON.stringify(templateName);
    localStorage.setItem('templateName', jsonData);
    this.router.navigate(['/template']);
  }

}
