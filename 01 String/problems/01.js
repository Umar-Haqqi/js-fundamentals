// 01: Write a function that checks if a given string is a palindrome

function isPalindrome(str) {
    return str === str.split("").reverse().join("")
}
const output = isPalindrome("hanna");
console.log(output);