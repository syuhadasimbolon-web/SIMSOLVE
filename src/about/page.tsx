import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";





const modul=[


{
icon:"🎲",
judul:"Monte Carlo",
isi:
"Metode simulasi berbasis bilangan acak untuk menganalisis kemungkinan hasil dari kondisi yang tidak pasti."
},



{
icon:"📦",
judul:"Model Persediaan",
isi:
"Perhitungan pengendalian persediaan menggunakan konsep EOQ dan Reorder Point."
},



{
icon:"🚶",
judul:"Teori Antrean",
isi:
"Analisis sistem pelayanan berdasarkan tingkat kedatangan dan kemampuan pelayanan."
}



];








const fitur=[


"Simulasi interaktif",

"Perhitungan otomatis",

"Visualisasi hasil",

"Ekspor data CSV",

"Mode latihan dengan soal acak",

"Riwayat aktivitas pengguna"



];







export default function About(){


return(

<>

<Navbar/>




<main className="
min-h-screen
bg-gray-50
p-10
">



<section className="
max-w-6xl
mx-auto
">





<div className="
bg-white
border
rounded-3xl
p-10
">


<h1 className="
text-4xl
font-bold
">

Tentang SIMSOLVE

</h1>



<p className="
mt-6
text-gray-600
text-lg
leading-relaxed
">

SIMSOLVE merupakan platform simulasi interaktif
yang dirancang untuk membantu pengguna memahami
konsep simulasi melalui pendekatan visual,
perhitungan, dan latihan berbasis kasus.

</p>





<p className="
mt-4
text-gray-600
text-lg
leading-relaxed
">

Aplikasi ini menggabungkan beberapa metode
simulasi dan analisis sistem seperti Monte Carlo,
Model Persediaan, serta Teori Antrean sehingga
pengguna dapat mempelajari konsep sekaligus
melakukan percobaan secara langsung.

</p>



</div>









<section className="
mt-10
grid
md:grid-cols-2
gap-6
">





<div className="
bg-white
border
rounded-3xl
p-8
">


<h2 className="
text-2xl
font-bold
">

🎯 Tujuan SIMSOLVE

</h2>



<ul className="
mt-5
space-y-3
text-gray-600
">


<li>
✓ Mempermudah pembelajaran konsep simulasi
</li>


<li>
✓ Memberikan pengalaman praktik secara interaktif
</li>


<li>
✓ Membantu analisis hasil simulasi secara cepat
</li>


<li>
✓ Menyediakan media belajar yang mudah digunakan
</li>


</ul>


</div>







<div className="
bg-white
border
rounded-3xl
p-8
">


<h2 className="
text-2xl
font-bold
">

⚙️ Fitur Aplikasi

</h2>




<ul className="
mt-5
space-y-3
text-gray-600
">


{

fitur.map(

(item,index)=>(


<li key={index}>

✓ {item}

</li>


)


)

}



</ul>



</div>






</section>









<section className="
mt-10
">


<h2 className="
text-3xl
font-bold
">

Modul Pembelajaran

</h2>







<div className="
mt-6
grid
md:grid-cols-3
gap-6
">



{

modul.map(

(item,index)=>(


<div

key={index}

className="
bg-white
border
rounded-3xl
p-6
"

>


<div className="
text-5xl
">

{item.icon}

</div>




<h3 className="
mt-5
text-xl
font-bold
">

{item.judul}

</h3>




<p className="
mt-3
text-gray-600
">

{item.isi}

</p>



</div>


)


)


}



</div>



</section>









<section className="
mt-10
bg-indigo-600
text-white
rounded-3xl
p-10
">


<h2 className="
text-3xl
font-bold
">

Teknologi SIMSOLVE

</h2>



<div className="
mt-5
grid
md:grid-cols-3
gap-5
">


<div>
⚡ Next.js
</div>


<div>
🎨 Tailwind CSS
</div>


<div>
📊 Recharts
</div>


</div>



</section>







</section>


</main>




<Footer/>


</>

)

}