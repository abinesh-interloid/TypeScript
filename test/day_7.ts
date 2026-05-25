const a: Array<number> = [-0, -2000, -70, -10000];
let great = -Infinity;
let small = -Infinity;
for (let i = 0; i < a.length; i++) {
    if (a[i] > great) {
        small = great;
        great = a[i];
    } else if (a[i] > small) {
        small = a[i];
    }
}
console.log(small);
console.log(great);
