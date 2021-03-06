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
import { CookieService } from 'ngx-cookie-service';
import { CompanyAccountComponent } from './account/company-account/company-account.component';
import { TemplateUploadComponent } from './template-upload/template-upload.component';
import { TemplateLibraryComponent } from './template-library/template-library.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CompanyadminAccountComponent } from './account/companyadmin-account/companyadmin-account.component';
import { CompanyadminDashboardComponent } from './companyadmin-dashboard/companyadmin-dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { CustomTemplateLibComponent } from './custom-template-lib/custom-template-lib.component';
import { ManualComponent } from './manual/manual.component';

import { NoAccessComponent } from './account/no-access/no-access.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { ReviewTemplateComponent } from './companyadmin-dashboard/review-template/review-template.component';
import { ClientReviewComponent } from './client-review/client-review.component';

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
    TemplateLibraryComponent,
    AdminDashboardComponent,
    CompanyadminAccountComponent,
    CompanyadminDashboardComponent,
    ClientDashboardComponent,
    CustomTemplateLibComponent,
    ManualComponent,
    NoAccessComponent,
    ForgotPasswordComponent,
    ReviewTemplateComponent,
    ClientReviewComponent,
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
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
