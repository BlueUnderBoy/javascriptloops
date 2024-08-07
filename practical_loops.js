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
*/
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

