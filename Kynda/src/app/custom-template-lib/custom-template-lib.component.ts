import { Component, OnInit } from '@angular/core';
import { RestService } from '../database/services/rest.service';
import { Template, TEMPLATES } from "./template-dir"
import { HttpClient } from '@angular/common/http';
import { TemplateComponent } from '../template/template.component';


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

  constructor(private restservice : RestService, private http : HttpClient) { 
  }

  ngOnInit(): void {
    this.splitTemplates();
    }

  splitTemplates(){
    for (let i = 0; i < TEMPLATES.length; i++) {
      if (TEMPLATES[i].rev) {
        this.downloadTemplates?.push(TEMPLATES[i]);
        console.log(this.downloadTemplates);
      }
      else
      {
        this.reviewTemplates?.push(TEMPLATES[i]);
        console.log(this.reviewTemplates);
      }
      
    }
  }
  
  getHtmlFile(template : Template)
  {
      this.http.get(template.ref,{ responseType: 'text' })
          .subscribe((data : string) => {
            this.httpString = data;
            this.htmlFromString(data)
            this.selectorParts = document.getElementById("container")
            this.selectorParts.remove();
            this.editorParts.style.display = 'initial';
          }
      );
  }

  //Converts the HTML string from the template file into a new document element that can be edited
   htmlFromString(htmlString : string) 
   {
    this.loadedHtmlFile =  document.createElement('template');
    htmlString = htmlString.trim();
    this.loadedHtmlFile.innerHTML = htmlString;

    //Gets all the <h*> and <p> elements from the HTML template and puts it into an array
    //It will ignore all elements that have class='editor' in them
    this.headings = this.loadedHtmlFile.content.querySelectorAll('h1:not(.editor),h2:not(.editor),h3:not(.editor),h4:not(.editor),h5:not(.editor),h6:not(.editor)');
    this.paragraphs = this.loadedHtmlFile.content.querySelectorAll('p');
  }
}
