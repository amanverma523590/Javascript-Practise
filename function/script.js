//Rest in function   argument kam jayad

// function sum(...num){
//    let add = 0;
//    for( let n of num){
//     add= add + n;
//    }
//    console.log(add);
// }

// console.log(sum(2,3));
// console.log(sum(2,3,4));
// console.log(sum(2,3,4,6,7));

//rest and spread

//here i collect vaue so rest
// const arr = [10,20,30,40,50];

// const [first,second,...a] = arr;
// console.log(first ,second,a);

//here i open array
// const a1 = [1,2,3,4];
// const a2 = [5,6,7,8];
// const ans = [...a1,...a2];
// console.log(ans);



//function expression

// let addNum = function(num1,num2){
//     return sum = num1+num2;
// }
// console.log(addNum(2,3));

//named fucntion
//not hoisted
// var nam = function named(a,b){
//     return a+b;
// }
// console.log(nam(2,3));

//arrow function
// const add = (a,b)=> a + b;

// console.log(add(2,3));

// const square = num=> num*num;
// console.log(square(2));

// let user = ()=>({ name : "Aman", age :26})
// console.log(user());

// const arr = [2,5,1,3,4];
// arr.sort((a,b)=>a-b);   //here js convert 2,5 by default to string
// console.log(arr);

// IIFFE

// (function greet(){
//     console.log(`hiii`);
// }());
// (()=>{
//     console.log(`sup`);
// })();

// callback function
// function greet(){
//     console.log(`heeloji kaise ho......`);
// }
// function meet(callback){
//     console.log(`i ma going to meet someone`);
//     callback();
// }
// meet(greet); // meet(greet())❌

//example

function blinkitOrderPrepare(){
    console.log(`we have started packing ur order`);
}

function zomatoOrderPepare(){
    console.log(`we have started preparing ur order`);
}

function payment(amount,callback){
    console.log(`${amount} is intialize`);
    console.log(`paymet recive`);
    callback();
}

console.log(payment(500,zomatoOrderPepare));
// console.log(payment(300,blinkitOrderPrepare));