function pola(str){
    var arrOfNum = []
    var result = []
    var unknown1 = str.indexOf("#")  
    var unknown2 = str.lastIndexOf("#")
    for(let i = 0; i<str.length;i ++){
        arrOfNum.push((str[i]))
    }
    for(let i = 0; i<= 9; i++){
        arrOfNum[unknown1] = i.toString()
        for(let j = 0; j <= 9; j++){
            arrOfNum[unknown2] = j.toString()
            var num1 = 0, num2 = 0, num3 = 0;
            let k = 0
            while(true){
                if(arrOfNum[k]==" "){
                    break
                } else{
                    num1 = num1 * 10 + Number(arrOfNum[k])
                    k++
                }
            }
            k+=3
            while(true){
                if(arrOfNum[k]== " "){
                    break
                } else{
                    num2 = num2 * 10 + Number(arrOfNum[k])
                    k++
                }
            }
            k+=3
            while(true){
                if(k==(arrOfNum.length)){
                    break
                } else{
                    num3 = num3 * 10 + Number(arrOfNum[k])
                    k++
                }
            }
            // console.log(num1, num2, num3)
            if(num1 * num2 == num3){
                result.push(i);
                result.push(j)
                return result;
            }
        }
    }
}


console.log(pola("42#3 * 188 = 80#204"));
//[8, 5]

console.log(pola("8#61 * 895 = 78410#5"));
//[7, 9]