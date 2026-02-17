function convert(){
    var c = document.getElementById("data").value;
    const f = (c * 1.8) + 32
    document.getElementById("res").innerText = `${c} c = ${f} f`
    }