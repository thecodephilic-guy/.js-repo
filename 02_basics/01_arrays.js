// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)     //kind of push but to the start of the array
// myArr.shift()        //kind of pop but from start of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()      //join() funtion converts the array to a string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //don't change the original array 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //change the original array i.e removes the elements within the given range.
console.log("C ", myArr); 
console.log(myn2);      //myn2 will have the elements spliced from myArr

/*****************************More on arrays******************************/

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]    //works same as concot() [This method is clalled spread operator ...]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("sohail"))
console.log(Array.from("sohail"))
console.log(Array.from({name: "sohail"})) // interesting [gives an empty array]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

