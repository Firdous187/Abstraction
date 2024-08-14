import Hosiptal from "./Hosiptal";

class Surgeon extends Hosiptal{
    noOfStaff: number =12;
    noOfRoom: number=14;
    noOfICU: number=15;
    noOfEmergenyRoom: number=6;
    noOfDoctor: number=15;
    noOfNurse: number=12;
    constructor(){
        super();
        console.log("Inside the Surgeon Block");
    }
}
export default Surgeon;