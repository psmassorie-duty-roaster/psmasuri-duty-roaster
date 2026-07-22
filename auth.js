function logout(){

    localStorage.removeItem("login");

    window.location="login.html";

}



function changePassword(){

    let oldPass = prompt("पुराना Password डालें");

    let newPass = prompt("नया Password डालें");


    if(oldPass=="12345")
    {

        localStorage.setItem(
            "adminPassword",
            newPass
        );


        alert("Password Changed Successfully");

    }

    else
    {

        alert("Old Password Wrong");

    }

}