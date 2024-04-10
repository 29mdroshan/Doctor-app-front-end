import { Time } from "@angular/common";

export class BookAppointment{
    constructor(public appId:number,public userId:number,public userName:string,public userEmail:string,public appDate:Date, public appTime:string,public userSymptoms:string,public doctorId:number,public doctorName:string){}
}