//DataType_Conversion here
console.log("DataType conversion in js")
//Coercion--Type coercion refers to the automatic conversion of values from one data type to another, typically performed during operations or comparisons involving different data types. By using Type Coercion, JavaScript attempts to make the data types compatible to complete 
//the operation or comparison.

//eg-Number to String Conversion
//String to Number Conversion
//Boolean to Number
//The Equality Operator

//eg-Number to String Conversion



// The Number 10 is converted to
// string '10' and then '+'
// concatenates both strings   
let x = 10 + '20';
let y = '20' + 10;
 
// The Boolean value true is converted
// to string 'true' and then '+'
// concatenates both the strings
let z = true + '10';
 
console.log(x);
console.log(y);
console.log(z);




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

//BigInt In javascript
//A BigInt value cannot be used with methods in the built-in Math object and cannot be mixed with a Number value in operations; 
//they must be coerced to the same type
const previouslyMaxSafeInteger = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n

const hugeString = BigInt("9007199254740991");
// 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777");
// 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// 9007199254740991n



