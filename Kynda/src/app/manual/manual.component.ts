import { Component, OnInit } from '@angular/core';
import { Company } from '../database/models/company';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {

  company: any = [];
  user!: any;

  constructor(private restservice: RestService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    console.log(this.user);
    this.restservice.GetCompanyById(this.user.companyid).subscribe(data => {
      console.log(data);
      this.company = data;
    })
  }

}