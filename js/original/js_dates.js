function getDate() {
  document.getElementById('demo0').innerHTML = Date();
}
function getDate1() {
  var d = new Date('December 14, 2017 21:00:00');
  document.getElementById('demo1').innerHTML = d;
}
function getDate2() {
  var d = new Date(89,3,27,10,0,0,0);
  document.getElementById('demo2').innerHTML = d;
}
function getUtc() {
  var d = new Date();
  document.getElementById('demo3').innerHTML = d.toUTCString();
}