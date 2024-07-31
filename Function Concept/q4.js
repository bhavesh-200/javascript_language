// Nested Function Return:

function outer() {
    function inner() {
      return "Hello from inner";
    }
    return inner;
}
let fn = outer();
console.log(fn());