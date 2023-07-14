let input = "I’m learning javascript basics"
let spaces = []
let word = ""
for (let i = 0; i < input.length; i++) {
    word += input[i]
    if(input[i] == " "){
        spaces.push(word)
        word = ""
    }
}
console.log(spaces);