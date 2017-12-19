document.getElementById('demo1').innerHTML = 5 & 1;
document.getElementById('demo2').innerHTML = 5 | 1;
document.getElementById('demo3').innerHTML = 5 ^ 1;
document.getElementById('demo4').innerHTML = ~5;
document.getElementById('demo5').innerHTML = 5 << 1;
document.getElementById('demo6').innerHTML = -5 >> 1;
document.getElementById('demo7').innerHTML = 5 >>>1;
document.getElementById('demo8').innerHTML = dec2bin(-5);
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
document.getElementById('demo9').innerHTML = bin2dec(101);
function bin2dec(bin) {
  return parseInt(bin, 2).toString(10);
}