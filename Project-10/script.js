const form = document.getElementById("quizform");
const ans = {
  q1: "Sachin Tendulkar",
  q2: "India",
  q3: "Sachin Tendulkar",
  q4: "Rohit Sharma",
  q5: "MS Dhoni",
};
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  let finalScore = 0;

  for (let [name, value] of data.entries()) {
    if (ans[name] == value)
    finalScore++; // name = q1 q2
  }

  let out = document.getElementById("out");
  out.innerText = `your score is ${finalScore} out of 5`;
});
