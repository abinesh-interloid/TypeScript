arr = [1, 2, 3, 1, 2]
arr1 = []

for (i = 0; i < arr.length; i++) {
    // for (j = i + 1; j <= arr.length; j++) {
    if (!arr1.includes(arr[i])) {
        arr1.push(arr[i])
        // }
    }

}

console.log(arr1)