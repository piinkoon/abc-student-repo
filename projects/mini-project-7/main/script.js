console.log("hi");

// let socket = io();

window.onload = function() {
let socket = io('http://localhost:3000');
// const l = console.log
function getEl(id) {
    return document.getElementById(id)
}
const editbox = document.getElementById("editbox")
editbox.addEventListener("keyup", (evt) => {
    const text = editbox.value
    socket.send(text)
})

socket.on('message', (data) => {
    editbox.value = data
})
}
