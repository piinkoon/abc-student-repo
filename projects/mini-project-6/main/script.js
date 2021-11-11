let button = document.getElementById("go");
let guessInput = document.getElementById("what");

button.addEventListener("click", ()=>{
  console.log("click");
  let answer = guessInput.value;
  window.location.href = "/answer?word=" + answer
})
