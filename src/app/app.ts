import { Component, signal } from "@angular/core";
import { SideBar } from "../shared/side-bar/side-bar";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  imports: [SideBar, FormsModule],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("app");
  name = "Aashik";
}
