import { NgModule } from "@angular/core";
import { LoginLayoutComponent } from "./login-layout.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login-routing.module";
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "@shared/index";

@NgModule({
  declarations: [LoginLayoutComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    CommonModule,
    AngularMaterialModule,
  ],
})
export class LoginLayoutModule {}
