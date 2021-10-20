var images = ["images/BTS-1.jpeg", "images/BTS-2.jpeg","images/BTS-3.jpeg", "images/BTS-4.jpeg", "images/BTS-5.png", "images/BTS-6.jpeg"];

var img = document.getElementById('img');

function imgDisp(num) {
  var num = Math.floor(Math.random() * 6);
  img.style.backgroundImage = 'url("' + images[num] + '")';
  img.style.backgroundRepeat = "no-repeat";
}
imgDisp();
