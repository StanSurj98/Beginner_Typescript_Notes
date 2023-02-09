// ---- Void ----
// If your functions don't return anything, declare them void return
const doSomething = (): void => {
  console.log("doSomething");
  // return 1 // error
};

// ---- Any ----
// Literally breaks all of TS' uses and just allows anything
let foo: any = "foo";
foo = 123;
foo = false;
console.log(foo.bar); // undefined -> no error because Any allows it...

// Try to limit Any to literally single digit uses... it's really not a good idea to allow much of Any

// ---- Never ----
// Usually in libraries and such but sometimes can be useful
const doNever = (): never => {
  throw "never";
};
// Function with "never" literally "never ends" or reaches an end point, so we can only use Throw for when it breaks? (im still not sure here)

//  ---- Unknown ----
// Works as "any" initially, but once initialized, it sticks to that type

let vAny: any = 10
let vUnknown: unknown = 10

let s1: string = vAny;
let s2: string = vUnknown as string; // "as" is --- Type Assertion --- we are changing its type here, we can do it with any types

let pageNumber2: string = '1'
let numericPageNumber: number = (pageNumber2 as unknown) as number; // without converting to unknown first, it will error before changing to number

// console.log(vAny.foo());       // Allows it because of :any
// console.log(vUnknown.foo());   // error because :unknown without type assertions



export {}