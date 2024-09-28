//there are three types of conditions in javascript
//1--if statement
//2--if-else statement
//3--if-else-if statement
//4-switch statement
//5--ternary operator

//if statement 
let age=18
if(age<18){
    console.log("you can vote")
}if(age===18){
    console.log("you are 18 you can vote")
}if(age<18){
    console.log("you can't vote")
}
console.log("************")
//if-else-if statement
let age1=18
if(age1<18){
    console.log("you can vote")
}else if(age1===18){
    console.log("you can 18 so you can also vote")
}else{
    console.log("can not vote")
}

console.log("*********")
let a=19
if(a>=18){
    console.log("you are eligible for vote")
}else{
    console.log("you are not")
}
console.log("*********")
let a1=5;
if(a%2===0){
    console.log("even")
}else{
    console.log("odd")
}
//ternary operator
let age3=18
let message=age3<18?"you are a minor":age3>=18 && age3<60?"you are an adult":"you are a senior";
console.log(message)