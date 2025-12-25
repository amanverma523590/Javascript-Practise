let form = document.querySelector('form');

form.addEventListener(('submit'),(e)=>{
    e.preventDefault();
    let income = document.querySelector("#income");
    let amount = parseInt(income.value); //1000 is in string so convert  in number

    const result = document.querySelector('h2');
    let totalTax = 0;

    if(amount <= 1200000){
        totalTax = 0;
    }else if(amount <= 1600000){
        totalTax = (amount-1200000) * 0.15;
    }else if(amount <= 200000){
        totalTax = (amount-1600000) * 0.20 + 60000;
    }else if(amount <= 2400000){
        totalTax = (amount-2000000) * +60000+ 80000;
    }else{
        totalTax = (amount-2400000) * + 60000 + 80000+ 100000;
    }
    result.textContent = `total tax is ${totalTax}`;
    form.reset();
    
})
