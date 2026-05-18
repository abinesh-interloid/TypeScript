// let a: (string | number) = "10"
// a = 10
// console.log(typeof (a))


// type A = {
//     Name : string
// }

// type B = {
//     id : number
// }

// type c = A&B

// let d:c = {
//     id:0o1,Name : "Abinesh"
// }

// class Dog {
//     bark() {
//         console.log("Bark");
//     }
// }

// class Cat {
//     meow() {
//         console.log("Meow");
//     }
// }

// function animal(pet: Dog | Cat) {

//     if (pet instanceof Dog) {
//         pet.bark();
//     } else {
//         pet.meow();
//     }
// }


// type Circle = {
//     radius: number;
// }

// type Square = {
//     radius: number;
// }

// type Shape = Circle | Square;

// function area(shape: Shape) {
//     console.log(shape.radius);
// }

// let a: number | null | undefined;
// if (a !== null) {
//     console.log(typeof (a));

// }


// type Circle = {
//     kind: "circle" | "square";
//     radius: number;
// }

// type Square = {
//     kind: "square";
//     side: number;
// }

// type Val = Circle | Square

// function sS(Shapes: Val): void {
//     if (Shapes.kind !== "square") {
//         console.log("Circle")
//     }
// }

// let ob: Val = {
//     kind: "circle",
//     side: 10
// }

// sS(ob)

type Suss1 = {
    message: string,
    path: string,
}

type data = {
    id: number
    name: string
}

type errs = {
    error: string
}

type Succ3 = {
    success: boolean,
}

type Successes = Suss1 & data & Succ3
type Failss = Suss1 & data & errs



function Api(id: number, name: string | undefined, message: string, path: string, success: boolean, error?
    : string): Successes | Failss {
    id = id
    name = name
    message = message
    path = path,
        success = success
    error = error

    if (success === true) {
        const passing = {
            Success: success,
            Data: [{ id: id, name: name }],
            message: message,
            path: path,
            statuscode: id
        }
        console.log(passing)
    }
    else {
        const passing1 = {
            Success: success,
            error: [{ id: id, error: error }],
            message: message,
            path: path,
            statuscode: id
        }
        console.log(passing1)
    }
    return;
}

Api(101, "Abi", "Success", "./path", true)
Api(101, "Error", "./path", false, "Validation")

// success: true, data: [{ id: 200, name: "Success" }, { id: 200, name: "Success" }], message: "Allowed", path: "./path", statuscode: 200
// success: false, error: [{ feild: "Error", message: "Length" }], message: "Validation", path: "./path", statuscode: 400 