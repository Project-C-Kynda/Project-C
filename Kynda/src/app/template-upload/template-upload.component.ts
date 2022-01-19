import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Template } from '../database/models/template';
import { User } from '../database/models/user';
import { RestService } from '../database/services/rest.service';
import { TemplateUploadService } from './template-upload.service';

@Component({
	selector: 'app-template-upload',
	templateUrl: './template-upload.component.html',
	styleUrls: ['./template-upload.component.scss']
})
export class TemplateUploadComponent implements OnInit {

	// Variable to store shortLink from api response
	completeLoad: boolean = false;
	loading: boolean = false; // Flag variable
	file!: File; // Variable to store file
  template = new Template();
	
	user: any = [];
	currentUser = new User();

	addTemplate!: FormGroup;
	templateName!: FormControl;
	companyName!: FormControl;
	naam!: string;

	// Inject service
	constructor(private restservice: RestService, private router: Router, private cookieService: CookieService) {
		this.user = JSON.parse(this.cookieService.get('user') || '{}');
		this.currentUser = this.user[0];
	}

	ngOnInit(): void {
		if (this.currentUser == undefined || this.currentUser.roleid != 0)
		{
		this.router.navigate(['/no-access']);
		}

		this.templateName = new FormControl('', Validators.required);
		this.companyName = new FormControl();
		this.addTemplate = new FormGroup(
			{
			  'templateName': this.templateName,
			  'companyName' : this.companyName,
			}
		)
	}

	// On file Select
	onChange(event:any) {
		this.file = event.target.files[0];
	}

	// OnClick of button Upload
	onUpload() {
    this.template.name = this.file.name;
    this.restservice.UploadTemplate(this.file)
    .subscribe(data => {
      console.log(data);
    });
	}
}

