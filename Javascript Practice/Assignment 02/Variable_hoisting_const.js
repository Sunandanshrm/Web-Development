// "const" hoisting
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 20;
console.log(c); // 20