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

// const sum = (num1,num2)=> num1+num2;
// const ans = sum(2,3);
// console.log(ans)

// const greet = ()=> ({ name : 'Aman', age :26  })
// console.log(greet())

//IIFFE

// (function greet(){
//     console.log('sup aman');
// }());

// -----------------------------------------------------

// ⛔⛔Callback function

// function a (){
//     console.log('a function')
// }
// function b (callback){
//     callback();
//     console.log('b function')

// }
// b(a);

// function hii(){
//     console.log('i am hii function')
// }
// function bye(callback){
//     callback();
//     console.log('I am bye function')
// }
// bye(hii);

// function payment(amount,callback){
//     console.log(`amount ${amount} is paid`);
//     callback();
// }
// function placeOrder(callback){
//     console.log('your order is placed')
//     callback();
// }
// function outOfDelivery(){
//     console.log('item out of delivery')
// }
// payment(500,()=>{
//     placeOrder( ()=>{
//         outOfDelivery()
//     } )
// })

//▶️▶scope in js
//global
// let a = 5;
// let b = 1;

// {
//     console.log(a,'yes i am accesbile beciuse i am global')
// }
// if(true){
//     console.log(a,'yes i am accesbile beciuse i am global')
// }

// function add(){
//     console.log(a,"yes i am accesbile beciuse i am global")
// }
// add();

//local

// function add(){
//     let a = 5;
// }
// add();
// console.log(a) // beacus eits local scope

// {
//     let a = 5;
// }
// console.log(a);// beacus eits local scope

// if(true){
//     let a = 5;
// }
// console.log(a)

// ⛔Global scope --> let,const accesbile to anyone
// ⛔function scope --> let,const accesbile to inside function
// ⛔block scope --> let,const accesbile to inside block

//but var doesnot respect block scope if();

// var a = 5;

// function add(){
//     var b = 6;
// }

// if(true){
//     var c = 2;  // doesn't respect and show the value
// }
// console.log(c)

// let global = 30;

// function greet(){

//     console.log(global);
//     let global = 40;
// }
// greet();

// ▶️⛔Clousers in js

// function createCounter(){

//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }

//     return increment;  // function return to itself not calling

// }
// // console.log(count)
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function main(){
//     let name = "Aman";

//     function sayName(){
//         console.log(name);
//     }
//     sayName();

// }
// main();

// ▶️⛔Banking example in clousers

// let balance = 500;

// balance += "Aman";
// console.log(balance)
// ise bachne ke liye lets put inside fucntion oe]r object

// let balance = 200;

// let user={

//     deposit : function(amount){
//         if(typeof amount == "number" && amount>=0 ){
//         balance += amount;
//         }else{
//             console.log("enter in  number")
//         }
//     },

//     withdraw : function takeout(amount){
//         if(amount >= 0 && typeof amount === "number"){
//             balance -= amount;
//         }else{
//             console.log("number me do bhai")
//         }
//     },
//     getbalance : function checkbalance(){
//         return balance;
//     }
// }
// user.deposit(200);
// // console.log("toal amount",user.balance)
// // user.balance += "aman";
// // console.log(user.balance)

// // user.withdraw("nak");
// // console.log(user.balance)
// const bal = user.getbalance();
// console.log("Toatal amount is ", bal)

// ⛔⛔⛔▶️▶️▶️▶️▶️▶️⛔⛔⛔⛔⛔⛔▶️▶️▶️▶️▶️

// function createBankApp() {

//   let balance = 200;  // now it has beocme private variable

//   let user = {
//     deposit: function (amount) {
//       if (typeof amount == "number" && amount >= 0) {
//         balance += amount;
//         return balance;
//       } else {
//         console.log("enter in  number");
//       }
//     },

//     withdraw: function takeout(amount) {
//       if (amount >= 0 && typeof amount === "number" ) {
//         return balance -= amount;
//       } else {
//         console.log("number me do bhai");
//       }
//     },
//     getbalance: function checkbalance() {
//       return "balance is", balance;
//     },
//   };

//   return user;

// }

// const customer = createBankApp();

// // console.log("balcnce is",customer.deposit(200))
// console.log("u have withdrawn rs",customer.withdraw(1000))


// ▶️▶️▶️▶️⛔⛔⛔⛔⛔ 

// 1) forEach
// const arr = [1,2,3,4];

// let sum = 0;
// arr.forEach((num)=>{
//     sum += num;
// })
// console.log(sum)

// 2) Filter
// ▶️Return ne Array
// ▶️Never change on original array
// ▶️condition based filter

// const arr = [1,2,3,4,5];

// const sortarr = arr.filter((n)=>{
//     return n>3;
// })
// console.log(sortarr)

// const arr = [1,2,3,4,5,6];

// arr.filtering = function(compare){
//     const ans = [];
//     for(let num of arr){
//         if(compare(num)){
//             ans.push(num)
//         }
//     }
//     return ans;
// }
// const ans = arr.filtering((num)=>{
//     return num>2;
// })
// console.log(ans)

// ▶️▶️▶️▶️▶️⛔⛔⛔⛔⛔⛔⛔
// 3) Map itereate and modify object
// change every elemnt in Array.

// let arr = [1,2,3,4,5,6];

// const ans = arr.map((item)=>{
//      return item*2;
// })
// console.log(ans)


const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

const ans = products.filter((items)=>{
    return items.price>50 && items.category=="Electronics";
}).sort((a,b)=>{
    return a.price-b.price;
}).map((item)=>{
    return ({Name: item.name, Price:item.price})
})
console.log(ans)