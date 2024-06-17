console.log(typeof 42);           // Output: "number"
console.log(typeof "Hello");      // Output: "string"
console.log(typeof true);         // Output: "boolean"
console.log(typeof undefined);    // Output: "undefined"
console.log(typeof null);         // Output: "object" (this is a historical bug in JavaScript)

console.log(typeof { key: "value" }); // Output: "object"
console.log(typeof [1, 2, 3]);        // Output: "object" (arrays are objects in JavaScript)
console.log(typeof function() {});    // Output: "function"