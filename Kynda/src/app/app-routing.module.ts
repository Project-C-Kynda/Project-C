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
import { CompanyadminAccountComponent } from './account/companyadmin-account/companyadmin-account.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { CustomTemplateLibComponent } from './custom-template-lib/custom-template-lib.component';
import { ManualComponent } from './manual/manual.component';
import { NoAccessComponent } from './account/no-access/no-access.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { CompanyadminDashboardComponent } from './companyadmin-dashboard/companyadmin-dashboard.component';
import { ReviewTemplateComponent } from './companyadmin-dashboard/review-template/review-template.component';
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
  {path: "admin-dashboard", component: AdminDashboardComponent},
  {path: "companyadmin-account", component: CompanyadminAccountComponent},
  {path: "client-dashboard", component: ClientDashboardComponent},
  {path: "custom-template-lib", component: CustomTemplateLibComponent},
  {path: "manual", component: ManualComponent},
  {path: "no-access", component: NoAccessComponent},
  {path: "forgot-password", component: ForgotPasswordComponent},
<<<<<<< HEAD
  {path: "companyadmin-dashboard", component: CompanyadminDashboardComponent},
  {path: "review-template", component: ReviewTemplateComponent},
=======
  {path: "client-review", component: ClientReviewComponent},
>>>>>>> main

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
