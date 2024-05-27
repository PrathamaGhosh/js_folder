let value="90"

console.log(typeof value) //checking the type of any datatype

let value_in_number=Number(value) //forcefully converting the value to number
console.log(typeof (null)) // type would be object

let score
console.log(typeof score)//undefined

let isvalue=true
console.log(typeof isvalue)

let numstr="33dgf"
console.log(typeof numstr)//string

//try to convert a string to number
console.log(Number(numstr)) //return NAN

//try to convert the boolean number
console.log(Number(isvalue))// return 1

//conversion to boolean
console.log(Boolean(isvalue))//return true

let str=""
console.log(Boolean(str)) //empty string giving false

//convertion to string
let newscore=4645747
console.log(String(newscore))



