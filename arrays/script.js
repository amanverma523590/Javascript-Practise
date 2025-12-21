// var categories = [
//   "All",
//   "Electronics",
//   "Footwear",
//   "Fashion",
//   "Men's Clothing",
// ];
// function LoadCategories() {
//   document.querySelector("ol").innerHTML = "";
//   document.querySelector("select").innerHTML = "";
//   document.querySelector("tbody").innerHTML = "";
//   document.querySelector("ul").innerHTML = "";
//   document.querySelector("nav").innerHTML = "";
//   for (var item of categories) {
//     var li = document.createElement("li");
//     li.innerHTML = item;
//     document.querySelector("ol").appendChild(li);

//     var option = document.createElement("option");
//     option.text = item;
//     option.value = item;

//     document.querySelector("select").appendChild(option);

//     var tr = document.createElement("tr");
//     var td = document.createElement("td");
//     td.innerHTML = item;
//     tr.appendChild(td);

//     document.querySelector("tbody").appendChild(tr);

//     var checkLi = document.createElement("li");
//     checkLi.innerHTML = `<input type="checkbox"> ${item}`;

//     document.querySelector("ul").appendChild(checkLi);

//     var div = document.createElement("div");
//     div.innerHTML = `<button style="width:200px; margin-top:20px">${item}</button>  `;

//     document.querySelector("nav").appendChild(div);
//   }
// }
// function bodyload() {
//   LoadCategories();
// }

// function AddClick() {
//   var categoryname = document.getElementById("txtCategory").value;
//   if (categories.indexOf(categoryname) == -1) {
//     categories.push(categoryname);
//     alert(`${categoryname} Add to List`);
//     LoadCategories();
//     document.getElementById("txtCategory").value = "";
//   } else {
//     alert(`${categoryname} Exists`);
//   }
// }

// function RemoveClick() {
//   var categoryname = document.querySelector("select").value;
//   var index = categories.indexOf(categoryname);
//   var flag = confirm(`Are you sure, whant to delete : ${categoryname}`);
//   if (flag == true) {
//     categories.splice(index, 1);
//     LoadCategories();
//   }
// }



//for  each array method

// let arr = [10,20,30,5,40];
// let sum = 0;
// arr.forEach((num)=>{
//   sum+=num;
// })
// console.log(sum);

//filter

// let arr = [10,52,12,63,90];

// const newarr = arr.filter((num)=>{
//   return num>50;
// })
// console.log(newarr);

// let obj = {
//   name : "Aman",
//   deposit : function(amount){
//     console.log(amount);
//   }
// }

// obj.deposit(200);

//making own arr proptype

// let arr = [1,2,3,4,5];

// Array.prototype.filtering = function(compare){
//   let ans = [];
//   for(let num of this){
//     if(compare(num)){
//       ans.push(num);
//     }
//   }
//   return ans;
// }

// const otpt = arr.filtering((compare)=>{
//   return compare%2==0;
// })
// console.log(otpt);

// let a = [10,20,30,52,63,71] 
// const an = a.filtering((compare)=>{
//  return  compare>30;
// })
// console.log(an);