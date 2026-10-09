export function exportCSV(
data:any[],
filename:string
){


if(typeof window === "undefined"){
return;
}


if(!data || data.length === 0){
return;
}



const header = Object.keys(data[0]);



const rows = data.map(item =>

header.map(key =>

`"${item[key]}"`

).join(",")

);



const csv =

[
header.join(","),
...rows

].join("\n");




const blob = new Blob(

[csv],

{
type:"text/csv;charset=utf-8;"
}

);



const url = URL.createObjectURL(blob);



const link = document.createElement("a");


link.href=url;

link.setAttribute(
"download",
filename
);



document.body.appendChild(link);


link.click();


document.body.removeChild(link);



URL.revokeObjectURL(url);



}