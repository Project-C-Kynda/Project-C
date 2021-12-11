import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

  company: any = [];
  user!: any;

  constructor(private restservice: RestService, private cookieservice: CookieService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.cookieservice.get('user'));
    this.restservice.GetCompanyById(this.user[0].companyid).subscribe(data => {
      this.company = data;
    })
  }

  manualURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("/assets/manuals/" + this.company[0].manual);
  }

}
