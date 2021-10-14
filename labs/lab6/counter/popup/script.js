console.log("popped up just now");

let button = document.querySelector("#button");
let count = document.querySelector("#count");
let counter = 0;

button.addEventListener("click", ()=>{
  counter++
  // tell background.js that we increased the counter
  // learned here: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
let message2 = {type: "getCount"}
chrome.runtime.sendMessage(message2, (response) =>  {
  console.log("background script sent me this", response)
});

  let message = {type: "increaseCounter"}
  chrome.runtime.sendMessage (message);
  count.innerHTML = counter;
});
console.log(button);
