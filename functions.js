console.log("functions in javascript used to put one or more than one lines of codes in one block")

//function defining
function myfunc(){
  console.log("hi")
  console.log("hello")
  console.log("hanji")

}

//function calling
myfunc()//here myfunc is the reference and () is the execute 

//function for multiplication
function mul(num1,num2){ //num1 and num2 are parameters
  console.log(num1*num2);
  //let res=num1*num2
//   return res or
// return num1*num2
}
 
// mul(8,9)//72 and 8,9 are the arguments
// mul("a",4)//NAN
const res=mul(5,6)//30
console.log("Result: ",res) //getting undefined because the function is not returning something

function user(username){
    if(username===undefined){ //checking whether it empty or not
        console.log("don't leave it empty")
        return
    }
    return `${username} just logged in`
}

console.log(user())


// function user(username="ghosh"){
//     return `${username} just logged in`
// }

// console.log(user()) //if argument is empty,taking the default parameter value
// const result=user("prathama")
// console.log(result)


//another function with different parama
//rest operator in function
function mulparm1(...val){ //rest operator for passing multiple params
return val
}

console.log(mulparm1(12,45,67))

function mulparm2(val1,val2,...val){ //rest operator for passing multiple params
    return val
    }
console.log(mulparm2(233,455,4,5))

//passing object through the function
const object={
    name:"prathama",
    bookName:"mmath"
}

function objectFunc(anyobject){
    console.log(`username is ${anyobject.name}`)
}
//calling function
objectFunc(object)

//another way of calling function object
objectFunc({
    name:"ghosh",
    bookName:"math"
})

//passing array through function
const newArr=[1,2,3,45,"js"]

function arrFunc(getArray){
    return getArray[3]
}

//calling function
console.log(arrFunc(newArr))

console.log(arrFunc([1,344,56,78,90,65]))

