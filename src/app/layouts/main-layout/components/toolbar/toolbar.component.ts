import { Component, EventEmitter, Output } from "@angular/core";
import { AuthenticationService } from "@app-core/authentication/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent {
  @Output()
  toggleHideSidebar = new EventEmitter<any>();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  toggleSidebar() {
    /*const appSidebar = document.getElementsByClassName("app-sidebar")[0];
    if (appSidebar.classList.contains("hide-sidebar")) {
      this.toggleHideSidebar.emit(false);
    } else {
      this.toggleHideSidebar.emit(true);
    }*/
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl("login");
  }
}
