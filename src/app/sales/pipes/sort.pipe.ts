import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): any {
    switch (args[0]) {
      case 'name':
        value.sort(function (a: any, b: any) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        return value;
      case 'grade':
        value.sort(function (a: any, b: any) {
          if (a.grade < b.grade) {
            return 1;
          }
          if (a.grade > b.grade) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        return value;
      case 'career':
        value.sort(function (a: any, b: any) {
          if (a.career > b.career) {
            return 1;
          }
          if (a.career < b.career) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      return value;
      default:
        break;
    }
  }

}
