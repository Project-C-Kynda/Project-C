import { Component, OnInit } from '@angular/core';
import { Company } from '../database/models/company';
import { RestService } from '../database/services/rest.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {

  company = new Company();

  constructor(private restservice: RestService) { }

  ngOnInit(): void {

  }

}
