import { JwtModule } from "@auth0/angular-jwt";
import { AuthService } from "./services/auth.service";
import { FormsModule } from "@angular/forms";
import { UsersService } from "./services/users.service";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ButtonComponent } from "./button/button.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { UserComponent } from "./user/user.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { SingleUserComponent } from './single-user/single-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    UserComponent,
    UsersListComponent,
    LoginComponent,
    SingleUserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: LoginComponent },
      { path: "users", component: UsersListComponent }
    ]),
    JwtModule
  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
