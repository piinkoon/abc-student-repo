let button = document.getElementById("go");
let guessInput2 = document.getElementById("what");

button.addEventListener("click", ()=>{
  let answer2 = guessInput2.value;
  window.location.href = "/answer2?word=" + answer2;
})
