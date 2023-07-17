let input = [1, 2];
let doubleArray = [];
function double(num){
    return num*2;
}

input.forEach(element => {
    doubleArray.push(double(element));
});
console.log(doubleArray);