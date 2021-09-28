console.log("hello");

setTimeout(()=>{
  document.body.innerHTML = document.body.innerHTML.replace("Pelosi", "Oona");
}, 3000)

function gotMessage(request, sender, sendResponse){
  console.log(request);
}
chrome.runtime.onMessage.addListener(gotMessage);
