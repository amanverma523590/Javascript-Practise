const div = document.querySelector("div");

setInterval(() => {
  let time = new Date();
  time = time.toLocaleTimeString();
  
  div.textContent = time;
}, 1000);
