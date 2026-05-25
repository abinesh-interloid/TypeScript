type UserType = typeof a
type Id = { id: number }


class Gen {
    users: Array<object> = [];

    create<T>(c: T): (T & Id) {
        const f: (T & Id) = { id: 101, ...c };
        this.users.push(f);
        return f;
    }


    update<T>(id: number, u: Partial<T>) {
        (this.users as Array<UserType & Id>).forEach((items, index) => {
            if (id === items.id) {
                items = { ...items, ...u };
                this.users[index] = items;
            }
        });
        console.log("Updated Successfully");
        console.log(this.users);

    }


    read(): Array<UserType & Id> {
        return this.users as Array<UserType & Id>;
    }

    delete(id: number) {
        const valuess = (this.users as Array<UserType & Id>).filter((item) => {
            return item.id != id;
        });

        this.users = valuess;
        console.log("users deleted");
    }
}



const a = {
    name: "Abinesh",
    class: "PG",
    phone: 9500366043,
    email: "dummydummy@gmail.com"
};


const generics = new Gen();

const create = generics.create(a);
console.log(create);
generics.update(101, { name: "Kavin", Class: "Ug" });
generics.read();
generics.delete();


