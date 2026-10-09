"use client"

import { motion } from "framer-motion";
import Link from "next/link";


interface Props {

  title:string;
  icon:string;
  description:string;
  link:string;

}



export default function ModuleCard({

title,
icon,
description,
link

}:Props){


return (

<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.5
}}

whileHover={{
scale:1.03
}}

className="
rounded-3xl
border
bg-white
p-6
shadow-sm
hover:shadow-xl
transition
"

>


<div className="text-5xl">

{icon}

</div>



<h2 className="
text-xl
font-bold
mt-5
">

{title}

</h2>



<p className="
mt-3
text-gray-600
">

{description}

</p>



<Link

href={link}

className="
inline-block
mt-6
text-indigo-600
font-semibold
"

>

Open Module →

</Link>


</motion.div>


)

}