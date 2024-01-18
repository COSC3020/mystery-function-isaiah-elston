/*
Author: Isaiah E. Elston
Project: Mystery Function
*/

function mystery(a) {
    if(a.length == 1) return a[0];
    var foo = mystery(a.slice(1, a.length))
    console.log("Current value of foo: " + foo)
    if(foo > a[0]) return foo;
    else return a[0];
}

let testInput = "abdc"


console.log(testInput[0])

console.log(testInput.length)

console.log(mystery(testInput))