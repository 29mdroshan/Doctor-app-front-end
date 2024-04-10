export class DoctorPrescription{
    constructor(public doctorId:number,public  userId:number,public  userName:string,
        public disease:string,public prescription:string){}
}