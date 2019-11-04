import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: any[], phrase: string, key: string = null): any {
    if (!value || !phrase) {
      return value;
    }

    if (key) {
      return value.filter( item => {
        return ('' + item[key]).toLowerCase().indexOf(
          phrase.toLowerCase()
        ) > -1;
      });
    }

    return value.filter( item => {
      const jsonItem: string = JSON.stringify(item)
          .replace(/"[^"]*"\:/g, '')
          .replace(/[",\{\}]/g, '');
      return jsonItem.toLowerCase()
        .indexOf(phrase.toLowerCase()) > -1;
    });
  }

}
