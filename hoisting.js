//Hoisting in javascript
console.log("hoisting in javascript")

//hoisting is a default behaviour in js where variables and functions declarations are moved to the top of their containing scope before code execution
//it means you can use a variable or call a function even before it is declared in our code


//hoisting in different variable scope

//var- declaration moved to top but not initialization(undefined)
console.log(a) //printing undefined
var a=30


//let/const-from declaration to actual declaration b is in temporal dead zone
//let or const are hoisted without default initialization
// console.log(b)//printing error
// let/const b=90 *TDZ


//Function Hoisting- as soon as function declared then whole function nody gets hoisted 

//calling here
func()//print hoisting with no error
function func(){
    console.log("hoisting")
}

//arrow Function - are not hoisted as they are the annonymois function(no function name)

//calling here
// val()//not hoisting getting error
const val=()=>{
    console.log("arrow function")
}
// val()//printing here

