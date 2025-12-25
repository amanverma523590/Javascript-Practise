const future = [
  "You will become rich",
  "Success will come after struggle",
  "A big opportunity is coming soon",
  "Your career will grow rapidly",
  "You will achieve financial stability",
  "Love will enter your life unexpectedly",
  "You will gain respect and recognition",
  "A major life change is ahead",
  "Your hard work will pay off",
  "You will live a comfortable and happy life"
];

let names = document.getElementById('name').value;
let dob = document.getElementById('dob');

let form = document.querySelector('form');
form.addEventListener(('submit'),(e)=>{
    e.preventDefault();

    let names = document.getElementById('name').value;
   const index = Math.floor(Math.random()*10);
   document.getElementById("result").innerText =  `hi ${names}, ur feature is that
   ${ future[index]}`;
   form.reset();
})

