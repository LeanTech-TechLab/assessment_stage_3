import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginLayoutComponent } from "./login-layout.component";

const routes: Routes = [
  {
    path: "",
    component: LoginLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
