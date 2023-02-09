// ---- Generics, Interfaces, & Functions ----

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
const addID = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};




// -- Generics with Interfaces for Function calls --

interface UserInterface {
  name: string;
}
const user: UserInterface = {
  name: "Jack",
};

interface PetInterface extends UserInterface {
  type: string;
}
const pet: PetInterface = {
  name: "Fluffy",
  type: "dog",
};

// Now can be explicit about which interface using when calling our method...
const result1 = addID<UserInterface>(user);
const result2 = addID<PetInterface>(pet);
// HOWEVER... still broken like this since anything works inside the generic type (Until we declare <T extends object> on our method above)
// const result3 = addID<string>("foo"); // This will error because of <T extends object> constraint, otherwise it would work if it was only <T> generic

console.log("result", result1);
console.log("result", result2);




// -- Generics Combined INTO Interfaces --

// You can pass in any amount of Generics as arguments!
interface DataInterface<T, V> {
  success: boolean;
  data: T; // "data" doesn't know what Type it "could" be, but it WILL conform to <T> once it's passed in
  meta: V;
}

// Notice how one generic Interface can now lead to multiple objects with different data properties!
const data1: DataInterface<{ meta: string }, string> = {
  success: true,
  data: {
    meta: "foo",
  },
  meta: "bar",
};

const data2: DataInterface<UserInterface[], number> = {
  success: true,
  data: [{ name: "Alice" }, { name: "Bob" }, { name: "Carol" }],
  meta: 200,
};

export {};
