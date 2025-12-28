// fetch(`https://api.github.com/users`)
//   .then((response) => {
//     if(!response.ok){
//       throw new Error("Data is not Present")
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const parent = document.getElementById("first");

//     for (let i=0; i<data.length; i++) {
//       const img = document.createElement("img");
//       img.src = data[i].avatar_url;
//       img.style.height = "300px";
//       img.style.width = "300px";
//       parent.appendChild(img);
//     }

//   })
// .catch((error) => {
//     document.getElementById("first").textContent = error.message;
//   });

// creating our own promises

// let p1 = new Promise((resolve,reject)=>{
//   reject("wrong");
// })
// p1.then((response)=>{   // resolve than wala hancle kar lega
//   console.log(response);
// }).catch((error)=>{   //reject cath wala handle kar lega
//   console.log(error);
// })

// #Soling our callback hell

//zomato

const details = {
  uname: "Aman",
  location: "Bydrahlli",
  hotel: "anjana nagar",
  food: ["Pizza", "Biryani", "Coke"],
  price: 360,
};

function placeOrder(details) {
  console.log(`Payment Pending of Rs.${details.price}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Payment successful`);
      details.status = true;
      resolve(details);
    }, 3000);
  });
}

function prepareOrder(details) {
  console.log(`${details.uname}Your order is started to prepare`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Order prepared`);
      details.status = true;
      resolve(details);
    }, 3000);
    
  });
}

function deliveryBoy(details) {
  console.log(`Delivery boy is on way to location`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Delivery boy has reached to hotel`);
      details.status = true;
      resolve(details);
    }, 3000);
    
  });
}

function delivery() {
  console.log(`ur order is out of delivery`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`ur item has been delivered`);
      details.status = true;
      resolve(details);
    }, 3000);
    
  });
}

placeOrder(details)
  .then((details) => prepareOrder(details))
  .then((details) => deliveryBoy(details))
  .then((details) => delivery(details))
  .then((details)=>{
    console.log(details);
  })
  .catch((error)=>{
    console.log("Error :", error.message);
  })
