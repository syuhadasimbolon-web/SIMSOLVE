"use client"


interface Activity{

level:string;

skor:number;

tanggal:string;

}




export default function RecentActivity({

activities=[]

}:{

activities:Activity[]

}){



return(

<div className="
bg-white
border
rounded-3xl
p-6
">


<h2 className="
text-2xl
font-bold
">

📚 Aktivitas Terbaru

</h2>





{

activities.length===0


?


<p className="
mt-5
text-gray-500
">

Belum ada aktivitas latihan

</p>



:


<div className="
mt-5
space-y-4
">


{

activities.map(

(item,index)=>(


<div

key={index}

className="
border
rounded-xl
p-4
"

>


<p>

Level:

<b>

{" "}

{item.level}

</b>

</p>



<p>

Skor:

<b>

{" "}

{item.skor}

</b>

</p>




<p className="
text-gray-500
">

{item.tanggal}

</p>



</div>


)


)


}



</div>



}



</div>


)


}