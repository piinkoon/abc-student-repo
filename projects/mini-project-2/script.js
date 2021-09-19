let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

let popupwidth = 150;
let popupheight = 150;
let sw = screen.width/4.5;
let sh = screen.height/2.5;

function openWindow(){

  let x = Math.random()*(sw + popupwidth);
  let y = Math.random()*(sh - popupheight)

  let specification = "width="+popupwidth+",height="+popupheight+",left="+(x+370)+",top="+(y+110);

  let openWindow = window.open("flower1/index.html","", specification);

  let runTime = 5000 + Math.random()*3000;

    setTimeout(()=> {
    openWindow.close();
  }, runTime );

}

function openManyWindows() {
  for (let i = 0; i<15; i++) {
    openWindow();
  }
  }

button1.addEventListener("click", ()=>{
  openManyWindows();
})

function openWindow2(){

  let x = Math.random()*(sw + popupwidth);
  let y = Math.random()*(sh - popupheight)

  let specification = "width="+popupwidth+",height="+popupheight+",left="+(x+370)+",top="+(y+110);

  let openWindow = window.open("flower2/index.html","", specification);

  let runTime = 5000 + Math.random()*3000;

    setTimeout(()=> {
    openWindow.close();
  }, runTime );

}

function openManyWindows2() {
  for (let i = 0; i<15; i++) {
    openWindow2();
  }
  }

button2.addEventListener("click", ()=>{
  openManyWindows2();
})

function openWindow3(){

  let x = Math.random()*(sw + popupwidth);
  let y = Math.random()*(sh - popupheight)

  let specification = "width="+popupwidth+",height="+popupheight+",left="+(x+370)+",top="+(y+110);

  let openWindow3 = window.open("flower3/index.html","", specification);

  let runTime = 5000 + Math.random()*3000;

    setTimeout(()=> {
    openWindow3.close();
  }, runTime );

}

function openManyWindows3() {
  for (let i = 0; i<15; i++) {
    openWindow3();
  }
  }

button3.addEventListener("click", ()=>{
  openManyWindows3();
})
