import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { AuthenticationService } from "../authentication/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate() {
    if (!this.authService.isTokenExpired()) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
