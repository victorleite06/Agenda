import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (!value) {
      return ''
    }
    if(value.toString().length == 11){
      let somenteNumeros = value.toString().split(/ /)[0].replace(/[^\d]/g, '')
      let parte1 = somenteNumeros.slice(0,2)
      let parte2 = somenteNumeros.slice(2,7)
      let parte3 = somenteNumeros.slice(7,11)
      return `(${parte1}) ${parte2}-${parte3}`;
    }else{
      let somenteNumeros = value.toString().split(/ /)[0].replace(/[^\d]/g, '')
      let parte1 = somenteNumeros.slice(0,2)
      let parte2 = somenteNumeros.slice(2,6)
      let parte3 = somenteNumeros.slice(6,10)
      return `(${parte1}) ${parte2}-${parte3}`;
    }
  }

}
