function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = n * (n + 1) / 2;
    const actualSum = arr.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}

const arr = [1, 2, 3, 5];
console.log(findMissingNumber(arr));