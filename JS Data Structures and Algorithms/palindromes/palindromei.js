function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');
    for (var i = 0, len = str.length - 1; i < len / 2; i++) {
        if (str[i] !== str[len - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));


/* Code Explanation:
We start by using the same methods of replacing characters we don’t want in the string using RegEx's, regular expressions, and then make our string lowercase.

Next we set up our for loop and declare an index i to keep track of the loop. We set our escape sequence to when i is greater than the length of the string divided by two, which tells the loop to stop after the halfway point of the string. And finally we set i to increment after every loop.

Inside of each loop we want to check that the letter in element [i] is equal to the letter in the length of the string minus i, [str.length - i]. Each loop, the element that is checked on both sides of the string moves closer to the center until we have checked all of the letters. If at any point the letters do not match, we return false. If the loop completes successfully, it means we have a palindrome and therefore we return true!

 */