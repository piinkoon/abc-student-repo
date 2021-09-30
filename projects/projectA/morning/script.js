let occurEvery = 5;
setInterval(()=>{
    let dt = new Date();
    let minutes = dt.getMinutes() + (60*dt.getHours())
    if(minutes%occurEvery){
        window.open("../brekkie/index.html","_self");
    }
}, 120000)



let windowwidth = 250;
let windowheight = 150;
let sw = screen.width;
let sh = screen.height;

let cat = document.getElementById("cat");
cat.style.position = "relative";
cat.style.left = 550+'px';
cat.style.top = 100+'px';

function openCatWindow(){

  let catx = 300+'px';
  let caty = 400+'px';

  let specification = "width="+windowwidth+",height="+windowheight+",left="+(catx)+",top="+(caty);

  let openCatWindow = window.open("cat-interaction/cat1.html","", specification);

  let runTime = 5000;

    setTimeout(()=> {
    openCatWindow.close();
  }, runTime );

}

cat.addEventListener("click", ()=>{
  openCatWindow();
})

let planner = document.getElementById("planner");
planner.style.position = "relative";
planner.style.left = 450+'px';
planner.style.top = -150+'px';

function openPlannerWindow(){

  let plannerx = 400+'px';
  let plannery = 200+'px';

  let specification = "width="+windowwidth+",height="+windowheight+",left="+(plannerx)+",top="+(plannery);

  let openPlannerWindow = window.open("planner-interaction/planner1.html","", specification);

  // let runTime = 20000;
  //
  //   setTimeout(()=> {
  //   openPlannerWindow.close();
  // }, runTime );

}

planner.addEventListener("click", ()=>{
  openPlannerWindow();
})
