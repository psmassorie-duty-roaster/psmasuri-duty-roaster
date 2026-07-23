let leaveData =
JSON.parse(localStorage.getItem("leaveData"))
|| [];



function saveLeave(){


let obj={


pno:
document.getElementById("pno").value,


name:
document.getElementById("name").value,


type:
document.getElementById("leaveType").value,


from:
document.getElementById("fromDate").value,


to:
document.getElementById("toDate").value


};



leaveData.push(obj);



localStorage.setItem(
"leaveData",
JSON.stringify(leaveData)
);



showLeave();


}



function showLeave(){


let html="";


leaveData.forEach(x=>{


html+=`

<tr>

<td>${x.pno}</td>

<td>${x.name}</td>

<td>${x.type}</td>

<td>${x.from}</td>

<td>${x.to}</td>


</tr>


`;


});



document.getElementById("leaveTable")
.innerHTML=html;


}



showLeave();