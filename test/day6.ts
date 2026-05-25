function logos(constructor: any) {

    const a1 = new constructor();
    const date = new Date()
    a1.add("Abinesh", 21, date)

}

@logos
class Logs {

    add(name: string, age: number, date: Date) {
        console.log(name)
        console.log(age)
        console.log(date)
    }
}




