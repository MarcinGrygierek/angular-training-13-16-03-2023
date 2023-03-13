// hoisiting występuje dla funkcji i var
console.log(a);
var a = 10;

foo();

function foo() {
    return 10;
}

// błąd!
console.log(b);
const b = 123;