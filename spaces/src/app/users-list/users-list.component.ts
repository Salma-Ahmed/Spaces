import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent {
  users: any[];
  constructor(http: Http) {
    http.get("https://reqres.in/api/users?page=1").subscribe(response => {
      this.users = response.json().data;
    });
  }
}
