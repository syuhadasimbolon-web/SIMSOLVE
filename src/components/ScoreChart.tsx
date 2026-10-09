"use client"

import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer
}
from "recharts";



export default function ScoreChart(
{
data
}:any
){



const chartData =

(data || []).map(

(item:any,index:number)=>(


{

nama:
`Latihan ${index+1}`,

skor:
Number(item.skor) || 0

}


)

);






return(

<div className="
w-full
h-80
">


{

chartData.length === 0

?


<p className="
text-gray-500
">

Belum ada data latihan

</p>


:


<ResponsiveContainer

width="100%"

height="100%"

>


<LineChart

data={chartData}

>


<CartesianGrid />



<XAxis

dataKey="nama"

/>



<YAxis

domain={[0,100]}

/>



<Tooltip />



<Line

type="monotone"

dataKey="skor"

/>



</LineChart>



</ResponsiveContainer>


}



</div>


)

}