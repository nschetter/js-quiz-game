// Javascript Quiz Game
// Questions
var q1 = {q:"What is the name of Ned Stark's youngest daughter?", options:"1) Yari 2) Arya 3) Darya 4) Catelyn", a: 2};
var q2 = {q:"What is the name of the country 'Game of Thrones' takes place in?", options:"1) Westeros 2) Westrose 3) Braavos 4) King's Landing", a: 1};
var q3 = {q:"Who wields 'Longclaw' out of these characters?", options:"1) Jaime Lannister 2) The Mountain 3) Sandor 3legane 4) Jon Snow", a: 4};
var q4 = {q:"What is the name of Jon Snow's dire wolf?", options:"1) Ghost 2) Shaggy 3) Scar 4) Bloodclaw", a: 1};
var q5 = {q:"Which region is Oberyn Martel from?", options:"1) Kingdom of the Reach 2) Kingdom of the Stormlands 3) Principality of Dorne 4) Kingdom of the Mountain and the Vale", a: 3};
var q6 = {q:"Which of these characters killed their mother during childbirth", options:"1)Petyr Baelish 2) Ser Jorah 3) Tyrion Lannister 4) Shireen Baratheon", a: 3};
var q7 = {q:""}
var q8 = {q:""}
var q9 = {q:""}
var q10 = {q:""}
// answers -- q1 = 2
// answers -- q2 = 1
// answers -- q3 = 4
// answers -- q4 = 1
// answers -- q5 = 3
// answers -- q6 = 3
// answers -- q7 = 
// answers -- q8 = 
// answers -- q9 = 
// answers -- q10 = 

var qarray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var score, a, i = 0;

alert("Get ready for a Quiz Game of Thrones! Don't worry -- these are only season/book one questions, so no there are spoilers.");

for (i = 0; i < qarray.length; i += 1) {
  var q = qarray[i];
  alert(q.q);
  a = parseInt(prompt(q.options));
  if (a == q.a) {
    alert("That's right!");
    score += 1;
  } else {
    alert("Wrong answer...");
  }
}

var percent = ((score/qarray.length) * 100);
alert("You got " + percent + "% of the questions right, and you need 70% to pass");

if (percent >= 70) {
  alert("You know a good amount about 'Game of Thrones'; you passed!")
} else {
  alert("You know nothing Jon Snow; you failed")
}
