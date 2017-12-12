function voteAge() {
  var age, voteable;
  age = document.getElementById('age').value;
  voteable = (age < 18) ? "Too young":"Old enough"; // "?"回傳的是true ":"回傳的false
  document.getElementById('vote').innerHTML = voteable + ' to vote.';
}