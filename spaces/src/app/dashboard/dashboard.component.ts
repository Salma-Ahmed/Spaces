import { AuthService } from "./../services/auth.service";
import { UsersService } from "./../services/users.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  constructor(
    private authService: AuthService,
    private service: UsersService
  ) {}
  setCreateAction() {
    this.service.setAction(false, "create");
  }
}
