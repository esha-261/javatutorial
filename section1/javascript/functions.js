//types of functions in javascript
//syntax for userdefined function
//synatx for functions
//function functionname(){
//code to be executed
//}

//function call
//functionname()

//non-parameterized function
function greet(){
    console.log("hello")
}
//parameterized function
function addNumbers(a,b){
    console.log(a+b);
}
addNumbers(2,4);
greet();

//function without return statement
function addnum(a,b){
    console.log(a+b);
}
num=addnum(10,20);
//function with return statement
function addnum1(a,b){
    return a+b;
}
num1=addnum1(30,20);
console.log(num1);

console.log("***********");
function power(num,pow){
    return num**pow;
}
console.log(power(2,3));
console.log("***********");
function squ(num){
    return num*num;
}
console.log(squ(4));
console.log("******Arrow function*****");
//synatx for arrow function
//const function = () => {
    //code to execute
    //}
const double = (n) => n*2
console.log(double(4));
 
const check =(n) => 
{
    if(n%2===0){
        return "even";
    }else{
        return "odd";
    }
}
console.log(check(4));
