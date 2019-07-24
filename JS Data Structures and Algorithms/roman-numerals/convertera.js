function convertToRoman(num) {
    var romans = [
            // 10^i 10^i*5
            ["I", "V"], // 10^0
            ["X", "L"], // 10^1
            ["C", "D"], // 10^2
            ["M"] // 10^3
        ],
        digits = num.toString()
        .split('')
        .reverse()
        .map(function (item, index) {
            return parseInt(item);
        }),
        numeral = "";

    // Loop through each digit, starting with the ones place
    for (var i = 0; i < digits.length; i++) {
        // Make a Roman numeral that ignores 5-multiples and shortening rules
        numeral = romans[i][0].repeat(digits[i]) + numeral;
        // Check for a Roman numeral 5-multiple version
        if (romans[i][1]) {
            numeral = numeral
                // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
                .replace(romans[i][0].repeat(5), romans[i][1])
                // Shorten occurrences of 9 * 10^i
                .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + romans[i + 1][0])
                // Shorten occurrences of 4 * 10^i
                .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
        }
    }

    return numeral;
}

// test here
console.log(convertToRoman(20000));

// Code Explanation:
// Use an array (romans) to create a matrix containing the Roman numeral for a given power of 10 and, if available, the Roman numeral for that power of 10 times 5.
// Convert the input number (num) to a reversed array of digits (digits) so that we can loop through those digits starting with the ones position and going up.
// Loop through each digit, starting with the ones place, and create a Roman numeral string by adding each higher-power Roman numeral to the start of the numeral string a number of times equal to digit. This initial string ignores the Roman numerals that are a power of 10 times 5 and also ignores shortening rules.
// If the relevant power of 10 has a 5-multiple Roman numeral, in numeral, replace 5-in-a-row occurrences with the relevant 5-multiple Roman numeral (i.e., V, L, or D) and shorten occurrences of 9 * 10^i (e.g., VIIII to VIX) and 4 * 10^i (e.g., XXXX to XL). Order is important here!
// Finally, return numeral.