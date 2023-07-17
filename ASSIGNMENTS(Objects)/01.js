let arr = ["Theres", "23", "F"];

let obj = {};

obj.name = arr[0];
obj.age = arr[1];
obj.gender = arr[2];

for (const key in obj) {
    console.log(key + " - " + obj[key])
}