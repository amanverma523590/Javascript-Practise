// let obj1 = {
//   name : "Aman",
//   age : 26,
//   greet : function(){
//     console.log(`hii ${obj1.name}`);
//   }
// }

// let obj2 = {
//   name : "sanam",
//   age : 30,
// }
//  obj2.greet = obj1.greet;
//  console.log(obj2.greet());

// let ans = obj1.greet();
// console.log(ans);

// # `this` Keyword in JavaScript

// ## Simple Definition
// In JavaScript, **`this` refers to the object that is currently calling a function**.  
// Its value is determined at runtime based on how the function is invoked.

// ---

// ## Advantages of `this`

// ### 1️⃣ Improves code reusability  
// The `this` keyword allows the same function or method to be reused for multiple objects without modifying the code.

// ### 2️⃣ Makes code clean and maintainable  
// By using `this`, we avoid hardcoding object names, which makes the code easier to update and maintain.


function GetClick(){
  document.getElementById('detail-container').style.display = "block";
  fetch("product.json")
  .then(function(response){
    return response.json();
  })
  .then(function(product){
    document.getElementById("labelName").innerHTML = product.name;
    document.getElementById("labelPrice").innerHTML = product.price;
    document.getElementById('productImg').src = product.photo;
    document.getElementById('labelStock').innerHTML = product.stock==true ? "Availbale":"Not Available";
  })
}