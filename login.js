let savedPassword =
localStorage.getItem("adminPassword")
|| "12345";


function login(){


let user =
document.getElementById("username").value;


let pass =
document.getElementById("password").value;



if(user=="admin" && pass==savedPassword)
{

localStorage.setItem(
"login",
"true"
);


window.location="admin.html";


}

else
{

alert("Wrong Username or Password");

}


}