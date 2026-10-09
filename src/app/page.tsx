import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const modul=[


{
icon:"🎲",
judul:"Monte Carlo",
deskripsi:
"Melakukan simulasi menggunakan bilangan acak untuk menganalisis kondisi yang tidak pasti.",
link:"/monte-carlo"
},


{
icon:"📦",
judul:"Model Persediaan",
deskripsi:
"Mengoptimalkan jumlah pemesanan menggunakan metode EOQ dan Reorder Point.",
link:"/inventory"
},


{
icon:"🚶",
judul:"Teori Antrean",
deskripsi:
"Menganalisis sistem pelayanan berdasarkan tingkat kedatangan dan pelayanan.",
link:"/queue"
},


{
icon:"🎓",
judul:"Mode Latihan",
deskripsi:
"Menguji pemahaman konsep simulasi melalui soal interaktif.",
link:"/practice"
}



];







export default function Home(){


return(

<>

<Navbar/>




<main>





{/* HERO */}

<section className="
bg-gradient-to-br
from-indigo-50
via-white
to-blue-50
px-8
py-16
">



<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-10
items-center
">





<div>


<p className="
text-indigo-600
font-semibold
text-lg
">

Platform Simulasi Interaktif

</p>





<h1 className="
mt-4
text-5xl
font-bold
leading-tight
">


Belajar Simulasi


<span className="
block
text-indigo-600
">

Lebih Mudah & Modern

</span>


</h1>






<p className="
mt-5
text-gray-600
text-lg
leading-relaxed
">

SIMSOLVE membantu memahami konsep
Monte Carlo, Model Persediaan, dan
Teori Antrean melalui simulasi,
visualisasi grafik, dan latihan interaktif.

</p>







<div className="
mt-8
flex
gap-4
">


<Link

href="/simulation"

className="
bg-indigo-600
text-white
px-6
py-3
rounded-xl
font-semibold
hover:bg-indigo-700
"

>

Mulai Simulasi 🚀

</Link>




<Link

href="/practice"

className="
border
border-indigo-600
text-indigo-600
px-6
py-3
rounded-xl
font-semibold
hover:bg-indigo-50
"

>

Latihan Soal

</Link>



</div>



</div>








<div className="
bg-white
border
rounded-3xl
shadow-xl
p-10
text-center
">





<div className="
text-7xl
">

📊

</div>




<h2 className="
mt-5
text-3xl
font-bold
">

SIMSOLVE

</h2>



<p className="
mt-3
text-gray-500
">

Simulasi.
Analisis.
Pembelajaran.

</p>






<div className="
mt-8
grid
grid-cols-3
gap-3
">


<div className="
bg-indigo-50
rounded-xl
p-3
">

<b>
3
</b>

<p className="
text-sm
">

Metode

</p>


</div>





<div className="
bg-blue-50
rounded-xl
p-3
">

<b>
4
</b>

<p className="
text-sm
">

Modul

</p>


</div>





<div className="
bg-purple-50
rounded-xl
p-3
">

<b>
100%
</b>

<p className="
text-sm
">

Interaktif

</p>


</div>



</div>




</div>





</div>


</section>








{/* KEUNGGULAN */}


<section className="
px-8
py-12
">


<div className="
max-w-7xl
mx-auto
">



<h2 className="
text-4xl
font-bold
text-center
">

Mengapa Menggunakan SIMSOLVE?

</h2>



<p className="
text-center
mt-3
text-gray-600
">

Satu platform untuk memahami konsep simulasi.

</p>






<div className="
mt-8
grid
md:grid-cols-3
gap-6
">





<div className="
bg-white
border
rounded-3xl
p-6
text-center
shadow-sm
hover:shadow-lg
">

<div className="
text-5xl
">

📚

</div>


<h3 className="
mt-4
font-bold
text-xl
">

Pembelajaran

</h3>


<p className="
mt-3
text-gray-600
">

Materi teori dan rumus tersedia sebelum simulasi.

</p>


</div>








<div className="
bg-white
border
rounded-3xl
p-6
text-center
shadow-sm
hover:shadow-lg
">

<div className="
text-5xl
">

⚡

</div>


<h3 className="
mt-4
font-bold
text-xl
">

Interaktif

</h3>


<p className="
mt-3
text-gray-600
">

Hasil simulasi dapat dilihat secara langsung.

</p>


</div>








<div className="
bg-white
border
rounded-3xl
p-6
text-center
shadow-sm
hover:shadow-lg
">

<div className="
text-5xl
">

📈

</div>


<h3 className="
mt-4
font-bold
text-xl
">

Visualisasi

</h3>


<p className="
mt-3
text-gray-600
">

Grafik membantu memahami hasil analisis.

</p>


</div>






</div>


</div>


</section>









{/* MODUL */}



<section className="
bg-gray-50
px-8
py-12
">


<div className="
max-w-7xl
mx-auto
">


<h2 className="
text-4xl
font-bold
text-center
">

Modul SIMSOLVE

</h2>




<div className="
mt-8
grid
md:grid-cols-4
gap-5
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
hover:-translate-y-2
transition
"

>


<div className="
text-5xl
">

{item.icon}

</div>




<h3 className="
mt-4
font-bold
text-xl
">

{item.judul}

</h3>



<p className="
mt-3
text-gray-600
">

{item.deskripsi}

</p>




<Link

href={item.link}

className="
mt-5
inline-block
text-indigo-600
font-semibold
"

>

Buka Modul →

</Link>



</div>



)


)



}



</div>


</div>


</section>





</main>




<Footer/>

</>


)

}