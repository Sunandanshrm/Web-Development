let dynamicVar = 42;       // dynamicVar is a number
console.log(typeof dynamicVar); // Output: "number"

dynamicVar = "Hello";      // Now dynamicVar is a string
console.log(typeof dynamicVar); // Output: "string"

dynamicVar = true;         // Now dynamicVar is a boolean
console.log(typeof dynamicVar); // Output: "boolean"

function printValue(value) {
    console.log(value);
  }                        // Dynamic typing for function parameters
  
  printValue(100);            // Output: 100
  printValue("JavaScript");   // Output: JavaScript
  printValue({ key: "value" }); // Output: { key: 'value' }
  