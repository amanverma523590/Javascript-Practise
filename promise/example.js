const details = {
    name : "Aman",
    amount : 360,
    item : ['hairdryer', 'getSelection', 'jacket'],
    dname : 'rajesh',
    rating : 5
}

function placeOrder(details) {
  console.log(`Payment is in progress`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`pyament of Rs ${details.amount} successful`);
      resolve(details);
    }, 3000);
  });
}

function prepareItem(details) {
  console.log(`item has started prepaaring`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`item is  packed`);
      resolve(details);
    }, 3000);
  });
}

function deliveryBoy(details) {
  console.log(`delivery boy ${details.dname} is going to location`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${details.dname} has reached location`);
      resolve(details);
    }, 3000);
  });
}
function rating(details) {
  console.log(`rate our service`);

  setTimeout(() => {
    console.log(`thank u for ${details.rating} star rating`);
  }, 3000);
}

placeOrder(details)
  .then((details) => prepareItem(details))
  .then((details) => deliveryBoy(details))
  .then((details) => rating(details));
