// Function as a Return Value:

function createMultiplier(factor) {
    return function(x) {
      return x * factor;
    };
}
let double = createMultiplier(2);
console.log(double(5));