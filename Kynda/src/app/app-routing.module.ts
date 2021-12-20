import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DatabaseComponent } from './database/database.component';
import { ImageLibraryComponent } from './image-library/image-library.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './account/login/login.component';
import { AccountComponent } from './account/account.component';
import { CompanyAccountComponent } from './account/company-account/company-account.component';
import { TemplateUploadComponent } from './template-upload/template-upload.component';
import { TemplateLibraryComponent } from './template-library/template-library.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { CustomTemplateLibComponent } from './custom-template-lib/custom-template-lib.component';
import { ManualComponent } from './manual/manual.component';
import { NoAccessComponent } from './account/no-access/no-access.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { ClientReviewComponent } from './client-review/client-review.component';

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
  {path: "template-library", component: TemplateLibraryComponent},
  {path: "admin-dashboard", component: AdminDashboardComponent},
  {path: "client-dashboard", component: ClientDashboardComponent},
  {path: "custom-template-lib", component: CustomTemplateLibComponent},
  {path: "manual", component: ManualComponent},
  {path: "no-access", component: NoAccessComponent},
  {path: "forgot-password", component: ForgotPasswordComponent},
  {path: "client-review", component: ClientReviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }