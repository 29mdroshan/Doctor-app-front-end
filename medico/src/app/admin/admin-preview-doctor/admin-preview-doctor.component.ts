import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-preview-doctor',
  templateUrl: './admin-preview-doctor.component.html',
  styleUrls: ['./admin-preview-doctor.component.css']
})
export class AdminPreviewDoctorComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: any}) { }

}
