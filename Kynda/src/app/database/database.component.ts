import { Component, OnInit } from '@angular/core';
import { RestService } from './services/rest.service';
import { Image } from './models/image';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  images!: Image[];
  image = new Image();

  constructor(private restService : RestService) { }

  ngOnInit(): void {
    
  }

  addImage() {
    this.restService.AddImage(this.image)
      .subscribe(data => {
        console.log(data);
      })
  }

}
