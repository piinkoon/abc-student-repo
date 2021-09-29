var images = ["gloves.JPG", "mask.JPG","sanitizer.JPG"];

var img = document.getElementById('img');

function imgDisp(num) {
  var num = Math.floor(Math.random() * 3);
  img.style.backgroundImage = 'url("' + images[num] + '")';
  img.style.backgroundRepeat = "no-repeat";
}
imgDisp();
