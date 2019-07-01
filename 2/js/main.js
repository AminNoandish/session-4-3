var task = ['name', 'age'];
var quistion = prompt('Do you want to enter your name or age?');
console.log(task.indexOf(quistion));
var a = task.indexOf(quistion);
var b = (a == 0) ? prompt('what is your name?') : prompt('how old are you?');
console.log(b);