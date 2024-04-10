import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-doctor-category',
  templateUrl: './patient-doctor-category.component.html',
  styleUrls: ['./patient-doctor-category.component.css']
})
export class PatientDoctorCategoryComponent {
  @Input('doc')
  doc?:any

}
