import { UsersService } from "./../services/users.service";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-single-user",
  templateUrl: "./single-user.component.html",
  styleUrls: ["./single-user.component.css"]
})
export class SingleUserComponent {
  @Input() image: string;
  @Input() name: string;
  @Input() userId: number;
  constructor(private service: UsersService) {}
  setUpdateAction() {
    this.service.setAction(false, "update", this.image, this.userId, this.name);
  }
  setDeleteAction() {
    this.service.setAction(false, "delete", this.image, this.userId, this.name);
  }
}
