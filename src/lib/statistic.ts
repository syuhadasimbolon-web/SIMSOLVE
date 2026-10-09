export function tambahStatistik(
jenis:string,
data:any = {}
){


const lama = JSON.parse(

localStorage.getItem("simsolve")

||

"{}"

);





const statistik = {


totalSimulasi:

lama.totalSimulasi || 0,


montecarlo:

lama.montecarlo || 0,


inventory:

lama.inventory || 0,


queue:

lama.queue || 0,



exportCSV:

lama.exportCSV || 0,



latihanSelesai:

lama.latihanSelesai || 0,



riwayatLatihan:

lama.riwayatLatihan || [],



riwayatSimulasi:

lama.riwayatSimulasi || []

};









if(jenis==="latihan"){


statistik.latihanSelesai += 1;



statistik.riwayatLatihan.push({

level:data.level || "-",

skor:Number(data.skor) || 0,

tanggal:data.tanggal || 
new Date().toLocaleDateString()

});


}









if(jenis==="simulasi"){


statistik.totalSimulasi += 1;



statistik.riwayatSimulasi.push({

jenis:data.jenis || "Simulasi",

tanggal:

new Date().toLocaleDateString()


});


}









if(jenis==="montecarlo"){


statistik.totalSimulasi += 1;


statistik.montecarlo += 1;



statistik.riwayatSimulasi.push({

jenis:"Monte Carlo",

tanggal:

new Date().toLocaleDateString()

});


}









if(jenis==="inventory"){


statistik.totalSimulasi += 1;


statistik.inventory += 1;



statistik.riwayatSimulasi.push({

jenis:"Persediaan",

tanggal:

new Date().toLocaleDateString()

});


}









if(jenis==="queue"){


statistik.totalSimulasi += 1;


statistik.queue += 1;



statistik.riwayatSimulasi.push({

jenis:"Antrean",

tanggal:

new Date().toLocaleDateString()

});


}








localStorage.setItem(

"simsolve",

JSON.stringify(statistik)

);



}