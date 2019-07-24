function palindrome(str) {
  str = str.toLowerCase();
  let fword = [];
  let rword = "";
  let letters = [];
  let letter = "";
  const pattern = /[\W_]/g;



  for (let i = 0; i < str.length; i++) {
    letter = str[i];
    if (!letter.match(pattern)) {
      fword += letter;
      letters.push(letter);
    }
  }

  for (let i = 0; i < fword.length; i++) {
    rword += letters.pop();
  }

  return rword === fword;
}
console.log(palindrome("A man, a plan, a canal. Panama"));