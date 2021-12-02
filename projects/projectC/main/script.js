console.log("hi");

// let socket = io();

let socket = io('http://localhost:3000');

let myTurn = document.getElementById("myTurn");

// let socket = io();
// const l = console.log
function getEl(id) {
    return document.getElementById(id)
}
let editbox = document.getElementById("editbox")
editbox.addEventListener("keyup", (evt) => {
    let text = editbox.value
    socket.send(text)
})

// let button = document.getElementById("button")
// button.addEventListener("onclick", (evt) => {
//
// })

socket.on('message', (data) => {
    editbox.value = data
})
