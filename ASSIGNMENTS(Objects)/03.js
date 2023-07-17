const users = [
  {
    name: "Theres",
    phoneNumber: "11032000"
  },
  {
    name: "Nikhita",
    phoneNumber: "94710421"
  },
  {
    name: "Shameer",
    phoneNumber: "1235653"
  }
];

function phoneNumber(name){
  const user = users.find(user => user.name.toLowerCase() == name.toLowerCase());
  if(user){
    return user.phoneNumber;
  }
  else return "User not found!"
}

const username = "Theres";
const number = phoneNumber(username);
console.log(number)