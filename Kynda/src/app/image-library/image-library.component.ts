import { Component, OnInit } from '@angular/core';
import { IMAGE } from './image-interface';

@Component({
  selector: 'app-image-library',
  templateUrl: './image-library.component.html',
  styleUrls: ['./image-library.component.css']
})
export class ImageLibraryComponent implements OnInit {

  images = IMAGE;
  constructor() { }

  ngOnInit(): void {
  }

}
