let string = "madam";
let isPalindrome = false
for (let i = 1; i <= string.length; i++) {
   string[i-1] == string[string.length-i] ? isPalindrome = true : isPalindrome = false;
   if(!isPalindrome) {
    break;
   }
}
isPalindrome ? console.log("YES") : console.log("NO")