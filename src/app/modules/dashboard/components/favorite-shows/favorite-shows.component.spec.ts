import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FavoriteShowsComponent } from "./favorite-shows.component";

describe("FavoriteShowsComponent", () => {
  let component: FavoriteShowsComponent;
  let fixture: ComponentFixture<FavoriteShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteShowsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
