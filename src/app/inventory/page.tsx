"use client"

import {useState} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InventoryChart from "@/components/InventoryChart";
import {tambahStatistik} from "@/lib/statistic";


export default function Inventory(){


const [permintaan,setPermintaan]=useState(12000);

const [biayaPesan,setBiayaPesan]=useState(50000);

const [biayaSimpan,setBiayaSimpan]=useState(2000);

const [hariKerja,setHariKerja]=useState(300);

const [leadTime,setLeadTime]=useState(7);


const [hasil,setHasil]=useState<any>(null);





function hitung(){


const eoq =

Math.sqrt(

(2 *

permintaan *

biayaPesan)

/

biayaSimpan

);




const frekuensi =

permintaan / eoq;




const kebutuhanHarian =

permintaan / hariKerja;




const rop =

kebutuhanHarian * leadTime;




const biaya =

(

permintaan / eoq

*

biayaPesan

)

+

(

eoq / 2

*

biayaSimpan

);






const data={


eoq:Math.round(eoq),


frekuensi:frekuensi.toFixed(2),


rop:Math.round(rop),


biaya:Math.round(biaya),


kebutuhanHarian:kebutuhanHarian.toFixed(2)


};



setHasil(data);



tambahStatistik(

"simulasi"

);



tambahStatistik(

"inventory",

data

);



}







function exportCSV(){


if(!hasil)

return;




const csv=

"Parameter,Hasil\n"+

`EOQ,${hasil.eoq} unit\n`+

`Frekuensi,${hasil.frekuensi} kali\n`+

`ROP,${hasil.rop} unit\n`+

`Biaya,${hasil.biaya}`;




const blob=

new Blob(

[csv],

{

type:"text/csv"

}

);



const url=

URL.createObjectURL(blob);



const link=document.createElement("a");


link.href=url;


link.download="hasil_inventory.csv";


link.click();


URL.revokeObjectURL(url);



}





function angka(value:number|string){

return Number(value).toLocaleString(
"id-ID"
);

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

📦 Model Persediaan

</h1>


<p className="
mt-3
text-lg
">

Optimasi jumlah pemesanan menggunakan metode EOQ dan Reorder Point.

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

⚙️ Parameter Persediaan

</h2>





<div className="
mt-6
grid
md:grid-cols-5
gap-5
">





<div>

<label>
Permintaan Tahunan
</label>

<input

type="number"

value={permintaan}

onChange={e=>

setPermintaan(
Number(e.target.value)
)

}

className="
w-full
border
rounded-xl
p-3
mt-2
"

/>

</div>







<div>

<label>
Biaya Pemesanan
</label>

<input

type="number"

value={biayaPesan}

onChange={e=>

setBiayaPesan(
Number(e.target.value)
)

}

className="
w-full
border
rounded-xl
p-3
mt-2
"

/>

</div>








<div>

<label>
Biaya Penyimpanan
</label>

<input

type="number"

value={biayaSimpan}

onChange={e=>

setBiayaSimpan(
Number(e.target.value)
)

}

className="
w-full
border
rounded-xl
p-3
mt-2
"

/>

</div>







<div>

<label>
Hari Kerja
</label>

<input

type="number"

value={hariKerja}

onChange={e=>

setHariKerja(
Number(e.target.value)
)

}

className="
w-full
border
rounded-xl
p-3
mt-2
"

/>

</div>







<div>

<label>
Lead Time (hari)
</label>

<input

type="number"

value={leadTime}

onChange={e=>

setLeadTime(
Number(e.target.value)
)

}

className="
w-full
border
rounded-xl
p-3
mt-2
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

onClick={hitung}

className="
btn-primary
"

>

Hitung Persediaan 🚀

</button>




<button

onClick={exportCSV}

className="
bg-green-600
text-white
px-6
py-3
rounded-xl
font-semibold
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
EOQ Optimal
</p>

<h2 className="
text-3xl
font-bold
">

{angka(hasil.eoq)}

</h2>

<span>
unit
</span>

</div>







<div className="card-modern">

<p>
Frekuensi Pesan
</p>

<h2 className="
text-3xl
font-bold
">

{hasil.frekuensi}

</h2>

<span>
kali/tahun
</span>

</div>







<div className="card-modern">

<p>
Reorder Point
</p>

<h2 className="
text-3xl
font-bold
">

{angka(hasil.rop)}

</h2>

<span>
unit
</span>

</div>







<div className="card-modern">

<p>
Total Biaya
</p>

<h2 className="
text-3xl
font-bold
">

Rp {angka(hasil.biaya)}

</h2>

</div>





</div>









<InventoryChart

data={hasil}

/>









<div className="
mt-10
card-modern
">


<h2 className="
text-2xl
font-bold
">

📌 Interpretasi Hasil

</h2>



<p className="
mt-4
text-gray-600
leading-relaxed
">

Berdasarkan metode EOQ, jumlah pemesanan optimal adalah

<b>
{" "}{angka(hasil.eoq)} unit
</b>

dengan pemesanan ulang dilakukan ketika stok mencapai

<b>
{" "}{angka(hasil.rop)} unit.
</b>

</p>



<p className="
mt-4
text-gray-600
">

Kebutuhan rata-rata harian:

<b>
{" "}{hasil.kebutuhanHarian} unit
</b>

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