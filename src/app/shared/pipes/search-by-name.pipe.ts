import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(list: any, text: any) {
    if (!text) return list;
    if (!list) return null;
    text = text.toLowerCase();
    return list.filter(function (data:any) {
      if(typeof(data.NombreCliente) == 'string'){
        return data.NombreCliente.toLowerCase().includes(text);
      }
    });
  }

}
