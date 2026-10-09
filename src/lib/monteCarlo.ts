export interface SimulationResult {
  iteration:number;
  random:number;
  value:number;
}



export function runMonteCarlo(
  simulation:number,
  min:number,
  max:number
){

const results:SimulationResult[]=[];


for(let i=1;i<=simulation;i++){

const random=Math.random();


const value=Math.floor(
  min + random * (max-min)
);


results.push({

iteration:i,

random:Number(random.toFixed(3)),

value:value

});


}


return results;

}