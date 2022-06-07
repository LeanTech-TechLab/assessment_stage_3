import {Component, EventEmitter, Input, Output } from "@angular/core";
import { MovieInterface } from "@app-models/movie.model";

@Component({
  selector: "app-favorite-shows",
  templateUrl: "./favorite-shows.component.html",
  styleUrls: ["./favorite-shows.component.scss"],
})
export class FavoriteShowsComponent{
  displayedColumns: string[] = ['title', 'type', 'year', 'selectedDate', 'comment'];
  @Input() favorites: MovieInterface[];
  @Output() removeFavoriteEmitter = new EventEmitter<number>();
  constructor() {
    this.favorites = [];
  }

  removeFavorite(index: number) {
    this.removeFavoriteEmitter.emit(index);
  }
}
