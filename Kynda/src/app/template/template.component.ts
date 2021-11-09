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
    this.headings = document.querySelectorAll('h1');
    this.paragraphs = document.querySelectorAll('p');
  }



}
