import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { Page2Guard } from "@app-core/page2-guard/page2.guard";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canDeactivate: [Page2Guard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
