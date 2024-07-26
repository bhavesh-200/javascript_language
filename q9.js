function areAnagrams(arr1, arr2) {
    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
}

const arr1 = [1, 2, 3, 4];
const arr2 = [4, 3, 2, 1];

console.log(areAnagrams(arr1, arr2));