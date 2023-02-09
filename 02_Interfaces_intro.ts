// ---- Creating Object Types in TS ----

// Interfaces define the SHAPE of our objects
interface UserInterface {
  name: string;
  age: number;
  getMessage(): string; // adding optional function/method to this object
}

// Can do like this... but NOT DRY
const user1: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};

// THIS is preferred - we can reuse our interface!
const user2: UserInterface = {
  name: "Bob",
  age: 35,
  getMessage() {
    return `Hello my name is ${this.name}`;
  },
};

// Interfaces are OPEN -> can redeclare and it automatically EXTENDS our interface
interface UserInterface {
  // Adding OPTIONAL property of gender?:"" of 3 "literal" types
  gender?: "male" | "female" | "other" | undefined;
}

const user3: UserInterface = {
  name: "Carol",
  age: 28,
  gender: "female",
  getMessage() {
    return `Hello my name is ${this.name}`;
  },
};

console.log(
  `User2's name is ${user2.name}, they are ${user2.age} years old and their gender is ${user2.gender}`
);
console.log(
  `User3's name is ${user3.name}, they are ${user3.age} years old and their gender is ${user3.gender}`
);
console.log(user3.getMessage());


export {}