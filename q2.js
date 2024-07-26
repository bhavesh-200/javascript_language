function findSecondLargest(arr) {
    if (arr.length < 2) {
      return null;
    }
  
    let max = -Infinity;
    let secondMax = -Infinity;
  
    for (let num of arr) {
      if (num > max) {
        secondMax = max;
        max = num;
      } else if (num > secondMax && num !== max) {
        secondMax = num;
      }
    }
  
    return secondMax;
}
const arr = [4, 2, 9, 6, 5, 1];
console.log(findSecondLargest(arr));