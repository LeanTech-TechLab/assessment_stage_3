import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YearRangeDirective } from "./year-range/year-range.directive";

@NgModule({
  declarations: [YearRangeDirective],
  imports: [CommonModule],
  exports: [YearRangeDirective],
})
export class DirectivesModule {}
