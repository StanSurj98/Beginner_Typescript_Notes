// ---- Working with the DOM ----

// Note: TS doesn't actually read/access our markup - it's just type safety on the JS side!
const someElement = document.querySelector(".foo"); // this doesn't guarantee it KNOWS what 'type' the element with a classname of "foo" will be

// Typically users want to check the 'value' of an input element (form, etc.) - so let's emulate that
// console.log(`someElement`, someElement.value); // this is what users would probably do - but it errors saying "value" might not exist...


// -- This is where Type Assertions come into play! --


// -- BAD -- is to assert as any, THEN access optional 'value' prop 'if' it exists... this just renders TS useless!
console.log(`someElement`, (someElement as any).value);

// -- GOOD -- 
// Let's now ensure we KNOW what our element type 'will' be
const someInputElement = document.querySelector('.bar') as HTMLInputElement;
// "<TypeAssertHere>Variable" also valid syntax for "as"
const someInputElement2 = <HTMLInputElement>document.querySelector('.baz');



console.log(`someInputElement`, someInputElement.value); // this is valid because there IS a 'value' property on an HTMLInputElement for SURE
console.log(`someInputElement`, someInputElement2.value); // this is valid because there IS a 'value' property on an HTMLInputElement for SURE


// ---- Event Listeners ----

// First observe how we would NORMALLY write this without TS, hover over the errors to see why it's not valid TS
// someElement.addEventListener("blur", (event) => {
//   console.log("event", event.target.value) // 'event' here is generic - we cannot guarantee it has a target.value property
// })

// Let's make it TS Worthy
someElement?.addEventListener('blur', (event) => {
  // First let's define the target of the event -> in our case we KNOW this is an input field here
  const target = event.target as HTMLInputElement 
  console.log('event', target.value) // we can be SURE that 'target' is an HTMLInputElement which GUARANTEES there will be a field/prop of 'value'
})

// This is why we use Type Assertions with "as" especially when working with DOM elements
// TS has no access to our markup!


export{}