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