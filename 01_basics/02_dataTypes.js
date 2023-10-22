//Dataypes and ECMA standards

"use strict";    //this line is added to tell the js engine to treat al JS code as newer verison

// alert(3+3)   //alter() works with brower, and here we are using node.js

// console.log(3+3); console.log("Sohail"); //this will work fine but offers poor readability. Therefor it is not a good practice.

let name = "Sohail" //string
let age = 18    //number
let isLoggedIn = true   //boolean

/*
    Primitive data types:

    number => MAX_RANGE - 2 to the power 53 and -1
    bigint      //not much used
    string => ""
    boolean => true/false
    null => standalone value (value is assigned but not known)
    undefined   //when a rariable is declared withour assigning a value
    symbol => unique (more when learing react.js)      

    special datatype:
    object
*/

//method to know the type of a variable:
console.log(typeof age);       //output-> number
console.log(typeof null);       //null is treated like an object type. Therefor output of the line will be -> object
console.log(typeof undefined);  //output -> undefined