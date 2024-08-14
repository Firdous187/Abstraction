import Hosiptal from "./Hosiptal";

class Dermatologist extends Hosiptal{
    noOfStaff: number=12;
    noOfRoom: number=15;
    noOfICU: number=3;
    noOfEmergenyRoom: number=5;
    noOfDoctor: number=7;
    noOfNurse: number=10;
    constructor(){
        super();
        console.log("Inside the Dermatologist Block");
    }
}
export default Dermatologist;