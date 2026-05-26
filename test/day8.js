// {
//     a:2,
//     b:2
// }

// const a = "aabbccddee";
// let c = {}
// for (let i of a) {
//     if (Object.hasOwn(c, i)) {
//         c[i] = c[i] + 1
//     } else {
//         c[i] = 1
//     }
// }
// console.log(c);

var addTwoNumbers = function (l1, l2) {
    let arr = [];
    let count = 0;
    let carry = 0;

    if (l1.length < l2.length) {
        let a = l2.length - l1.length;
        for (let k = 0; k < a; k++) {
            l1.unshift(0);
        }
    } else {
        let a = l1.length - l2.length;
        for (let k = 0; k < a; k++) {
            l2.unshift(0);
        }
    }

    console.log('l1', l1);
    console.log('l2', l2);

    for (
        let i = l1.length > l2.length ? l1.length - 1 : l2.length - 1;
        i >= 0;
        i--
    ) {
        let b =
            (l1[i] != undefined ? l1[i] : 0) +
            (l2[i] != undefined ? l2[i] : 0) +
            carry;
        carry = b > 9 ? 1 : 0;
        if (b <= 9) {
            arr[count] = b;
        } else if (i == 0 && b > 9) {
            arr[count] = b - 10;
            arr[count + 1] = carry;
        } else {
            arr[count] = b - 10;
        }
        count++;
    }
    return arr;
};

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
//[8,9,9,9,0,0,0,1]
