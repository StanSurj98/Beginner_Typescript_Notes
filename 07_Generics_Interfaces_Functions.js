"use strict";
// ---- Generics, Interfaces, & Functions ----
Object.defineProperty(exports, "__esModule", { value: true });
// Suppose we need a func that accepts ANY object as an argument
// Returns the spread of that Object adding new id field to it...
// We could do it like this... with :any as a lame typescript no-no
// const addID = (obj: any) => {
//   const id = Math.random().toString(16)
//   return {
//     ...obj,
//     id
//   }
// }
// -- Generics -- OR we use Generics the Typescript way
// Note: "T" can be any name, it's just a variable to hold "this param's data type"
// const addID = <T>(obj: T) => {
//   const id = Math.random().toString(16)
//   return {
//     ...obj,
//     id,
//   }
// }
// BUT THIS is the best way to do it - explicitly declaring our Generics can be anything... SO LONG AS it is an object using "extends"
const addID = (obj) => {
    const id = Math.random().toString(16);
    return Object.assign(Object.assign({}, obj), { id });
};
const user = {
    name: "Jack",
};
const pet = {
    name: "Fluffy",
    type: "dog",
};
// Now can be explicit about which interface using when calling our method...
const result1 = addID(user);
const result2 = addID(pet);
// HOWEVER... still broken like this since anything works inside the generic type (Until we declare <T extends object> on our method above)
// const result3 = addID<string>("foo"); // This will error because of <T extends object> constraint, otherwise it would work if it was only <T> generic
console.log("result", result1);
console.log("result", result2);
// Notice how one generic Interface can now lead to multiple objects with different data properties!
const data1 = {
    success: true,
    data: {
        meta: "foo",
    },
    meta: "bar",
};
const data2 = {
    success: true,
    data: [{ name: "Alice" }, { name: "Bob" }, { name: "Carol" }],
    meta: 200,
};
