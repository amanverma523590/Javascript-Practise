let container = document.getElementById("container");

container.addEventListener("dblclick",(e)=>{
    // console.log(e.target); // child kaun sa click hua
    const child = e.target;
    const body = document.querySelector('body');
    body.style.backgroundColor = child.id; //id must be color name here
})