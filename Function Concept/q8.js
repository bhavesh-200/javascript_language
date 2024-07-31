// Nested Function Closure:

function counter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
}
let count1 = counter();
console.log(count1());
console.log(count1());
let count2 = counter();
console.log(count2());
console.log(count1()); 