let input = [2, 3, 4];

function productAll(arr){
    return arr.reduce((acc, curValue) =>{
        return acc * curValue;
     }, 1)
      
}

console.log(productAll(input))


