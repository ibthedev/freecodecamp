// Solution with Regular expression and Array of ASCII character codes
function rot13(str) {
    var rotCharArray = [];
    var regEx = /[A-Z]/;
    str = str.split("");
    for (var x in str) {
        if (regEx.test(str[x])) {
            // A more general approach
            // possible because of modular arithmetic
            // and cyclic nature of rot13 transform
            rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
        } else {
            rotCharArray.push(str[x].charCodeAt());
        }
    }
    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");



/* Code Explanation:
An empty array is created in a variable called rotCharArray to store the character codes.
The regEx variable stores a regular expression for all uppercase letters from A to Z.
We split str into a character array and then use a for loop to loop through each character in the array.
Using an if statement, we test to see if the string only contains uppercase letters from A to Z.
If it returns true, we use the charCodeAt() function and rot13 transformation to return the correct value, otherwise we return the initial value.
We then return the string with the character codes from the rotCharArray variable.
 */




/* Algorithm Explanation:
ALPHA	KEY	BASE 	 	 	 ROTATED	ROT13
-------------------------------------------------------------
[A]     65  <=>   0 + 13  =>  13 % 26  <=>  13 + 65 = 78 [N]
[B]     66  <=>   1 + 13  =>  14 % 26  <=>  14 + 65 = 79 [O]
[C]     67  <=>   2 + 13  =>  15 % 26  <=>  15 + 65 = 80 [P]
[D]     68  <=>   3 + 13  =>  16 % 26  <=>  16 + 65 = 81 [Q]
[E]     69  <=>   4 + 13  =>  17 % 26  <=>  17 + 65 = 82 [R]
[F]     70  <=>   5 + 13  =>  18 % 26  <=>  18 + 65 = 83 [S]
[G]     71  <=>   6 + 13  =>  19 % 26  <=>  19 + 65 = 84 [T]
[H]     72  <=>   7 + 13  =>  20 % 26  <=>  20 + 65 = 85 [U]
[I]     73  <=>   8 + 13  =>  21 % 26  <=>  21 + 65 = 86 [V]
[J]     74  <=>   9 + 13  =>  22 % 26  <=>  22 + 65 = 87 [W]
[K]     75  <=>  10 + 13  =>  23 % 26  <=>  23 + 65 = 88 [X]
[L]     76  <=>  11 + 13  =>  24 % 26  <=>  24 + 65 = 89 [Y]
[M]     77  <=>  12 + 13  =>  25 % 26  <=>  25 + 65 = 90 [Z]
[N]     78  <=>  13 + 13  =>  26 % 26  <=>   0 + 65 = 65 [A]
[O]     79  <=>  14 + 13  =>  27 % 26  <=>   1 + 65 = 66 [B]
[P]     80  <=>  15 + 13  =>  28 % 26  <=>   2 + 65 = 67 [C]
[Q]     81  <=>  16 + 13  =>  29 % 26  <=>   3 + 65 = 68 [D]
[R]     82  <=>  17 + 13  =>  30 % 26  <=>   4 + 65 = 69 [E]
[S]     83  <=>  18 + 13  =>  31 % 26  <=>   5 + 65 = 70 [F]
[T]     84  <=>  19 + 13  =>  32 % 26  <=>   6 + 65 = 71 [G]
[U]     85  <=>  20 + 13  =>  33 % 26  <=>   7 + 65 = 72 [H]
[V]     86  <=>  21 + 13  =>  34 % 26  <=>   8 + 65 = 73 [I]
[W]     87  <=>  22 + 13  =>  35 % 26  <=>   9 + 65 = 74 [J]
[X]     88  <=>  23 + 13  =>  36 % 26  <=>  10 + 65 = 75 [K]
[Y]     89  <=>  24 + 13  =>  37 % 26  <=>  11 + 65 = 76 [L]
[Z]     90  <=>  25 + 13  =>  38 % 26  <=>  12 + 65 = 77 [M]
 */