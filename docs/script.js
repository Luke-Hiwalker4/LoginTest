var test = document.cookie;

var parts = test.split("#");

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
alert(document.cookie);
}

function onCheck()
{
var enteredun = document.getElementById('name').value;
var enteredpw = document.getElementById('password').value;
var password = parts[1];

if(password != enteredpw)
{
alert(password);
alert(enteredpw);
alert("Wrong password.");
}

else
{
alert("Successfully logged in!");
}
}
