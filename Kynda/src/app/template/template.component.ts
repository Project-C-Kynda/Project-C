import { Component, OnInit } from '@angular/core';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  Companies:any = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.GetCompanies().subscribe(res => {
      console.log(res);
      this.Companies = res;
    });
  }

}
