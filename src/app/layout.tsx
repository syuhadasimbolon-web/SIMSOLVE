import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {

title:
"SIMSOLVE | Platform Simulasi Interaktif",


description:
"Platform pembelajaran simulasi interaktif untuk memahami Monte Carlo, Model Persediaan, dan Teori Antrean.",


keywords:[

"SIMSOLVE",

"Simulasi",

"Monte Carlo",

"Persediaan",

"Teori Antrean"

]


};







export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {


return (

<html lang="id">

<body>

{children}

</body>

</html>

);

}