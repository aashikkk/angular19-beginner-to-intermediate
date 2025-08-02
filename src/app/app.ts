import { Component, Input } from "@angular/core";
import { SideBar } from "../shared/components/side-bar/side-bar";
import { FormsModule } from "@angular/forms";
import { Heading } from "../learning/heading/heading";

@Component({
  selector: "app-root",
  imports: [SideBar, FormsModule, Heading],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  heading = "My main heading";
}
