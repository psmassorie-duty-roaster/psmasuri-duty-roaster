let employees = JSON.parse(
localStorage.getItem("employees")
) || [];



function addEmployee(){


let data = {


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



if(data.name==""){

alert("Name Required");

return;

}



employees.push(data);



localStorage.setItem(
"employees",
JSON.stringify(employees)
);



showEmployees();



document.getElementById("status").innerHTML =
"✅ Employee Added";


}



function showEmployees(){


let table =
document.getElementById("adminTable");


table.innerHTML="";



employees.forEach((e,index)=>{


table.innerHTML += `


<tr>

<td>${e.section}</td>

<td>${e.pno}</td>

<td>${e.name}</td>

<td>${e.mobile}</td>

<td>${e.duty}</td>

<td>

<button onclick="deleteEmployee(${index})">

Delete

</button>

</td>


</tr>


`;


});


}




function deleteEmployee(index){


employees.splice(index,1);


localStorage.setItem(
"employees",
JSON.stringify(employees)
);



showEmployees();


}



showEmployees();