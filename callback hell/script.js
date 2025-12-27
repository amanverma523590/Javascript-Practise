//zomato simulation

function placeOrder(callback){
    console.log(`Payment is in Progress`);

    setTimeout(()=>{
        console.log(`Payment successful!...Order is Placed`);
        callback();
    },3000)
    
}

function preparingOrdder(callback){
    console.log(`Order is preparing`);

    setTimeout(()=>{
        console.log(`Ordered is prepared..`);
        callback();
    },3000)
}

function pickupOrder(){
    console.log(`Delivery is on way to pickup order..`);

    setTimeout(()=>{
        console.log(`i have picked up order`);
    },3000)
}

placeOrder(()=>{
    preparingOrdder(()=>{
        pickupOrder();
    });
});
