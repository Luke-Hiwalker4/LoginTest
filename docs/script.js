document.cookie = "Luke#Password#true";

var parts = cookie.Split("#");

alert(parts[0]);
alert(parts[1]);
alert(parts[2]);

if(parts[2] == true)
{
 alert("logged in!"); 
}
