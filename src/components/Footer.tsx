import Link from "next/link";



export default function Footer(){


return(

<footer className="
bg-slate-900
text-white
mt-20
">



<div className="
max-w-7xl
mx-auto
px-8
py-12
grid
md:grid-cols-3
gap-10
">





<div>


<h2 className="
text-3xl
font-bold
text-indigo-400
">

SIMSOLVE

</h2>



<p className="
mt-4
text-gray-300
leading-relaxed
">

Platform pembelajaran simulasi interaktif
untuk memahami konsep pemodelan,
analisis sistem, dan visualisasi hasil.

</p>



</div>









<div>


<h3 className="
text-xl
font-bold
">

Menu

</h3>



<div className="
mt-4
space-y-3
text-gray-300
">


<Link

href="/"

className="
block
hover:text-white
"

>

Beranda

</Link>



<Link

href="/simulation"

className="
block
hover:text-white
"

>

Simulasi

</Link>



<Link

href="/teori"

className="
block
hover:text-white
"

>

Teori

</Link>



<Link

href="/practice"

className="
block
hover:text-white
"

>

Latihan

</Link>



</div>


</div>









<div>


<h3 className="
font-bold
">
Dikembangkan Oleh
</h3>


<p className="
mt-2
">
Kelompok 10
</p>


<p>
Program Studi Ilmu Komputer
</p>


<p>
Universitas Negeri Medan
</p>


</div>






</div>







<div className="
border-t
border-gray-700
text-center
py-5
text-gray-400
">

© 2026 SIMSOLVE. Semua Hak Dilindungi.

</div>




</footer>


)

}