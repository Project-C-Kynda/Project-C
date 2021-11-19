import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/database/services/rest.service';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.component.html',
  styleUrls: ['./company-account.component.css']
})
export class CompanyAccountComponent implements OnInit {

  addCompany!: FormGroup;

  companyName!: FormControl;
  styleguide!: FormControl;

  fileName = '';


  constructor(private restservice : RestService) { }

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
}
