//function to check email, if email is 'admin@ireport.com' it redirects 
// to admin page else it redirects to user page.

function checkEmail(){

    let response = document.getElementById("email").value;
    if (response == "admin@ireport.com"){
        location = "admin.html";
    }
    else{
        location = "user.html";
    }
    return false;
}