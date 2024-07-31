// Function Overloading:

function foo(x, y) {
    if (y === undefined) {
      y = x;
    }
    return x + y;
}
console.log(foo(5));
console.log(foo(5, 10));