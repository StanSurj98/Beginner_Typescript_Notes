// ---- ES6 Classes with TS ----

// Since ES6 Classes are all objects, it works pretty similar to interfaces
// it's just syntactical sugar for prototypes so it works with TS pretty well


// -- Implementing Interfaces -- Meaning this class MUST have the interface specified as part of its properties or methods
interface UserInterface {
  getFullName(): string;
}
class User implements UserInterface {
  // public, private, protected, readonly are all TS syntax - all of this compiles to regular JS but protects you writing the code
  firstName: string; // * Completely public *
  private lastName: string; // * Only accessible within its class *
  protected age: number; // * Only accessible within the class or its children *
  readonly permanentUsername: string; // * Cannot be reassigned within or outside, but can be accessed *
  static readonly maxAge = 50; // * Static = only accessable inside the class NOT on instances - OPTIONALLY can be readonly *

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    permanentUsername: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.permanentUsername = permanentUsername;
  }

  // -- ReadOnly -- is great for things we don't want to change
  changePermanentUsername(): void {
    // this.permanentUsername = "test!";
  }

  // Since User implements UserInterface - this method is now mandatory, will error if removed
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}


const user1 = new User("Alice", "Boberts", 23, "Snebzor");


// -- Private -- 

// Explicit access to .age below will error since age is private:
// console.log(`My name is ${user1.getFullname()} and my age is ${user1.age}`);

// But... private properties accessed INSIDE class methods are available when calling the method
console.log(
  `My name is ${user1.getFullName()} and my username is ${
    user1.permanentUsername
  }`
);




// -- Static -- properties only readable on the Class, not an instance of it
// console.log(user1.maxAge);
console.log(User.maxAge);




// -- Extending Classes -- all child classes inherit the parents' properties
class Admin extends User {
  private editor?: string; // Optional in this case just to avoid initializing it each time

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    // since optional, can't guarantee it's a string - can be undefined: thus assert to return it as string only
    return this.editor as string;
  }
}


const admin1 = new Admin("Bob", "Christian", 50, "AdminHammer");
console.log(admin1.firstName);
admin1.setEditor("Hello World");
console.log(admin1.getEditor());

export {};
