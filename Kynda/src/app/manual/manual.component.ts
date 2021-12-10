import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Company } from '../database/models/company';
import { User } from '../database/models/user';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {

  company: any = [];
  user: any = [];
  currentUser = new User();

  constructor(private restservice: RestService, private router: Router, private cookieService: CookieService) 
  {
    this.user = JSON.parse(this.cookieService.get('user') || '{}');
    this.currentUser = this.user[0];
  }

  ngOnInit(): void 
  {
    if (this.currentUser == undefined || this.currentUser.roleid != 2)
    {
      this.router.navigate(['/no-access']);
    }
    
    this.restservice.GetCompanyById(this.user.companyid).subscribe(data => {
      console.log(data);
      this.company = data;
    })
  }

}
