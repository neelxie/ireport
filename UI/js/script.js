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

function deleteIncident(){

    var txt;
    if (confirm("Do you want to delete incident?")) {
        txt = "";
    } else {
        txt = "";
    }
    document.getElementById("mydelet").innerHTML = txt;
}

function editIncident(){
    var incident = prompt("Please edit incident", "This is dummy text but do read aheard.Global fund global");
    if (incident != null) {
        document.getElementById("demo").innerHTML =
        "Incident changed to " + incident + "!";
    }
}