import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../database/models/user';
import { TemplateUploadService } from './template-upload.service';

@Component({
	selector: 'app-template-upload',
	templateUrl: './template-upload.component.html',
	styleUrls: ['./template-upload.component.css']
})
export class TemplateUploadComponent implements OnInit {

	// Variable to store shortLink from api response
	completeLoad: boolean = false;
	loading: boolean = false; // Flag variable
	file!: File; // Variable to store file
	
	user: any = [];
	currentUser = new User();
	// Inject service
	constructor(private templateUploadService: TemplateUploadService, private router: Router) {
		this.user = JSON.parse(localStorage.getItem('user') || '{}');
		this.currentUser = this.user[0];
	}

	ngOnInit(): void {
		if (this.currentUser == undefined || this.currentUser.roleid != 2)
		{
		this.router.navigate(['/no-access']);
		}
	}

	// On file Select
	onChange(event:any) {
		this.file = event.target.files[0];
	}

	// OnClick of button Upload
	onUpload() {
		this.completeLoad = false;
		this.loading = !this.loading;
		console.log(this.file);
		this.templateUploadService.upload(this.file).subscribe(
			(event: any) => {
				if (typeof (event) === 'object') {

					this.completeLoad = true;
					this.loading = false; // Flag variable
				}
			}
		);
	}
}

