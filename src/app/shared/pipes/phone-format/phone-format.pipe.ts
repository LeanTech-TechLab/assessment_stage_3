import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phoneFormat",
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    console.log("args", args);
    let response = "";
    let data = value.replace(/[^0-9]*/g, "").slice(0, 10); // Only numbers

    const dataSize = data.length;
    if (dataSize === 3) {
      response = `${data}-`;
    } else if (dataSize > 3 && dataSize < 6) {
      response = `${data.slice(0, 3)}-${data.slice(3, dataSize + 1)}`;
    } else if (dataSize === 6) {
      response = `${data.slice(0, 3)}-${data.slice(3, 6)}-`;
    } else if (dataSize > 6 && dataSize <= 10) {
      response = `${data.slice(0, 3)}-${data.slice(3, 6)}-${data.slice(
        6,
        dataSize + 1
      )}`;
    } else {
      response = data;
    }
    return response;
  }
}
