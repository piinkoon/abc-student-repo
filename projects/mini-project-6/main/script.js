console.log("it works!");
let button = document.getElementById("go");
let guessInput = document.getElementById("what");

button.addEventListener("click", ()=>{
  console.log("click");
  let answer = guessInput.value;
  console.log("answer", answer);
  window.location.href = "/answer?word=" + answer
})
