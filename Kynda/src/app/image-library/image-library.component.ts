import { Component, OnInit } from '@angular/core';
import { Image } from '../database/models/image';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-image-library',
  templateUrl: './image-library.component.html',
  styleUrls: ['./image-library.component.css']
})
export class ImageLibraryComponent implements OnInit {

  images!: Image[];
  image = new Image();
  constructor(private restservice:RestService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(){
    this.restservice.GetImages().subscribe(data =>{
      this.images = data;
      console.log(this.images)
    })
  }
}
