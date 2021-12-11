import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Image } from '../database/models/image';
import { User } from '../database/models/user';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-image-library',
  templateUrl: './image-library.component.html',
  styleUrls: ['./image-library.component.scss']
})
export class ImageLibraryComponent implements OnInit {

  images!: Image[];
  image = new Image();

  currentUser = new User();

  constructor(private restservice:RestService, private router: Router, private cookieService: CookieService) { 
    this.currentUser = JSON.parse(this.cookieService.get('user') || '{}')[0];
  }

  ngOnInit(): void {
    this.getImages();

    if (this.currentUser == undefined || this.currentUser.roleid != 2)
    {
      this.router.navigate(['/no-access']);
    }
  }

  getImages(){
    this.restservice.GetImages().subscribe(data =>{
      this.images = data;
      console.log(this.images)
    })
  }
}
