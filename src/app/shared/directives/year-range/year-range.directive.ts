import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appYearRange]",
})
export class YearRangeDirective {
  constructor(private el: ElementRef) {}

  // @ts-ignore
  @HostListener("keyup", ["$event"]) onKeyUp(event: any) {
    const initalValue = this.el.nativeElement.value;
    const key = event.keyCode || event.charCode;
    if (key === 8 || key === 46) return false;
    this.el.nativeElement.value = this.formatValue(initalValue);
    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

  private formatValue(value: string): string {
    let response = "";
    let data = value.replace(/[^0-9]*/g, "").slice(0, 8); // Only numbers

    const dataSize = data.length;
    if (dataSize === 4) {
      response = `${data}-`;
    } else if (dataSize > 4 && dataSize < 10) {
      response = `${data.slice(0, 4)}-${data.slice(4, dataSize + 1)}`;
    } else {
      response = data;
    }
    return response;
  }
}
