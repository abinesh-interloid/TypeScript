type Suss1 = {
    success: boolean,
    message: string,
    path: string,
    statuscode: number
}

type data = {
    id: number
    name: string
}

type errs = {
    feild: string,
    messages: string
}


type Successes = Suss1 & data
type Failss = Suss1 & errs



function Api(id: number, name: string | undefined, message: string, path: string, success: boolean, error?
    : string): Successes | Failss {
    // id = id
    // name = name
    // message = message
    // path = path,
    //     success = success
    // error = error

    if (success === true) {
        const passing = {
            Success: success,
            Data: [{ id: id, name: name }],
            message: message,
            path: path,
            statuscode: id
        };
        console.log(passing);
    }
    else {
        const passing1 = {
            Success: success,
            error: [{ id: id, error: error }],
            message: message,
            path: path,
            statuscode: id
        };
        console.log(passing1);
    }
    return;
}

Api(101, "Abi", "Success", "./path", true);
Api(101, "Error", "./path", false, "Validation");



// success: true, data: [{ id: 200, name: "Success" }, { id: 200, name: "Success" }], message: "Allowed", path: "./path", statuscode: 200
// success: false, error: [{ feild: "Error", message: "Length" }], message: "Validation", path: "./path", statuscode: 400 