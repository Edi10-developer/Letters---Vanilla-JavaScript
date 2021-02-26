/***********************
     L E V E L   3
***********************/

/*  Exercises:
 ******************/
let nameLetters = [];
let lastNameLetters = [];
let fullNameLetters = [];

/* 1.
 **********/
console.log("************ EXERCISE N 1: **************");

function saveName() {
  let myName = document.getElementById("name").value;
  for (let letter of myName) {
    nameLetters.push(letter);
  }
  document.getElementById("firstResult").innerHTML = nameLetters;
}

/* 2.
 **********/
console.log("************ EXERCISE N 2: **************");
function findVocals() {
  for (let i = 0; i < nameLetters.length; i++) {
    if (
      nameLetters[i].toLowerCase() === "a" ||
      nameLetters[i].toLowerCase() === "e" ||
      nameLetters[i].toLowerCase() === "i" ||
      nameLetters[i].toLowerCase() === "o" ||
      nameLetters[i].toLowerCase() === "u" ||
      nameLetters[i].toLowerCase() === "y"
    ) {
      document.getElementById("secondResult").textContent +=
        nameLetters[i] + " es una vocal, ";
      console.log(nameLetters[i] + " es una vocal.");
    } else {
      document.getElementById("secondResult").textContent +=
        nameLetters[i] + " es una consonante, ";
      console.log(nameLetters[i] + " es una consonante.");
    }
  }
}

/* 3.
 **********/
console.log("************ EXERCISE N 3: **************");
function checkLetterValues() {
  let name_letters = new Map();

  // Set the letter inside the MAP() and the value of 1 - I can't fix the dimanic value on the Level 3
  for (let letter of nameLetters) {
    name_letters.set(letter, 1);
  }
  for (let [key, value] of name_letters) {
    document.getElementById("thirdResult").textContent += key + ": " + value;
  }
}

/* 4.
 **********/
console.log("************ EXERCISE N 4: **************");
function showFullName() {
  let myLastName = document.getElementById("lastName").value;
  for (let letter of myLastName) {
    lastNameLetters.push(letter);
  }
  fullNameLetters.push(nameLetters);
  fullNameLetters.push(" ");
  fullNameLetters.push(lastNameLetters);

  document.getElementById("fourthResult").innerHTML = fullNameLetters;
  console.log("My fullname letters are: " + fullNameLetters);
}


/* 5.
 **********/
console.log("************ EXERCISE N 5: **************");