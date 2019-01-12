import { UsersService } from "./../services/users.service";
import { Component, Output } from "@angular/core";
import { ViewChild } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent {
  private isSubmitted = false;
  @ViewChild("f") formValues;
  constructor(private service: UsersService) {}
  reset() {
    this.service.setAction(true, this.getAction().action);
    this.formValues.resetForm();
  }
  getAction() {
    return this.service.getAction();
  }
  createUser(user) {
    this.service.createUser(user).subscribe(response => {
      this.reset();
    });
  }
  updateUser(user, userId) {
    this.service.updateUser(user, userId).subscribe(response => {
      this.reset();
    });
  }
  deleteUser(userId) {
    this.service.deleteUser(userId).subscribe(response => {
      this.service.setAction(true, this.getAction().action);
    });
  }
}
