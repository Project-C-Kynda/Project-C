import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Company } from 'src/app/database/models/company';
import { RestService } from 'src/app/database/services/rest.service';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.component.html',
  styleUrls: ['./company-account.component.css']
})
export class CompanyAccountComponent implements OnInit {

  isShown: boolean = false;
  company =  new Company();
  manual: any;
  addCompany!: FormGroup;

  companyName!: FormControl;
  styleguide!: FormControl;

  constructor(private restservice: RestService) { }

  ngOnInit() {
    this.companyName = new FormControl('',Validators.required);
    this.styleguide = new FormControl();

    this.addCompany = new FormGroup(
      {
        'companyName': this.companyName,
        'styleguide': this.styleguide
      }
    )
  }

  getFileDetails(event: any)
  {
    for (var i = 0; i < event.target.files.length; i++) { 
      this.manual = event.target.files[i].name;
    }
  }

  toggleShow() {
    this.isShown = ! this.isShown;
  }

  makeCompany()
  {
    this.company.totaldownloads = 0;
    this.company.manual = this.manual;
    this.toggleShow();
  }

  uploadCompany(){
    this.makeCompany();
    this.restservice.AddCompany(this.company)
    .subscribe(data => {
      console.log(data);
    })
  }
}
