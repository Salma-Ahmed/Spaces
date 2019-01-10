import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "app-button",
  template: "<button type='button' class='btn btn-primary'>{{text}}</button>",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent {
  @Input() text: string;
}
