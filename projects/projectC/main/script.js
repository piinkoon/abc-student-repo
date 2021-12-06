console.log("hi");
let socket = io('http://localhost:3000');
// let socket = io();

function getEl(id) {
    return document.getElementById(id)
}
let editbox = document.getElementById("editbox");
editbox.addEventListener("keyup", (evt) => {
    let text = editbox.value
    socket.send(text)

    console.log(text);

    socket.emit("addStory", {value: text})
    text = "";

})

let button1 = document.getElementById("stop");
let button2 = document.getElementById("start");


button1.addEventListener("click", ()=> {
  console.log("clicked!");
  let name = namebox.value.trim();
  let message = "finished their turn!";
  {
    let data = {name: name, message: message}
    socket.emit('message2', data);
    console.log(data);
  };
  stopEditing();
});

button2.addEventListener("click", ()=> {
  console.log("clicked!");
  let name = namebox.value.trim();
  if(name == ""){
    name = "anonymous";
    namebox.value = "";
  }
  let message = "wants to write now!";
  {
    let data = {name: name, message: message}
    socket.emit('message2', data);
    console.log(data);
  };
  startEditing();
});

function stopEditing() {
  document.getElementById('editbox').readOnly = true;
}

function startEditing() {
  document.getElementById('editbox').readOnly = false;
}

let namebox = document.getElementById("name");
let indicatorbox = document.getElementById("indicator");

socket.on("incoming", (data) => {
  console.log(data);
  let name = data.name;
  let message = data.message;
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = "<span class='sender'>"+name+"</span> " + message;
  li.appendChild(p);
  indicatorbox.appendChild(li);
  indicatorbox.scrollTop = indicatorbox.scrollHeight;
})

socket.on('message', (data) => {
    editbox.value = data
});
