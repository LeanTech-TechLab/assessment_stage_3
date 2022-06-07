import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-layout",
  templateUrl: "./login-layout.component.html",
  styleUrls: ["./login-layout.component.scss"],
})
export class LoginLayoutComponent {
  constructor(private router: Router) {}

  goTo(): void {
    this.router.navigate(["/dashboard"]);
  }
}
