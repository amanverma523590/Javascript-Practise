let result = document.getElementById("result");

setInterval(() => {
  const current = Date.now();
  // console.log(current); // milisecond me mil gaya

  const eventTime = new Date(2026, 0, 1).getTime(); //.get bhi mili sec me convert kar dega
  // console.log(eventTime);

  let timer = eventTime - current;
//   console.log(timer);


  if(timer<=0){
    result.textContent = "Happy New Year";
    return;
  }

  const day = Math.floor(timer / (1000 * 60 * 60 * 24)); // second/minute/hour/day
  timer = timer % (1000 * 60 * 60 * 24); //bacha hua..jaise /24 remainng second me hata hai aur quotent minu me...
  const hour = Math.floor(timer / (1000 * 60 * 60));
  timer = timer % (1000 * 60 * 60);
  const minute = Math.floor(timer / (1000 * 60));
  timer = timer % (1000 * 60);
  const second = Math.floor(timer / 1000);
  timer = timer % 1000;

  result.textContent = `${day} Days - ${hour} Hour - ${minute}  Minute - ${second}   Second`;

}, 1000);
