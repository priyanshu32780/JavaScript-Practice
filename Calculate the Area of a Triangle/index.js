// var base = prompt("Enter a base vlaue")
// var height = prompt("Enter a height value")
// var area = (base*height)/2
// console.log(area)


var a = 10
var b = 5
var c = 10
var s = (a+b+c)/2
var temp = s*(s-a)*(s-b)*(s-c)
var area = Math.sqrt(temp)
console.log(area)
