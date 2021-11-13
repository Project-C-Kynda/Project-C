import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ImageLibraryComponent } from './image-library/image-library.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/template',
    pathMatch: 'full'
  },
  {path: "template", component: TemplateComponent},
  {path: "image-library", component: ImageLibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
