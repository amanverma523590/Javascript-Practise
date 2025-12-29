//async and await started
// -->async hamesha fucnton ke age likhe ga aur promise return kargea

// ex 1

// async function greet(){
//     return new Promise((resolve,reject)=>{
//         resolve('aman');
//         reject('bhk')
//     })
// }

// const response = greet();
// response.then((data)=>
//     console.log(data)
// )
// response.catch((error)=>{
//     console.log("error", error);
// })

// async function getuser() {
//   const response = await fetch(`https://api.github.com/users`);
//   const data = await response.json();
//   console.log(data);
// }

// getuser();

async function github() {
    const response = await fetch(`https://api.github.com/users`)
    const data = await response.json();

    const first = document.getElementById('first')

    for(const user of data){

        const element = document.createElement('div')
        element.classList.add("user")

        const image = document.createElement('img')
        image.src = user.avatar_url;
        
        const uname = document.createElement("h2");
        uname.textContent = user.login;
        
        const anchor = document.createElement('a')
        anchor.href = user.html_url;
        anchor.textContent = 'visit profile';

        element.append(image,uname,anchor);
        first.appendChild(element);
    }

}
github();

