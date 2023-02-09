"use strict";
// ---- Creating Object Types in TS ----
Object.defineProperty(exports, "__esModule", { value: true });
// Can do like this... but NOT DRY
const user1 = {
    name: "Alice",
    age: 30,
};
// THIS is preferred - we can reuse our interface!
const user2 = {
    name: "Bob",
    age: 35,
    getMessage() {
        return `Hello my name is ${this.name}`;
    },
};
const user3 = {
    name: "Carol",
    age: 28,
    gender: "female",
    getMessage() {
        return `Hello my name is ${this.name}`;
    },
};
console.log(`User2's name is ${user2.name}, they are ${user2.age} years old and their gender is ${user2.gender}`);
console.log(`User3's name is ${user3.name}, they are ${user3.age} years old and their gender is ${user3.gender}`);
console.log(user3.getMessage());
