//async and await started
// -->async hamesha fucnton ke age likhe ga aur promise return kargea


// ex 1 

async function greet(){
    return new Promise((resolve,reject)=>{
        resolve('aman');
        reject('bhk')
    })
}

const response = greet();
response.then((data)=>
    console.log(data)
)
response.catch((error)=>{
    console.log("error", error);
})