function arrayFlat(arr, depth) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && depth > 0) {
            res.push(...arrayFlat(arr[i], depth - 1));
            // console.log(res)
        } else {
            res.push(arr[i]);
        }
    } return res;
}

let arrayValue = [1, [2, [3, [4, 5, [6, [7, [8]]]]]]];

console.log(arrayFlat(arrayValue, 2));



