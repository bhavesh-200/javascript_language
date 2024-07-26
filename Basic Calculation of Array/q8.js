function rotateRight(arr) {
    const lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log(rotateRight(arr));