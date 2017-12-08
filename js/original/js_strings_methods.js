var txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
document.getElementById('demo1').innerHTML = txt.length;
/*算出字串的長度*/
var str = 'Please locate where \'locate\' occurs!';
document.getElementById('demo2').innerHTML = str.indexOf('locate');
/*找出text在字串中第一個出現的地方*/
document.getElementById('demo3').innerHTML = str.lastIndexOf('locate');
/*找出text在字串中最後一個出現的地方*/
document.getElementById('demo4').innerHTML = str.indexOf('locate',15);
/*找出text在字串中第一個出現的地方 數字代表開始的位置*/
document.getElementById('demo5').innerHTML = str.search('where');
/*找出text在字串中第一個出現的地方 與indexOf()不同不能選開始的位置*/
var fruits = 'Apple, Banana, Kiwi';
document.getElementById('demo6').innerHTML = fruits.slice(7,13);
/*切一個字串並且return被切除的部分形成一個新的字串，
可以接受負值從後面開始起算，也可以只指定一個位置，
往後面切。*/
document.getElementById('demo7').innerHTML = fruits.substring(7,13);
/*功能和slice()一樣，但不同的地方是無法接受負值*/
document.getElementById('demo8').innerHTML = fruits.substr(7,6);
/*功能和slice()一樣，但第二個參數是要切的長度*/
function myFunction1() {
  var str = document.getElementById('demo9').innerHTML;
  var txt = str.replace('Microsoft','W3School');
  document.getElementById('demo9').innerHTML = txt;
}
function myFunction2() {
  var str = document.getElementById('demo10').innerHTML;
  var txt = str.replace(/Microsoft/g,'W3School');
  document.getElementById('demo10').innerHTML = txt;
}
function myFunction3() {
  var text = document.getElementById('demo11').innerHTML;
  document.getElementById('demo11').innerHTML = text.toUpperCase();
}
function myFunction4() {
  var text1 = 'Hello';
  var text2 = 'World!';
  document.getElementById('demo12').innerHTML = text1.concat(' ',text2);
}