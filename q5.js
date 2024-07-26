function moveZerosToEnd(arr) {
    return arr.filter(element => element !== 0).concat(arr.filter(element => element === 0));
}

const arr = [1, 0, 2, 0, 3, 4, 0, 5];

console.log(moveZerosToEnd(arr));