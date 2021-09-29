let button = document.getElementById("button");
button.style.position = "relative";
button.style.left = 140+'px';
button.style.top = 99+'px';
button.style.width = 46+'px';
button.style.height = 48+'px';


function thought(){
  let thought = document.getElementById('thought');
  thought.style.visibility="visible";
  thought.style.width = 100+'px';
  thought.style.height = 89+'px';
  button.style.top = 55+'px';
}

button.addEventListener("click", ()=>{
  thought();
})
