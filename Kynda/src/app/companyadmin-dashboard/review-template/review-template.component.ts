import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-template',
  templateUrl: './review-template.component.html',
  styleUrls: ['./review-template.component.css']
})
export class ReviewTemplateComponent implements OnInit {

  inputFileName: any;
  currentUser: any;
  httpString : any;
  loadedHtmlFile: any;

  constructor(private router: Router, private http : HttpClient) { }

  ngOnInit(): void
  {
    this.inputFileName = localStorage.getItem('templateName')?.replace(/['"]+/g, '');
    localStorage.removeItem('templateName');
    this.getHtmlFile();

    if (this.currentUser == undefined || this.currentUser.roleid != 2)
    {
      this.router.navigate(['/no-access']);
    }
  }

  //Gets the HTML file from the templates folder
  getHtmlFile()
  {
      this.http
          .get("../../assets/templates/" + this.inputFileName,
               { responseType: 'text' })
          .subscribe((data : any) => {
              this.httpString = data;
              this.htmlFromString(this.httpString)
          }
      );
  }

  htmlFromString(htmlString : string)
   {
    this.loadedHtmlFile =  document.createElement('template');
    htmlString = htmlString.trim();
    this.loadedHtmlFile.innerHTML = htmlString;
   }

}
