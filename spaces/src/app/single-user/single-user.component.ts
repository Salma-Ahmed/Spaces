import { Component, Input } from "@angular/core";

@Component({
  selector: "app-single-user",
  templateUrl: "./single-user.component.html",
  styleUrls: ["./single-user.component.css"]
})
export class SingleUserComponent {
  @Input() image: string;
  @Input() name: string;
  constructor() {}
}
