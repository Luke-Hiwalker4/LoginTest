document.cookie = "Luke#Password#true";

var parts = document.cookie.split("#");

alert(parts[0]);
alert(parts[1]);
alert(parts[2]);

if(parts[2] == "true")
{
    alert("logged in!"); 
}
