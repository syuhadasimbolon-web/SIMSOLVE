"use client"

import {useState} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MonteCarloChart from "@/components/MonteCarloChart";
import {tambahStatistik} from "@/lib/statistic";


export default function MonteCarlo(){


const [jumlah,setJumlah]=useState(100);

const [minimum,setMinimum]=useState(20);

const [maksimum,setMaksimum]=useState(80);


const [data,setData]=useState<number[]>([]);

const [hasil,setHasil]=useState<any>(null);





function simulasi(){


let hasilSimulasi:number[]=[];



for(let i=0;i<jumlah;i++){


const random =

Math.floor(

Math.random()

*

(maksimum-minimum+1)

)

+

minimum;



hasilSimulasi.push(random);


}





const rata =

hasilSimulasi.reduce(

(a,b)=>a+b,

0

)

/

jumlah;





const result={

jumlah,

rata:rata.toFixed(2),

tertinggi:Math.max(...hasilSimulasi),

terendah:Math.min(...hasilSimulasi)

};




setData(hasilSimulasi);

setHasil(result);




tambahStatistik(

"montecarlo",

{

jenis:"Monte Carlo"

}

);


}







function exportCSV(){


if(data.length===0)

return;



const csv =

"Nomor,Hasil\n"+

data.map(

(item,index)=>

`${index+1},${item}`

)

.join("\n");





const blob =

new Blob(

[csv],

{

type:"text/csv"

}

);



const url =

URL.createObjectURL(blob);



const link =

document.createElement("a");


link.href=url;


link.download="hasil_monte_carlo.csv";


link.click();



URL.revokeObjectURL(url);



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
text-4xl
font-bold
">

🎲 Simulator Monte Carlo

</h1>


<p className="
mt-3
">

Simulasi menggunakan bilangan acak untuk menganalisis kemungkinan hasil.

</p>


</div>







<div className="
mt-10
bg-white
rounded-3xl
border
p-8
">


<h2 className="
text-2xl
font-bold
">

Parameter Simulasi

</h2>




<div className="
grid
md:grid-cols-3
gap-6
mt-6
">


<div>

<label>
Jumlah Simulasi
</label>

<input

type="number"

value={jumlah}

onChange={e=>

setJumlah(Number(e.target.value))

}

className="
w-full
border
rounded-xl
p-3
"

/>

</div>





<div>

<label>
Nilai Minimum
</label>

<input

type="number"

value={minimum}

onChange={e=>

setMinimum(Number(e.target.value))

}

className="
w-full
border
rounded-xl
p-3
"

/>

</div>





<div>

<label>
Nilai Maksimum
</label>

<input

type="number"

value={maksimum}

onChange={e=>

setMaksimum(Number(e.target.value))

}

className="
w-full
border
rounded-xl
p-3
"

/>

</div>



</div>







<div className="
mt-8
flex
gap-4
">


<button

onClick={simulasi}

className="
btn-primary
"

>

Jalankan Simulasi 🚀

</button>




<button

onClick={exportCSV}

className="
bg-green-600
text-white
px-6
py-3
rounded-xl
"

>

Ekspor CSV

</button>



</div>



</div>









{

hasil &&

<>



<div className="
mt-10
grid
md:grid-cols-4
gap-6
">


<div className="card-modern">

<p>
Jumlah Iterasi
</p>

<h2>
{hasil.jumlah}
</h2>

</div>



<div className="card-modern">

<p>
Nilai Rata-rata
</p>

<h2>
{hasil.rata}
</h2>

</div>



<div className="card-modern">

<p>
Nilai Tertinggi
</p>

<h2>
{hasil.tertinggi}
</h2>

</div>



<div className="card-modern">

<p>
Nilai Terendah
</p>

<h2>
{hasil.terendah}
</h2>

</div>


</div>





<MonteCarloChart

data={data}

/>






<div className="
mt-10
card-modern
">


<h2>
Interpretasi Hasil
</h2>


<p>

Berdasarkan {hasil.jumlah} kali simulasi,
nilai rata-rata hasil yang diperoleh adalah {hasil.rata}.

</p>


</div>



</>


}



</section>

</main>


<Footer/>

</>


)

}