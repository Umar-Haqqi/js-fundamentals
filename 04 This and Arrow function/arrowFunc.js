// ---simple arrow function
const func1 = (num1, num2) => {
    return num1 + num2
}
const func1Output = func1(5, 5);
console.log(func1Output);


// ---arrow function with implicit return
const func2 = (num1, num2) => num1 + num2;

// another way to write
// const func2 = (num1, num2) => (num1 + num2);
// if use {} then return is must

// now if we have to return an object then we can write
// const func2 = (num1, num2) => ({ username: "guest" });


const func2Output = func2(5, 10);
console.log(func2Output);