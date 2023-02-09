let hello: string = "hello";
hello = "world";
console.log(hello);
// hello = false // wrong type will error

//  ---- Functions ----
const getFullName = (name: string, surname: string): string => {
  // return true // can't return boolean because our func specifies we return a string
  return name + " " + surname;
};

console.log(getFullName("Alice", "Boberts"));


// This allows everything in this file to stay in this module scope - in TS without this line, everything is available in the global scope
export {}