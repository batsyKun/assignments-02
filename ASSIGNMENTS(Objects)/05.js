
let input1 = "happy"
let input2 = "happy"

function checkAnagrams(w0ord1, w0ord2){
    let word1 = w0ord1.split("")
    let word2 = w0ord2.split("")

    if(word1.length !== word2.length) return False

    let obj1 = word1.reduce((acc, curValue) => {
        acc[curValue] = (acc[curValue] || 0) + 1;
        return acc
    }, {})
    let obj2 = word2.reduce((acc, curValue) => {
        acc[curValue] = (acc[curValue] || 0) + 1;
        return acc
    }, {})

    for (let key1 in obj1) {
        if(!word2.includes(key1)) return false
        if(!obj1[key1]== obj2[key1]) return false
        else return true
    }       
}

console.log(checkAnagrams(input1,input2))