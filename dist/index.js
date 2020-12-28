"use strict";
// interface Human {
//     name:string,
//     age:number,
//     gender:string
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const person = {
//     name: "nicolas",
//     age: 22,
//     gender: "male",
// }
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("Lynn", 18, "female");
// const name = "Nicolas",
//     age = 24,
//     gender = "mail";
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
// sayHi(person)
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map