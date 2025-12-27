//zomato

const details = {
    id : 1212,
    food : ["Pizza","Burger","Coke"],
    total : 620,
    name : "Aman Verma",
    customer_location : "Bydrahalli",
    location : "anjana nagar"
}

function placeOrder(details,callback){
    
    console.log(`${details.total} Payemnt is wating....`);

    setTimeout(()=>{
        console.log(`Payment sucessfull`);
        callback(details);
    },3000)
}

function prepareOrder(details,callback){
    console.log(`Order is preparing`);
    console.log(details.food);

    setTimeout(()=>{
        console.log(`Your order is prpared`);
        callback(details);
    },3000)
}

function deliveryBoy(callback){
    console.log(`Delivery boy is way to pickup`);

    setTimeout(()=>{
        console.log(`Deilvery boy has recieved ur order`);
        callback();
    },3000)
}
function delivery(){
    console.log(`order  out of deivery`);

    setTimeout(()=>{
        console.log(`order has deliverd`);
    },3000)
}

placeOrder(details,(details)=>{
    prepareOrder(details,()=>{
        deliveryBoy(()=>{
            delivery();
        });
    });
});