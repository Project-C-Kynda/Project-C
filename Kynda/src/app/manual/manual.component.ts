import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from '../database/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

  company: any = [];
  currentUser: any;

  constructor(private restservice: RestService, private cookieservice: CookieService, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(this.cookieservice.get('user') || '{}')[0];
    this.restservice.GetCompanyById(this.currentUser[0].companyid).subscribe(data => {
      this.company = data;
    });

    if (this.currentUser == undefined || this.currentUser.roleid != 2)
    {
      this.router.navigate(['/no-access']);
    }
  }

  /**
   * @returns returns a path to the manual. This has to be sanitized so that HTTP accepts it.
   */
  manualURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("/assets/manuals/" + this.company[0].manual);
  }

}
