abstract class Hosiptal{
    constructor(){
        console.log("Inside the hospital");
    }
    abstract noOfStaff:number;
    abstract noOfRoom:number;
    abstract noOfICU:number;
    abstract noOfEmergenyRoom:number;
    abstract noOfDoctor:number;
    abstract noOfNurse:number;
}
export default Hosiptal;