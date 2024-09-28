//backend ka saara data object ke form m store hota h
const student={
    name:'john',
    age:25,
    email:'eshhhh12@gmail.com',
    mobile:34567891
}
console.log(student);
//to access the values of the object through the key
console.log(student.name);
console.log(student.email);
console.log(student.mobile)
//replacing the value of the object
student.email='er12@gmail.com';
console.log(student.email);
console.log(student);
//adding new key value pair to the object
student.city='banglore'
console.log(student)
console.log("---------------");
const smartphones={
    "brand":"samsung",
    "model":"galaxy 321",
    "price":70000,
    "color":["red","white","black","blue"],
}
console.log(smartphones)
console.log(smartphones.color[2])
//to add item in array
smartphones.color[0]="gray"
console.log(smartphones)


smartphones.color.push("green")
console.log(smartphones)
console.log("-----------")
const phones=[
    {brand:"samsung",model:"galaxy s21",price:70000,color:["red","white","black","blue"]},
    {brand:"apple",model:"iphone 17",price:6000,color:["red","white","black","blue"]},
  
    {brand:"oneplus",model:"61",price:16000,color:["red","white","black","blue"]},
    {brand:"xiaomi",model:"mi 61",price:17000,color:["red","white","black","blue"]},
]
console.log(phones)
console.log(phones[1].model)
console.log(phones[2].color[2])
phones[1].color[0]="gray"
console.log(phones[1])