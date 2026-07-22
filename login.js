function login(){


let user =
document.getElementById("username").value;


let pass =
document.getElementById("password").value;



// Default Admin Login

if(user=="admin" && pass=="12345"){


localStorage.setItem(
"login",
"true"
);



window.location.href="admin.html";


}

else{


document.getElementById("msg").innerHTML =
"❌ Wrong Username / Password";


}



}