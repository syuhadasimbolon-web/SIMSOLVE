export type Soal = {

materi:string;

level:
"Dasar" |
"Menengah" |
"Lanjut";

pertanyaan:string;

pilihan:string[];

jawaban:number;

pembahasan:string;

};





export const bankSoal:Soal[]=[



// =================
// MONTE CARLO DASAR
// =================


{

materi:"Monte Carlo",

level:"Dasar",

pertanyaan:
"Apa tujuan utama metode Monte Carlo?",

pilihan:[

"Menggunakan bilangan acak untuk simulasi",

"Menghapus data simulasi",

"Membuat desain aplikasi",

"Mengatur database"

],

jawaban:0,


pembahasan:

"Metode Monte Carlo menggunakan bilangan acak untuk memodelkan kondisi yang memiliki ketidakpastian."

},




{

materi:"Monte Carlo",

level:"Dasar",

pertanyaan:

"Komponen penting dalam simulasi Monte Carlo adalah?",


pilihan:[

"Bilangan acak",

"Warna grafik",

"Ukuran layar",

"Jumlah komputer"

],


jawaban:0,


pembahasan:

"Bilangan acak digunakan untuk menghasilkan berbagai kemungkinan hasil simulasi."

},





// =================
// INVENTORY DASAR
// =================



{

materi:"Model Persediaan",

level:"Dasar",

pertanyaan:

"EOQ digunakan untuk menentukan?",


pilihan:[

"Jumlah pemesanan optimal",

"Jumlah pelanggan",

"Waktu pelayanan",

"Jumlah server"

],


jawaban:0,


pembahasan:

"EOQ atau Economic Order Quantity digunakan untuk menentukan jumlah pemesanan yang paling ekonomis."

},





{

materi:"Model Persediaan",

level:"Menengah",

pertanyaan:

"Komponen utama dalam perhitungan EOQ adalah?",


pilihan:[

"Permintaan, biaya pesan, dan biaya simpan",

"Warna laporan",

"Jumlah pengguna",

"Kecepatan internet"

],


jawaban:0,


pembahasan:

"EOQ mempertimbangkan kebutuhan tahunan, biaya pemesanan, dan biaya penyimpanan."

},







// =================
// QUEUE
// =================



{

materi:"Teori Antrean",

level:"Dasar",

pertanyaan:

"Simbol λ pada teori antrean menunjukkan?",


pilihan:[

"Tingkat kedatangan",

"Tingkat pelayanan",

"Jumlah server",

"Waktu tunggu"

],


jawaban:0,


pembahasan:

"Lambda (λ) menunjukkan tingkat kedatangan pelanggan atau objek ke dalam sistem."

},





{

materi:"Teori Antrean",

level:"Menengah",

pertanyaan:

"Simbol μ pada teori antrean menunjukkan?",


pilihan:[

"Tingkat pelayanan",

"Tingkat kedatangan",

"Jumlah antrean",

"Jumlah pelanggan"

],


jawaban:0,


pembahasan:

"Mu (μ) menunjukkan kemampuan pelayanan sistem dalam melayani pelanggan."

},





{

materi:"Teori Antrean",

level:"Lanjut",

pertanyaan:

"Jika nilai utilisasi mendekati 1, maka kondisi sistem adalah?",


pilihan:[

"Sistem semakin sibuk",

"Sistem kosong",

"Tidak ada pelanggan",

"Pelayanan berhenti"

],


jawaban:0,


pembahasan:

"Utilisasi mendekati 1 berarti sistem hampir mencapai kapasitas maksimal."

}



];