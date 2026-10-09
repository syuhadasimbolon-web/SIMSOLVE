"use client"

import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
Legend
} from "recharts";



export default function QueueChart(
{
data
}:{
data:any
}

){



const utilisasi = Number(data.utilisasi);



const kapasitasData=[

{
nama:"Utilisasi",
nilai:utilisasi
},

{
nama:"Sisa Kapasitas",
nilai:100-utilisasi
}

];





const performaData=[

{
nama:"Antrean",
nilai:Number(data.antrean)
},

{
nama:"Waktu Tunggu",
nilai:Number(data.waktu)
}

];







return(

<div className="
mt-10
grid
md:grid-cols-2
gap-6
">







<div className="
bg-white
border
rounded-3xl
p-6
">


<h2 className="
text-xl
font-bold
mb-5
">

🚶 Kapasitas Sistem

</h2>



<div className="
h-72
">


<ResponsiveContainer

width="100%"

height="100%"

>


<BarChart

data={kapasitasData}

>


<XAxis

dataKey="nama"

/>


<YAxis

domain={[0,100]}

/>


<Tooltip/>


<Legend/>


<Bar

dataKey="nilai"

/>


</BarChart>


</ResponsiveContainer>


</div>


</div>









<div className="
bg-white
border
rounded-3xl
p-6
">


<h2 className="
text-xl
font-bold
mb-5
">

📊 Performa Antrean

</h2>



<div className="
h-72
">


<ResponsiveContainer

width="100%"

height="100%"

>


<BarChart

data={performaData}

>


<XAxis

dataKey="nama"

/>


<YAxis/>


<Tooltip/>


<Legend/>


<Bar

dataKey="nilai"

/>


</BarChart>


</ResponsiveContainer>


</div>


</div>








</div>


)

}