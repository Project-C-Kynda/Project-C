import { Component, OnInit } from '@angular/core';
import { RestService } from '../database/services/rest.service';
import { Template } from '../database/models/template';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../database/models/user';


@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.scss']
})
export class ClientReviewComponent implements OnInit {

  allTemplates: any = [];
  reviewTemplates: Template[] = [];
  selectedTemplate?: Template;
  templateURL?: SafeResourceUrl;

  user: any = [];
  currentUser = new User();

  constructor(private restservice : RestService, private sanitizer:DomSanitizer, private cookieService: CookieService) { 
    this.user = JSON.parse(this.cookieService.get('user') || '{}');
    this.currentUser = this.user[0];
  }

  ngOnInit(): void {
    this.splitTemplates();
  }

  splitTemplates(){
    this.restservice.GetTemplates(this.currentUser.companyid.toString())
    .subscribe(data => {
      this.allTemplates = data
    })
    //status can be: none, pending, approved, disapproved
    for (let i = 0; i < this.allTemplates.length; i++) {
      if (this.allTemplates[i].status == "none" || this.allTemplates[i].status == "pending" || this.allTemplates[i].status == "disapproved") {
        this.reviewTemplates?.push(this.allTemplates[i]);
      }
    }
  }
  
  selectTemplate(template : Template){
    this.selectedTemplate = template;
    this.templateURL = this.sanitizer.bypassSecurityTrustResourceUrl("/assets/templates/"+template.name+".html");
  }

  setPending(){
    if (this.selectedTemplate?.status != 'pending'){
      //pending
    }
  }
}
