function logos(constructor: typeof Logs) {

    const a1 = new constructor();
    const date = new Date();
    a1.add("Abinesh", 21, date);

}

@logos
class Logs {

    add(name: string, age: number, date: Date) {
        console.log(name);
        console.log(age);
        console.log(date);
    }
}

const a2 = new Logs();
console.log(a2);




