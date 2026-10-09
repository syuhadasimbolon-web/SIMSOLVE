"use client"


export default function ProgressCard(){


return(

<section className="
mt-10
bg-white
border
rounded-3xl
p-6
">


<div className="
flex
justify-between
items-center
">


<h2 className="
text-xl
font-bold
">

Progres Pembelajaran

</h2>


<span className="
text-indigo-600
font-bold
">

70%

</span>


</div>


<div className="
mt-5
w-full
bg-gray-200
rounded-full
h-4
">


<div

className="
bg-indigo-600
h-4
rounded-full
"

style={{
width:"70%"
}}

/>


</div>



<p className="
mt-4
text-gray-600
">

Terus berlatih untuk meningkatkan kemampuan simulasi Anda.

</p>


</section>

)

}