function spiral(param1){
    const arr = []
    const result = []
    let k = 0
    for(let i = 0; i<param1;i++){
        arrDalam = []
        for(let j = 0;j < param1; j++){
            arrDalam[j] = k;
            k++
        }
        arr.push(arrDalam)
    }
    
    let top = 0;
    let bottom = arr.length - 1;
    let left = 0;
    let right = arr[0].length - 1;

    while(top <= bottom && left <= right){
        for(let i = left; i<= right; i++){
            result.push(arr[top][i])
        }
    

        top++

        for(let i = top; i<= bottom; i++){
            result.push(arr[i][right]);
        }

        right--;

        if(top <= bottom){
            for(let i = right; i>= left; i--){
                result.push(arr[bottom][i])
            }

            bottom--
        }

        if(left<= right){
            for( let i = bottom; i>= top; i--){
                result.push(arr[i][left]);
            }
            left++
        }
    }
    console.log(result);

}

spiral(5)
spiral(6)
spiral(7)