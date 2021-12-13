import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-companyadmin-dashboard',
  templateUrl: './companyadmin-dashboard.component.html',
  styleUrls: ['./companyadmin-dashboard.component.css']
})
export class CompanyadminDashboardComponent implements OnInit {

  templates: any = [];
  currentUser: any;

  constructor(private restservice: RestService, private router: Router, private cookieservice: CookieService) {
    this.currentUser = JSON.parse(cookieservice.get('user' || '{}'))[0];
   }

  ngOnInit(): void {
    this.getTemplates();

    if (this.currentUser == undefined || this.currentUser.roleid != 2)
    {
      this.router.navigate(['/no-access']);
    }
  }

  getTemplates(companyId:string = "1") {
    //TODO: Set GetTemplates to GetPendingTemplates
    this.restservice.GetTemplates(companyId)
    .subscribe(data => {
      console.log(data);
      this.templates = data;
    })
  }

  reviewTemplate(templateName: string) {
    this.cookieservice.set('Name', JSON.stringify(templateName));
    this.router.navigate(['/review-template']);
  }

}
