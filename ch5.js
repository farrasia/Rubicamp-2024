function stringManipulation (word){
    let first = word[0]
    let vokal = ['a','i','u','e','o','A','I','U','E','O']
    if(vokal.includes(first)){
        return(word);
    } else{
        let result = word.slice(1,word.length);
        result = result.concat(first + "nyo");
        return(result)
    }
}

console.log(stringManipulation("ayam"));
console.log(stringManipulation("oyam"));
console.log(stringManipulation("pebek"));
