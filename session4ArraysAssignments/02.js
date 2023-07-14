const arr = [95, 86, 66, 94, 58];
let average, sum = 0

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
average = sum/arr.length
console.log(average)