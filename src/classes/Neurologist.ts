import Hosiptal from "./Hosiptal";

class Neurologist extends Hosiptal{
    noOfStaff: number=10;
    noOfRoom: number=13;
    noOfICU: number =2;
    noOfEmergenyRoom: number=4;
    noOfDoctor: number=5;
    noOfNurse: number=7;
    constructor(){
        super();
        console.log("Inside the Neurologist block");

    }
}
export default Neurologist;