function myFunction0() {
  var cars = ['Saab', 'Volvo', 'BMW'];
  document.getElementById('demo0').innerHTML = cars[0];
  document.getElementById('demo00').innerHTML = cars;
}
function myFunction1() {
  var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  document.getElementById('demo1').innerHTML = fruits.length;
}
function myFunction2() {
  var fruits, text, fLen, i;
  fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  fLen = fruits.length;
  text = '<ul>';
  for (i = 0; i < fLen; i++) {
    text += '<li>' + fruits[i] + '</li>';
  }
  document.getElementById('demo2').innerHTML = text;
}
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
document.getElementById('demo3').innerHTML = fruits;
function myFunction3 () {
  fruits.push('Lemon');
  document.getElementById('demo3').innerHTML = fruits;
}
function myFunction35 () {
  fruits[fruits.length] = 'Kiwi';
  document.getElementById('demo35').innerHTML = fruits;
}
function myFunction4 () {
  var fruits, text, fLen, i;
  fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  fruits[6] = 'Lemon';
  fLen = fruits.length;
  text = '';
  for (i = 0; i < fLen; i++) {
    text += fruits[i] + '<br>';    
  }
  document.getElementById('demo4').innerHTML = text;
}
function myFunction5 () {
  var person = [];
  person[0] = 'John';
  person[1] = 'Doe';
  person[2] = 46;
  document.getElementById('demo5').innerHTML = 
  person[0] + ' ' + person.length;
}
function myFunction6 () {
  var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  document.getElementById('demo6').innerHTML = Array.isArray(fruits);
}
function myFunction7 () {
  var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  document.getElementById('demo7').innerHTML = fruits instanceof Array;
}