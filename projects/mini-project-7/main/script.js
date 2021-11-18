console.log("hi");

// let socket = io();

// let socket = io('http://localhost:3000');
let socket = io();
// const l = console.log
function getEl(id) {
    return document.getElementById(id)
}
const editbox = document.getElementById("editbox")
editbox.addEventListener("keyup", (evt) => {
    const text = editbox.value
    socket.send(text)
})

let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let big = document.getElementById("bigger");
let small = document.getElementById("smaller");
let color = document.getElementById("color");


let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

let editBox = document.getElementById("editbox");

function makeBold(){
  editBox.style.fontWeight = "bolder";
}

function makeItalic(){
  editBox.style.fontStyle = "italic";
}

function makeBigger(){
  editBox.style.fontSize = "x-large";
}

function makeSmaller(){
  editBox.style.fontSize = "x-small";
}

bold.addEventListener("click", () => {
    if(editBox.style.fontWeight === "normal")
      makeBold();
      else {
        editBox.style.fontWeight = "normal"
      };
  });

italic.addEventListener("click", () => {
  if(editBox.style.fontStyle === "normal")
    makeItalic();
    else {
      editBox.style.fontStyle = "normal"
    }
});

big.addEventListener("click", () => {
  if(editBox.style.fontSize === "14" + "px")
    makeBigger();
    else {
      editBox.style.fontSize = "14" + "px"
    }
});

small.addEventListener("click", () => {
  if(editBox.style.fontSize === "14" + "px")
    makeSmaller();
    else {
      editBox.style.fontSize = "14" + "px"
    }
});

color.addEventListener("click", () => {
  function ranColor(color) {
    var color = Math.floor(Math.random() * 50);
    editbox.style.color = colors[color];
  }
  ranColor();
});


socket.on('message', (data) => {
    editbox.value = data
})
