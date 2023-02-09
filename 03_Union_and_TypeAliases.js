"use strict";
// ---- Unions ----
Object.defineProperty(exports, "__esModule", { value: true });
// This is our basic variable typing
let username = "alex";
// What if we want to make a variable of potentially multiple types?
let pageNumber = "24"; // use the pipe " | " symbol
// What about default values or null?
let errorMessage = null;
let user = null;
// Use Unions Sparingly! - NOT like this example:
// Hard to maintain && no type safety... DO NOT do this!!
let someProp;
const popularTags1 = ['dragon', 'coffee']; // sure this works... but let's be clearer
const popularTags2 = ['tech', 'cars']; // now we know it is an array OF type PopularTag
const dragonsTag = 'dragon';
