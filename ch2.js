function deretKaskus(n){
    let output = [];
    let i = 3;
    while(i <= n*3){
        if( i % 5 == 0 && i % 6 == 0){
            output.push("KASKUS");
        } else if(i % 6 == 0){
            output.push("KUS");
        } else if (i % 5 == 0){
            output.push("KAS");
        } else{
            output.push(i);
        }
        i += 3;
    }
    return output;
}

console.log(deretKaskus(0));