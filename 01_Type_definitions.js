"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hello = "hello";
hello = "world";
console.log(hello);
// hello = false // wrong type will error
//  ---- Functions ----
const getFullName = (name, surname) => {
    // return true // can't return boolean because our func specifies we return a string
    return name + " " + surname;
};
console.log(getFullName("Alice", "Boberts"));
