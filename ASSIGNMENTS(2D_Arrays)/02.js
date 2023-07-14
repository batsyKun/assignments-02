let input = [100, 20, 31, 150, 39, 72];
let smallest = 1000;
let largest = 0

for (let i = 0; i < input.length; i++) {
        if(smallest > input[i]) smallest = input[i];
        if(largest < input[i]) largest = input[i];
}
console.log(smallest, largest)