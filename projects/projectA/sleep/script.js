let moon = document.getElementById("moon");
moon.style.position = "relative";
moon.style.left = 190+'px';
moon.style.top = -430+'px';
moon.style.width = 110+'px';
moon.style.height = 105+'px';

let journal = document.getElementById("journal");
journal.style.position = "relative";
journal.style.left = 670+'px';
journal.style.top = -10+'px';
journal.style.width = 90+'px';
journal.style.height = 115+'px';

let width = 350;
let height = 350;

let sw = screen.width;
let sh = screen.height;

function openJournalWindow(){

  let x = 470+'px';
  let y = 115+'px';

  let specification = "width="+width+",height="+height+",left="+(x)+",top="+(y);

  let openJournalWindow = window.open("journal-interaction/journal1.html","", specification);

}

journal.addEventListener("click", ()=>{
  openJournalWindow();
})
