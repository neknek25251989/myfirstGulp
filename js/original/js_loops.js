function myLoop1() {
  var cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi'];
  var text = '';
  var i;
  for (i = 0; i < cars.length; i++) {
    text += cars[i] + '<br>'
  }
  document.getElementById('demo1').innerHTML = text;
}
function myLoop2() {
  var text = '';
  var i;
  for (i = 0; i < 5; i++) {
    text += 'The number is ' + i + '<br>';
  }
  document.getElementById('demo2').innerHTML = text;
}
function myLoop3() {
  var cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Audi'];
  var i = 2;
  var len = cars.length;
  var text = '';
  for (; i < len; i++) {
    text += cars[i] + '<br>';
  }
  document.getElementById('demo3').innerHTML = text;
}
function myLoop4() {
  var txt = '';
  var person = {fname:'John', lname:'Doe', age:25};
  var x;
  for (x in person) {
    txt += person[x] + ' ';
  }
  document.getElementById('demo4').innerHTML = txt;
}