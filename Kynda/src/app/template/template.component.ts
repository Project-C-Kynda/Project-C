import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../database/models/user';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})

export class TemplateComponent implements OnInit {

  editorParts: any;
  selectorParts: any;
  //button : any;
  //inputBoxFileNaam : any;
  inputFileNaam: any;
  iFrameNaam : any;
  loadedHtmlFile: any;
  paragraphs: any;
  headings: any;
  httpString: any;
  loaded: any;
  user: any = [];
  currentUser = new User();

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService, private sanitizer: DomSanitizer) {
    this.user = JSON.parse(this.cookieService.get('user') || '{}');
    this.currentUser = this.user[0];
  }



  ngOnInit(): void {
    const name = localStorage.getItem('templateName')?.replace(/['"]+/g, '');
    //this.inputFileNaam = name;
    localStorage.removeItem('templateName');
    //this.getHtmlFile();
    this.editorParts = document.getElementById('editor-parts');
    this.editorParts.style.display = 'none';
    this.loaded = false;
    if (this.currentUser == undefined || this.currentUser.roleid != 2) {
      this.router.navigate(['/no-access']);
    }

  }
  

  //Gets the HTML file from the templates folder
  getHtmlFile() 
  {
      this.loadedHtmlFile = this.sanitizer.bypassSecurityTrustResourceUrl("assets/templates/" + this.inputFileNaam);

  }

  generateEditor()
  {
    var x : any = document.getElementById("frame");
      var loadedDocument = (x.contentWindow || x.contentDocument);
      console.log(loadedDocument);
      //Gets all the <h*> and <p> elements from the HTML template and puts it into an array
      //It will ignore all elements that have class='editor' in them
      this.headings = loadedDocument.document.querySelectorAll('h1:not(.editor),h2:not(.editor),h3:not(.editor),h4:not(.editor),h5:not(.editor),h6:not(.editor)');
      this.paragraphs = loadedDocument.document.querySelectorAll('span');
      this.selectorParts = document.getElementById("selector-parts")
      this.selectorParts.remove();
      this.editorParts.style.display = 'initial';

      console.log(this.paragraphs[0].childNodes[0]);
  }
}

