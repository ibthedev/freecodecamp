function palindrome(str) {
    this.str = str;
    return this.str.replace(/[\W_]/g, '').toLowerCase() ===
        this.str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

console.log(palindrome(`m#o&m`));