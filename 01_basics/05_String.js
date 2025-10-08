const name = "Akash"
const repoCount = 5

// console.log(name + repoCount + "value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount} `);


const gameName = new String('Grijanshu-Av-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 5)
console.log(newString);
// we can not use -n in substring
const anotherString = gameName.slice(-8, 5)
console.log(anotherString);
// we can use -n in slice

const newStringOne = "   Akash   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://theclicksninja.com/"

console.log(url.replace('nin', 'A'))

console.log(url.includes('akash'));

console.log(gameName.split('-'));













