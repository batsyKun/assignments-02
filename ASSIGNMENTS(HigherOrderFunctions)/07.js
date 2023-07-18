const arr = ["assignment", "problem", "media", "upload"];

let arrA = arr.filter((item) => item[0] === "a" || item[item.length-1] === "a");
console.log(arrA)