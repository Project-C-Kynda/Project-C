import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotoUploadComponent } from './foto-upload/foto-upload.component';
import { TemplateComponent } from './template/template.component';
import { DatabaseComponent } from './database/database.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/template',
    pathMatch: 'full'
  },
  {path: "template", component: TemplateComponent},
  {path: "photoUpload", component: FotoUploadComponent},
  {path: "database", component: DatabaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
