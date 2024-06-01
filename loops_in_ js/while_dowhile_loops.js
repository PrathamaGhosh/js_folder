//while and do while loop
console.log("while and do while loops in javascript")




let index = 0
// while (index <= 10) { //condition checking
//     console.log(`Value of index is ${index}`);
//     index = index + 2 //increment the value
// }

let myArray = ['apple', "banana", "Orange"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

//do-while loop in js
//do will execute first then condition will checked in while
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
