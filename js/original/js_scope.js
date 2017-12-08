myFunction1();
document.getElementById('demo1').innerHTML =
'The type of carName is ' + typeof carName1;
function myFunction1() {
  var carName1 = 'Volvo';
}
var carName2 = 'Volvo';
myFunction2();
function myFunction2() {
  document.getElementById('demo2').innerHTML =
'I can display ' + carName2;
}
myFunction3();
document.getElementById('demo3').innerHTML =
'I can display ' + carName3;
function myFunction3() {
  carName3 = 'Volvo';
}
