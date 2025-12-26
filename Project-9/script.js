const form = document.querySelector('form');
const alltask = document.getElementById('alltask');
const input = document.querySelector('input');

form.addEventListener(('submit'),(e)=>{
    e.preventDefault();

    const text = input.value.trim();

    if(text == "") return;

    const parent = document.createElement('div');
    const task = document.createElement('span');
    task.textContent = text;
    task.style.marginRight = "20px";

    const delbtn = document.createElement('button');
    delbtn.innerText = "Delete";
    delbtn.style.marginRight = "10px";

    const donebtn = document.createElement('button');
    donebtn.innerText = "Done";
    donebtn.style.marginRight = "10px";

    parent.append(task,donebtn,delbtn);

    alltask.append(parent);

    delbtn.addEventListener(('click'),()=>{
        parent.remove();
    })
    donebtn.addEventListener(('click'),()=>{
        task.style.textDecoration = "line-through";
        task.style.color = "green";
    })
    form.reset();

})