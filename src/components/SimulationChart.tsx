"use client"


import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
}

from "recharts";



export default function SimulationChart(
{
data
}:{
data:any[]
}
){


return(

<div className="
bg-white
border
rounded-3xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-6
">

📊 Statistik Modul Simulasi

</h2>



<div className="
h-72
">


<ResponsiveContainer
width="100%"
height="100%"
>


<BarChart
data={data}
>


<XAxis
dataKey="jenis"
/>


<YAxis/>


<Tooltip/>


<Bar
dataKey="jumlah"
/>


</BarChart>


</ResponsiveContainer>


</div>



</div>


)

}