function isoDate() {
  document.getElementById('demo0').innerHTML = new Date('2017-12');
}
function isoDate1() {
  document.getElementById('demo1').innerHTML = new Date('2017-12-15T20:30:00Z');
}
function isoDate2() {
  document.getElementById('demo2').innerHTML = new Date('2017-12-15T20:00:00-06:00');
}
function isoDate3() {
  document.getElementById('demo3').innerHTML = new Date('12/15/2017');
} 
function isoDate4() {
  document.getElementById('demo4').innerHTML = new Date('Dec 15 2017');
}