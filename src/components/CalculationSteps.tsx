"use client"

import {useState} from "react";


export default function CalculationSteps(){


const [open,setOpen]=useState(false);


const steps=[

{
title:"Step 1 — Menentukan Parameter",
text:
"Pengguna menentukan jumlah simulasi, nilai minimum, dan nilai maksimum yang akan digunakan."
},


{
title:"Step 2 — Generate Random Number",
text:
"Sistem menghasilkan bilangan acak antara 0 sampai 1 sebagai dasar proses simulasi."
},


{
title:"Step 3 — Transformasi Nilai",
text:
"Bilangan acak dikonversi menjadi nilai simulasi sesuai rentang minimum dan maksimum."
},


{
title:"Step 4 — Perhitungan Statistik",
text:
"Sistem menghitung nilai rata-rata, nilai tertinggi, dan variasi hasil simulasi."
},


{
title:"Step 5 — Interpretasi",
text:
"Hasil simulasi digunakan untuk memahami kemungkinan kejadian berdasarkan data acak."
}

];


return(

<section className="
mt-10
bg-white
border
rounded-3xl
p-6
">


<button

onClick={()=>setOpen(!open)}

className="
text-xl
font-bold
text-indigo-600
"

>

📘 Cara Kerja Simulasi

</button>



{

open &&

<div className="
mt-6
space-y-4
">


{

steps.map((step,index)=>(


<div

key={index}

className="
border
rounded-xl
p-4
"

>


<h3 className="
font-bold
">

{step.title}

</h3>


<p className="
mt-2
text-gray-600
">

{step.text}

</p>


</div>


))


}


</div>

}



</section>

)

}