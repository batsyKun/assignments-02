let input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let output = []
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
    if(i == j)  console.log(input[i][j]);
    }    
}
