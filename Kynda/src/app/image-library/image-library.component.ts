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

  user: any = [];
  currentUser = new User();

  constructor(private restservice:RestService, private router: Router, private cookieService: CookieService) { 
    this.user = JSON.parse(this.cookieService.get('user') || '{}');
    this.currentUser = this.user[0];
  }

  ngOnInit(): void {
    this.getImages();

    if (this.currentUser == undefined || this.currentUser.roleid != 1)
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
