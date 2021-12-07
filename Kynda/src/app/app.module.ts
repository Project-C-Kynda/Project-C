import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ImageLibraryComponent } from './image-library/image-library.component';
import { DatabaseComponent } from './database/database.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { CookieService } from 'ngx-cookie-service';
import { CompanyAccountComponent } from './account/company-account/company-account.component';
import { TemplateUploadComponent } from './template-upload/template-upload.component';


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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }