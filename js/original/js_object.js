var person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
document.getElementById('demo1').innerHTML = 
person.firstName + " " + person.lastName;
document.getElementById('demo2').innerHTML = 
person['firstName'] + " " + person['lastName'];
document.getElementById('demo3').innerHTML = 
person.fullName();
document.getElementById('demo4').innerHTML = 
person.fullName; 