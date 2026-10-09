"use client"


import {useEffect,useState} from "react";
import {getHistory} from "@/lib/history";


export default function HistoryList(){


const [history,setHistory]=useState<any[]>([]);



useEffect(()=>{


setHistory(
getHistory()
);


},[]);



return(

<section className="
mt-10
bg-white
border
rounded-3xl
p-6
">


<h2 className="
text-2xl
font-bold
">

Simulation History 📁

</h2>




<div className="
mt-5
space-y-4
">


{

history.length===0

?

<p className="text-gray-500">

Belum ada riwayat simulasi.

</p>


:


history.map(
(item,index)=>(


<div

key={index}

className="
border
rounded-xl
p-4
"

>


<h3 className="
font-bold
">

{item.title}

</h3>



<p className="
text-gray-600
">

{item.description}

</p>



<p className="
text-sm
text-gray-400
mt-2
">

{item.date}

</p>



</div>


)

)


}



</div>



</section>

)

}