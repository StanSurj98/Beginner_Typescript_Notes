"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ---- Void ----
// If your functions don't return anything, declare them void return
const doSomething = () => {
    console.log("doSomething");
    // return 1 // error
};
// ---- Any ----
// Literally breaks all of TS' uses and just allows anything
let foo = "foo";
foo = 123;
foo = false;
console.log(foo.bar); // undefined -> no error because Any allows it...
// Try to limit Any to literally single digit uses... it's really not a good idea to allow much of Any
// ---- Never ----
// Usually in libraries and such but sometimes can be useful
const doNever = () => {
    throw "never";
};
// Function with "never" literally "never ends" or reaches an end point, so we can only use Throw for when it breaks? (im still not sure here)
//  ---- Unknown ----
// Works as "any" initially, but once initialized, it sticks to that type
let vAny = 10;
let vUnknown = 10;
let s1 = vAny;
let s2 = vUnknown; // "as" is --- Type Assertion --- we are changing its type here, we can do it with any types
let pageNumber2 = '1';
let numericPageNumber = pageNumber2; // without converting to unknown first, it will error before changing to number
