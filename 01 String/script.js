// string is array of characters
// array is a collection of items
// all array method works for string


// let str = "hello world";

// --- methods of extracting String Parts
// substr(start, length)
// slice(start, end)
// substring(start, end)

// console.log("substr: " + str.substr(6, 5));
// console.log("slice: " + str.slice(2, 5));
// console.log("substring: " + str.substring(2, 5));



let str = "this is a javascript tutorial, this is good";

console.log(str.indexOf('is'));     // this finds first occurence form the start 
console.log(str.indexOf('is', '10'));    // this finds first occurence form the start after 10 characters
console.log(str.lastIndexOf('is'));    // this starts finding first occurence form the end
// if there is no occurence then it returns -1

//  replace()
let replaceStr = str.replace('good', 'the best.');
console.log(str);
console.log(replaceStr);

// includes() - check whether it is present or not
console.log(str.includes('javascri'));
console.log(str.includes('php'));
