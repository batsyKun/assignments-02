let input = [100, 20, 31, 150, 39, 72];
let smallest = Infinity;
let largest = -Infinity

for (let i = 0; i < input.length; i++) {
        if(smallest > input[i]) smallest = input[i];
        if(largest < input[i]) largest = input[i];
}
console.log(smallest, largest)