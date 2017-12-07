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
/*切一個字串並且return被切除的部分形成一個新的字串*/