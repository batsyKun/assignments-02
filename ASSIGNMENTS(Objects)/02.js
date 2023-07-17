let input = "ManchesterUnited";
let characters = input.split("");
let charObj = characters.reduce((acc, curValue) => {
    // if(acc[curValue]){
    //     acc[curValue] += 1;
    // }
    // else acc[curValue] = 1;
    acc[curValue] = (acc[curValue] || 0) + 1;
    return acc
}, {})

console.log(charObj)



