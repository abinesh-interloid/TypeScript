// arr = [0, 1, 2, 3, 4, 9, 8, 7]
// k = 2

// let arr1 = arr.slice(k + 1, arr.length).concat(arr.slice(0, k + 1))
// console.log(arr1)

// arr = [0, 1, 2, 3, 4, 9, 8, 7]
// let arr1 = []
// let arr2 = []
// k = 2

// for (i = 0; i <= arr.length - 1; i++) {
//     if (i <= k) {
//         arr1.push(arr[i])
//     }
//     else {
//         arr2.push(arr[i])
//     }
// }
// console.log([...arr2, ...arr1])

// arr = [0, 1, 2, 3, 4, 9, 8, 7]
// let arr1 = []
// let arr2 = []
// s = 0
// k = 2

// for (i = 0; i <= arr.length - 1; i + k) {
//     arr1 = arr.slice(i, i + k)
//     arr2 = [arr1]

// }
// console.log(arr2)
// //////////////////////////////////////////////////////////////////////////
// const arr = [0, 1, 2, 3, 4, 9, 8, 7, 10, 21, 55, 68, 45]
// let arr1 = []
// let arr2 = []
// let s = 0
// let k = 3
// let d = 0
// if (k > 2) {
//     d = k - 2

// }

// if (k > 1) {
//     for (let i = 0; i <= (arr.length / 2) - d; i++) {

//         arr1 = arr.slice(s, k)
//         arr2.push(arr1)
//         s = s + 2 + d
//         k = k + 2 + d
//     }
// }

// else {
//     for (let i = 0; i <= arr.length - 1; i++) {

//         arr2.push([arr[i]])
//         // s = s + 2 + d
//         // k = k + 2 + d
//     }
// }

// console.log(arr2)

function chunk(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(chunk([10, 20, 60, 75, 2, 6, 7, 6, 8], 6));
