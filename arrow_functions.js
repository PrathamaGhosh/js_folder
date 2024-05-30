console.log("Arrow function in javascript")

const user={
    name:"pratha",
    stream:"ece",
    greetingMessage:function(){
        console.log(`here is the greetings for ${this.name}`)
        console.log(this)//this is within object scope
    }
}
user.greetingMessage()

user.name="ghosh"//context or value is changing over here
user.greetingMessage()

//this in out of scope
// console.log(this)//this keyword refers to an empty context in node env

//but in browser env window object is global object


//this in function scope
// function newFunc(){
//     let user="pratha"
//     console.log(this.name)//undefined(coz this is acts as a object only,not work within function)
// }

// newFunc()

//arrow function here
const val=()=>{
    let user="pratha"
    console.log(this.user)//can't use this object
}
// val()//undefined

//Arrow function for implicit return(no return keyword)
const newFunc=(num1,num2)=> (num1+num2)

// console.log(newFunc(3,5))

//arrow function returning object here(need to use parenthesis)
const newobj=(num1,num2)=> ({user:"prathama"})
console.log(newobj(8,9))

