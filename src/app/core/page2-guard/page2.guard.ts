import { Injectable } from "@angular/core";
import { CanDeactivate, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { IDeactivateComponent } from "@app-models/deactivateComponent.model";

@Injectable({
  providedIn: "root",
})
export class Page2Guard implements CanDeactivate<IDeactivateComponent> {
  component: Object;
  canDeactivate(
    component: IDeactivateComponent
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.canExit ? component.canExit() : true;
  }
}
