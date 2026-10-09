"use client"

import {
LineChart,
Line,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";



export default function MonteCarloChart(
{
data
}:{
data:number[]
}

){



const chartData = data.map(

(item,index)=>(

{
iterasi:index+1,
nilai:item
}

)

);





// membuat distribusi frekuensi

const kelompok = [

{
label:"20-30",
min:20,
max:30
},

{
label:"31-40",
min:31,
max:40
},

{
label:"41-50",
min:41,
max:50
},

{
label:"51-60",
min:51,
max:60
},

{
label:"61-70",
min:61,
max:70
},

{
label:"71-80",
min:71,
max:80
}

];





const distribusi = kelompok.map(

(item)=>(


{
range:item.label,

jumlah:

data.filter(

(nilai)=>

nilai>=item.min &&
nilai<=item.max

).length

}


)

);









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
font-bold
text-xl
mb-5
">

📈 Tren Simulasi

</h2>




<div className="
h-72
">


<ResponsiveContainer

width="100%"

height="100%"

>


<LineChart

data={chartData}

>


<XAxis

dataKey="iterasi"

/>


<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="nilai"

stroke="#4f46e5"

strokeWidth={3}

/>


</LineChart>


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
font-bold
text-xl
mb-5
">

📊 Distribusi Nilai

</h2>





<div className="
h-72
">


<ResponsiveContainer

width="100%"

height="100%"

>


<BarChart

data={distribusi}

>


<XAxis

dataKey="range"

/>


<YAxis/>


<Tooltip/>


<Bar

dataKey="jumlah"

fill="#6366f1"

/>


</BarChart>


</ResponsiveContainer>


</div>


</div>





</div>


)

}