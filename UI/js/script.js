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

function edit_incident_comment(){
    var incident = prompt("Please edit incident comment", "This is dummy text but do read aheard. Global funds.");
    if (incident != null) {
        document.getElementById("demo").innerHTML =
        "Incident changed to " + incident + "!";
    }
}
function edit_incident_location(){
    var incident = prompt("Please edit incident location", "0.235469, 1.42356");
    if (incident != null) {
        document.getElementById("demo").innerHTML =
        "Incident location changed to " + incident + "!";
    }
}
