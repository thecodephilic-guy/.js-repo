console.log(2 > 1);     //true
console.log(2 >= 1);    //true
console.log(2 < 1);     //false
console.log(2 == 1);    //false
console.log(2 != 1);    //true

console.log();

console.log("2" > 1);   //these both lines gives unpredictable results that is true
console.log("02" > 1);  //true (JS is converting the string to number)

console.log();

console.log(null > 0);      //false
console.log(null == 0);     //false
console.log(null >= 0);     //true  (read below comment)

/*
    The reason is that an equality check == and comparison >, <, >=, <= works differentyl
    Comparisons convert null to a number, treating it as 0. That's why console.log(null >= 0) is true and console.log(null > 0) is false.
*/

console.log();

console.log(undefined == 0);    //false
console.log(undefined > 0);     //false
console.log(undefined <= 0);    //false

console.log();

// === aur == ki kahani 

console.log("2" == 2);  //true (checks only the value)
console.log("2" === 2);  //false (checks both value as well as data type) (=== is called strict check)