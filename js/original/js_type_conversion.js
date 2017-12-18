function myFunction1() {
  document.getElementById('demo1').innerHTML = 
    typeof 'John' + '<br>' +
    typeof 3.14 + '<br>' +
    typeof NaN + '<br>' +
    typeof false + '<br>' +
    typeof [1,2,3,4] + '<br>' +
    typeof {name:'John', age:34} + '<br>' +
    typeof new Date() + '<br>' +
    typeof function () {} + '<br>' +
    typeof myCar + '<br>' +
    typeof null;
}

function myFunction2() {
  document.getElementById('demo2').innerHTML = 
  'John'.constructor + '<br>' +
  (3.14).constructor + '<br>' +
  false.constructor + '<br>' +
  [1,2,3,4].constructor + '<br>' +
  {name:'John', age:34}.constructor + '<br>' +
  new Date().constructor + '<br>' +
  function() {}.constructor;
}

var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
document.getElementById('demo3').innerHTML = isArray(fruits);

function isArray(myArray) {
  return myArray.constructor.toString().indexOf('Array') > -1;
}

var myDate = new Date();
document.getElementById('demo4').innerHTML = isDate(myDate);

function isDate(myDate) {
  return myDate.constructor === Date;
}

var x = 123;
document.getElementById('demo5').innerHTML = 
  x.toString() + '<br>' +
  (123).toString() + '<br>' +
  (100 + 23).toString();

var y = 456
document.getElementById('demo6').innerHTML = 
  String(y) + '<br>' +
  String(456) + '<br>' +
  String(400 + 50 + 6);

function myFunction7() {
  var y = '5';
  var x = + y;
  document.getElementById('demo7').innerHTML = 
  typeof y + '<br>' + typeof x;
}

function myFunction8() {
  var y = 'John';
  var x = + y;
  document.getElementById('demo8'),innerHTML =
  typeof x + '<br>' + x;
}