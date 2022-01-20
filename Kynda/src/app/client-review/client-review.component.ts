import { Component, OnInit } from '@angular/core';
import { RestService } from '../database/services/rest.service';
import { User } from '../database/models/user';
import { Template } from "../database/models/template";
import { HttpClient } from '@angular/common/http';
import { DownloadService } from '../template-download/download.service';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.scss']
})
export class ClientReviewComponent implements OnInit {


  allTemplates: any = [];
  downloadTemplates: Template[] = [];
  reviewTemplates: Template[] = [];
  selectedTemplate?: Template;
  templateURL?: SafeResourceUrl;

  user: any = [];
  currentUser = new User();

  constructor(private restservice : RestService, private http : HttpClient, private cookieService: CookieService, private download:DownloadService, private sanitizer:DomSanitizer, private router: Router) {
    this.currentUser = JSON.parse(this.cookieService.get('user') || '{}')[0];
  }

  ngOnInit(): void {
    this.splitTemplates();
    if (this.currentUser == undefined || this.currentUser.roleid != 2)
    {
      this.router.navigate(['/no-access']);
    }
  }

  splitTemplates(){
    this.restservice.GetTemplates(this.currentUser.companyid.toString())
    .subscribe(data => {
      this.allTemplates = data
    })
    //status can be: none, pending, approved, disapproved
    for (let i = 0; i < this.allTemplates.length; i++) {
      if (this.allTemplates[i].status == "none" || this.allTemplates[i].status == "pending" || this.allTemplates[i].status == "disapproved") {
        this.reviewTemplates?.push(this.allTemplates[i]);
      }
    }
  }
  
  selectTemplate(template : Template){
    this.selectedTemplate = template;
    this.templateURL = this.sanitizer.bypassSecurityTrustResourceUrl("/assets/templates/"+template.name+".html");
  }

  setPending(){
    if (this.selectedTemplate?.status != 'pending'){
      //pending
    }
  }
}
