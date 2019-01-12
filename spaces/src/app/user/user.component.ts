import { Component, Input, Output } from "@angular/core";
import { UsersService } from "./../services/users.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent {
  @Input() img: string;
  @Input() name: string;
  @Input() private activeId: number;
  @Input() private userId: number;
  constructor(private service: UsersService) {}
  isActive(activeId, userId) {
    if (activeId === userId) {
      return true;
    }
    return false;
  }
  setUpdateAction() {
    this.service.setAction(false, "update", this.img, this.userId, this.name);
  }
  setDeleteAction() {
    this.service.setAction(false, "delete", this.img, this.userId, this.name);
  }
}
