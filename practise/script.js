

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
const arr = [1,2,3,4,5,6];
const newarr = arr.slice(1,4); //2,3,4
console.log(newarr); // return new arr

//splice 
const arr1 = [1,2,3,4,5,6];
let naya = arr1.splice(1,4,'aman',19);
console.log(arr1)  // original array se gayab