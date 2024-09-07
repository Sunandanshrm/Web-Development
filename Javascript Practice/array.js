/*
arr = [1,2,3,4,5]
console.log(arr)
arr[0] = 10
console.log(arr): Arrays are mutable. Strings are not mutable

arr.push(6)
console.log(arr):To insert new elements in array at the end 
arr.push(6,7,8,9,10): To add multiple elements in last

arr.unshift(1000):To add multiple elements in front

arr.pop(): To extract Last element of array and decrease the array size by 1
arr.shift(): To extract first element of array and decrease the array size by 1 

arr1.concat(arr2): Concatenates arr1 and arr2
*/
arr1 = [1,2,3,4,5,10]
arr2 = [6,7,8]
console.log(arr1.concat(arr2))