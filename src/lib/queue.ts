export function calculateQueue(
arrivalRate:number,
serviceRate:number,
servers:number
){


const utilization =
arrivalRate /
(serviceRate * servers);



const averageSystem =
arrivalRate /
(serviceRate - arrivalRate);



const averageQueue =
Math.pow(utilization,2) /
(1-utilization);



const waitingTime =
averageQueue /
arrivalRate;



let status="";


if(utilization < 1){

status="Sistem stabil. Kapasitas pelayanan masih mencukupi.";

}
else{

status="Sistem tidak stabil. Antrean terus bertambah.";

}



return{


utilization:Number(
(utilization*100).toFixed(2)
),


averageSystem:Number(
averageSystem.toFixed(2)
),


averageQueue:Number(
averageQueue.toFixed(2)
),


waitingTime:Number(
waitingTime.toFixed(2)
),


status


}


}