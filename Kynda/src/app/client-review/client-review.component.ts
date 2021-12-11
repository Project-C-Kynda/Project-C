import { Component, OnInit } from '@angular/core';
import { RestService } from '../database/services/rest.service';
import { Template, TEMPLATES } from "./template-dir"
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

  currentUser: any;
  templates = TEMPLATES;
  downloadTemplates: Template[] = [];
  reviewTemplates: Template[] = [];
  selectedTemplate?: Template;
  templateURL?: SafeResourceUrl;

  loadedHtmlFile : any;
  httpString : any;
  htmlString: any;

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
    for (let i = 0; i < TEMPLATES.length; i++) {
      if (TEMPLATES[i].rev) {
        this.downloadTemplates?.push(TEMPLATES[i]);
      }
      else
      {
        this.reviewTemplates?.push(TEMPLATES[i]);
      }
      
    }
  }
  
  selectTemplate(template : Template){
    this.selectedTemplate = template;
    this.templateURL = this.sanitizer.bypassSecurityTrustResourceUrl(template.ref);
  }
}
