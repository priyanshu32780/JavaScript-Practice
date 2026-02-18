function check() {
    var value = document.getElementById("data").value
    // var res = Math.sign(value)
    if (value > 0) {
        res = `${value} is Positive number`
    }
    else if (value < 0) {
        res = `${value} is Negative number`
    }
    else if (value == 0) {
        res = `${value} is zero `
    }
 else{
    res = `${value} is not a number`
 }
    
    document.getElementById("res").innerText = res
}