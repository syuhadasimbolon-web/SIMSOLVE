"use client"

import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";



export default function InventoryChart(
{
data
}:{
data:any
}

){



const chartData=[


{
nama:"EOQ",
nilai:Number(data.eoq)
},


{
nama:"ROP",
nilai:Number(data.rop)
},


{
nama:"Harian",
nilai:Number(data.kebutuhanHarian)
}



];






return(

<div className="
mt-10
bg-white
border
rounded-3xl
p-6
">


<h2 className="
text-2xl
font-bold
mb-5
">

📊 Grafik Analisis Persediaan

</h2>





<div className="
h-80
">


<ResponsiveContainer

width="100%"

height="100%"

>


<BarChart

data={chartData}

>


<XAxis

dataKey="nama"

/>


<YAxis/>


<Tooltip/>


<Bar

dataKey="nilai"

fill="#4f46e5"

/>


</BarChart>


</ResponsiveContainer>


</div>



</div>


)

}