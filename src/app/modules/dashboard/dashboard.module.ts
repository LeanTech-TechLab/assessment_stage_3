import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "../dashboard/dashboard-routing.module";
import { MoviesTableComponent } from "./components/movies-table/movies-table.component";
import { FormMoviesComponent } from "./components/form-movies/form-movies.component";
import { AngularMaterialModule, FormsModule } from "@shared/index";
import { FavoriteShowsComponent } from "./components/favorite-shows/favorite-shows.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "@shared/pipes/pipes.module";
import { DirectivesModule } from "@shared/directives/directives.module";
import { FiltersComponent } from "./components/movies-table/components/filters/filters/filters.component";
import { SearchHistoryComponent } from "./components/search-history/search-history.component";

@NgModule({
  declarations: [
    DashboardComponent,
    MoviesTableComponent,
    FormMoviesComponent,
    FavoriteShowsComponent,
    FiltersComponent,
    SearchHistoryComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    DirectivesModule,
  ],
})
export class DashboardModule {}
