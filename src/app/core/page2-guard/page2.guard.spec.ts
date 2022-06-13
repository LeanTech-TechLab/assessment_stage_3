import { TestBed } from "@angular/core/testing";

import { Page2Guard } from "./page2.guard";

describe("Page2Guard", () => {
  let guard: Page2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Page2Guard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
