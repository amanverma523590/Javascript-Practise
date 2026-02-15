

// const str1 = "Aman";
// const str2 = 'Sanam';
// const date = 18;
// const str3 = `Strike is coming on ${date}th jan`;

// console.log(str3)

// const str1 = "Aman Verma";

// // console.log(str1.length);
// // console.log(str1[2].toUpperCase());
// // console.log(str1)
// let a = str1.toUpperCase()
// console.log(a)
// console.log(str1)

// const msg = `Aman Verma`;

// console.log(msg.slice(-3,-1))
// console.log(msg.substring(1,6))

// const a = "apple";
// const b = "bananna";
// const c = a+" "+b;

// console.log(c)

// console.log(10+"aman");
// console.log("10"+"aman");
// console.log("10"+5+2);  // irght me hai to no addition
// console.log(10+5+"2");  //left me hai to pahele add then concat

// const str1="aman is reading is coding"
// console.log(str1.replaceAll('is','was'));

// const str1 = "         aman is coding       Verma    ";
// console.log(str1.trim())


// const str1 = "aman,sanam,sahil,anjali";
// console.log(str1.split(","));  //return new array 


// --------------------------------------------------------------

//Date 

// const Now = new Date();
// console.log(Now)
// console.log(Now.toLocaleDateString())
// console.log(Now.getDay())
// console.log(Now.getMonth())
// console.log(Now.getFullYear())
// console.log(Now.getHours())
// console.log(Now.getMinutes())
// console.log(Now.getSeconds())

// const now = Date.now();
// const date = new Date(0);
// console.log(date.toString())


// let arr = [1,'aman',2,'sahil',true,];

// // for(let i=0; i<arr.length; i++){
// //     console.log(arr[i]);
// // }

// for(let item of arr){
//     console.log(item)
// }

// let arr1 = [1,'aman',2,'sahil',true];
// let arr2 = arr1;

// arr2.push(50);
// console.log(arr1);


//slice
// const arr = [1,2,3,4,5,6];
// const newarr = arr.slice(1,4); //2,3,4
// console.log(newarr); // return new arr

// //splice 
// const arr1 = [1,2,3,4,5,6];
// let naya = arr1.splice(1,4,'aman',19);
// console.log(arr1)  // original array se gayab

// let arr = [10,20,30];
// let arr2 = ['aman','sahil','sanam'];

// let newarr = arr.concat(arr2);
// console.log(newarr);

// let arr = [10,20,30]
// let arr1 = ['aman','naman']
// let arr2 = [true,false]

// let arr4 = [...arr,...arr1,...arr2];
// console.log(arr4)

// const names = ['aman','sanma','rohit','mohit','sahil']
// console.log(names.sort());
// console.log(names.reverse());
// console.log(names.join('+'))
// console.log(typeof names.toString());

// const a = [101,70,20,50,30,7];
// console.log(a.sort((a,b)=>a-b))

// const arr = [1,2,3,[4,5,[-1,-2,-3],6],7,8];
// const a = arr.flat(Infinity);
// console.log(a)

// const user = {
//     name : "Aman",
//     age : 26,
//     city : {
//         pincode : 560091,
//         area : 'bayadrahalli'
//     },
//     "home address": 'nepalgunj'
// }

// for(let [keys,value] of Object.entries(user) ){
//     console.log(keys,value)
// }

// const {name,age,city} = user;
// console.log(name,age,city.pincode)

// const arr  = [10,20,30,40] 
// const [first,second] = arr;
// console.log(first,second)

// const name = user.name;
// console.log(name)

// for(let keys in user){
//     console.log(keys, user[keys])
// }

// console.log(Object.values(user))
// console.log(Object.entries(user))

// const user2 = user; // copy by refernce so change in user 2 reflect user1 becuase same address point
// user.name = "sanma"
// console.log(user2)

// console.log(user["name"])
// console.log(user['city']['area'])
// user.lastname = "verma"
// delete user.age;
// console.log(user.name,user.age,user.city.pincode,user.lastname)
// console.log(user)

// let user = {
//     name :'aman',
//     age :26,
//     address : {
//         city:'bangalore',
//         pin : 560091
//     },
//     greeting : function(){
//      console.log(`my name is ${this.name}`);
//      return 20;
//     } 
// }
// let user2 = {
//     name : 'sanma',
//     age : 35
// }
// user2.greeting = user.greeting;
// user2.greeting()

// const user1 = {
//     name : "rohit",
//     age : 32,
//     address :{
//         state : 'Uttrakhanda',
//         city :'kotdawar'
//     }
// }

// const user2 = user1;
// user2.name = "aman"
// console.log(user2)  // tehy are changing in samme 

// const user2 = {...user1};  // dono alg alg ho  //shallow copy 1 level
// user2.name = "Aman"
// user2.address.city = "dawarka";  // but in deep nested its changing
// console.log(user2);

// console.log(user1); // ab dono alg alg ho GamepadEvent.apply..

//but if u want deep copy 
// const user2 = structuredClone(user1);
// user2.address.city = "Delhi";
// console.log(user2);
// console.log(user1)

// ▶️ Function in Js

// function sum(...num){
//     let total = 0;
//     for(let i of num){
//         total += i;
//     }
//     console.log(total);
// }
// sum(1,2);
// sum(1,2,3);
// sum(1,2,3,4);


// #function expression --> not hoisted

// let sum = function(num1,num2){
//     return num1+num2;
// }
// console.log(sum(3,4))

// #Arrow funciton

const sum = (num1,num2)=> num1+num2;
const ans = sum(2,3);
console.log(ans)
