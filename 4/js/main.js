var numberone = Number(prompt('write number?'));
var c = numberone % 10;
var output = document.getElementById('output');
(c == 0) ? output.innerHTML += 'you win': output.innerHTML += 'you looooose';