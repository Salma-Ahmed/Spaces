import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  links = ["Home", "About", "Contact"];
  constructor(private authService: AuthService, private router: Router) {}
  signOut() {
    this.authService.logOut();
    this.router.navigate(["/"]);
  }
}
