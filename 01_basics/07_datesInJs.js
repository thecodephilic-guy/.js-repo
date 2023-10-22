/*
    DATES:
    JavaScript Date objects represent a single moment in time in a platform-independent format. 
    Date objects encapsulate an integral number that represents milliseconds since the midnight
    at the beginning of January 1, 1970, UTC (the epoch).
*/

let myDate = new Date()
// console.log(myDate);    //output: a date object (not very usable)

//converting it to the string:
console.log(myDate.toString());                 //Fri Oct 20 2023 11:24:50 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());             //Fri Oct 20 2023
console.log(myDate.toTimeString());             //11:24:50 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());              //2023-10-20T05:54:50.575Z
console.log(myDate.toJSON());                   //2023-10-20T05:54:50.575Z
console.log(myDate.toLocaleDateString());       //20/10/2023
console.log(myDate.toLocaleTimeString());       //11:24:50 am
console.log(myDate.toLocaleString());           //20/10/2023, 11:24:50 am

console.log(typeof myDate);     //object
console.log();

//creating a particular date:
// let myCreatedDate = new Date(2023, 0, 1)        //(year, month, date)
// console.log(myCreatedDate.toDateString());      //output: Sun Jan 01 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.toDateString());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`the day is ${newDate.getDay() + 1} and the time is ${newDate.getTime().toLocaleString()} `);


//custom defination of the properties of toLocalString fucntion
newDate.toLocaleString('default', {
    weekday: "long",
    
})