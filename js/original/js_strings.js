var txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var x = 'It\'s alright';
var y = "We are the so-called \"Vikings\" from the north.";
var w = 'John';
var z = new String('John')
document.getElementById('demo1').innerHTML = txt.length;
document.getElementById('demo2').innerHTML = 
x + '<br>' + y;
document.getElementById('demo3').innerHTML = 
typeof w + '<br>' + typeof z;