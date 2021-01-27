document.cookie = "Luke#Password#true";

var parts = cookie.Split("#");

if(parts[2] == true)
{
 alert("logged in!"); 
}
