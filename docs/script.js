var parts = document.cookie.split("#");

if(parts[2] == "true")
{
alert(parts[2]);
document.getElementById('enteredusername').innerHTML = parts[0];
}

function onRegister()
{
document.cookie = document.getElementById('name').value
+ "#" + document.getElementById('password').value
+ "#" + "true";
alert("Successfully registered!");
}

function onCheck()
{
var enteredun = document.getElementById('name').value;
var enteredpw = document.getElementById('password').value;
var username = document.cookie.split("#").parts[0];
var password = document.cookie.split("#").parts[1];

if(password != enteredpw || username != enteredun)
{
alert("Wrong username / password.");
}

else
{
alert("Successfully logged in!");
}
}
