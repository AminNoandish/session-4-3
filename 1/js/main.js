var list = ['amin', 'amir', 'nima'];
var name = prompt('Please enter your name?');
var b = list.indexOf(name);
var output = document.getElementById('output');
(b == -1) ? output.innerHTML += 'ACCESS DENIED': output.innerHTML += 'Welcome ' + name;