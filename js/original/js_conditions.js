function sayHello() {
  var hour = new Date().getHours();
  var greeting;
  if (hour < 10) {
    greeting = 'Good morning';
  } else if (hour < 20){
    greeting = 'Good day';
  } else {
    greeting = 'Good night'
  }
  document.getElementById('greet').innerHTML = greeting;
}