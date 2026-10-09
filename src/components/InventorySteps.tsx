"use client"

import {useState} from "react";


export default function InventorySteps(){


const [open,setOpen] = useState(false);



const steps = [

{
title:"Langkah 1 — Menentukan Parameter",
text:
"Masukkan data kebutuhan tahunan, biaya pemesanan, biaya penyimpanan, dan waktu tunggu pengiriman."
},


{
title:"Langkah 2 — Menghitung EOQ",
text:
"Sistem menghitung jumlah pemesanan ekonomis menggunakan rumus Economic Order Quantity (EOQ) untuk mendapatkan jumlah pembelian optimal."
},


{
title:"Langkah 3 — Menghitung Reorder Point",
text:
"Sistem menentukan titik pemesanan kembali berdasarkan kebutuhan harian dan waktu tunggu agar tidak terjadi kekurangan stok."
},


{
title:"Langkah 4 — Menghitung Total Inventory Cost",
text:
"Sistem menghitung total biaya persediaan yang terdiri dari biaya pemesanan dan biaya penyimpanan."
},


{
title:"Langkah 5 — Interpretasi Hasil",
text:
"Hasil perhitungan digunakan sebagai rekomendasi keputusan pengelolaan persediaan."
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

📘 Cara Kerja Inventory Model

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