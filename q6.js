function sumArray(arr) {
    let sum = 0;
    arr.forEach(element => sum += element);
    return sum;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(sumArray(arr));