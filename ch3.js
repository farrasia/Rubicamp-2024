function indexPrime(param1){
    let i = 1
    let prime = 1
    while(i <= param1){
        prime++;
        if(isPrime(prime)){
            i++;
        }
    }
    return prime;
}

function isPrime(n){
    let i = 2;
    while(i <= Math.sqrt(n)){
        if(n%i == 0){
            return false;
        }
        i++
    }
    return true;
}
// for(let i=1;i<=100;i++){
//     console.log(indexPrime(i));
// }
console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))