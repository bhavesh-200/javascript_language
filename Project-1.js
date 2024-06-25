var num1 = 10;
var num2 = 5;
var operator = ("multi");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
var result;
if (operator === "add") {
    result = num1 + num2;
} else if (operator === "sub") {
    result = num1 - num2;
} else if (operator === "multi") {
    result = num1 * num2;
} else if (operator === "divde") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        console.log("Cannot divide by zero");
        result = "Error";
    }
} else {
    console.log("Invalid operator");
    result = "Error";
}
console.log("Result: " + result);