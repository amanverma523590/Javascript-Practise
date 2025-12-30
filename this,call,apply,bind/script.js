// 'use strict'

// var a = 10;
//  const b = 20;

// console.log(a,b);

// function greet(name,name1){
//     console.log(name,name1);
// }
// greet('aman','rohit');

// #use strict allow u to write good code 


//this keyword

// console.log(this);
// 'use strict'

// function greet(){
//     console.log(`hi ${this.name}`);
// }
// function older(value,name){
//     this.age += value;
//     this.name = name;
//     console.log(this.name);
//     console.log(this.age);
// }
// const user = {
//     name : "aman",
//     age : 26
// }
// const user2= {
//     name : "sanam",
//     age : 36
// }
// const ans = older.bind(user2,5,'lodu')
// ans();
// greet.call(user2) // jab function independent hota hai esa call karte hai


// console.log(user2.greet());

// function greet(){
//     console.log(this);  // winndow obj
// }
// greet();

// class user{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// const u1 = new user('aman',29);
// console.log(u1);

//this in arrow function

const greet = ()=>{
    console.log(this);
}
greet();