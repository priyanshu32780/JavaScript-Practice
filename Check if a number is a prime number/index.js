var number = prompt("please enter a number")
if(number==1){
    console.log(`${number} is neither prime nor composite nummber`)

}
else if(number<1){
    console.log(`${number} is not a prime number`)

}
else{
    // 15%2 = R:1
    // 15/2 = q:7
    for(var i = 2; i<number;i++){
        if (number%i ==0){
            var res = `${number} is not a prime number`
            break
        }
        else{
             var res = `${number} is  a prime number`
        }
        
    }
        
   console.log(res) 
}