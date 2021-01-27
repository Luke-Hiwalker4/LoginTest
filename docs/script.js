document.cookie = "Luke#Password#true";

var parts = document.cookie.split("#");

if(parts[2] == "true")
{
    document.getElementById('name').value = parts[0];
    document.getElementById('password').value = parts[1];
}
