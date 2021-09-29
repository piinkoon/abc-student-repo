let stove = document.getElementById("stove");
stove.style.position = "relative";
stove.style.left = 650+'px';
stove.style.top = -20+'px';
stove.style.width = 205+'px';
stove.style.height = 255+'px';

let windowwidth = 500;
let windowheight = 450;
let shelfwidth = 500;
let shelfheight = 300;
let sw = screen.width;
let sh = screen.height;

function openOvenWindow(){

  let ovenX =394+'px';
  let ovenY = 174+'px';

  let specification = "width="+windowwidth+",height="+windowheight+",left="+(ovenX)+",top="+(ovenY);

  let openOvenWindow = window.open("stove-interaction/baking.html","", specification);

}

if (stove) {stove.addEventListener("click", ()=>{
  openOvenWindow();
})}

let cabinet = document.getElementById("cabinet");
cabinet.style.position = "relative";
cabinet.style.left = 240+'px';
cabinet.style.top = -320+'px';
cabinet.style.width = 120+'px';
cabinet.style.height = 175+'px';

function openShelfWindow(){

  let shelfX =394+'px';
  let shelfY = 174+'px';

  let specification = "width="+shelfwidth+",height="+shelfheight+",left="+(shelfX)+",top="+(shelfY);

  let openOvenWindow = window.open("cabinet-interaction/shelf.html","", specification);

}

if (cabinet) {cabinet.addEventListener("click", ()=>{
  openShelfWindow();
})}
