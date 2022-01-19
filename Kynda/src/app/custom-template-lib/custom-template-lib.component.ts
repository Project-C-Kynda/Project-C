import { Component, OnInit } from '@angular/core';
import { Template } from '../database/models/template';
import { DownloadService } from '../template-download/download.service';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../database/models/user';
import { RestService } from '../database/services/rest.service';


@Component({
  selector: 'app-custom-template-lib',
  templateUrl: './custom-template-lib.component.html',
  styleUrls: ['./custom-template-lib.component.scss']
})
export class CustomTemplateLibComponent implements OnInit {

  allTemplates: any = [];
  downloadTemplates: Template[] = [];
  selectedTemplate?: Template;
  templateURL?: SafeResourceUrl;

  user: any = [];
  currentUser = new User();

  loadedHtmlFile : any;
  httpString : any;
  htmlString: any;

  constructor(private download:DownloadService, private sanitizer:DomSanitizer, private cookieService:CookieService, private restService:RestService) {
  this.user = JSON.parse(this.cookieService.get('user') || '{}');
  this.currentUser = this.user[0];
  }

  ngOnInit(): void {
    this.splitTemplates();
  }



  splitTemplates(){
    this.restService.GetTemplates(this.currentUser.companyid.toString())
    .subscribe(data => {
      this.allTemplates = data
    })
    for (let i = 0; i < this.allTemplates.length; i++) {
      //status can be: none, pending, approved, disapproved
      if (this.allTemplates[i].status == "approved") {
        this.downloadTemplates?.push(this.allTemplates[i]);
      }
    }
  }
  
  selectTemplate(template : Template){
    this.selectedTemplate = template;
    this.templateURL = this.sanitizer.bypassSecurityTrustResourceUrl("/assets/templates/"+template.name+".html");
  }

  templateDownload(){
    this.download.convertToPDF('download');
  }
}
