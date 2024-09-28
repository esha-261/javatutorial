console.log("hello everyone");
console.log("hii")
console.log("hii")
console.log("hii")
//types of variables 
//1--var
//2--let
//3--const
var a=10;
console.log(a);
let b=20
console.log(b)
const c=80
console.log(c)
//using let we can change the value of variable
b=40;
console.log(b)
//using const we can't change the value of variable
var x=30
//redeclaration is possible
//reassign is possible
x=40
console.log(x)
let y=30
//redeclaration is not possible in let
y=50
console.log(y)
//redeclaration and reassignment is not possible in const
console.log("********************")
let num=10
console.log(num)
//scope---let has local scope
if(true){
    let num=20
    console.log(num)
}
console.log(num)
console.log("********************")
//let has global scope
var num1=10
console.log(num1)
if(true){
    let num=20
    console.log(num1)
}
console.log(num1)