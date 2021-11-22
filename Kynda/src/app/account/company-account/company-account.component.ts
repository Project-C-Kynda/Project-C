import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
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

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';

  fileInfos?: Observable<any>;

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
    this.selectedFiles = event.target.files;

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

  upload(): void {
    if(this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if(file) {
        this.currentFile = file;

        this.restservice.UploadFile(this.currentFile).subscribe(
          (err: any) => {
            console.log(err);

            if(err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload file!';
            }
          this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }
  }

  downloadFile() {
    console.log("downloading");
    this.restservice.DownloadFile()
    .subscribe(data => {
      console.log(data);
    });
  }

  uploadCompany(){
    this.upload();
    this.makeCompany();
    this.restservice.AddCompany(this.company)
    .subscribe(data => {
     console.log(data);
    })
  }
}
