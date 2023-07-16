let input = [   [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ];
let rightDiagonal = [];
let leftDiagonal = [];

for (let i = 0; i < input.length; i++) {
    rightDiagonal.push(input[i][i]);
    leftDiagonal.push(input[i][input.length-i-1]);

}

let rightSum = 0;
let leftSum = 0;

rightDiagonal.forEach(element => {
    rightSum += element;
});

leftDiagonal.forEach(element => {
    leftSum += element
});

let sum = rightSum - leftSum
console.log(sum);
