let arr = [5, 9, 8, 12, 22, 18];

let newArr = arr.map((num) => num%3 === 0  ? "multiple" : num);
console.log(newArr);