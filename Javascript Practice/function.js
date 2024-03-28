/*function hello()
{
    console.log("Hello you idiot")
}
hello(): Calling function without passing any argument

function sum(a,b)
{
    return a+b
}
console.log(sum(2,5)): Passing two arguments to the function

function sum(a,b=6)
{
    return a+b
}
console.log(sum(2): Passing only one argument

function func()
{
    console.log(arguments)
}
func(1,2,3,4,5,6): Functions in JavaScript has global object called Arguments. Kind of interesting to be honest why other languages don't have this

var hello = () => console.log("Hello You Idiot")
hello(): Using arrow notation to define and run function

var sum = (a,b) => a+b
console.log(sum(1,24)): Passing two arguments and printing the result of the function

"Arrow functions does not have arguements object"

var sum = (a,b) => {
    console.log("The value is:")
    return a+b
}
console.log(sum(1,24))

(function(){
    console.log("Hello You Idiot")
})(): Example of an anonymous function. This function does not have any name and we just give the function description. Also here we invoke the function immediately. The function here also called Immedietly invoked function expression (IIFE)
*/
(function(){
    console.log("Hello You Idiot")
})()