let back = document.getElementById("back");
back.style.position = "relative";
back.style.left = -655+'px';
back.style.top = -207+'px';
back.style.width = 50+'px';
back.style.height = 150+'px';

let forward = document.getElementById("forward");
forward.style.position = "relative";
forward.style.left = 170+'px';
forward.style.top = -207+'px';
forward.style.width = 50+'px';
forward.style.height = 150+'px';


let steam = document.getElementById("steam");
steam.style.position = "relative";
steam.style.left = 93+'px';
steam.style.top = -145+'px';
steam.style.width = 90+'px';
steam.style.height = 100+'px';

let calendar = document.getElementById("calendar");
calendar.style.position = "relative";
calendar.style.left = 565+'px';
calendar.style.top = -464+'px';
calendar.style.width = 177+'px';
calendar.style.height = 27+'px';

let windowwidth = 500;
let windowheight = 500;

let zoomwidth = 500;
let zoomheight = 343;

let workwidth = 500;
let workheight = 253;

let sw = screen.width;
let sh = screen.height;

function openNYUWindow(){

  let nyuX =390+'px';
  let nyuY = 143+'px';

  let specification = "width="+windowwidth+",height="+windowheight+",left="+(nyuX)+",top="+(nyuY);

  let openNYUWindow = window.open("https://shanghai.nyu.edu/academics/calendar","", specification);

}

calendar.addEventListener("click", ()=>{
  openNYUWindow();
})

let ipad = document.getElementById("ipad");
ipad.style.position = "relative";
ipad.style.left = 370+'px';
ipad.style.top = -147+'px';
ipad.style.width = 160+'px';
ipad.style.height = 110+'px';

function openZoomWindow(){

  let zoomX =390+'px';
  let zoomY = 118+'px';

  let zoomSpecification = "width="+zoomwidth+",height="+zoomheight+",left="+(zoomX)+",top="+(zoomY);

  let openZoomWindow = window.open("zoom/index.html","", zoomSpecification);

  setTimeout(()=> {
  openZoomWindow.close();
}, 5000 );
}

ipad.addEventListener("click", ()=>{
  openZoomWindow();
})

let notes = document.getElementById("notes");
notes.style.position = "relative";
notes.style.left = 90+'px';
notes.style.top = 7+'px';
notes.style.width = 380+'px';
notes.style.height = 150+'px';

function openWorkWindow(){

  let workX = 390+'px';
  let workY = 118+'px';

  let workSpecification = "width="+workwidth+",height="+workheight+",left="+(workX)+",top="+(workY);

  let openWorkWindow = window.open("notes/index.html","", workSpecification);

}

notes.addEventListener("click", ()=>{
  openWorkWindow();
})
