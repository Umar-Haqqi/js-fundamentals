// Lexical scoping

function outer() {
    const outerVar = 10;

    function innerOne() {
        console.log("outerVar in innerOne: ", outerVar);
    }

    function innerTwo() {
        console.log("innerOneVar in innerTwo: ", outerVar);
    }

    innerOne();
    innerTwo();
}

outer();


// in lexical scoping, child can access parent variables,but parent cannot access child variables, and also sibling cannot access each other variables