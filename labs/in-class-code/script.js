let socket = io("https://valuable-exciting-conga.glitch.me");
let others = [];
let myId;
let testMode = false;

//receiveMyId
socket.on('singleId', function(msg) {
  console.log("My ID:", msg.value)
  myId = msg.value
});
// here I receive updated whenever someone disconnects or connects to the socket server.
socket.on('updatedClients', function(msg) {
  console.log("updatedClients", msg)
  others = msg.value
});

// --------



let all = document.getElementById("all");
let allbutme = document.getElementById("allbutme");
let randomSingle = document.getElementById("randomSingle");
let buttonOutput = document.getElementById("buttonOutput");

function buttonReceived(){
  buttonOutput.style.backgroundColor = "red";
  setTimeout(function(){
    buttonOutput.style.backgroundColor = "black";
  }, 500)
}

all.addEventListener("click", function(){
console.log("click");
socket.emit('button1ToAll');
});

allbutme.addEventListener("click", function(){
console.log("click");
socket.emit('button1ToAllButMe');
});

randomSingle.addEventListener("click", function(){
// console.log("click");
// socket.emit('button1ToAllButMe');
if(others.length>0){
  let ranFloat = Math.random()*others.length
  let ranIdx = Math.floor(ranFloat)
  let randomOtherId = others[ranIdx];
  socket.emit('button1ToSingle', {id: randomOtherId});

}
});

socket.on('button1', function(msg) {
  if(testMode && msg.from != myId){return}
  buttonReceived();
});

// --------

let textinput = document.getElementById("textinput");
let textsubmit = document.getElementById("sendText");

textsubmit.addEventListener("click", function(){
  if(textinput.value != ''){
    socket.emit('button1ToAllButMe', {value: textToSend});
  }
})

socket.on('text', function(msg) {
  if(testMode && msg.from != myId){return}
  console.log(msg.value)

  let x = Math.random()*window.innerWidth;
  let y = Math.random()*window.innerHeight;
  let p = document.createElement("p");
  p.className = "textMessage";
  p.style.left = x + "px";
  p.style.top = y + "px";
  p.style.transform: "rotate("+angle+"deg)"


  p.innerHTML = msg.value;
  textBox.appendChild(p);

});
