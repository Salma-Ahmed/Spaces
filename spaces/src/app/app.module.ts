import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ButtonComponent } from "./button/button.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, NavbarComponent, UserComponent, UsersListComponent, LoginComponent],
  imports: [BrowserModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
