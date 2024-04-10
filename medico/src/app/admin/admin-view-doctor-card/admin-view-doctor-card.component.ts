import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-view-doctor-card',
  templateUrl: './admin-view-doctor-card.component.html',
  styleUrls: ['./admin-view-doctor-card.component.css']
})
export class AdminViewDoctorCardComponent {
  @Input('doc')
  doc?:any

}
