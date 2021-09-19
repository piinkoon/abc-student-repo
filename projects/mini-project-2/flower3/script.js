var images = ["orange.jpeg", "pink.jpeg","red.jpeg", "white.jpeg", "yellow.jpeg", "blue.jpeg"];

var img = document.getElementById('img');

function imgDisp(num) {
  var num = Math.floor(Math.random() * 6);
  img.style.backgroundImage = 'url("' + images[num] + '")';
  img.style.backgroundRepeat = "no-repeat";
}
imgDisp();
