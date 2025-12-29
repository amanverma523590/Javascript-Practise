

// const obj = {
//     name : "aman",
//     age : 26,
//     greet : function(){
//         console.log(`hellow ji`);
//     }
// }

// console.log(obj.hasOwnProperty("name"));


// const obj2 = {
//     account : 30
// }

// obj2.__proto__ = obj;  // agaya
// console.log(obj.hasOwnProperty("name")); // i wnat name property of obj1 in obj  2

// //prototypes are mechanisnm inwhcih object shared their properties and method with another

class person  {
    constructor(name,age){
        this.name = name,
        this.age = age
    }

    sayhi(){
        console.log(`sup ${this.name} bro`);
    }
}

class customer extends person{
    constructor(name,age,account,balance){
        super(name,age);
        this.account = account;
        this.balance = balance;
    }
    checkbalance(){
        return this.balance;
    }
}

const customer1 = new customer('aman',29,20010,30);
console.log(customer1.checkbalance());
