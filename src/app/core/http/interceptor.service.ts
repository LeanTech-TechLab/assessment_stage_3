import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  // Intercept the request to set header.
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");
    const params = {
      "Content-Language": "en",
    };

    if (req.url.indexOf("login") === -1 && token) {
      req = req.clone({
        setHeaders: { ...params, Authorization: "Token " + token },
      });
    } else {
      req = req.clone({
        setHeaders: params,
      });
    }

    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
        },
        () => {}
      )
    );
  }
}
