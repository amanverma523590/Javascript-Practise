const quotes = [
  "Believe in yourself, even when no one else does.",
  "Stay focused and never quit, because persistence wins.",
  "Hard work always pays off in the end, keep pushing forward.",
  "Dream big, start small, and take consistent action every day.",
  "Consistency beats talent when talent doesn’t work hard.",
  "Success needs patience and the courage to keep going.",
  "Learn something every day to become better than yesterday.",
  "Mistakes make you stronger, wiser, and more prepared.",
  "Push yourself daily beyond comfort to grow and improve.",
  "Do it with passion and the results will follow naturally.",
  "Failure is part of growth; embrace it as a learning step.",
  "Stay positive always, no matter how tough the journey gets.",
  "Your time will come if you keep working towards your goals.",
  "Small steps matter, they lead to big achievements over time.",
  "Never stop learning because knowledge is infinite and powerful.",
  "Work in silence, let your success make the noise for you.",
  "Trust the process even when you don’t see immediate results.",
  "Discipline creates freedom by building habits that empower you.",
  "Be better than yesterday by focusing on progress, not perfection.",
  "Code. Learn. Repeat. This is the path to mastery in tech."
];


let btn = document.getElementsByClassName("btn")[0];
let heading = document.getElementsByClassName("heading")[0];
btn.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*20);
    heading.textContent = quotes[index];
})