//Datatype conversion

let score = "60"

console.log(typeof(score)); //output -> string

//conversion:
let numScore = Number(score)
console.log(typeof(numScore));  //output -> number

/*
    Some other possible conversions:

    "33" => 33
    "33abc" => NaN (not a number)
    true => 1; false => 0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);     //output -> true

/*
    Possible values of isLoggedIn:

    1 => true; 0 => false
    "" => false
    "sohail" => true
*/

let aNumber = 87

let stringNumber = String(aNumber)
console.log(typeof(stringNumber));  //output -> string
console.log(stringNumber);  //output -> 87 (white color means it's a string #remember: White color in MONOKAI theme)

console.log("**************************** Operations *************************");
console.log();
/********************************** Operations *******************************/

let value = 6
let negValue = -value
// console.log(negValue);

//basics:
// console.log(10+5);  //additon
// console.log(10-5);  //subtraction
// console.log(10*5);  //multiplication
// console.log(10/5);  //division
// console.log(10**5); //raised to the power
// console.log(10%5);  //remainder

//concatenation:
let str1 = "Hello "
let str2 = "Sohail"

let str3 = str1 + str2
console.log(str3);  //output -> Hello Sohail 
console.log();

console.log("1" + 2);       //output -> 12
console.log(1 + "2");       //output -> 12
console.log("1" + 2 + 2);   //output -> 112
console.log(1 + 2 + "2");   //output -> 32
//note: all the values are converted into the very first element's(value before first + operator) data type

// console.log(+true);     //output -> 1 (conversion to number) #not a good practice

let gameCounter = 100
console.log(++gameCounter); //output -> 101 #called prefix increment operator 
console.log(gameCounter++); //output -> 101 #called postfix increment operator