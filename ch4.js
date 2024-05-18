function romawi(n) {
    let output = "";
    while(n >= 1000){
        output += "M";
        n-=1000;
    } 
    while ( n >= 900){
        output += "CM";
        n-=900;
    } 
    while (n >= 500){
        output += "D";
        n-=500;
    } 
    while (n >= 400){
        output += "CD";
        n-=400
    } 
    while (n >= 100){
        output += "C";
        n-=100;
    } 
    while (n >= 90){
        output += "XC";
        n-=90;
    } 
    while (n >= 50){
        output += "L";
        n-=50;
    } 
    while(n >= 40){
        output += "XL";
        n-=40;
    } 
    while(n >= 10){
        output += "X";
        n-=10;
    } 
    while(n >= 9){
        output += "IX";
        n-=9;
    } 
    while(n >= 5){
        output += "V";
        n-=5;
    } 
    while(n >= 4){
        output += "IV";
        n-=4;
    } 
    while(n>= 1) {
        output += "I";
        n-=1;
    }
    return output;
}

console.log(romawi(1345));
console.log(romawi(8));
console.log(romawi(556));