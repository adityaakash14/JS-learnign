// Primitive
//  call by value
// 7  types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100 
const scoreValue = 100.3

// const isLoggedIn = false
const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

//  const bigNumber =  343565663632665n
// console.log(bigNumber);





// Reference/Non-Primitive

// Array, Objects, Functions


// const heros  = ["Shaktiman", "naagraj", "doga"]
// let myObj = {
//     name: "Akash"}

// const myFunction = function(){
//     console.log("Akash");
    
// }

// console.log(typeof heros);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive), Heap(Non-primitve)

let myHero = "NKN"

let anothername = myHero
anothername = "NV"

console.log(myHero);
console.log(anothername);

let userOne = 
{
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "akash@google.com"

console.log(userOne.email);
console.log(userTwo.email);







