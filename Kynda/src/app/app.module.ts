import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TemplateComponent } from './template/template.component';
import { ImageLibraryComponent } from './image-library/image-library.component';
import { DatabaseComponent } from './database/database.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './account/login/login.component';
import { AccountComponent } from './account/account.component';
import { CompanyAccountComponent } from './account/company-account/company-account.component';
import { TemplateUploadComponent } from './template-upload/template-upload.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
<<<<<<< HEAD
import { CompanyadminAccountComponent } from './account/companyadmin-account/companyadmin-account.component';
import { CompanyadminDashboardComponent } from './companyadmin-dashboard/companyadmin-dashboard.component';

=======
import { NoAccessComponent } from './account/no-access/no-access.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ImageLibraryComponent,
    DatabaseComponent,
    NavbarComponent,
    LoginComponent,
    AccountComponent,
    CompanyAccountComponent,
    TemplateUploadComponent,
    AdminDashboardComponent,
<<<<<<< HEAD
    CompanyadminAccountComponent,
    CompanyadminDashboardComponent,
=======
    NoAccessComponent,
    ForgotPasswordComponent,
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }