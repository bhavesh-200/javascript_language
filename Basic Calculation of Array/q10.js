function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5];

console.log(findIndex(arr, 3));
console.log(findIndex(arr, 6));