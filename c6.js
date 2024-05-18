function stringManipulation (sentence){
    let wordArr = sentence.split(" ")
    let result = ""
    for(let i = 0; i < wordArr.length;i++){
        let word_after = wordManipulation(wordArr[i]);
        if(i != wordArr.length - 1){
            result = result.concat(word_after + " ");
        } else {
            result = result.concat(word_after);
        }
    }
    return result;
}

function wordManipulation (word){
    let first = word[0]
    let vocals = ['a','i','u','e','o','A','I','U','E','O']
    if(vocals.includes(first)){
        return(word);
    } else{
        let result = word.slice(1,word.length);
        result = result.concat(first + "nyo");
        return(result)
    }
}

let a = "How are you doing today"
console.log(stringManipulation(a));