import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): unknown {
    if (!value) {
      return null;
    }

    if (!args) {
      return value;
    }

    return value.filter((data) => {
      return JSON.stringify(data).toLowerCase().includes(args);
    });
  }

}
