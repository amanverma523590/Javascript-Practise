


// let x = 10;
// let y = 20;
// // x = x+y;
// x+=y;
// console.log("value of x is ",x)


// let x = "10ac";
// let a = Number(x);
// console.log( typeof a)


// let a = 10;
// let b = String(a)
// console.log(typeof b)

// let a = undefined;
// console.log(Number(a));

// let a = 0.1;
// let b = 0.2;
// let c = a+b;
// console.log(c==0.3)

// let arr = [1,2,3,4,5];
// let newArr = [...arr,"hellow",99]
// console.log(newArr)


// let arr = [1,2,3];
// let newarr = arr;
// newarr.push(5)  // array copy nahi hua hai memeory copy ua hai
// console.log(newarr)
// console.log(arr)

// let arr = [1,2,3];
// let copy = [...arr];
// copy.push("lund")
// console.log(copy)
// console.log(arr)


// let a1 = [1,2,3,4]
// let a2 = ['aman','sanam',5];
// let mergearr = [...a1,...a2,"hahah"];
// console.log(mergearr)

// let str = "aman verma ka ";
// let arr = Array(...str)
// console.log(arr)


// let users = ["Aman","Sanam","Manas"];

// function usersname(user1,user2,user3){
//     console.log(user1)
//     console.log(user2)
//     console.log(user3)
// }
// usersname(...users)

// let obj = {
//     unmae : "Aman",
//     age : 26,
//     email : "aman97@gmail.com"
// }
// // obj.phone = "lelo"
// let objcopy = {...obj,age:2,sex:"male"};
// objcopy.phone = 948;
// // objcopy.push = 
// // console.log(objcopy)
// console.log(objcopy)
// console.log(obj)


// let obj1 = {
//     Name : "Aman",
//     Age: 26
// }
// let obj2 = {
//     Address : "Nepalgunj",
//     sex : "Male"
// }
// let mergeObj = {
//     ...obj1,...obj2,
// }
// console.log(mergeObj)

// function sum(...rest){
//     // console.log(...rest)
//     let add = rest.reduce((acc,curr)=>{
//         return acc+curr;
//     });
//     return add;
// }
// let ans = sum(2,2,2,4,8);
// console.log(ans)


// let arr = ["Aman","Sanam","Sahil"];

// let [user1, ...user2] = arr;
// console.log(user1,user2)


let obj = {
    Name: "Aman",
    Age:26,
    Address : "nepalguj",
    sex:"male"
}

let {Name,Age,...rest} = obj;
console.log(Name)
console.log(Age)
console.log(rest )









