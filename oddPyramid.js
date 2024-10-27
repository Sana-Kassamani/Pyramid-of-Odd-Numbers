// nested for loops: 1st goes n and 2nd goes n at some point
// O( n power 2), n being parameter or user input
function oddPyramids(n) {
  string = "";
  for (var i = 1; i <= n; i++) {
    odds = [];
    for (var j = 1; j <= i; j++) {
      odds.push(2 * j - 1);
    }
    string += odds.join(" ");
    string += "<br>";
    // console.log(odds.join(" "));
  }
  return string;
}

var userInput = prompt("Please enter number of rows:");
var pyramid = oddPyramids(userInput);
document.getElementById("body").innerHTML = pyramid;
