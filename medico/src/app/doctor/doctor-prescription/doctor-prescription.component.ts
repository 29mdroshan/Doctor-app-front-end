import { Component } from '@angular/core';
import { DoctorPrescription } from 'src/app/Entities/DoctorPrescription';
import { DoctorPrescriptionApiService } from 'src/app/services/doctor-prescription-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-prescription',
  templateUrl: './doctor-prescription.component.html',
  styleUrls: ['./doctor-prescription.component.css']
})
export class DoctorPrescriptionComponent {
  constructor(public _prescriptionClient:DoctorPrescriptionApiService){}
  save(presp:DoctorPrescription){
    this._prescriptionClient.savePrescription(presp).subscribe(
      data=>{Swal.fire("Prescription Saved")}
    )
    
  }

}
