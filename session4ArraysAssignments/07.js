let string = "Edstem";
let newString = ""

for(let i = 0; i < string.length; i++){
    if(i%2 !== 0) newString += string[i]
}
console.log(newString)