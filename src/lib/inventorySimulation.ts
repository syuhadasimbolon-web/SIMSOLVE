export function simulateInventory(
eoq:number
){


const data=[];


let stock=eoq;



for(let day=1; day<=30; day++){


stock -= Math.floor(
Math.random()*30
);



if(stock <= 0){

stock=eoq;

}



data.push({

day,

stock:Number(
stock.toFixed(0)
)

});


}



return data;


}