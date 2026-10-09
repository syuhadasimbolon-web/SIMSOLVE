export interface HistoryItem {

id:number;

type:string;

title:string;

description:string;

date:string;

}



export function saveHistory(
data:HistoryItem
){

const oldHistory =
localStorage.getItem("simsolve-history");


const history =
oldHistory
?
JSON.parse(oldHistory)
:
[];



history.unshift(data);



localStorage.setItem(
"simsolve-history",
JSON.stringify(history)
);



}



export function getHistory(){


if(typeof window === "undefined"){
return [];
}


const data =
localStorage.getItem(
"simsolve-history"
);



return data
?
JSON.parse(data)
:
[];


}