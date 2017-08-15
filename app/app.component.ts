import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    console.dir({
      type: "Apple",
      color: "Red"
    });
  }
  onTap() {
    console.dir('tap');
  }
}