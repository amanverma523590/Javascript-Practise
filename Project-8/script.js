const body = document.querySelector('body');

const text = ["😂", "🤣", "😎", "🤪", "😜", "🙃", "😏", "🥳", "🤯", "😆"];


body.addEventListener(('click'),(e)=>{
    // console.log(e.clientX,e.clientY);
    let elementCircle = document.createElement('div');
    elementCircle.classList.add('circle');

    let index = Math.floor(Math.random()*text.length);
    elementCircle.textContent = text[index];

    const color = ['red','green','blue','yellow','pink','purple'];
    elementCircle.style.backgroundColor = color[Math.floor(Math.random()*6)];

    elementCircle.style.top = `${e.clientY-25}px`;
    elementCircle.style.left = `${e.clientX-25}px`;

    body.append(elementCircle);

    setTimeout(()=>{
        elementCircle.remove();
    },5000)
})