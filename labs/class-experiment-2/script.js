console.log("i am here");

let button = document.getElementById("button");
console.log(button);

let popupwidth = 200;
let popupheight = 200;
let sw = screen.width;
let sh = screen.height;

console.log("sw", sw)
console.log("sh", sh)


function openWindow(){

  let x = Math.random()*(sw - popupwidth);
  let y = Math.random()*(sh - popupheight)

  let specification = "width="+popupwidth+",height="+popupheight+",left="+x+",top="+y;

  let openWindow = window.open("window/index.html","", specification);

  let runTime = 1000 + Math.random()*5000;

    setTimeout(()=> {
    openWindow.close();
  }, runTime );

}

function openManyWindows() {
  for (let i = 0; i<10; i++) {
    openWindow();
  }
  }

button.addEventListener("click", ()=>{
  console.log("click");
  openWindow();
})
