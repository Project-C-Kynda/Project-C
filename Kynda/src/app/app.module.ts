import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotoUploadComponent } from './foto-upload/foto-upload.component';
import { TemplateComponent } from './template/template.component';
import { ImageLibraryComponent } from './image-library/image-library.component';

@NgModule({
  declarations: [
    AppComponent,
    FotoUploadComponent,
    TemplateComponent,
    ImageLibraryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
