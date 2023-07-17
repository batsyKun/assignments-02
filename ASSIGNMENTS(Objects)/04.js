let input = [10, 20, 30, 10, 40, -2, ];

let obj = input.reduce((acc, curValue) => {
    acc[curValue] = (acc[curValue] || 0) + 1;
    return acc
},{})
for (const key in obj) {
    if (obj[key] === 1) {
        console.log(key)
    }
}