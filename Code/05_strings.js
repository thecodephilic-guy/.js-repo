const name = "Sohail"   //one way of declaring the string
const repoCount = 25

// console.log(name + repoCount + " Value");   //This is a bit outdated method of console.log()

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //this is the morder way of writing and it is more readable

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
