console.log("scopes in javascript")

//scopes related with let,var and const
// let a=1
// const b=2
// var c=3

// console.log(a)
// console.log(b)
// console.log(c)

/*{
scope in javascript
}*/


var c=20
let a=60
if(true){ //scopes of a,b,c should be accessible within block scope

    let a=1 //here a is not overwriting it's value
    const b=2
    var c=3 // c value is overwriting here
    // console.log("block scope of a:",a)
}

// console.log("global scope of a :",a) //a is not allowed to print from block
// console.log(b)//b is not allowed to print
// console.log(c) //c is allowed to print for var



//Nested scope in js
//mini Hoisting(child func has ability to use parent property but parent won't allow to do so)
function func1(){
    const name="prathama"
    function func2(){ //func2 can access any of the it's parent function(func1())
        const site="yt"
        console.log(name)
    }
    // console.log(site) //try to accessing the child func2
    func2() //function 2 is calling
}
func1() //function 1 is calling(when func1 is calling then func2 will not execute when func2() wasn't calling))


//Nested Block Scope

if(true){
    const user="prathama"
    if(user==="prathama"){
        const site="github"
        console.log(user + site)
    }
    // console.log(site)//getting access issue beyond the scope
}
// console.log(user)//getting access issue beyond the scope



//Different Function definition
//Hoisting in Js


//calling function can happend before function definition
console.log(add1(8))

function add1(num){
    return num+1
}

//calling function
// console.log(add1(8))

//calling the function before defining it
// add2(7)//getting an error because of hoisting(where an execution contest made)

//function is storing to a variable
const add2=function (num){
    return num+1
}

//calling function
add2(6)