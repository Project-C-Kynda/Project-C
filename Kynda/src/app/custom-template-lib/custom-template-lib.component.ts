import { Component, OnInit } from '@angular/core';
import { RestService } from '../database/services/rest.service';
import { Template, TEMPLATES } from "./template-dir"
import { HttpClient } from '@angular/common/http';
import { TemplateComponent } from '../template/template.component';
import { DownloadService } from '../template-download/download.service';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-custom-template-lib',
  templateUrl: './custom-template-lib.component.html',
  styleUrls: ['./custom-template-lib.component.scss']
})
export class CustomTemplateLibComponent implements OnInit {

  templates = TEMPLATES;
  downloadTemplates: Template[] = [];
  reviewTemplates: Template[] = [];
  selectedTemplate?: Template;
  templateURL?: SafeResourceUrl;

  loadedHtmlFile : any;
  httpString : any;
  htmlString: any;

  constructor(private restservice : RestService, private http : HttpClient, private download:DownloadService, private sanitizer:DomSanitizer) { 
  }

  ngOnInit(): void {
    this.splitTemplates();
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

  templateDownload(){
    this.download.convertToPDF('download');
  }
}
