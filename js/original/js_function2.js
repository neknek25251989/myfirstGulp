function toCelsius(f) {
  return (5 / 9) * (f - 32);
}
document.getElementById('demo1').innerHTML = toCelsius(77);
document.getElementById('demo2').innerHTML = toCelsius;
document.getElementById('demo3').innerHTML = 
'The temperature is ' + toCelsius(77) + " Celsius"