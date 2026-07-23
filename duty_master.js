let dutyPoints =
JSON.parse(localStorage.getItem("dutyPoints"))
|| [];



function addPoint(){


let obj={

point:
document.getElementById("point").value,


shift:
document.getElementById("shift").value


};



dutyPoints.push(obj);



localStorage.setItem(
"dutyPoints",
JSON.stringify(dutyPoints)
);



showPoints();


}



function showPoints(){


let html="";


dutyPoints.forEach((x,i)=>{


html+=`

<tr>

<td>${i+1}</td>

<td>${x.point}</td>

<td>${x.shift}</td>


</tr>

`;


});


document.getElementById("pointTable")
.innerHTML=html;


}


showPoints();