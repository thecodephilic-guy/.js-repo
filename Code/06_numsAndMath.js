const bal1 = 500;
console.log(bal1);      //output -> 500

const bal2 = new Number(500)
console.log(bal2);      //output -> [Number: 500] (object of number type)

/*
    The difference is that in line 1 the compiler itself is assigning the type as number
    while in line 4 we are forcebly telling the compiler to declare bal2 as number type

    in addition the following prototypes are provides with the object of number type declaration:

    constructor: ƒ Number()
    toExponential: ƒ toExponential()
    toFixed: ƒ toFixed()
    toLocaleString: ƒ toLocaleString()
    toPrecision: ƒ toPrecision()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
*/
console.log(bal2.toString().length);  //conversion to the string opens the gateway to a wide varity of methods.
console.log(bal2.toFixed(2));   //output: 500.00  (to increase or decrease the precision value)

const bal3 = 23.89902
console.log(bal3.toPrecision(3)); //output: 23.9
const bal4 = 123.34902
console.log(bal4.toPrecision(3)); //output: 123
const bal5 = 1123.34902
console.log(bal5.toPrecision(3)); //output: 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //output: 1,000,000   (to generate commma seprated number in US standards)
console.log(hundreds.toLocaleString('en-IN')); //output: 1,000,000   (to generate commma seprated number in INDIAN standards)

console.log();

/************************************** Math ***********************************************/
//this library comes inbuilt wiht the javascript

console.log(Math); //output: Object [Math] {}  (showing that it is an object)
console.log(Math.abs(-6));  //output: 6 (return the absolute value)
console.log(Math.round(3.14)); //output: 3 (normal rounding off i.e if decimal digit is larger than 5 then returns next number)
console.log(Math.ceil(3.14)); //output: 4 (returns the ceiling value after rounding off)
console.log(Math.floor(3.94)); //output: 3 (returns the floor value after rounding off)
console.log(Math.min(4,3,6,8)); //output: 3
console.log(Math.max(4,3,6,8)); //output: 8

//the most use case of Math library is the random function:
console.log(Math.random()); //it gives the output between 0 and 1 (where 1 is exclusive);

//we can extend the range using multiplication:
console.log(Math.random()*10);    //now the numbers generated will be between 0 and 10 (10 being exclusive)

//now let's look at one of the most used case of random function:
const min = 10; //initial value of range
const max = 20; //final value of range

//now the formula:
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //interprate it matually to better understand this concept.

/*
    Properties offered by Math libraray:

    //Static properties
    Math.E
    Euler's number and the base of natural logarithms; approximately 2.718.

    Math.LN10
    Natural logarithm of 10; approximately 2.303.

    Math.LN2
    Natural logarithm of 2; approximately 0.693.

    Math.LOG10E
    Base-10 logarithm of E; approximately 0.434.

    Math.LOG2E
    Base-2 logarithm of E; approximately 1.443.

    Math.PI
    Ratio of a circle's circumference to its diameter; approximately 3.14159.

    Math.SQRT1_2
    Square root of ½; approximately 0.707.

    Math.SQRT2
    Square root of 2; approximately 1.414.

    //Static methods
    Math.abs()
    Returns the absolute value of x.

    Math.acos()
    Returns the arccosine of x.

    Math.acosh()
    Returns the hyperbolic arccosine of x.

    Math.asin()
    Returns the arcsine of x.

    Math.asinh()
    Returns the hyperbolic arcsine of a number.

    Math.atan()
    Returns the arctangent of x.

    Math.atan2()
    Returns the arctangent of the quotient of its arguments.

    Math.atanh()
    Returns the hyperbolic arctangent of x.

    Math.cbrt()
    Returns the cube root of x.

    Math.ceil()
    Returns the smallest integer greater than or equal to x.

    Math.clz32()
    Returns the number of leading zero bits of the 32-bit integer x.

    Math.cos()
    Returns the cosine of x.

    Math.cosh()
    Returns the hyperbolic cosine of x.

    Math.exp()
    Returns ex, where x is the argument, and e is Euler's number (2.718…, the base of the natural logarithm).

    Math.expm1()
    Returns subtracting 1 from exp(x).

    Math.floor()
    Returns the largest integer less than or equal to x.

    Math.fround()
    Returns the nearest single precision float representation of x.

    Math.hypot()
    Returns the square root of the sum of squares of its arguments.

    Math.imul()
    Returns the result of the 32-bit integer multiplication of x and y.

    Math.log()
    Returns the natural logarithm (㏒e; also, ㏑) of x.

    Math.log10()
    Returns the base-10 logarithm of x.

    Math.log1p()
    Returns the natural logarithm (㏒e; also ㏑) of 1 + x for the number x.

    Math.log2()
    Returns the base-2 logarithm of x.

    Math.max()
    Returns the largest of zero or more numbers.

    Math.min()
    Returns the smallest of zero or more numbers.

    Math.pow()
    Returns base x to the exponent power y (that is, xy).

    Math.random()
    Returns a pseudo-random number between 0 and 1.

    Math.round()
    Returns the value of the number x rounded to the nearest integer.

    Math.sign()
    Returns the sign of the x, indicating whether x is positive, negative, or zero.

    Math.sin()
    Returns the sine of x.

    Math.sinh()
    Returns the hyperbolic sine of x.

    Math.sqrt()
    Returns the positive square root of x.

    Math.tan()
    Returns the tangent of x.

    Math.tanh()
    Returns the hyperbolic tangent of x.

    Math.trunc()
    Returns the integer portion of x, removing any fractional digits.
*/