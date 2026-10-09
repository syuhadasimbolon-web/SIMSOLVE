import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const simulasi=[


{
icon:"🎲",
judul:"Monte Carlo",
deskripsi:
"Simulasi menggunakan bilangan acak untuk menganalisis kondisi yang memiliki ketidakpastian.",

link:"/monte-carlo",

warna:"from-indigo-500 to-blue-500"

},



{
icon:"📦",
judul:"Model Persediaan",

deskripsi:
"Menganalisis jumlah pemesanan optimal menggunakan konsep EOQ dan Reorder Point.",

link:"/inventory",

warna:"from-green-500 to-emerald-500"

},



{
icon:"🚶",
judul:"Teori Antrean",

deskripsi:
"Menganalisis sistem pelayanan berdasarkan tingkat kedatangan dan waktu pelayanan.",

link:"/queue",

warna:"from-orange-500 to-red-500"

}



];







export default function Simulation(){


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

🚀 Pilih Simulasi

</h1>



<p className="
mt-4
text-lg
">

Pilih modul simulasi yang ingin dipelajari dan diuji.

</p>



</div>









<div className="
mt-10
grid
md:grid-cols-3
gap-8
">





{

simulasi.map(

(item,index)=>(


<div

key={index}

className="
bg-white
rounded-3xl
border
overflow-hidden
shadow-sm
hover:shadow-xl
transition
"


>



<div className={`
bg-gradient-to-r
${item.warna}
p-8
text-white
`}>



<div className="
text-6xl
">

{item.icon}

</div>


<h2 className="
mt-5
text-2xl
font-bold
">

{item.judul}

</h2>


</div>







<div className="
p-6
">


<p className="
text-gray-600
leading-relaxed
">

{item.deskripsi}

</p>




<Link

href={item.link}

className="
mt-6
inline-block
bg-indigo-600
text-white
px-6
py-3
rounded-xl
font-semibold
hover:bg-indigo-700
transition
"

>

Mulai Simulasi →

</Link>


</div>




</div>


)


)


}



</div>








<div className="
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

💡 Cara Menggunakan

</h2>


<div className="
mt-5
grid
md:grid-cols-3
gap-5
">


<div>

<b>
1. Pilih Modul
</b>

<p className="text-gray-600 mt-2">

Pilih jenis simulasi yang ingin dipelajari.

</p>

</div>



<div>

<b>
2. Jalankan Simulasi
</b>

<p className="text-gray-600 mt-2">

Masukkan parameter dan lihat hasil perhitungan.

</p>

</div>




<div>

<b>
3. Analisis Hasil
</b>

<p className="text-gray-600 mt-2">

Gunakan hasil untuk memahami konsep.

</p>

</div>



</div>


</div>






</section>


</main>




<Footer/>


</>

)

}