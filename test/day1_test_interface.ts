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
