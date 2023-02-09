// ---- Unions ----

// This is our basic variable typing
let username: string = "alex"

// What if we want to make a variable of potentially multiple types?
let pageNumber: string | number = "24" // use the pipe " | " symbol

// What about default values or null?
let errorMessage: string | null = null;
// let errorMessage: string | null        // you can also omit the default value but it's not good practice



// Using Unions with custom interfaces
interface UserInterface {
  name: string
  surname: string;
}
let user: UserInterface | null = null;


// Use Unions Sparingly! - NOT like this example:
// Hard to maintain && no type safety... DO NOT do this!!
let someProp: undefined | null | string | number | string[] | object 




// ---- Type Aliases ----

type ID = string;

interface UserInterface {
  // Both these logics work the same but type ID is special as our unique entity and can be reused
  id: ID;
  // id: string; 
}

// Let's create some sort of reusable unique entity
type PopularTag = string;

const popularTags1: string[] = ['dragon', 'coffee'] // sure this works... but let's be clearer
const popularTags2: PopularTag[] = ['tech', 'cars'] // now we know it is an array OF type PopularTag

// We can create a custom type together with aliases and unions now!
type MaybePopularTag = PopularTag | null;

const dragonsTag: MaybePopularTag = 'dragon';



export {}