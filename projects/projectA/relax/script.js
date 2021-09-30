let occurEvery = 5;
setInterval(()=>{
    let dt = new Date();
    let minutes = dt.getMinutes() + (60*dt.getHours())
    if(minutes%occurEvery){
        window.open("../sleep/index.html","_self");
    }
}, 300000)

let back = document.getElementById("back");
back.style.position = "relative";
back.style.left = -327+'px';
back.style.top = -172+'px';
back.style.width = 50+'px';
back.style.height = 150+'px';

let cat = document.getElementById("cat");
cat.style.position = "relative";
cat.style.left = 500+'px';
cat.style.top = -30+'px';
cat.style.width = 125+'px';
cat.style.height = 215+'px';

let catwindowwidth = 350;
let catwindowheight = 100;

let windowwidth = 250;
let windowheight = 150;

let tellywidth = 550;
let tellyheight = 250;

let sw = screen.width;
let sh = screen.height;

function openCatWindow(){

  let catx = 395+'px';
  let caty = 200+'px';

  let specification = "width="+catwindowwidth+",height="+catwindowheight+",left="+(catx)+",top="+(caty);

  let openCatWindow = window.open("cat-interaction/cat1.html","", specification);

  let runTime = 5000;

    setTimeout(()=> {
    openCatWindow.close();
  }, runTime );

}

cat.addEventListener("click", ()=>{
  openCatWindow();
})

let skincare = document.getElementById("skincare");
skincare.style.position = "relative";
skincare.style.left = 220+'px';
skincare.style.top = -90+'px';
skincare.style.width = 105+'px';
skincare.style.height = 125+'px';

function openSkincareWindow(){

  let skincarex = 670+'px';
  let skincarey = 400+'px';

  let skincareSpecification = "width="+windowwidth+",height="+windowheight+",left="+(skincarex)+",top="+(skincarey);

  let openSkincareWindow = window.open("skincare-interaction/skincare1.html","", skincareSpecification);

}

skincare.addEventListener("click", ()=>{
  openSkincareWindow();
})

let telly = document.getElementById("telly");
telly.style.position = "relative";
telly.style.left = 255+'px';
telly.style.top = -313+'px';
telly.style.width = 253+'px';
telly.style.height = 185+'px';

function openTellyWindow(){

  let tellyX = 365+'px';
  let tellyY = 113+'px';

  let tellySpecification = "width="+tellywidth+",height="+tellyheight+",left="+(tellyX)+",top="+(tellyY);

  let openTellyWindow = window.open("telly-interaction/telly1.html","", tellySpecification);

}

telly.addEventListener("click", ()=>{
  openTellyWindow();
})
