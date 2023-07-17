let input =  [
    [1, 2, 3,5,7],
    [4, 5, 6,8,5],
    [7, 8, 9,6,4]
];
let output = [];
for (let i = 0; i < input.length; i++) {
  output.push(input[i][Math.floor(input[i].length / 2)]);
}
console.log(output)