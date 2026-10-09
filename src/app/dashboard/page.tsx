"use client"

import {useEffect,useState} from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ScoreChart from "@/components/ScoreChart";


export default function Dashboard(){


const [data,setData]=useState<any>({});

const [loading,setLoading]=useState(true);



useEffect(()=>{


const simsolve =

JSON.parse(

localStorage.getItem("simsolve")
||
"{}"

);


setData(simsolve);

setLoading(false);


},[]);





if(loading){

return(

<div className="p-10 text-center">

Loading...

</div>

)

}





const latihan = data.riwayatLatihan || [];


const totalSimulasi =

(data.montecarlo || 0) +

(data.inventory || 0) +

(data.queue || 0);


const monteCarlo = data.montecarlo || 0;


const inventory = data.inventory || 0;


const queue = data.queue || 0;





const skorTerbaik =

latihan.length > 0

?

Math.max(

...latihan.map(

(item:any)=>

Number(item.skor)||0

)

)

:

0;





const latihanTerakhir =

latihan.length > 0

?

latihan[latihan.length-1]

:

null;







function kategori(){


if(skorTerbaik>=80)

return "Sangat Baik 🎉";


if(skorTerbaik>=60)

return "Baik 👍";


return "Perlu Belajar 📚";


}







return(

<>


<Navbar/>





<main className="
min-h-screen
bg-gray-50
px-8
py-12
">


<section className="
max-w-7xl
mx-auto
">





<div className="
bg-gradient-to-r
from-indigo-600
to-blue-600
rounded-3xl
p-10
text-white
">


<h1 className="
text-5xl
font-bold
">

Dashboard SIMSOLVE 📊

</h1>


<p className="mt-4 text-lg">

Ringkasan aktivitas simulasi dan pembelajaran Anda.

</p>


</div>







<div className="mt-8 flex justify-end">


<button

onClick={()=>{

localStorage.removeItem("simsolve");

window.location.reload();

}}

className="
bg-red-500
text-white
px-6
py-3
rounded-xl
font-semibold
"

>

🗑 Reset Data

</button>


</div>









<div className="
mt-8
grid
md:grid-cols-5
gap-5
">





{

[
["📊 Total Simulasi",totalSimulasi],
["🎲 Monte Carlo",monteCarlo],
["📦 Persediaan",inventory],
["🚶 Antrean",queue],
["🏆 Skor Terbaik",skorTerbaik]

].map(

(item,index)=>(


<div

key={index}

className="
bg-white
rounded-3xl
border
p-6
"

>


<h3 className="font-semibold">

{item[0]}

</h3>


<p className="
mt-4
text-4xl
font-bold
">

{item[1]}

</p>


</div>


)


)


}


</div>









<div className="
mt-8
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
text-2xl
font-bold
">

🎓 Latihan Terakhir

</h2>




{

latihanTerakhir

?

<div className="
mt-5
space-y-3
text-lg
">


<p>

Level:

<b> {latihanTerakhir.level}</b>

</p>


<p>

Skor:

<b> {latihanTerakhir.skor}</b>

</p>


<p>

Tanggal:

<b> {latihanTerakhir.tanggal}</b>

</p>


<p className="
text-indigo-600
font-bold
">

{kategori()}

</p>


</div>


:

<p className="mt-5 text-gray-500">

Belum ada latihan

</p>


}



</div>










<div className="
bg-white
border
rounded-3xl
p-6
">


<h2 className="
text-2xl
font-bold
">

📈 Perkembangan Nilai

</h2>



<div className="mt-5">


<ScoreChart

data={latihan}

/>


</div>


</div>




</div>









<section className="
mt-10
bg-white
border
rounded-3xl
p-8
">


<h2 className="
text-3xl
font-bold
">

📚 Riwayat Latihan

</h2>





{

latihan.length===0


?


<p className="mt-5 text-gray-500">

Belum ada riwayat latihan.

</p>


:


<div className="
mt-6
space-y-4
">


{

latihan

.slice()

.reverse()

.map(

(item:any,index:number)=>(


<div

key={index}

className="
border
rounded-2xl
p-5
flex
justify-between
items-center
"


>


<div>


<h3 className="
font-bold
text-lg
">

Latihan {latihan.length-index}

</h3>


<p>

Level:

<b> {item.level}</b>

</p>


<p>

Tanggal:

{item.tanggal}

</p>


</div>





<div className="text-right">


<p className="
text-3xl
font-bold
text-indigo-600
">

{item.skor}

</p>


<p>

/100

</p>


</div>


</div>


)


)


}



</div>


}



</section>







</section>


</main>




<Footer/>


</>


)

}