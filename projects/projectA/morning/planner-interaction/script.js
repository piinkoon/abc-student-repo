let submit = document.getElementById("submit");
let yes = document.getElementById("yesButton");
let no = document.getElementById("noButton");

let windowwidth = 250;
let windowheight = 150;

let x = 400+'px';
let y = 200+'px';

function openYesWindow(){

  let specification = "width="+windowwidth+",height="+windowheight+",left="+(x)+",top="+(y);

  let openYesWindow = window.open("yes-answer.html","_self", specification);

    setTimeout(()=> {
    openYesWindow.close();
  }, 5000 );

}

if(yes) {yes.addEventListener("click", ()=>{
  openYesWindow();
})}

function openNoWindow(){

  let specification = "width="+windowwidth+",height="+windowheight+",left="+(x)+",top="+(y);

  let openNoWindow = window.open("no-answer.html","_self", specification);

    setTimeout(()=> {
    openNoWindow.close();
  }, 12000 );
}

  if (no) {no.addEventListener("click", ()=>{
    openNoWindow();
  })}

function openNewWindow(){

  let newSpecification = "width="+windowwidth+",height="+windowheight+",left="+(x)+",top="+(y);

  let openNewWindow = window.open("planner2.html","_self", newSpecification);

//   setTimeout(()=> {
//   openNewWindow.close();
// }, 13000 );

}

if(submit) {submit.addEventListener("click", ()=>{
  openNewWindow();
})}
