import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const materi=[


{
icon:"🎲",
judul:"Monte Carlo",

pengertian:
"Monte Carlo merupakan metode simulasi yang menggunakan bilangan acak untuk memodelkan kemungkinan kejadian dalam kondisi yang memiliki ketidakpastian.",


tujuan:[
"Menganalisis kemungkinan suatu kejadian.",
"Menghasilkan perkiraan berdasarkan data acak.",
"Membantu pengambilan keputusan pada kondisi tidak pasti."
],


langkah:[
"Menentukan variabel dan parameter simulasi.",
"Membangkitkan bilangan acak.",
"Melakukan proses simulasi berulang.",
"Menganalisis hasil simulasi."
],


rumus:
"X = Random Number × Distribusi"



},




{
icon:"📦",
judul:"Model Persediaan",


pengertian:
"Model persediaan digunakan untuk menentukan jumlah pemesanan optimal dan waktu pemesanan kembali agar biaya penyimpanan dan pemesanan dapat diminimalkan.",


tujuan:[
"Menentukan jumlah pemesanan ekonomis.",
"Mengurangi biaya persediaan.",
"Mencegah kekurangan stok."
],


langkah:[
"Menentukan permintaan tahunan.",
"Menentukan biaya pemesanan.",
"Menentukan biaya penyimpanan.",
"Menghitung EOQ dan Reorder Point."
],


rumus:
"EOQ = √(2DS/H)"



},





{
icon:"🚶",
judul:"Teori Antrean",


pengertian:
"Teori antrean mempelajari sistem pelayanan berdasarkan pola kedatangan pelanggan dan kemampuan pelayanan server.",


tujuan:[
"Mengukur performa sistem pelayanan.",
"Menganalisis waktu tunggu.",
"Menentukan kebutuhan jumlah server."
],


langkah:[
"Menentukan laju kedatangan (λ).",
"Menentukan laju pelayanan (μ).",
"Menghitung tingkat utilisasi.",
"Menganalisis kestabilan sistem."
],


rumus:
"ρ = λ / μ"



}



];








export default function Teori(){


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

📚 Teori SIMSOLVE

</h1>


<p className="
mt-4
text-lg
">

Pelajari konsep dasar simulasi sebelum melakukan percobaan.

</p>


</div>









<div className="
mt-10
space-y-8
">



{

materi.map(

(item,index)=>(


<div

key={index}

className="
bg-white
border
rounded-3xl
p-8
shadow-sm
"


>



<div className="
flex
items-center
gap-4
">


<div className="
text-5xl
">

{item.icon}

</div>


<h2 className="
text-3xl
font-bold
">

{item.judul}

</h2>


</div>







<div className="
mt-6
grid
md:grid-cols-2
gap-6
">





<div>


<h3 className="
text-xl
font-bold
">

📖 Pengertian

</h3>


<p className="
mt-3
text-gray-600
leading-relaxed
">

{item.pengertian}

</p>


</div>







<div>


<h3 className="
text-xl
font-bold
">

🎯 Tujuan

</h3>


<ul className="
mt-3
space-y-2
text-gray-600
">


{

item.tujuan.map(

(t,i)=>(

<li key={i}>
✓ {t}
</li>

)

)

}


</ul>


</div>




</div>









<div className="
mt-6
grid
md:grid-cols-2
gap-6
">



<div className="
bg-indigo-50
rounded-2xl
p-5
">


<h3 className="
font-bold
text-xl
">

⚙️ Langkah Simulasi

</h3>


<ul className="
mt-3
space-y-2
">


{

item.langkah.map(

(l,i)=>(

<li key={i}>

{i+1}. {l}

</li>

)

)

}


</ul>


</div>






<div className="
bg-blue-50
rounded-2xl
p-5
">


<h3 className="
font-bold
text-xl
">

📐 Rumus Dasar

</h3>


<p className="
mt-5
text-2xl
font-bold
text-indigo-700
">

{item.rumus}

</p>


</div>



</div>






</div>



)


)


}



</div>







<div className="
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

Kesimpulan

</h2>


<p className="
mt-4
text-lg
leading-relaxed
">

Teori menjadi dasar sebelum melakukan simulasi.
Dengan memahami konsep Monte Carlo, Persediaan,
dan Antrean, pengguna dapat memahami bagaimana
suatu sistem dianalisis dan mengambil keputusan
berdasarkan hasil simulasi.

</p>



</div>







</section>


</main>


<Footer/>


</>

)

}