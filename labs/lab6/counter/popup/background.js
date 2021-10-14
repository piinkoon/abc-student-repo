console.log("i am a background script");

let counter = 0;

function handleMessage(request, sender, sendResponse) {
  console.log(request);
  if(request.type == "increaseCounter"){
    counter++;
    console.log("counter in background sript, counter");
  } else if(request.type == "getCount"){
    sendResponse(counter);
  }
}

chrome.runtime.onMessage.addListener(handleMessage);
