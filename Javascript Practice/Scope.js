/*
var name ="Sunandan"
console.log(name)
function func()
{
    console.log(name)
}
func(): Here "name" is a variable with global scope

function func()
{
    var name = "Sunandan"
    console.log(name)
}
func()
console.log(name): Here the "name" variable is with local scope. The last line will give error as the variable "name" is not defined here

{
    let name = "Sunandan"
    console.log(name)
}
console.log(name): There is three keywords to define a variable (var,let,const).

var
1. It's used to define variable
2. It supports global and function scope but not block scope
3. It can be hoisted

console.log(i)
var i =3: This is the example of hoisting. Before the code we have not defined the variable i then the code should have thrown some error. But it found in the next line the variable i. It does not assign the value but takes the variable
*/

