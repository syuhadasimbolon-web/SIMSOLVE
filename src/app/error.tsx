"use client"


export default function Error(){

return(

<main className="
min-h-screen
flex
items-center
justify-center
bg-gray-50
">

<div className="
bg-white
border
rounded-3xl
p-10
text-center
">


<h1 className="
text-3xl
font-bold
">

Terjadi Kesalahan

</h1>


<p className="
mt-4
text-gray-600
">

Silakan muat ulang halaman.

</p>


<button

onClick={()=>window.location.reload()}

className="
mt-6
bg-indigo-600
text-white
px-6
py-3
rounded-xl
"

>

Muat Ulang

</button>


</div>

</main>

)

}