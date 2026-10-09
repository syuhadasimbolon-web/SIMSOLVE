"use client"

import {useState} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {tambahStatistik} from "@/lib/statistic";



const bankSoal = {


dasar:[


{
soal:
"Metode Monte Carlo digunakan untuk?",

pilihan:[

"Melakukan simulasi menggunakan bilangan acak",

"Membuat tampilan aplikasi",

"Mengelola database"

],

jawaban:0

},



{
soal:
"Tujuan utama simulasi adalah?",

pilihan:[

"Memahami dan memperkirakan perilaku sistem",

"Menghapus data",

"Mengganti komputer"

],

jawaban:0

},



{
soal:
"EOQ pada model persediaan digunakan untuk menentukan?",

pilihan:[

"Jumlah pemesanan optimal",

"Jumlah pengguna",

"Jumlah server"

],

jawaban:0

},



{
soal:
"ROP dalam persediaan menunjukkan?",

pilihan:[

"Titik pemesanan kembali",

"Jumlah keuntungan",

"Jumlah simulasi"

],

jawaban:0

},



{
soal:
"Simbol λ pada teori antrean menunjukkan?",

pilihan:[

"Tingkat kedatangan",

"Tingkat penyimpanan",

"Jumlah barang"

],

jawaban:0

},



{
soal:
"Simbol μ pada teori antrean menunjukkan?",

pilihan:[

"Tingkat pelayanan",

"Jumlah antrean",

"Biaya"

],

jawaban:0

},



{
soal:
"Grafik hasil simulasi digunakan untuk?",

pilihan:[

"Memvisualisasikan hasil analisis",

"Menghapus perhitungan",

"Mengubah sistem"

],

jawaban:0

},



{
soal:
"Persediaan diperlukan agar perusahaan dapat?",

pilihan:[

"Memenuhi kebutuhan barang",

"Menghilangkan permintaan",

"Menghapus proses"

],

jawaban:0

},



{
soal:
"Antrean terjadi karena?",

pilihan:[

"Tingkat kedatangan lebih besar dari pelayanan",

"Tidak ada pengguna",

"Tidak ada sistem"

],

jawaban:0

},



{
soal:
"Simulasi membantu pengguna untuk?",

pilihan:[

"Mempelajari sistem tanpa mencoba langsung",

"Menghapus teori",

"Menghilangkan semua risiko"

],

jawaban:0

}


],







menengah:[


{
soal:
"Jika utilisasi sistem mendekati nilai 1, maka kondisi sistem?",

pilihan:[

"Hampir mencapai kapasitas maksimum",

"Tidak ada pelanggan",

"Berhenti bekerja"

],

jawaban:0

},



{
soal:
"Semakin banyak iterasi Monte Carlo maka hasil akan?",

pilihan:[

"Lebih mendekati kondisi sebenarnya",

"Selalu salah",

"Tidak berubah"

],

jawaban:0

},



{
soal:
"Jika biaya penyimpanan meningkat, EOQ cenderung?",

pilihan:[

"Menurun",

"Selalu meningkat",

"Tetap"

],

jawaban:0

},



{
soal:
"Tujuan ROP adalah?",

pilihan:[

"Menentukan waktu pemesanan kembali",

"Menghapus stok",

"Mengurangi kualitas"

],

jawaban:0

},



{
soal:
"Rumus utilisasi antrean adalah?",

pilihan:[

"λ / μ",

"EOQ / ROP",

"D / H"

],

jawaban:0

},



{
soal:
"Variabel penting dalam Monte Carlo adalah?",

pilihan:[

"Bilangan acak",

"Warna grafik",

"Ukuran tombol"

],

jawaban:0

},



{
soal:
"Model persediaan bertujuan mengurangi?",

pilihan:[

"Biaya penyimpanan dan pemesanan",

"Jumlah pengguna",

"Ukuran aplikasi"

],

jawaban:0

},



{
soal:
"Jika λ lebih besar dari μ maka sistem?",

pilihan:[

"Tidak stabil",

"Sangat stabil",

"Tidak ada antrean"

],

jawaban:0

},



{
soal:
"Hasil Monte Carlo diperoleh dari?",

pilihan:[

"Banyak percobaan simulasi",

"Satu tebakan",

"Data kosong"

],

jawaban:0

},



{
soal:
"Analisis simulasi membantu dalam?",

pilihan:[

"Pengambilan keputusan",

"Menghapus sistem",

"Mengubah perangkat"

],

jawaban:0

}


],







lanjutan:[


{
soal:
"Sebuah sistem memiliki λ=8 dan μ=10. Nilai utilisasi adalah?",

pilihan:[

"0,8",

"1,8",

"0,2"

],

jawaban:0

},



{
soal:
"Dalam EOQ, D berarti?",

pilihan:[

"Permintaan tahunan",

"Biaya penyimpanan",

"Waktu tunggu"

],

jawaban:0

},



{
soal:
"Dalam EOQ, H berarti?",

pilihan:[

"Biaya penyimpanan",

"Jumlah server",

"Permintaan"

],

jawaban:0

},



{
soal:
"Tujuan simulasi adalah?",

pilihan:[

"Merepresentasikan sistem nyata",

"Menghapus sistem",

"Menggantikan manusia"

],

jawaban:0

},



{
soal:
"Keakuratan Monte Carlo dipengaruhi oleh?",

pilihan:[

"Jumlah iterasi",

"Warna grafik",

"Ukuran layar"

],

jawaban:0

},



{
soal:
"Jika utilisasi lebih dari 1 maka sistem?",

pilihan:[

"Tidak stabil",

"Optimal",

"Kosong"

],

jawaban:0

},



{
soal:
"Analisis antrean dapat meningkatkan?",

pilihan:[

"Kualitas pelayanan",

"Ukuran file",

"Warna aplikasi"

],

jawaban:0

},



{
soal:
"EOQ menghasilkan kondisi persediaan yang?",

pilihan:[

"Ekonomis",

"Acak",

"Tidak terkendali"

],

jawaban:0

},



{
soal:
"Simulasi berulang dilakukan untuk mendapatkan?",

pilihan:[

"Estimasi hasil lebih baik",

"Kesalahan lebih banyak",

"Data kosong"

],

jawaban:0

},



{
soal:
"Pemodelan sistem membantu memahami?",

pilihan:[

"Perilaku sistem",

"Hanya tampilan",

"Hanya kode"

],

jawaban:0

}


]


};
export default function Practice(){



const [level,setLevel]=useState<
"dasar"|"menengah"|"lanjutan"|null
>(null);



const [soalAktif,setSoalAktif]=useState<any[]>([]);



const [nomor,setNomor]=useState(0);



const [skor,setSkor]=useState(0);
function acakPilihan(soal:any[]){

return soal.map((item)=>{

const jawabanBenar =
item.pilihan[item.jawaban];


const pilihanAcak =
[...item.pilihan]
.sort(
()=>Math.random()-0.5
);



return{

...item,

pilihan:pilihanAcak,

jawaban:
pilihanAcak.indexOf(jawabanBenar)

};


});

}


const [mulai,setMulai]=useState(false);



const [selesai,setSelesai]=useState(false);







function mulaiLatihan(){


if(!level)

return;





const soalLevel=[

...bankSoal[level]

];






const soalAcak =
[...bankSoal[level]]
.sort(()=>Math.random()-0.5)
.slice(0,5)
.map((item)=>{


const jawabanBenar =
item.pilihan[item.jawaban];


const pilihanBaru =
[...item.pilihan]
.sort(()=>Math.random()-0.5);



return {

...item,

pilihan: pilihanBaru,

jawaban:
pilihanBaru.indexOf(jawabanBenar)

};


});


setSoalAktif(soalAcak);



function acakPilihan(soal:any[]){

return soal.map((item)=>{

const jawabanBenar =
item.pilihan[item.jawaban];


const pilihanBaru =
[...item.pilihan]
.sort(
()=>Math.random()-0.5
);


return {

...item,

pilihan:pilihanBaru,

jawaban:
pilihanBaru.indexOf(jawabanBenar)

};


});

}
setSoalAktif(acakPilihan(soalAcak));
setSoalAktif(soalAcak);


setNomor(0);


setSkor(0);


setMulai(true);


setSelesai(false);


}









function jawab(pilihan:number){



let skorBaru=skor;



if(

pilihan===soalAktif[nomor].jawaban

){


skorBaru=skor+20;


setSkor(skorBaru);


}








if(

nomor+1 < soalAktif.length

){


setNomor(nomor+1);


}

else{



setMulai(false);


setSelesai(true);





tambahStatistik(

"latihan",

{

level:level,

skor:skorBaru,

tanggal:

new Date()

.toLocaleDateString()

}

);



}



}









function ulang(){



setLevel(null);


setSoalAktif([]);


setNomor(0);


setSkor(0);


setMulai(false);


setSelesai(false);



}







function kategori(){



if(skor>=80)

return "Sangat Baik 🎉";



if(skor>=60)

return "Baik 👍";



return "Perlu Belajar 📚";


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
max-w-5xl
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

🎓 Mode Latihan SIMSOLVE

</h1>



<p className="
mt-4
text-lg
">

Uji pemahaman konsep simulasi berdasarkan tingkat kemampuan.

</p>


</div>









{
!mulai && !selesai &&


<div className="
mt-10
card-modern
text-center
">


<h2 className="
text-3xl
font-bold
">

Pilih Tingkat Latihan

</h2>



<p className="
mt-3
text-gray-600
">

Setiap latihan terdiri dari 5 soal acak.

</p>






<div className="
mt-8
grid
md:grid-cols-3
gap-6
">





<button

onClick={()=>setLevel("dasar")}

className={`
rounded-3xl
border
p-6
transition

${
level==="dasar"

?

"bg-green-100 border-green-500"

:

"bg-white"

}

`}

>


<div className="
text-5xl
">

🟢

</div>



<h3 className="
mt-3
font-bold
text-xl
">

Dasar

</h3>


<p className="
mt-2
text-gray-600
">

Pengenalan konsep simulasi

</p>



</button>









<button

onClick={()=>setLevel("menengah")}

className={`
rounded-3xl
border
p-6
transition

${
level==="menengah"

?

"bg-yellow-100 border-yellow-500"

:

"bg-white"

}

`}

>


<div className="
text-5xl
">

🟡

</div>



<h3 className="
mt-3
font-bold
text-xl
">

Menengah

</h3>


<p className="
mt-2
text-gray-600
">

Analisis penerapan metode

</p>



</button>









<button

onClick={()=>setLevel("lanjutan")}

className={`
rounded-3xl
border
p-6
transition

${
level==="lanjutan"

?

"bg-red-100 border-red-500"

:

"bg-white"

}

`}

>


<div className="
text-5xl
">

🔴

</div>



<h3 className="
mt-3
font-bold
text-xl
">

Lanjutan

</h3>


<p className="
mt-2
text-gray-600
">

Analisis kasus simulasi

</p>



</button>






</div>








<button

onClick={mulaiLatihan}

className="
btn-primary
mt-10
"

>

Mulai Latihan 🚀

</button>



</div>


}









{
mulai &&


<div className="
mt-10
card-modern
">





<div className="
flex
justify-between
font-semibold
">

<span>

Soal {nomor+1}/5

</span>


<span>

Skor {skor}

</span>


</div>








<div className="
mt-5
h-3
bg-gray-200
rounded-full
">


<div

className="
h-3
bg-indigo-600
rounded-full
"

style={{

width:

`${((nomor+1)/5)*100}%`

}}


/>


</div>








<h2 className="
mt-8
text-2xl
font-bold
">

{soalAktif[nomor]?.soal}

</h2>








<div className="
mt-8
space-y-4
">


{

soalAktif[nomor]?.pilihan.map(

(pilihan:string,index:number)=>(


<button

key={index}

onClick={()=>jawab(index)}

className="
w-full
border
rounded-xl
p-4
text-left
hover:bg-indigo-50
transition
"

>

{pilihan}

</button>


)


)



}



</div>






</div>



}









{
selesai &&


<div className="
mt-10
card-modern
text-center
">


<h2 className="
text-4xl
font-bold
">

🎉 Latihan Selesai

</h2>





<p className="
mt-6
text-xl
">

Level:

<span className="
font-bold
">

{" "}

{level}

</span>

</p>







<div className="
mt-5
text-7xl
font-bold
text-indigo-600
">

{skor}

</div>





<p className="
mt-4
text-2xl
font-bold
">

{kategori()}

</p>








<button

onClick={ulang}

className="
btn-primary
mt-8
"

>

Coba Lagi

</button>





</div>



}





</section>


</main>




<Footer/>

</>

)

}