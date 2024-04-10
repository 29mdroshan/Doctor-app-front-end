import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from './Entities/Doctor';

@Pipe({
  name: 'doctorFilter'
})
export class DoctorFilterPipe implements PipeTransform {

  transform(value: Doctor[], args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter(doctor=>doctor.doctorName.toLocaleLowerCase().includes(args) ||doctor.doctorAddress.toString().startsWith(args) ||doctor.doctorSpeciality.toLocaleLowerCase().includes(args)  ||doctor.doctorEmail.toLocaleLowerCase().includes(args));
      
    }

}
