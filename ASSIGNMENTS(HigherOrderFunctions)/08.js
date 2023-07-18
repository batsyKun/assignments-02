const arr = ["edstem", "tech", "&", "pvt", "ltd"];
let snake = ""
arr.forEach(element => {
    if(element == arr[arr.length-1]) snake += element
    
    else snake += element + "_"
    
});
console.log(snake)