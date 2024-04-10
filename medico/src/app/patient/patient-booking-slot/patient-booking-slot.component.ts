import { Component ,Input, OnInit} from '@angular/core';
import { BookSlotService } from 'src/app/services/book-slot.service';


@Component({
  selector: 'app-patient-booking-slot',
  templateUrl: './patient-booking-slot.component.html',
  styleUrls: ['./patient-booking-slot.component.css']
})
export class PatientBookingSlotComponent implements OnInit {
 
  @Input('slot')
  slot?:any

  constructor(public _bookSlotClient:BookSlotService){}
  ngOnInit(): void {
 
  }
  textStyle?='white'

  changeSlot(appSlot:any){
    this._bookSlotClient.bookTimeSlot(appSlot)
    this.textStyle='red'
  }

}