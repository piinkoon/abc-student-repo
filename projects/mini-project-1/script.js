function rangeValue(value) {
  const root= document.documentElement;
  root.style.setProperty('--opacitybox1',(100 - value) / 100);
  root.style.setProperty('--opacitybox2',value / 100);

}

var c,ctx;
onload=setInterval(randomCircles,700);


function randomCircles(){
  c = document.getElementById("canvas");
  ctx = c.getContext("2d");
  var rr = Math.ceil((30* Math.random()));
  var rx = Math.ceil(290* Math.random());
  var ry = Math.ceil(290* Math.random());
  drawCircles(rx,ry,rr);
}

function drawCircles(rx,ry,rr){
  var myColors  =["black","pink"];
  var colorPicker = Math.ceil(4* Math.random() -1);
  ctx.strokeStyle = myColors[colorPicker];
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(rx,ry,rr,0,2*Math.PI);
  ctx.stroke();
  ctx.closePath();
}
