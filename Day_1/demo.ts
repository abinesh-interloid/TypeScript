// // const a: [string, number, boolean] = ["abi", 101, true]

// // console.log(a);


// // enum Status {
// //     pending = "Still Pending",
// //     rejected = true,
// //     completed = 1
// // }

// // console.log(Status.completed)

// // interface A {
// //     a: string;
// // }

// // interface B {
// //     b: number;
// // }

// // interface C extends A, B {
// //     c: boolean;
// //     ccal(a1: string, b1: number, c1: boolean): void;
// // }

// // class Abinesh implements C {
// //     a = "Abinesh";
// //     b = 10
// //     c = true
// //     ccal(a1: any, b1: number, c1: boolean): void {

// //     }
// //     // ccal(a1, b1, c1):void {
// //     //     console.log(a1, b1, c1)
// //     // }
// // }

// // const a = new Abinesh()
// // a.ccal(10, 10, 20)

// type Trues = (success: boolean,
//     status: number,
//     message: string,
//     data: Array<object>,
//     path: string) => void



// function api(success) {
//     if (success == true) {
//         b(true, 200, "Success", [{ id: 1, name: "abi" }], "./path");
//     }
//     else {
//         c(false, 400, "Validation", [{ feild: "password", message: "length" }], "./login")
//     }
// }

// const b: Trues = function succ(success, status, message, data, path) {
//     console.log(data)
//     console.log(`
//     success : ${success}
//     status : ${status}
//     message : ${message}
//     data : ${data}
//     path : ${path}`)
// }

// const c: Trues = function succ(success, status, message, data, path) {
//     success = success;
//     status = status;
//     message: message;
//     data: data;
//     path: path;
//     console.log(`success : ${success}
//     status : ${status}
//     message : ${message}
//     data : ${data}
//     path : ${path}`)
// }

// api(false)



interface Comman_res {
    success: boolean,
    statuscode: number,
    message: string,
    path: string
}

interface User {
    id: number
    name: string
}

interface Success extends Comman_res {
    data: Array<User>
}


interface Comman_res {
    success: boolean,
    statuscode: number,
    message: string,
    path: string
}

interface errors {
    feild: string,
    message: string
}

interface err_handle extends Comman_res {
    error: errors[]
}

function values(val: boolean) {
    if (val == true) {
        const Suss: Success = {
            success: true, data: [{ id: 200, name: "Success" }, { id: 200, name: "Success" }], message: "Allowed", path: "./path", statuscode: 200
        }
        console.log(Suss)
    }
    else {
        const Errorrs: err_handle = { success: false, error: [{ feild: "Error", message: "Length" }], message: "Validation", path: "./path", statuscode: 400 }
        console.log(Errorrs)
    }
}

values(true)
