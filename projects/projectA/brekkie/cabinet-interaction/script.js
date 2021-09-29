let button = document.getElementById("groceries");
let button2 = document.getElementById("takeout");

let popupwidth = 150;
let popupheight = 150;
let shelfwidth = 500;
let shelfheight = 300;
let sw = screen.width;
let sh = screen.height;

function openThings(){

  let x = Math.random()*(sw - popupwidth);
  let y = Math.random()*(sh - popupheight)

  let specification = "width="+popupwidth+",height="+popupheight+",left="+(x)+",top="+(y);

  let openThings = window.open("supplies/index.html","", specification);

    setTimeout(()=> {
    openThings.close();
  }, 10000 );

}

function openManyThings() {
  for (let i = 0; i<30; i++) {
    openThings();
  }
  }

button.addEventListener("click", ()=>{
  openManyThings();
})

function openTakeoutWindow(){

  let shelfX =394+'px';
  let shelfY = 174+'px';

  let specification = "width="+shelfwidth+",height="+shelfheight+",left="+(shelfX)+",top="+(shelfY);

  let openTakeoutWindow = window.open("takeout.html","_self", specification);

}

if (button2) {button2.addEventListener("click", ()=>{
  openTakeoutWindow();
})}
