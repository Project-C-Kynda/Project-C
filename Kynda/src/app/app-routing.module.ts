import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotoUploadComponent } from './foto-upload/foto-upload.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/photoUpload',
    pathMatch: 'full'
  },
  {path: "template", component: TemplateComponent},
  {path: "photoUpload", component: FotoUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
