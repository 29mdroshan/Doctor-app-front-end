import { Injectable } from '@angular/core';
import { TimeSlots } from '../Entities/TimeSlots';

import { SlotsStatus } from '../Entities/SlotsStatus';

@Injectable({
  providedIn: 'root'
})
export class BookSlotService {

  constructor() { }
  bookSlot=new TimeSlots('',SlotsStatus.SLOTNOTBOOKED)

  bookTimeSlot(slot:any){
    this.bookSlot=slot
    console.log(this.bookSlot)
   
  }

  setTimeSlot(){
    this.bookSlot=new TimeSlots('',SlotsStatus.SLOTNOTBOOKED)
  }


}
