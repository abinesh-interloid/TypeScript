const arr = [0, 1, 5, 2, -4, 0];
const arr1 = [];
let count = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] != 0) {
        arr1.push(arr[i]);
    }
    else {
        count++;
    }
}

for (let i = 0; i < count; i++) {
    arr1.push(0);
}

// console.log(arr1)
// console.log(arr2)
// arr1.push(arr2)
console.log(arr1);
