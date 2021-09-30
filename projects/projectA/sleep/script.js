let occurEvery = 5;
setInterval(()=>{
    let dt = new Date();
    let minutes = dt.getMinutes() + (60*dt.getHours())
    if(minutes%occurEvery){
        window.open("../title.html","_self");
    }
}, 300000)

let moon = document.getElementById("moon");
moon.style.position = "relative";
moon.style.left = 190+'px';
moon.style.top = -430+'px';
moon.style.width = 110+'px';
moon.style.height = 105+'px';

let back = document.getElementById("back");
back.style.position = "relative";
back.style.left = -40+'px';
back.style.top = -207+'px';
back.style.width = 50+'px';
back.style.height = 150+'px';

let journal = document.getElementById("journal");
journal.style.position = "relative";
journal.style.left = 670+'px';
journal.style.top = -10+'px';
journal.style.width = 90+'px';
journal.style.height = 115+'px';

let width = 350;
let height = 145;

let sw = screen.width;
let sh = screen.height;

function openJournalWindow(){

  let x = 530+'px';
  let y = 365+'px';

  let specification = "width="+width+",height="+height+",left="+(x)+",top="+(y);

  let openJournalWindow = window.open("journal-interaction/journal1.html","", specification);

}

journal.addEventListener("click", ()=>{
  openJournalWindow();
})
