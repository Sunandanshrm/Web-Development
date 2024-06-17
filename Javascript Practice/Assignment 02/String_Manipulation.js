// Defining a string
let str = "Hello, World!";

// 1. Length of the string
console.log("Length:", str.length); // Output: 13

// 2. Accessing characters
console.log("Character at index 0:", str.charAt(0)); // Output: "H"
console.log("Character at index 0:", str[0]); // Output: "H"

// 3. Changing case
console.log("Uppercase:", str.toUpperCase()); // Output: "HELLO, WORLD!"
console.log("Lowercase:", str.toLowerCase()); // Output: "hello, world!"

// 4. Substring extraction
console.log("Substring (1, 5):", str.substring(1, 5)); // Output: "ello"
console.log("Slice (1, 5):", str.slice(1, 5)); // Output: "ello"
console.log("Slice (-6):", str.slice(-6)); // Output: "World!"

// 5. Splitting a string
let strArray = str.split(", ");
console.log("Split by comma and space:", strArray); // Output: ["Hello", "World!"]

// 6. Replacing a substring
let newStr = str.replace("World", "JavaScript");
console.log("Replace 'World' with 'JavaScript':", newStr); // Output: "Hello, JavaScript!"

// 7. Trimming whitespace
let paddedStr = "   padded string   ";
console.log("Trimmed string:", paddedStr.trim()); // Output: "padded string"

// 8. Checking if a string contains a substring
console.log("Contains 'World':", str.includes("World")); // Output: true
console.log("Starts with 'Hello':", str.startsWith("Hello")); // Output: true
console.log("Ends with '!':", str.endsWith("!")); // Output: true

// 9. Concatenating strings
let str1 = "Hello";
let str2 = "World";
let concatenatedStr = str1.concat(", ", str2, "!");
console.log("Concatenated string:", concatenatedStr); // Output: "Hello, World!"

// 10. Repeating a string
let repeatedStr = str1.repeat(3);
console.log("Repeated string:", repeatedStr); // Output: "HelloHelloHello"
