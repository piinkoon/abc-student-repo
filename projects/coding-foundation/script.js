function createSquares() {
  let value = document.getElementById("inputnumber").value;
  let x = document.getElementById("squares").childElementCount;

  if (value > 0) {
    if (value > x){
    for (let i = 0; i < value - x; i++){
    document.getElementById("squares").appendChild(document.createElement("div"));
  }
    }
    else if (value < x){
    for (let i = 0; i < x - value; i++){
    document.getElementById("squares").removeChild(document.getElementById("squares").firstChild);
  }
}
}
}
