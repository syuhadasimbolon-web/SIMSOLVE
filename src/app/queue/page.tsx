"use client"

import {useState} from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import QueueChart from "@/components/QueueChart";

import {tambahStatistik} from "@/lib/statistic";



export default function Queue(){



const [kedatangan,setKedatangan]=useState(5);

const [pelayanan,setPelayanan]=useState(8);

const [server,setServer]=useState(1);


const [hasil,setHasil]=useState<any>(null);








function hitung(){



const kapasitas =

pelayanan * server;




const utilisasi =

kedatangan / kapasitas;






let antrean = 0;

let sistem = 0;

let waktu = 0;





if(utilisasi < 1){


antrean =

Math.pow(utilisasi,2)

/

(1-utilisasi);



sistem =

antrean + utilisasi;



waktu =

antrean / kedatangan;



}

else{


antrean = 999;

sistem = 999;

waktu = 999;


}








const data={



utilisasi:

(utilisasi*100).toFixed(0),



antrean:

antrean.toFixed(2),



sistem:

sistem.toFixed(2),



waktu:

waktu.toFixed(2),



status:

utilisasi < 1

?

"Sistem stabil, kapasitas pelayanan masih mampu melayani pelanggan yang datang."

:

"Sistem tidak stabil, jumlah kedatangan melebihi kemampuan pelayanan."



};



setHasil(data);






tambahStatistik(
"simulasi"
);



tambahStatistik(
"queue",
data
);



}








function exportCSV(){


if(!hasil)

return;




const csv=

"Parameter,Hasil\n"+

`Utilisasi,${hasil.utilisasi}%\n`+

`Antrean,${hasil.antrean}\n`+

`Sistem,${hasil.sistem}\n`+

`Waktu Tunggu,${hasil.waktu}\n`+

`Status,${hasil.status}`;






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


link.download="hasil_antrean.csv";


link.click();



URL.revokeObjectURL(url);


}





function buatPelanggan(){


return Array.from(

{
length:8
},

(_,i)=>(

{
id:i+1,
status:
i<server
?
"Sedang Dilayani"
:
"Menunggu"

}

)

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

🚶 Simulator Teori Antrean

</h1>



<p className="
mt-3
text-lg
">

Analisis sistem pelayanan berdasarkan teori antrean.

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

⚙️ Parameter Antrean

</h2>





<div className="
mt-6
grid
md:grid-cols-3
gap-6
">





<div>

<label>
Laju Kedatangan (λ)
</label>


<input

type="number"

value={kedatangan}

onChange={e=>

setKedatangan(
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


<p className="
text-sm
text-gray-500
mt-2
">

Jumlah pelanggan datang per waktu

</p>


</div>








<div>

<label>
Laju Pelayanan (μ)
</label>


<input

type="number"

value={pelayanan}

onChange={e=>

setPelayanan(
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


<p className="
text-sm
text-gray-500
mt-2
">

Kemampuan server melayani

</p>


</div>







<div>

<label>
Jumlah Server

</label>


<input

type="number"

value={server}

onChange={e=>

setServer(
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


<p className="
text-sm
text-gray-500
mt-2
">

Jumlah petugas pelayanan

</p>


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

Hitung Antrean 🚀

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
Utilisasi Server
</p>


<h2 className="
text-3xl
font-bold
">

{hasil.utilisasi}%

</h2>


</div>








<div className="card-modern">

<p>
Rata-rata Antrean

</p>


<h2 className="
text-3xl
font-bold
">

{hasil.antrean}

</h2>


<p>
pelanggan
</p>


</div>








<div className="card-modern">

<p>
Dalam Sistem

</p>


<h2 className="
text-3xl
font-bold
">

{hasil.sistem}

</h2>


<p>
pelanggan
</p>


</div>








<div className="card-modern">

<p>
Waktu Tunggu

</p>


<h2 className="
text-3xl
font-bold
">

{hasil.waktu}

</h2>


<p>
satuan waktu
</p>


</div>





</div>









<QueueChart

data={hasil}

/>









<div className="
mt-10
grid
md:grid-cols-2
gap-6
">






<div className="
card-modern
">


<h2 className="
text-2xl
font-bold
">

📌 Interpretasi Sistem

</h2>




<p className="
mt-4
text-gray-600
leading-relaxed
">

{hasil.status}

</p>






{

Number(hasil.utilisasi)<70

?

<p className="
mt-4
text-green-600
font-semibold
">

🟢 Server masih memiliki kapasitas kosong.

</p>


:

<p className="
mt-4
text-red-600
font-semibold
">

🔴 Server mulai mendekati kondisi sibuk.

</p>


}



</div>









<div className="
card-modern
">


<h2 className="
text-2xl
font-bold
">

👥 Simulasi Pelanggan

</h2>




<div className="
mt-5
space-y-3
">


{

buatPelanggan().map(

(item)=>(


<div

key={item.id}

className="
flex
justify-between
border
rounded-xl
p-3
"

>


<span>

👤 P{item.id}

</span>


<span className={

item.status==="Sedang Dilayani"

?

"text-green-600 font-semibold"

:

"text-gray-500"

}>

{

item.status==="Sedang Dilayani"

?

"🧑‍💼 Dilayani"

:

"⏳ Menunggu"

}

</span>


</div>


)


)


}



</div>



</div>





</div>





</>


}




</section>


</main>



<Footer/>


</>

)

}