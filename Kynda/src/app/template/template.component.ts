import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }
  headings : any;
  paragraphs : any;

  ngOnInit(): void 
  {
    //Gets all the <h*> and <p> elements from the HTML template and puts it into an array
    //It will ignore all elements that have class='editor' in them
    this.headings = document.querySelectorAll('h1:not(.editor),h2:not(.editor),h3:not(.editor),h4:not(.editor),h5:not(.editor),h6:not(.editor)');
    this.paragraphs = document.querySelectorAll('p:not(.editor)');
  }



}
