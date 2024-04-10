import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from './Entities/Patient';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: Patient[], args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter(patient=>patient.userName.toLocaleLowerCase().includes(args) ||patient.userId.toString().startsWith(args) ||patient.userEmail.toLocaleLowerCase().includes(args));
      
    }


}
