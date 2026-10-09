"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";


export default function Navbar(){


const pathname = usePathname();

const [open,setOpen]=useState(false);



function active(path:string){

return pathname===path
?
"text-indigo-600 font-semibold"
:
"hover:text-indigo-600"

}



return(

<nav className="
sticky
top-0
z-50
bg-white/90
backdrop-blur-xl
border-b
shadow-sm
">



<div className="
max-w-7xl
mx-auto
px-6
py-4
flex
items-center
justify-between
">






<Link

href="/"

onClick={()=>setOpen(false)}

className="
flex
items-center
gap-3
"

>


<img

src="/logo.png"

className="
w-10
h-10
rounded-xl
shadow-sm
"

/>



<div>


<span className="
text-2xl
font-bold
text-indigo-600
">

SIMSOLVE

</span>


<p className="
text-xs
text-gray-500
">

Simulation Learning Platform

</p>


</div>



</Link>








<button

className="
md:hidden
text-3xl
"

onClick={()=>setOpen(!open)}

>

{open?"✕":"☰"}

</button>








<div

className={`
${open?"block":"hidden"}

md:flex

items-center

gap-7

absolute

md:static

top-20

left-0

w-full

md:w-auto

bg-white

md:bg-transparent

p-6

md:p-0

shadow-md

md:shadow-none

`}
>







<Link

href="/"

onClick={()=>setOpen(false)}

className={active("/")}

>

Beranda

</Link>







<Link

href="/dashboard"

onClick={()=>setOpen(false)}

className={active("/dashboard")}

>

Dashboard

</Link>









<div className="
relative
group
">


<button

className="
hover:text-indigo-600
transition
"

>

Simulasi ▾

</button>







<div className="
hidden
group-hover:block
absolute
top-8
left-0
bg-white
border
rounded-2xl
shadow-xl
w-60
p-3
">


<Link

href="/simulation"

onClick={()=>setOpen(false)}

className="
block
p-3
rounded-xl
hover:bg-indigo-50
"

>

🚀 Pilih Simulasi

</Link>




<Link

href="/monte-carlo"

onClick={()=>setOpen(false)}

className="
block
p-3
rounded-xl
hover:bg-indigo-50
"

>

🎲 Monte Carlo

</Link>




<Link

href="/inventory"

onClick={()=>setOpen(false)}

className="
block
p-3
rounded-xl
hover:bg-indigo-50
"

>

📦 Persediaan

</Link>




<Link

href="/queue"

onClick={()=>setOpen(false)}

className="
block
p-3
rounded-xl
hover:bg-indigo-50
"

>

🚶 Antrean

</Link>


</div>


</div>









<Link

href="/teori"

onClick={()=>setOpen(false)}

className={active("/teori")}

>

📚 Teori

</Link>








<Link

href="/practice"

onClick={()=>setOpen(false)}

className={active("/practice")}

>

🎓 Latihan

</Link>








<Link

href="/about"

onClick={()=>setOpen(false)}

className={active("/about")}

>

Tentang

</Link>








</div>


</div>


</nav>


)

}