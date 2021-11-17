import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DatabaseComponent } from './database/database.component';
import { ImageLibraryComponent } from './image-library/image-library.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/template',
    pathMatch: 'full'
  },
  {path: "template", component: TemplateComponent},
  {path: "database", component: DatabaseComponent},
  {path: "image-library", component: ImageLibraryComponent},
  {path: "navbar", component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
