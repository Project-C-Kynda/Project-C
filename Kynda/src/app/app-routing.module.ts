import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DatabaseComponent } from './database/database.component';
import { ImageLibraryComponent } from './image-library/image-library.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './account/login/login.component';
import { AccountComponent } from './account/account.component';
import { CompanyAccountComponent } from './account/company-account/company-account.component';
import { TemplateUploadComponent } from './template-upload/template-upload.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NoAccessComponent } from './no-access/no-access.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: "template", component: TemplateComponent},
  {path: "database", component: DatabaseComponent},
  {path: "image-library", component: ImageLibraryComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "login", component: LoginComponent},
  {path: "account", component: AccountComponent},
  {path: "company-account", component: CompanyAccountComponent},
  {path: "template-upload", component: TemplateUploadComponent},
  {path: "admin-dashboard", component: AdminDashboardComponent},
  {path: "no-access", component: NoAccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
