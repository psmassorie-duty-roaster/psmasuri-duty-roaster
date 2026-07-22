if(localStorage.getItem("login")!="true")
{

window.location="login.html";

}
function loadData(){

let table=document.getElementById("adminTable");

table.innerHTML="";


dutyData.forEach((x)=>{


table.innerHTML += `

<tr>

<td>${x.section}</td>

<td>${x.pno}</td>

<td>${x.name}</td>

<td>${x.mobile}</td>

<td>${x.duty}</td>


</tr>


`;

});


}


loadData();



function addEmployee(){


let newData={

section:
document.getElementById("section").value,


pno:
document.getElementById("pno").value,


name:
document.getElementById("name").value,


mobile:
document.getElementById("mobile").value,


duty:
document.getElementById("duty").value

};



dutyData.push(newData);



alert("Employee Added");


loadData();


}
<button onclick="logout()">
Logout
</button>