function palindrome(str) {
  str = str.toLowerCase();
  let fword = [];
  let rword = "";
  let letters = [];
  let letter = "";

  /* Put the letters of the original unfiltered word into an array and a variable  */

  for (let i = 0; i < str.length; i++) {
    letter = str[i];
    if (letter == "/") {
    } else if (letter == " ") {
    } else if (letter == ")") {
    } else if (letter == "(") {
    } else if (letter == "#") {
    } else if (letter == "%") {
    } else if (letter == "$") {
    } else if (letter == "&") {
    } else if (letter == ",") {
    } else if (letter == ".") {
    } else if (letter == "_") {
    } else if (letter == "-") {
    } else if (letter == "/") {
    } else if (letter == "g") {
    } else if (letter == "]") {
    } else if (letter == "[") {
    } else if (letter == "{") {
    } else if (letter == "}") {
    } else if (letter == "w") {
    } else if (letter == `"\"`) {
    } else {
      fword += letter;
      letters.push(letter);
    }
  }

  // Pop of the letters of the stack in reverse order

  for (let i = 0; i < fword.length; i++) {
    rword += letters.pop();
  }

  if (rword === fword) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome(`m#o&m`));
