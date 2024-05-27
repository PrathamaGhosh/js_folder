console.log("arrays in javascript");

//Arrays are the collection of multiple elements
//arrays are resizable and not associative
//zero based indexing
// copies in arrays- Shallow copy and Deep Copy

//Shallow - object of a shallow share the same reference
//Deep- object of deep can't share same reference


const arr=[0,3,5,6,"hi"] //declaire of array
console.log(arr[3])

const arrnew=new Array(1,23,4,56,7)//different way of array creation


//Operations in Arrays
/*
arr.push(value)//pushing ele at the end
arr.length;
arr.pop()//popping ele from last
arr.unshift(value)//inserting ele to start
arr.shift()//removing ele from first
arr.includes(value)//return true or false according to existing
arr.indexOf(index_value)//returning the element from specified index
*/

// join in arrays - adding all the elements of the array into a string by the specified chars
const newArr=arr.join()
console.log(typeof newArr);


//difference of splice and slice
console.log("a ",arr);
const arr1=arr.slice(1,2)//return the part of a array(last value excluded) and original array will not affected
const arr2=arr.splice(1,2)//unlike slice(last value included) it will chane the the ori array

//array under array
console.log(arr1.push(arr2))
const arr3=arr1.concat(arr2)//concate return new array
console.log(arr3)
//spread in array
const arr4=[...arr1,...arr2]
//flat in array
const newArr1=[1,2,3,[7,9,0,[0,0,0],6,7,8]]
const realArr=newArr1.flat(Infinity)//parameter is depth here(1,2,...)

console.log(Array.isArray("pathama"))//checking whether this is array or not
//convert to array
console.log(Array.from("ghosh"))
//return a new array from sets of elements
// console.log(Array.of(val1,val2,val3))

