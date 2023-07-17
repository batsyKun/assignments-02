let input = [2, 3, 5, 7, 9]

function square(num){
    return num*num;
}
input.forEach(element => {
    console.log(square(element))
});