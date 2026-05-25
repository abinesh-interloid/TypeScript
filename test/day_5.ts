type Users_basic = {
    name: string,
    age: number,
    phone: number,
    mail: string
}

type cusId = {
    id?: number
}

type bal = {
    balance: number
}

type Users = Users_basic & cusId
// type balance = Users_basic & cusId & bal

class Acc {

    Users: Array<Users & bal> = []

    createAcc(userAccDetial: Users_basic, id: number) {
        const a: Users & bal = { ...userAccDetial, id, balance: 500 }
        this.Users.push(a)
        console.log("user Cerated")
    }


    credit(id: number, amount: number) {
        if (0 > amount) {
            console.log("the amount is not valid")
            return
        }

        for (let i = 0; i < this.Users.length; i++) {
            if (id === this.Users[i].id) {
                const balance = amount
                const exiBal = this.Users[0].balance
                this.Users[0].balance = balance + exiBal
                console.log(`the amout is credited Successfully. your actual balance is${this.Users[0].balance} `)
            }
            else if (i == this.Users.length - 1) {
                console.log("The User not found")
            }
        }


    }

    checkbal(id: number) {
        if (id === this.Users[0].id) {
            console.log(`${this.Users[0].balance} is the balance`)
        }
        else {
            console.log("the mentiod id is not correct please check the id");

        }
    }

    debit(id: number, amount: number) {


        if (id === this.Users[0].id && amount > 0) {
            const balance = amount
            const exiBal = this.Users[0].balance
            if (exiBal >= balance) {
                this.Users[0].balance = exiBal - balance
                console.log(`Amount of ${balance} is debited. Yours balance ${this.Users[0].balance} is the balance`)
            }
            else {
                console.log(`Amount of ${balance} is not debited.`)
            }

        }
        else {
            console.log("Amount is not valid");

        }

    }

    dataId(id: number) {
        if (id === this.Users[0].id) {
            console.log(`the Account detials of ${id} is ${this.Users[0].name}, ${this.Users[0].mail},, ${this.Users[0].phone}`)
        }
    }


}

const user: Users_basic = {
    name: "Abinesh",
    age: 21,
    phone: 9787080878,
    mail: "a978780878@gmail.com"
}


const user2: Users_basic = {
    name: "kavi",
    age: 21,
    phone: 9787080878,
    mail: "a978780878@gmail.com"
}

const Account = new Acc()

Account.createAcc(user, 101)
Account.credit(101, 500)
// Account.checkbal(101)
// Account.debit(101, -1200)
// Account.debit(101, 200)
// Account.checkbal(101)
// Account.dataId(101)
console.log('\n-------------------------------------------------');

// Account.createAcc(user2, 101)
// Account.credit(101, -500)
// Account.checkbal(101)
// Account.debit(101, -1200)
// Account.debit(101, 200)
// Account.checkbal(101)
// Account.dataId(101)