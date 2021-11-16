import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  editorParts : any;
  button : any;
  inputBoxFileNaam : any;
  inputFileNaam : any;

  loadedHtmlFile : any;
  paragraphs : any;
  headings : any;
  httpString : any;

  constructor(private http : HttpClient) { }


  
  ngOnInit(): void 
  {
    this.editorParts = document.getElementById('editor_parts');
    this.editorParts.style.display = 'none';
  }

  //Gets the HTML file from the templates folder
  getHtmlFile()
  {
      this.http
          .get("../../assets/templates/" + this.inputFileNaam,
               { responseType: 'text' })
          .subscribe((data : any) => {
              this.httpString = data;
              this.htmlFromString(this.httpString)
              this.inputBoxFileNaam = document.getElementById('file_naam');
              this.button = document.getElementById('load_button')
              this.button.remove();
              this.inputBoxFileNaam.remove();
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
