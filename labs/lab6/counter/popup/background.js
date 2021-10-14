console.log("i am a background script");

let counter = 0;

function handleMessage(request, sender, sendResponse) {
  console.log(request);
  if(request.type == "increaseCounter"){
    counter++;
  }
  console.log("counter in background cript, counter");
}

chrome.runtime.onMessage.addListener(handleMessage);
