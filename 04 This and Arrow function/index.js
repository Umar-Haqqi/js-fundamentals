const user = {
    username: 'guest',
    email: 'test@abc.com',
    welcomeMsg: function () {
        console.log(`Welcome ${this.username}.`);    // this current context ko refer krta ha

        console.log("this:", this);
    },

    // console: console.log("thisssssssssssss:", this)
}

user.welcomeMsg();
user.username = "umar";
user.welcomeMsg();


console.log('thisssssss', this);
// the output will be empty
// but if use this same code in browser console, it will print window object
// window object is the global object



const func = function () {
    let username = "umar";
    console.log("simple function:", this.username);     // ouptut will be undefined
    // this is not available in function scope, only working with objects.
}
func();

// same with arrow fucntion
const arrowFunc = () => {
    let username = "umar";
    console.log("Arrow function: ",this.username);
    console.log(this);
}
arrowFunc();



