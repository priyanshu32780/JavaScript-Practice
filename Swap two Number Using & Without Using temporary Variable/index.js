// var a = prompt("please enter the a value")
// var b = prompt("please enter the b value")
// console.log(`The value of a is: ${a}, The value of b is: ${b}`)
// var temp;
// // a= 5, b= 6
// temp = a // a=5
// a = b // a= 6
// b = temp
// console.log(`After swap \n The value of a is: ${a}, the value of b is: ${b}`)





var a = parseInt(prompt("please enter the a value"))
var b = parseInt(prompt("please enter the b value"))
console.log(`The value of a is: ${a}, The value of b is: ${b}`)
a = a+b
b = a-b
a = a-b
console.log(`After swap \n The value of a is: ${a}, the value of b is: ${b}`)
