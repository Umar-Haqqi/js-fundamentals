// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// let result = addTwoNumbers(5, 10);
// console.log("result: ", result);


// function addTwoNumbers(num1, num2) {
//     // let add = num1 + num2;
//     // return add;

//     return num1 + num2;
// }
// let result = addTwoNumbers(5, 5);
// console.log("result: ", result);


function greeting(username = "Guest") {
    // if (username === undefined) {
    if (!username) {
        return "Name not found";
    }
    else {
        return `Hello ${username}`;
    }
}
// const showMsg = greeting("umar");
const showMsg = greeting();
console.log(showMsg);