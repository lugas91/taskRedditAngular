import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortdesc'
})
export class SortdescPipe implements PipeTransform {

  transform(array: number, field: number): any[] {
      if (!Array.isArray(array)) {
        return;
      }
      array.sort((a: any, b: any) => {
        if(isNaN(a[field])){
          if (a[field] > b[field]) {
            return -1;
          } else if (a[field] < b[field]) {
            return 1;
          } else {
            return 0;
          }
        }else{
          if (parseInt(a[field]) > parseInt(b[field])) {
            return -1;
          } else if (parseInt(a[field]) < parseInt(b[field])) {
            return 1;
          } else {
            return 0;
          }
        }
      });
      return array;
    }
}
