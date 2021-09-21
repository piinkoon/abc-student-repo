let on = document.getElementById("on");
let off = document.getElementById("off");

let context = new AudioContext();

let destination = context.destination;

let oscillator = context.createOscillator();
oscillator.frequency.value = 261.63;

let gain = context.createGain();

oscillator.connect(gain);
gain.connect(destination);

let oscillatorStarted = false;
on.addEventListener("click", ()=>{
  if(oscillatorStarted==false){
    oscillator.start(0);
    oscillatorStarted = true;
  }
  gain.gain.value = 1;
})
off.addEventListener("click", ()=>{
  gain.gain.value = 0;
})




let on2 = document.getElementById("D4-on");
let off2 = document.getElementById("D4-off");

let context2 = new AudioContext();

let destination2 = context2.destination;

let oscillator2 = context2.createOscillator();
oscillator2.frequency.value = 293.66;

let gain2 = context2.createGain();

oscillator2.connect(gain2);
gain2.connect(destination2);

let oscillatorStarted2 = false;
on2.addEventListener("click", ()=>{
  if(oscillatorStarted2==false){
    oscillator2.start(0);
    oscillatorStarted2 = true;
  }
  gain2.gain.value = 1;
})
off2.addEventListener("click", ()=>{
  gain2.gain.value = 0;
})




let on3 = document.getElementById("E4-on");
let off3 = document.getElementById("E4-off");

let context3 = new AudioContext();

let destination3 = context3.destination;

let oscillator3 = context3.createOscillator();
oscillator3.frequency.value = 329.63;

let gain3 = context3.createGain();

oscillator3.connect(gain3);
gain3.connect(destination3);

let oscillatorStarted3 = false;
on3.addEventListener("click", ()=>{
  if(oscillatorStarted3==false){
    oscillator3.start(0);
    oscillatorStarted3 = true;
  }
  gain3.gain.value = 1;
})
off3.addEventListener("click", ()=>{
  gain3.gain.value = 0;
})




let on4 = document.getElementById("F4-on");
let off4 = document.getElementById("F4-off");

let context4 = new AudioContext();

let destination4 = context4.destination;

let oscillator4 = context4.createOscillator();
oscillator4.frequency.value = 349.23;

let gain4 = context4.createGain();

oscillator4.connect(gain4);
gain4.connect(destination4);

let oscillatorStarted4 = false;
on4.addEventListener("click", ()=>{
  if(oscillatorStarted4==false){
    oscillator4.start(0);
    oscillatorStarted4 = true;
  }
  gain4.gain.value = 1;
})
off4.addEventListener("click", ()=>{
  gain4.gain.value = 0;
})




let on5 = document.getElementById("G4-on");
let off5 = document.getElementById("G4-off");

let context5 = new AudioContext();

let destination5 = context5.destination;

let oscillator5 = context5.createOscillator();
oscillator5.frequency.value = 392.00;

let gain5 = context5.createGain();

oscillator5.connect(gain5);
gain5.connect(destination5);

let oscillatorStarted5 = false;
on5.addEventListener("click", ()=>{
  if(oscillatorStarted5==false){
    oscillator5.start(0);
    oscillatorStarted5 = true;
  }
  gain5.gain.value = 1;
})
off5.addEventListener("click", ()=>{
  gain5.gain.value = 0;
})




let on6 = document.getElementById("A4-on");
let off6 = document.getElementById("A4-off");

let context6 = new AudioContext();

let destination6 = context6.destination;

let oscillator6 = context6.createOscillator();
oscillator6.frequency.value = 440.00;

let gain6 = context6.createGain();

oscillator6.connect(gain6);
gain6.connect(destination6);

let oscillatorStarted6 = false;
on6.addEventListener("click", ()=>{
  if(oscillatorStarted6==false){
    oscillator6.start(0);
    oscillatorStarted6 = true;
  }
  gain6.gain.value = 1;
})
off6.addEventListener("click", ()=>{
  gain6.gain.value = 0;
})




let on7 = document.getElementById("B4-on");
let off7 = document.getElementById("B4-off");

let context7 = new AudioContext();

let destination7 = context7.destination;

let oscillator7 = context7.createOscillator();
oscillator7.frequency.value = 493.88;

let gain7 = context7.createGain();

oscillator7.connect(gain7);
gain7.connect(destination7);

let oscillatorStarted7 = false;
on7.addEventListener("click", ()=>{
  if(oscillatorStarted7==false){
    oscillator7.start(0);
    oscillatorStarted7 = true;
  }
  gain7.gain.value = 1;
})
off7.addEventListener("click", ()=>{
  gain7.gain.value = 0;
})




let on8 = document.getElementById("C5-on");
let off8 = document.getElementById("C5-off");

let context8 = new AudioContext();

let destination8 = context8.destination;

let oscillator8 = context8.createOscillator();
oscillator8.frequency.value = 523.25;

let gain8 = context8.createGain();

oscillator8.connect(gain8);
gain8.connect(destination8);

let oscillatorStarted8 = false;
on8.addEventListener("click", ()=>{
  if(oscillatorStarted8==false){
    oscillator8.start(0);
    oscillatorStarted8 = true;
  }
  gain8.gain.value = 1;
})
off8.addEventListener("click", ()=>{
  gain8.gain.value = 0;
})
