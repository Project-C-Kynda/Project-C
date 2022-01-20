import { Component, OnInit } from '@angular/core';
import { TEMPLATES } from './template-library-interface';

@Component({
  selector: 'app-template-library',
  templateUrl: './template-library.component.html',
  styleUrls: ['./template-library.component.css']
})
export class TemplateLibraryComponent implements OnInit {
  
  templates = TEMPLATES
  
  
  constructor() { }

  ngOnInit(): void {
  }
  

}
