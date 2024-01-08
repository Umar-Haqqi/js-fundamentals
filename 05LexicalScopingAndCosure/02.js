// closure

function func() {
    const myName = "Umar"; // this will be return with function scope because of lexical scoping
    const myEmail = "tL5gZ@example.com"; // this will be return with function scope because of lexical scoping

    function displayName() {
        console.log(`My name is ${myName} and my email is ${myEmail}`);
    }

    return displayName;
    // here it will return a function along with lexical scope (myName, myEmail)


    // ** closure concept: 
    // return not just only returns a function but whole lexical scope
}

const callFunc = func();
callFunc();


// function scope remain until the function is called or executed