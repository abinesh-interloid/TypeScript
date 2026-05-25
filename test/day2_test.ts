// enum payment_type {
//     Created = "Created",
//     Success = "Success",
//     fail = "fail",
//     refund = "refund"

// }
// type pay = {
//     user_id: number,
//     payment_id: number,
//     time: number,
//     payment_type: payment_type
//     amount: number,
// }

// function payments(obj: pay) {

//     const obj_create = {
//         user_id: obj.user_id,
//         payment_id: obj.payment_id,
//         time: obj.time,
//         payment_type: obj.payment_type,
//         amount: obj.amount,
//     }

//     if (obj.payment_type === "Created") {
//         console.log("Payments Created")
//         console.log(obj_create)
//     }

//     else if (obj.payment_type === "Success") {
//         console.log("Payments Success")
//         console.log(obj_create)
//     }

//     else if (obj.payment_type === "fail") {
//         console.log("Payments failed")
//         console.log(obj_create)
//     }

//     else {
//         console.log("Payments Refund")
//         console.log(obj_create)
//     }



// }



// const cre_obj: pay = {
//     user_id: 101,
//     payment_id: 125,
//     time: 10.25,
//     payment_type: payment_type.fail,
//     amount: 30000,
// }


// payments(cre_obj)



function a111(a: number[] | undefined | null) {
    console.log(a![0]);
    // if (typeof (a) === "undefined") {
    //     console.log(a)
    // }

    // else {
    //     console.log(a[1])
    // }

}



const arr: number[] | undefined | null = [1, 2, 3];

a111(arr);
