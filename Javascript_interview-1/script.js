// var vs let vs const

/** var is function scope
 * let and const is block scope
 */

{
    var a = 5;
}


// console.log(a)
/** ------------------------------------------------- */

// as we used var it is visible in function scope and it logs "5".
// if we have used let or const, then we would have got an issue as "a is undefined".

/** we can think from scoping is Shadowing,
 * Introduction of let var and const
 * Variable Shadowing
  */
 // example 

 function test(){
    let a = "Hello"

    if(true){
        let a="Hi"
        console.log(a);
        // the value of a is shadowed.
    }

    console.log(a)
 }

 // test()
 /** prints Hi Hello */
 /** notes to consider ---  we can shadow 
  * let variable with let
  * var variable with let
  * but we cant shadow let varaible with a var.
  */
/** ------------------------------------------- */

// declaration:

/** 
 * we cant redeclare let and const. 
 * var can be redeclared.
 */

// declaration without initialisation

/** var and let can we declared without initialisation
 * but with, const we cant declare without initialisation
 */

// re - initialisation

/**
 * var and let allows reinitialisation
 * const wont allow reinitialisation
 */

// Javascript Execution Context

/**
 * when we create a JS code it follows two phases
 *  -----Creation Phase: 
 *             * its creates a global or window object
 *              * it creates the memory heap,  for storing functions and variable. It stores in this window object.
 *               *  it initialisation them with undefined.
 *  -------Execution Phase:
 *              * During the execution phase, the javascript engines executes the code line by line.
 */

// Hoisting

/**
 * during the creation phase, js engine moves our varaible and functions to the top of our code and this is known as Hoisting.
 * functions are completed hoisted but variable are hoisted but not initialised until execution
 */

// console.log(count) 
// undefined as the varaible 'count' is hoisted. so while executing it will throwing undefined.
var count = 1 

/**
 * var is fully hoisted thats the reason we got undefined value instead of error
 * but let and const are hoisted but they are in TEMPORAL DEAD ZONE
 */

// Temporal Dead Zone means the variable are in the scope but they are not yet declared. let and const will be in temporal deadzone example below

/**  console.log(b,c);

let b = 0;
const c = 9;
*/

// this will throw the error. as the value are in TDZ.

// spread operator vs rest operators
/**
 * function sum(...nums){ // if we pass as function param at this point it is rest operator.
 * return nums[0] + nums[1]
 * }
 * 
 * let arr = [1,2]
 * sum(...arr) // spread operator
 * 
 * 
 * one thing to consider would be rest operator should always be the last param for a function.
 * for eg. function sum(...nums, a,b) // this wil throw a error
 *  function sum(a,b,...nums)  // works fine
 */


// Arrow functions
/**
 * this keyword ?
 * 
 * In normal function , this points to parent scope
 * in Arrow function, this points to global scope
 * 
 */

// closures
/**
 * closure gives you access to a outer functions scope from an innner function.
 * It is a combination of a function bundled together with reference of its surrounding state (the lexical environment)
 * In Javascript, closures are created everytime a function is created, at function creation phase.
 */

// closure scope chain
/** 
 * Every closure has three scopes
 * local scope --- outer function scope ---- global scope
 * 
 * for eg.
 * 
 * var username = "Javascript" // global scope
 * function outer(){
 * var name = "Learner" // outer scope
 * function display(){ // local scope
 * console.log(name, username);
 * }
 * return display;
 * }
 * 
 * outer()() // prints Learner Javascript
 */
// closures gives huge performance improvement
/** function closure(){
    let a = []
    for(let i=0; i< 1000000; i++){
        a[i] = i*i
    }
    return function (index){
        console.log(a[index])
    }
}
let closureTest = closure();

console.time("5")
closureTest(5)
console.timeEnd("5")
console.time("10")
closureTest(10)
console.timeEnd("10")
console.time("100")
closureTest(100)
console.timeEnd("100")
console.time("1000")
closureTest(1000)
console.timeEnd("1000")
console.time("10000")
closureTest(10000)
console.timeEnd("10000") */



 




 



