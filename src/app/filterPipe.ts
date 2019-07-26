import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 transform(items: any, term: any): any {
    if (term === undefined) return items;

    return items.filter(function(item) {
    debugger;
      term = term.replace(/[^a-zA-Z ]/g, "");
      term = term.replace(" ", "");
      var a =[];
      a.push(item.name)
      for(let property in a){
        if (a[property] === null){
          continue;
        }
        if(a[property].toLowerCase().includes(term.toLowerCase())){
          return true;
        }
      }
      return false;
    });
  }

}