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

//Feeling Loopy
let string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let n = string.length;
let cc = "";
let v = 1;
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
for (i=0;i<n;i++) {
    if (string[i] == ",") {
        if (v == 1) {
            v++
            cell1 += cc
            cc = ""
        }
        else if (v == 2) {
            v++
            cell2 += cc
            cc = ""
        }
        else if (v == 3) {
            v++
            cell3 += cc
            cc = ""
        }
        else {
            cell4 += cc
            cc = ""
            v = 0
            console.log(cell1, cell2, cell3, cell4)
            cell1 = ""
            cell2 = ""
            cell3 = ""
            cell4 = ""
        }
    }
    else {
        if (string[i+1] == undefined) {
            cc += string[i]
            cell4 += cc
            cc = ""
            v = 0
            console.log(cell1, cell2, cell3, cell4)
        }
        else {
            cc += string[i]
        }
    }  
}
*/
var string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let n = string.length;
var string = string.replace(/\n/g, ",")
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let ss = string.split(",")
let ns = ss.length
console.log(ss)
for (i=0;i<ns;i++) {
    if (i == 0 || i == 1 || i == 2 || i == 3 ) {
        cell1 += ns[i] + " "
    }
}
