"use strict";
// ---- ES6 Classes with TS ----
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(firstName, lastName, age, permanentUsername) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.permanentUsername = permanentUsername;
    }
    // -- ReadOnly -- is great for things we don't want to change
    changePermanentUsername() {
        // this.permanentUsername = "test!";
    }
    // Since User implements UserInterface - this method is now mandatory, will error if removed
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
User.maxAge = 50; // * Static = only accessable inside the class NOT on instances - OPTIONALLY can be readonly *
const user1 = new User("Alice", "Boberts", 23, "Snebzor");
// -- Private -- 
// Explicit access to .age below will error since age is private:
// console.log(`My name is ${user1.getFullname()} and my age is ${user1.age}`);
// But... private properties accessed INSIDE class methods are available when calling the method
console.log(`My name is ${user1.getFullName()} and my username is ${user1.permanentUsername}`);
// -- Static -- properties only readable on the Class, not an instance of it
// console.log(user1.maxAge);
console.log(User.maxAge);
// -- Extending Classes -- all child classes inherit the parents' properties
class Admin extends User {
    setEditor(editor) {
        this.editor = editor;
    }
    getEditor() {
        // since optional, can't guarantee it's a string - can be undefined: thus assert to return it as string only
        return this.editor;
    }
}
const admin1 = new Admin("Bob", "Christian", 50, "AdminHammer");
console.log(admin1.firstName);
admin1.setEditor("Hello World");
console.log(admin1.getEditor());
