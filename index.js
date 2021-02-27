// Import stylesheets
import "./style.css";

const XO = str => {
  // To make a case sensitive
  const stringCaseSensitive = str.toLowerCase();

  // Splitted into Arrays
  const splitString = stringCaseSensitive.split("");

  // Used reduce to count the occurance of x,X
  const findX = splitString.reduce(
    (acc, cur) => acc + (cur === "x" || cur === "X"),
    0
  );

  // Used reduce to count occurance of y,Y
  const findO = splitString.reduce(
    (acc, cur) => acc + (cur === "o" || cur === "O"),
    0
  );

  // Set condition for equal counts
  if (findX == findO) {
    return true;
  } else {
    return false;
  }
};

// Display the value

// XO("ooxx") => true
const showResultA = document.getElementById("resultA");
showResultA.innerHTML = XO("ooxx");

// XO("xooxx") => false
const showResultB = document.getElementById("resultB");
showResultB.innerHTML = XO("ooxx");

// XO("ooxXm") => true
const showResultC = document.getElementById("resultC");
showResultC.innerHTML = XO("ooxx");

// XO("zpzpzpp") => true, when no 'x' and 'o' is present should return true
const showResultD = document.getElementById("resultD");
showResultD.innerHTML = XO("ooxx");

// XO("zzoo") => false
const showResultE = document.getElementById("resultE");
showResultE.innerHTML = XO("ooxx");
