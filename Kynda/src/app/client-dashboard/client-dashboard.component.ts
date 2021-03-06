import { Component, OnInit } from '@angular/core';
import { RestService } from '../database/services/rest.service';
import { Template } from '../database/models/template';
import { Router } from '@angular/router';
import { User } from '../database/models/user';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {

  template = new Template();
  templates: any = [];
  user: any = [];
  currentUser = new User();

  constructor(private restservice : RestService, private router: Router, private cookieService: CookieService) {
    this.currentUser = JSON.parse(this.cookieService.get('user') || '{}')[0];
  }

  ngOnInit(): void {
    this.getTemplates(this.currentUser.companyid.toString());

    if (this.currentUser == undefined || this.currentUser.roleid != 2)
    {
      this.router.navigate(['/no-access']);
    }
  }

  /**
   * This fetches all the templates from the company with the companyId.
   * @param companyId a string that resembles the id of the chosen company
   */
  getTemplates(companyId:string = "0") {
    console.log('running');
    this.restservice.GetTemplates(companyId)
    .subscribe(data => {
      console.log(data);
      this.templates = data;
    })
  }

  /**
   * This loads a template into the cookie so that it can be used in another script
   * @param templateName the name of the chosen template
   */
  loadTempalte(templateName:string) {
    const jsonData = JSON.stringify(templateName);
    this.cookieService.set('templateName', jsonData);
    this.router.navigate(['/template']);
  }

}
