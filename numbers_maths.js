console.log("math& numbers in js")

//defining the number variable by object creation
const number=new Number(900) //casting to number
console.log(number)

//converting to string
 console.log(number.toString().length)

 console.log(number.toFixed(2))//here 2 is precision value

 console.log(number.toPrecision(1)) //return string

 const numbernew=10005765
 console.log(numbernew.toLocaleString('en-IN'))//converting to indian value

//math libraries in js
console.log(Math) //can see in web browser console

//maths in js

/*Math.abs(-44)
Math.round(4.5)
Math.ceil(3.2)
Math.floor(9.1)
Math.max(5,7,8,3)
Math.min(5,7,8,3)
Math.random()//getting values from 0 and 1
*/

//come over the problem on random function
const max=12
const min=25
console.log(Math.floor(Math.random()*(max-min+1))+min)
