// function handleClick(){
//     var heading = document.getElementById("heading");
//     if(heading.textContent === "Hello"){
//         heading.textContent = "bye";
//     }else{
//         heading.textContent = "Hello"
//     }
// }

// var heading = document.getElementById("heading");
// heading.addEventListener(('click'),()=>{
//     heading.style.backgroundColor = "Pink"
// })

// let parent = document.getElementById("parent");

// console.log(parent.children);

// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener(('click'),()=>{
//         child.textContent = "I am Clicked"
//     })

    
// }
// Event argument

// function DataOperation(obj,e,list,ob){
//     console.log(`Id=${obj.id} 
//                 ClientX = ${e.clientX}    
//                 ClientY = ${e.clientY}
//                 `);
//     console.log(list);
//     console.log(ob);
// }


// function BodyLoad(){
//    let btnInsert =  document.getElementById("btnInsert");
//    btnInsert.addEventListener(("click"),(e)=>{
//     console.log(`
//             ButtonId = ${e.target.id}
//             ButtonValue = ${e.target.value}
//             ClientX = ${e.clientX};
//             ControlKey = ${e.ctrlKey}
//         `);
//    })
// }

// function NavClick(){
//     alert("NavClicked")
// }

// function SearchClick(e){
//     alert("Search Clicked")
//     e.stopPropagation();
// }

// function handleSubmit(e){
//     e.preventDefault();
//     alert(`form submitted`)
// }

console.log('execution start');
fetch(`https://fakestoreapi.com/products/categories`)
 .then(async res => await res.json())
 .then(data => {
    data.map(async item =>{
        console.log(await item);
    })
 })
 setTimeout(function (){
    console.log(`i am fetching from api`);
 },0);
 console.log('excution ended');