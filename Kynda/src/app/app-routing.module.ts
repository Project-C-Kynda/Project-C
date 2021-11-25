import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DatabaseComponent } from './database/database.component';
import { ImageLibraryComponent } from './image-library/image-library.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { CompanyAccountComponent } from './account/company-account/company-account.component';
import { TemplateUploadComponent } from './template-upload/template-upload.component';
import { TemplateLibraryComponent } from './template-library/template-library.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: "template", component: TemplateComponent},
  {path: "database", component: DatabaseComponent},
  {path: "image-library", component: ImageLibraryComponent},
  {path: "login", component: LoginComponent},
  {path: "account", component: AccountComponent},
  {path: "company-account", component: CompanyAccountComponent},
  {path: "template-upload", component: TemplateUploadComponent},
  {path: "template-library", component: TemplateLibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
