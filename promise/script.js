// console.log(`first`);

// const p1 = fetch(`https://api.github.com/users`);

// const p2 = p1.then((response)=>{
//     return response.json();
// })
// p2.then((response)=>{
//     return response;
// })
// console.log(p2);


// console.log(`last`);

// instead of doing this we do prommise chaining

console.log(`first`);

fetch(`https://api.github.com/users`)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})


console.log(`last`);