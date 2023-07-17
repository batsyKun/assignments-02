let input1 = "den"
let input2 = "end"

function checkAnagrams(w0ord1, w0ord2){
    let word1 = w0ord1.split("")
    let word2 = w0ord2.split("")

    if(word1.length !== word2.length) return "False"

    let obj1 = word1.reduce((acc, curValue) => {
        acc[curValue] = (acc[curValue] || 0) + 1;
        return acc
    }, {})
    let obj2 = word2.reduce((acc, curValue) => {
        acc[curValue] = (acc[curValue] || 0) + 1;
        return acc
    }, {})

    if(obj1===obj2) return true

}


console.log(checkAnagrams(input1,input2))