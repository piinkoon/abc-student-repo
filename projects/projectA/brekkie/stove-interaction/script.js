let bread = document.getElementById("sourdough");
bread.style.position = "relative";
bread.style.left = 100+'px';
bread.style.top = 200+'px';
bread.style.width = 300+'px';
bread.style.height = 285+'px';

let windowwidth = 500;
let windowheight = 300;
let sw = screen.width;
let sh = screen.height;

function openBreadWindow(){

  let breadX =390+'px';
  let breadY = 250+'px';

  let specification = "width="+windowwidth+",height="+windowheight+",left="+(breadX)+",top="+(breadY);

  let openBreadWindow = window.open("https://www.cooksillustrated.com/articles/2340-quarantinystarter-recipe-almost-no-knead-quarantine-sourdough-boule","_self", specification);

}

bread.addEventListener("click", ()=>{
  openBreadWindow();
})
