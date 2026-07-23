function generateRoster(){


let table =
document.getElementById("rosterTable");


table.innerHTML="";


let today=new Date();



let duties=[

"चीता 1 दिन",

"चीता 1 रात्रि",

"गस्त",

"पिकेट",

"जनसुनवाई",

"थाना ड्यूटी"

];



if(typeof dutyData=="undefined"){

alert("पहले Staff Data Upload करें");

return;

}



let staff=dutyData;



for(let d=0; d<7; d++){


let date=new Date(today);

date.setDate(
today.getDate()+d
);



let dateText=
date.toLocaleDateString("hi-IN");



staff.forEach((emp,index)=>{


if(checkLeave(emp["पीएनओ न0"]))
return;

let duties =
JSON.parse(
localStorage.getItem("dutyPoints")
)
|| [];

"चीता 1 दिन",
"चीता 1 रात्रि",
"चीता 2 दिन",
"चीता 2 रात्रि",
"गश्त",
"पिकेट",
"जनसुनवाई",
"थाना ड्यूटी",
"मालखाना",
"सीसीटीएनएस"

];
duties[index % duties.length];



table.innerHTML += `

<tr>

<td>${dateText}</td>

<td>
${emp["पीएनओ न0"] || ""}
</td>


<td>
${emp["नाम अधि0/कर्म0गण"] || ""}
</td>


<td>
${getRank(emp["नाम अधि0/कर्म0गण"])}
</td>


<td>
${duty}
</td>


<td>
ON DUTY
</td>


</tr>

`;



});


}



}



function getRank(name){


if(!name)
return "";


if(name.includes("उ0नि"))
return "उ0नि0";


if(name.includes("है0का"))
return "HC";


if(name.includes("का0"))
return "आरक्षी";


return "";

}
function getDuty(index,day){


let dutyList=[

"चीता 1 दिन",
"चीता 1 रात्रि",
"चीता 2 दिन",
"चीता 2 रात्रि",
"गश्त",
"पिकेट",
"जनसुनवाई",
"थाना ड्यूटी"

];


return dutyList[
(index+day) % dutyList.length
];


}