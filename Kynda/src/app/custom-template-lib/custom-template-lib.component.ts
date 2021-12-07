import { Component, OnInit } from '@angular/core';
import { RestService } from '../database/services/rest.service';
import { Template, TEMPLATES } from "./template-dir"
import { HttpClient } from '@angular/common/http';
import { TemplateComponent } from '../template/template.component';
import { DownloadService } from '../template-download/download.service';


@Component({
  selector: 'app-custom-template-lib',
  templateUrl: './custom-template-lib.component.html',
  styleUrls: ['./custom-template-lib.component.css']
})
export class CustomTemplateLibComponent implements OnInit {

  templates = TEMPLATES;
  downloadTemplates: Template[] = [];
  reviewTemplates: Template[] = [];
  
  selectorParts : any;
  editorParts : any;
  loadedHtmlFile : any;
  paragraphs : any;
  headings : any;
  httpString : any;
  htmlDoc : any;

  constructor(private restservice : RestService, private http : HttpClient, private download:DownloadService) { 
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
  
  getHtmlFile(template : Template)
  {
    this.http.get(template.ref,{ responseType: 'text' })
      .subscribe((data : string) => {
        this.httpString = data;
        this.htmlFromString(data)
      }
    );
  }

  //Converts the HTML string from the template file into a new document element that can be edited
  htmlFromString(htmlString : string) 
  {
    this.loadedHtmlFile =  document.createElement('template');
    htmlString = htmlString.trim();
    this.loadedHtmlFile.innerHTML = htmlString;
  }
}
