// async function fetchUser() {
//     return {
//         name: "Abi",
//         ages: 21
//     };
// }

// type A123 = typeof fetchUser

// type Userws = Awaited<typeof fetchUser>;

// const abi: Userws = {
//     name: "Arun",
//     ages: 19
// }

// console.log(abi.name)

// type abi = {
//     name?: string,
//     classes?: string,
//     id?: number,
//     age?: number
// }

// type u_abi = Required<abi>

// const obj: u_abi = {
//     name: "Win",
//     classes: "class of win",
//     id: 200,
//     age: 20
// }

// console.log(obj.name)

// type reader = Readonly<{ name: "ajith" }>

// const reas: reader = {
//     name: "ajith",
// }
// console.log(reas.name, "-=-=-=-=-=-=-")

// type A78 = NonNullable<string | number | boolean | null | undefined>;

// let A79: A78 = 565
// console.log(A79)

function a465(a: string, b: number) {
    // let k12: never

    return a, b;
}

type c = ReturnType<typeof a465>

// const a67 = a465("abi", 125)


const bl231: c = ["Abinesh", 111125];
console.log(bl231);





// console.log(c);

const a65 = a465("abi", 125);
console.log(a65);


type para = Parameters<typeof a465>

const bl: para = ["Abinesh", 111125];
console.log(bl);
