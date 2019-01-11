import { UsersService } from "./../services/users.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  users: any[];
  private isSingleUser: boolean = false;
  private image: string;
  private name: string;
  private id: number;
  constructor(private service: UsersService) {}
  ngOnInit() {
    this.service.getUsers().subscribe(response => {
      this.users = response.json().data;
    });
  }
  openUser(image, firstName, lastName, id) {
    this.image = image;
    this.name = `${firstName} ${lastName}`;
    this.id = id;
    this.isSingleUser = true;
  }
  closeUser() {
    this.isSingleUser = false;
  }
}
