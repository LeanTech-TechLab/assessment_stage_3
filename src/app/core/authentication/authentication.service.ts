import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpService } from "../http/http.service";

export const TOKEN_NAME = "token";

@Injectable()
export class AuthenticationService {
  constructor(private httpService: HttpService) {}

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME) || "";
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  isTokenExpired(_token?: string): boolean {
    /* if (!token) {
      token = this.getToken();
    }
    if (!token) {
      return true;
    }
    return this.helper.isTokenExpired(token);*/
    return false;
  }

  login(username: string, password: string): Observable<unknown> {
    return this.httpService.post("", { username, password });
  }

  logout(): void {
    localStorage.removeItem(TOKEN_NAME);
  }
}
