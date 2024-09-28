//there are two types of loops in js
//1--for loop
for(let i=1;i<=10;i++){
    console.log(i)
}
console.log("***************")
//2--while loop
let i=1
while(i<=10){
console.log(i)
i++
}
console.log("----------")

for(let ii=1;ii<=5;ii++){
    console.log("eshaaa")
}
let v=0;
while(v<=20){
    console.log(v);
    v=v+2
}
//for of loop
let names=["john","smith","sam"]
for(let name of names){
    console.log(name,"is a good devil")
}
//for in loop
let person={
    name:"john",
    age:25,
    city:"new york"
}
for(let k in person){
    console.log(k)
}
//to print both keys and values
for(let k in person){
    console.log(k,":",person[k])
} 
for(let u=0;u<=20;u++){
    if(u%2===0){
        console.log(u)
    }
}
let sum=0;
for(let r=1;r<=10;r++){
    sum=sum+r
    
}
console.log(sum)