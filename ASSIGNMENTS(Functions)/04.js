let arr = [1, 3, 4, 5, 6, 3, 10];

function average(arr){
    let avg = 0;
    arr.forEach(element => {
        avg += element;
    });    
    return avg / arr.length; 
}

console.log(average(arr))