console.log("----ARRAY METHODS------")
//1--push()-- add element at the end of the array
//2--pop()--remove element from the end of the array
//3--shift()--remove element from the beginning of the array
//4--unshift()--add element at the beginning of the array
//5--concat()--merge two arrays
//6--slice()--extract a portion of an array
//7--splice()--add/remove elements from an array
//8--indexOf()--find the index of an element
//9--forEach()--loop through the array
//10--map()--create a new array from  an existing array
//11--filter()--create a new array with elements that pass a test

let fruits=["apple","banana","mango","papaya"];
console.log(fruits);
//Indexing and Slicing
console.log(fruits[0]);
console.log(fruits[3])
console.log(fruits.slice(1,3))

//push method
fruits.push("grapes");
console.log(fruits);
//pop method
fruits.pop();
console.log(fruits);
//unshift
fruits.unshift("litchi");
console.log(fruits);
//shift method
fruits.shift();
console.log(fruits);
//concat method
const vegetables=["onion","tomato","mushroom"];
let newarr=fruits.concat(vegetables);
console.log(newarr);
//indexOf method
