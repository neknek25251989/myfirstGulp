function myFunction0() {
  var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  document.getElementById('demo0').innerHTML = fruits.toString();
}
function myFunction1() {
  var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  document.getElementById('demo1').innerHTML = fruits.join(' * ');
}
function myFunction2() {
  var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  document.getElementById('demo2').innerHTML = fruits;
  document.getElementById('demo23').innerHTML = fruits.pop();
  document.getElementById('demo25').innerHTML = fruits;
}
function myFunction3() {
  var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  document.getElementById('demo3').innerHTML = fruits;
  fruits.push('Kiwi');
  document.getElementById('demo35').innerHTML = fruits;
}
function myFunction4() {
  var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  document.getElementById('demo4').innerHTML = fruits;
  document.getElementById('demo43').innerHTML = fruits.shift();
  document.getElementById('demo45').innerHTML = fruits;
}
function myFunction5() {
  var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  document.getElementById('demo5').innerHTML = fruits;
  document.getElementById('demo53').innerHTML = fruits.unshift('Lemon');
  document.getElementById('demo55').innerHTML = fruits;
}
function myFunction6() {
  var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  document.getElementById('demo6').innerHTML = fruits;
  fruits[fruits.length] = 'Kiwi';
  document.getElementById('demo65').innerHTML = fruits;
}