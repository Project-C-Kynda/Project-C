import { Component } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { User } from './database/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kynda Huisstijl Portaal';
}
