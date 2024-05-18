function weirdMultiply(sentence) {
    var buffer = 1
    var arrOfDigits = Array.from(String(sentence), Number)
    if(arrOfDigits.length == 1){
        return sentence
    } else{
        for(var i=0;i<arrOfDigits.length;i++){
            buffer *= arrOfDigits[i];
        }
    }
    var output = buffer;
    return weirdMultiply(output)
}


console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))