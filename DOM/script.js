// let h2 = document.createElement("h2");
//  h2.innerText = "strike is coming soon"
// //  console.log(h2);


//  //select the element
//  let heading = document.getElementById("heading");
//  heading.after(h2);

//  const h3 = document.createElement("h3");
//  h3.innerHTML = "diwali ane wali hai";
//  h3.id = "third"
//  console.log(h3);
//  h3.style.color = "red";
//  h3.style.backgroundColor ="lightpink"
//  h3.style.fontSize = "30px";
//  heading.before(h3);

//list
// let listone = document.createElement("li");
// listone.innerHTML = "tea";
// let listtwo = document.createElement("li")
// listtwo.innerHTML = "coffe";

// let elemt = document.getElementById("list");
// elemt.append(listone)
// elemt.prepend(listtwo);

let arr = ["tea","coffee","water","alchol","energy drink"];

const fragment = document.createDocumentFragment();

for(let item of arr){
    let li = document.createElement("li");
    li.innerHTML = item;
    fragment.appendChild(li);
}
document.getElementById("list").appendChild(fragment)
