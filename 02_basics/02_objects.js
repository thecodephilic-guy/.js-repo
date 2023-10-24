// singleton
// Object.create

// object literals

const myObj = {}    //Added curly braces means myObj is an object. (here it is an empty object)
const mySym = Symbol("key1")    //method to define the symbol (a dayatype)


const JsUser = {
    name: "Sohail",
    "full name": "Sohail Ansari",
    [mySym]: "mykey1",      //assigining the symbol a value mySym is wrapped in [] to reflect it's type as symbol
    age: 18,
    location: "Jaipur",
    email: "sohail@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "sohail@chatgpt.com" //updating the value
// Object.freeze(JsUser)            //freezing the object so that it's values can't be chaged
JsUser.email = "sohail@microsoft.com"   //although no erroe will be thrown but the value will not be updated
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



// const tinderUser = new Object()  //object Literal method
const tinderUser = {}   //singleton method

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sohail",
            lastname: "ansari"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  //this will create objects within the object
// const obj3 = Object.assign({}, obj1, obj2, obj4) //this will create an object which will be the combination of obj1, obj2, obj4

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //returns array of key: value pairs

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JavaScript ",
    price: "999",
    courseInstructor: "sohail"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "sohail",
//     "coursename": "JavaScript",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
