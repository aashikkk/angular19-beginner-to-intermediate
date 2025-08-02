import { Component, signal } from "@angular/core";
import { SideBar } from "../shared/side-bar/side-bar";

@Component({
  selector: "app-root",
  imports: [SideBar],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("app");
  name = "Aashik";
  onChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }
}
