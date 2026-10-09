import Link from "next/link";

export default function Hero(){

return (

<section className="
min-h-screen
flex
items-center
">

<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-10
items-center
">


<div>

<h1 className="
text-6xl
font-bold
leading-tight
">

Solve.

<br/>

<span className="text-indigo-600">
Simulate.
</span>

<br/>

Understand.

</h1>


<p className="
mt-6
text-lg
text-gray-600
">

Platform interaktif untuk membantu mahasiswa
menyelesaikan dan memahami Pemodelan dan Simulasi.

</p>


<Link
href="/dashboard"
className="
inline-block
mt-8
bg-indigo-600
text-white
px-6
py-3
rounded-xl
"
>

Mulai Simulasi →

</Link>


</div>



<div className="
bg-indigo-600
rounded-3xl
h-80
flex
items-center
justify-center
text-white
text-xl
">

Input

↓

Model

↓

Simulation

↓

Result


</div>


</div>

</section>

)

}