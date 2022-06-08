import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "inputLabel",
})
export class InputLabelPipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    return value + args[0];
  }
}
