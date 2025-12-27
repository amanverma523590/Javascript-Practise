//zomato simulation

function placeOrder(callback){
    console.log(`Payment is in Progress`);

    setTimeout(()=>{
        console.log(`Payment successful!...Order is Placed`);
        callback();
    },3000)
}

function preparingOrdder(){
    console.log(`Order is preparing`);

    setTimeout(()=>{
        console.log(`Ordered is prepared..`);
    },3000)
}

placeOrder(preparingOrdder);
