export function calculateInventory(
  demand:number,
  orderingCost:number,
  holdingCost:number,
  leadTime:number
){


const eoq = Math.sqrt(
  (2 * demand * orderingCost) /
  holdingCost
);



const dailyDemand = demand / 365;


const reorderPoint =
dailyDemand * leadTime;



const totalCost =
(
(demand / eoq) * orderingCost
)
+
(
(eoq / 2) * holdingCost
);



return {

eoq:Number(eoq.toFixed(2)),

reorderPoint:Number(
reorderPoint.toFixed(2)
),

totalCost:Number(
totalCost.toFixed(2)
)

};


}