let form  = document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault(); // turant cleear na ho is liye
    const boy = document.getElementById("boy");
    const girl = document.getElementById("girl")

    const l1 = boy.value.length;
    const l2 = girl.value.length;
    const result = Math.pow(l1+l2,3)%101; 

    let h3 = document.querySelector('h3');
    h3.textContent = `Result of love is ${result}`;
    form.reset();
})