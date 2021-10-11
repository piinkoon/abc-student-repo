console.log('What is going on here?');
chrome.runtime.onMessage.addListener(annoying);

function annoying() {
let loading = ["loading1.jpeg", "loading2.jpeg"];

let imgs = document.getElementsByTagName('img');
for(imgElt of imgs) {
  let r = Math.floor(Math.random() * loading.length);
  let file = 'images/' + loading[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
}
}

function gotMessage(request, sender, sendResponse){
  console.log(request);
}
chrome.runtime.onMessage.addListener(gotMessage);
