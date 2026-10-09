import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const modul=[

{
icon:"🎲",
judul:"Monte Carlo",
isi:"Simulasi menggunakan bilangan acak untuk menganalisis kemungkinan hasil."
},

{
icon:"📦",
judul:"Model Persediaan",
isi:"Mengoptimalkan jumlah pemesanan menggunakan metode EOQ dan ROP."
},

{
icon:"🚶",
judul:"Teori Antrean",
isi:"Menganalisis sistem pelayanan berdasarkan tingkat kedatangan dan pelayanan."
}

];





export default function About(){


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

Tentang SIMSOLVE 🚀

</h1>



<p className="
mt-5
text-lg
max-w-3xl
">

SIMSOLVE merupakan platform pembelajaran simulasi interaktif
yang membantu pengguna memahami konsep simulasi melalui
perhitungan, visualisasi grafik, dan latihan.

</p>



</div>









<div className="
mt-10
grid
md:grid-cols-3
gap-6
">





<div className="
card-modern
text-center
">


<h2 className="
text-4xl
font-bold
text-indigo-600
">

3

</h2>


<p className="
mt-2
">

Metode Simulasi

</p>


</div>






<div className="
card-modern
text-center
">


<h2 className="
text-4xl
font-bold
text-indigo-600
">

4

</h2>


<p className="
mt-2
">

Modul Pembelajaran

</p>


</div>






<div className="
card-modern
text-center
">


<h2 className="
text-4xl
font-bold
text-indigo-600
">

100%

</h2>


<p className="
mt-2
">

Interaktif

</p>


</div>




</div>









<section className="
mt-10
">


<h2 className="
text-3xl
font-bold
">

Modul SIMSOLVE

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
card-modern
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







</section>


</main>



<Footer/>


</>

)

}