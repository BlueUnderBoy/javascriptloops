/*//FizzBuzz
for (i = 0; i<101; i++) {
    if (i%5 == 0 && i%3 == 0) {
        console.log("Fizzbuzz")
    }
    else if (i%5 == 0) {
        console.log("Buzz")
    }
    else if (i%3 == 0) {
        console.log("Fizz")
    }
    else {
        console.log(i)
    }
}
//Prime Time
let n = 93784092674538;
n++
if (n == 2 || n == 3 || n == 5 || n == 7) {
    console.log(n)
}
else if (n>1) {
    while (n%2 == 0 || n%3 ==0 || n%5 == 0 || n%7 == 0) {
        if (n == 2 || n == 3 || n == 5 || n == 7) {
            return console.log(n)
        }
        else {
            n++
        }
    }
    console.log(n)
}
else {
    console.log("Number must be greater than 1")
}
*/
//Feeling Loopy
string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
n = string.length
let cc = ""
for (i=0;i<n+1;i++) {
    cc.concat(string(i))   
}
console.log(cc)