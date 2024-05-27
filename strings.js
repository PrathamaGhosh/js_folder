console.log("string in js:collections of chanracters")

const name="prathama"
const freq=70
console.log(name+freq+"count")//string concatination

//using backtics for string interpolation(modern technique)
console.log(`hi this is ${name} and the count is ${freq}`)

//string creation by new object
const namenew=new String('prathamaghosh')

//keyvalue pair and prototypes accessing of string
console.log(namenew[1])
console.log(namenew.__proto__)//empty object here
console.log(namenew.toUpperCase())
console.log(namenew.charAt(5));//char in specified position
console.log(namenew.indexOf('a'));

//substring methods in string
const newString=namenew.substring(2,6)//ending range is excluding here(does not allow negetive values)
console.log(newString);

const newString1=namenew.slice(0,6)
console.log(newString1);

//used to trime the white spaces from front and back side as weel
const newString2="    pratha  "
console.log(newString2.trim);

//replace in string
const newString3="prathama-ghosh"
console.log(newString3.replace("-","$"))

//includes method to know the presence of substring
console.log(newString3.includes('ghosh'))

//split method returning an array of string
console.log(newString3.split('-'))