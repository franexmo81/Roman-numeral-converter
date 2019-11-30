// https://www.mathsisfun.com/roman-numerals.html

// Basic combinations
// 1000   M
// 900    CM
// 500    D
// 400    CD
// 100    C
// 90     XC
// 50     L
// 40     XL
// 10     X
// 9      IX
// 5      V
// 4      IV
// 1      I


function convert() {

  // Input from user gets collected
  var myInput = document.getElementById("num").value;

  // Input from user gets cleared
  document.getElementById("num").value = "";

  // Input validation. User is alerted if value is not valid and function ends
  if (myInput % 1 !== 0 || myInput < 0) {
    alert("The number must be a positive integer");
    return;
  }

  // Data arrays definition
  const allLetters = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const allNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const allExplanations = ["(M = 1000)", "(100-1000)", "(D = 500)", "(100-500)", "(C = 100)", "(10-100)", "(L = 50)", "(10-50)", "(X = 10)", "(1-10)", "(V = 5)", "(1-5)", "(I = 1)"];

  // Auxiliar arrays definition
  var letters = [];
  var values = [];
  var explanations = [];

  // Auxiliar variables definition
  var remaining = myInput;
  var j = 0;

  // Detailed output variables definition
  var detailedLetters = "";
  var detailedValues = "";
  var detailedExplanations = "";

  // Loop through arrays
  for (var i = 0; i <= allNumbers.length; i++) {
    if (remaining >= allNumbers[i]) {
      letters[j] = "";
      values[j] = 0;
      explanations[j] = allExplanations[i];
      while (remaining >= allNumbers[i]) {
        letters[j] += allLetters[i];
        values[j] += allNumbers[i];
        remaining -= allNumbers[i];
      }
      j++;
    }
  }
  // Basic output is generated
  document.getElementById("output1").innerHTML = myInput + " =";
  document.getElementById("output2").innerHTML = letters.join('');

  // Show more option is shown
  document.getElementById("show-label").style.display = 'block';

  // Detailed outputs are generated
  detailedSolution = letters.join(' ') + "<br>";
  for (j = 0; j < values.length; j++) {
    detailedLetters = detailedLetters + "<br>" + letters[j] + " =";
    detailedValues = detailedValues + "<br>" + values[j];
    detailedExplanations = detailedExplanations + "<br>" + explanations[j];
  }
  document.getElementById("spaced-letters").innerHTML = letters.join('   ');
  document.getElementById("letters").innerHTML = detailedLetters;
  document.getElementById("values").innerHTML = detailedValues;
  document.getElementById("explanations").innerHTML = detailedExplanations;
}

function clearOutput() {
  // All output is cleared and hidden
  document.getElementById("output1").innerHTML = "";
  document.getElementById("output2").innerHTML = "";
  document.getElementById("show-label").style.display = 'none';
  document.getElementById("hide-label").style.display = 'none';
  document.getElementById("details").style.display = 'none';
}

function showDetailed() {
  // Show less and detailed output are shown. Show more label is hidden
  document.getElementById("show-label").style.display = 'none';
  document.getElementById("hide-label").style.display = 'block';
  document.getElementById("details").style.display = 'block';
}

function hideDetailed() {
  // Show less and detailed output are hidden. Show more label is shown
  document.getElementById("show-label").style.display = 'block';
  document.getElementById("hide-label").style.display = 'none';
  document.getElementById("details").style.display = 'none';
}
