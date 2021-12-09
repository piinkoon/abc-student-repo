let yes = document.getElementById("yesButton");
let no = document.getElementById("noButton");

let windowwidth = 250;
let windowheight = 150;

let x = 400+'px';
let y = 200+'px';

function openYesWindow(){

  let specification = "width="+windowwidth+",height="+windowheight+",left="+(x)+",top="+(y);

  let openYesWindow = window.open("yes-answer.html","_self", specification);

}

if(yes) {yes.addEventListener("click", ()=>{
  openYesWindow();
})}

function openNoWindow(){

  let specification = "width="+windowwidth+",height="+windowheight+",left="+(x)+",top="+(y);

  let openNoWindow = window.open("no-answer.html","_self", specification);
}

  if (no) {no.addEventListener("click", ()=>{
    openNoWindow();
  })}
