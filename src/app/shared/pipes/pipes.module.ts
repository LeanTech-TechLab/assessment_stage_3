import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputLabelPipe } from "@shared/pipes/input-label/input-label.pipe";

@NgModule({
  declarations: [InputLabelPipe],
  imports: [CommonModule],
  exports: [InputLabelPipe],
})
export class PipesModule {}
