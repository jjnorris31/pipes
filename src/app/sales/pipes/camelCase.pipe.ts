import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        if (args[0]) {
            const splittedValue = value.split(" ");
            const result = splittedValue.reduce((previousValue, currentValue) => 
            previousValue + currentValue[0].toUpperCase() + currentValue.slice(1, currentValue.length), "")
            return result;
        } else {
            return value;
        }
    }
}