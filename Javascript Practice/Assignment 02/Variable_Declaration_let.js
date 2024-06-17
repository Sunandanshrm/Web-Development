function example() {
    if (true) {
        let y = 5;
        console.log(y); // 5
    }
    console.log(y); // ReferenceError: y is not defined
}
console.log(example())