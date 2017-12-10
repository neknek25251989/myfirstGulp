function myFunction0() {
  document.getElementById('demo0').innerHTML = 100 / 'Apple';
}
function myFunction1() {
  var x = NaN;
  document.getElementById('demo1').innerHTML = typeof x;
}
function myFunction2() {
  var number = 128;
  document.getElementById('demo2').innerHTML = '128 = ' +
  number + 'Decimal, ' +
  number.toString(16) + 'Hexadecimal, ' +
  number.toString(8) + 'Octal,' + 
  number.toString(2) + 'Binary.'
}