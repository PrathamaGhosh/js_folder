console.log("objects in js");

//object declaire in two ways- 1.by literal 2.by constructor
//singleton(object made by constructors(only one))- eg. object.create


//object literals here


//declairing the symbol in js
const symnew=Symbol("sym1")

const objects={
    name:"pratha" ,//here object are presents in key value pair & //where keys are bydefault string
    age:30,
    city:"kolkata",
    [symnew]:"sym2",//symbol dseclare as key in object
    email:"abcd@gmail.com",
    "newmail":"dfbdhf@gmail.com",//while key is string defined,can't access it by dot operator 
    days:["sunday","monday","tuesday"]             
}

//Accessing the above objects(type 1)
console.log(objects.age)

//Accessing the above objects(type 2)
console.log(objects["city"])
console.log(objects["newmail"])
console.log(typeof objects[symnew])


//method to fixed the value of object
// Object.freeze(objects)
objects.city="mumbai" //here can't change the freeze city name further
console.log(objects["city"])

//adding function1 to objects
objects.welcome1=function(){ //function acts as simple variable
   console.log("this is the function in js")
}

// console.log(objects.welcome) //giving o/p as undefined due to scope
// console.log(objects.welcome1())


//adding function2 to objects
objects.welcome2=function(){ //function acts as simple variable
    console.log(`my name is ${this.name}`) //accessing by this keyword
 }//this keyword used to refer the current content

 console.log(objects.welcome2())



//objects in literals or singleton
 
const newObject=new Object()
// console.log(newObject)//refer null object

newObject.id="435353"
newObject.score=8987
newObject.name="abcd"
console.log(newObject)

//declaire and defining object under objects

const user={
    name:"anu",
    email:"fsgfa@gmail.com",
    address:{
        city1:"kolkata",
        city2:"Mumbai",
        parentName:{
            fatherName:"hfhfh",
            motherName:"fgftrt"
        }
    }

}

//Accessing nested object Data
console.log(user.address.parentName.fatherName)

//merging two object
//one way
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"a",5:"b",6:"c"}

const mergeObj={obj1,obj2}
console.log(mergeObj)

//2nd way
const mergenew=Object.assign({},obj1,obj2)//first para-target object,second para-source objects
console.log(mergenew)

//3rd way(spreading)
const newObj1={...obj1,...obj2}
console.log(newObj1)

//array of object
const arrayObj=[
    {
       id:1,
       name:"hghg"
    },
    {
        id:2,
        name:"hghg" 
     },
     {
        id:3,
        name:"hghg" 
     }
]

// arrayObj[1].name


//iterate all keys from a objects
console.log(Object.keys(arrayObj))

//iterate all values from a objects
console.log(Object.values(arrayObj))

console.log(Object.entries(arrayObj))

console.log(arrayObj.hasOwnProperty('id'))//check whether a property is present or not


//destructure in object
const course={
    coursename:"javascript",
    price:"1965",
    courseDate:"09/06/2024"
}

const {coursename:instructor}=course
// console.log(coursename)
console.log(instructor)

