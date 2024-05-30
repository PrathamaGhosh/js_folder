//Immediately Invoked Function Expression(IIFE)-to overcome global scope pollution

// console.log("Immediately Invoked Function Expression in Javascript")

//immediately invoked a function(first () is function definition and 2nd () is function execution)
//console.log()should not be reassigned anywhere of code
(function chai(){
    //named iife
    console.log("function executes fast");
})();//semicolon for explicitly close the function call
//invoked immediately

// immInv()//invokeing here


//iife in arrow function format
// (()=>{
//     console.log("function executes fastest");
// })();


((name)=>{
   console.log(`function executes fastest ${name}`);
})('prathama');