function check(p, q, r) {
    if (p >= q && p >= r) {
        return p
    }
    else if (q >= p && q >= p) {
        return q
    } else {
        return r
    }
}
var a = prompt("please enter the first number")
var b = prompt("please enter the secomd number")
var c = prompt("please enter the third number")
var x = check(a,b,c)
// var x = Math.max(a,b,c)
console.log(`${a}, ${b}, ${c}: largest = ${x}`)