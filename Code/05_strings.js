const name = "Sohail"   //one way of declaring the string
const repoCount = 10

// console.log(name + repoCount + " Value");   //This is a bit outdated method of console.log()

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //this is the modern way of writing and it is more readable

//another way of declaring the string:
const yourName = new String("Sohail Ansari")
console.log(yourName[0]);
console.log(yourName.__proto__);       //output - {} 
//the above line's output shows that yourName is an object of type string

console.log();
//string methods:
console.log(yourName.length);   //output - 8
console.log(yourName.toUpperCase());    //outpur - SOHAIL ANSARI
console.log(yourName.charAt(8));    //output - n
console.log(yourName.indexOf("A")); //output - 7

const newString = yourName.substring(0, 4)  //last index is non-inclusive
console.log(newString);

const anotherString = yourName.slice(-13, 4)  // how it's diffrent from .substring? The difference is that it can
console.log(anotherString);                 // take negative values too and -ve index represent the values from back of the string. This is the reason it'll give the same output.

const newStringOne = "  Sohail  "
//printing newStringOne without trimming
console.log(newStringOne);
//printing newStringOne with trim fucntion:
console.log(newStringOne.trim());     //.trim() removes the white spaces and the line terminators from any string.

const url = "https://github.com/thecodephilic-guy/.js-repo";    //very much usable in backend development
console.log(url.replace("thecodephilic-guy", "thephotophilic_guy"));

//asking questions to get the boolean output:
console.log(url.includes("Code"));  //false
console.log(url.includes(".js-repo"));  //true

//converting a string into the array:
const fruits = "apple-mango-grapes-banana"
fruitsArray = fruits.split("-")     //splitter can be anthing here it is "-"
console.log(fruitsArray); //output -> [ 'apple', 'mango', 'grapes', 'banana' ]
console.log(fruitsArray[2]);    //output -> grapes

/*
    Some more prototypes:

    anchor: ƒ anchor()
    at: ƒ at()
    big: ƒ big()
    blink: ƒ blink()
    bold: ƒ bold()
    charAt: ƒ charAt()
    charCodeAt: ƒ charCodeAt()
    codePointAt: ƒ codePointAt()
    concat: ƒ concat()
    constructor: ƒ String()
    endsWith: ƒ endsWith()
    fixed: ƒ fixed()
    fontcolor: ƒ fontcolor()
    fontsize: 
    ƒ fontsize()
    includes: ƒ includes()
    indexOf: ƒ indexOf()
    isWellFormed: ƒ isWellFormed()
    italics: ƒ italics()
    lastIndexOf: ƒ lastIndexOf()
    length: 0
    link: ƒ link()
    localeCompare: ƒ localeCompare()
    match: ƒ match()
    matchAll: ƒ matchAll()
    normalize: ƒ normalize()
    padEnd: ƒ padEnd()
    padStart: ƒ padStart()
    repeat: ƒ repeat()
    replace: ƒ replace()
    replaceAll: ƒ replaceAll()
    search: ƒ search()
    slice: ƒ slice()
    small: ƒ small()
    split: ƒ split()
    startsWith: ƒ startsWith()
    strike: ƒ strike()
    sub: ƒ sub()
    substr: ƒ substr()
    substring: ƒ substring()
    sup: ƒ sup()
    toLocaleLowerCase: ƒ toLocaleLowerCase()
    toLocaleUpperCase: ƒ toLocaleUpperCase()
    toLowerCase: ƒ toLowerCase()
    toString: ƒ toString()
    toUpperCase: ƒ toUpperCase()
    toWellFormed: ƒ toWellFormed()
    trim: ƒ trim()
    trimEnd: ƒ trimEnd()
    trimLeft: ƒ trimStart()
    trimRight: ƒ trimEnd()
    trimStart: ƒ trimStart()
    valueOf: ƒ valueOf()
    Symbol(Symbol.iterator): ƒ [Symbol.iterator]()

    read the detailed documentation of the above methods on mdn

*/