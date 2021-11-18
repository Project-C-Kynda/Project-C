import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

=======
import {HttpClientModule} from '@angular/common/http';
>>>>>>> templatesinvullen
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ImageLibraryComponent } from './image-library/image-library.component';
<<<<<<< HEAD
import { DatabaseComponent } from './database/database.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { CompanyAccountComponent } from './account/company-account/company-account.component';
=======
import { TemplateUploadComponent } from './template-upload/template-upload.component';

>>>>>>> templatesinvullen

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ImageLibraryComponent,
<<<<<<< HEAD
    DatabaseComponent,
    LoginComponent,
    AccountComponent,
    CompanyAccountComponent
=======
    TemplateUploadComponent
>>>>>>> templatesinvullen
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
=======
    AppRoutingModule,
    HttpClientModule,
>>>>>>> templatesinvullen
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }