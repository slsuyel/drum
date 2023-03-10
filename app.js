 let audio1 = new Audio('ready-sound/beat-of-time-128705.mp3');
let audio2 = new Audio('ready-sound/rock-funk-fusion-drum-beat-130bpm-100051.mp3');
let audio3 = new Audio('ready-sound/synthpop-drum-solo-112bpm-by-prettysleepy-art-15456.mp3');

const songE = 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav';
const songR = 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav';
const songG = 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav';
const songI = 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav';
const songK = 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav';
const songH = 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav';
const songJ = 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav';
const songF = 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav';
const songB = 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav';

let player = document.getElementById("music");

 function demo1() {
     player.classList.remove("d-none");
    audio2.pause();
    audio3.pause();
      audio1.play();
    setTimeout(()=>{ player.classList.add("d-none");}, 10000);
} 

function demo2() {
    player.classList.remove("d-none");
    audio1.pause();
    audio3.pause();
      audio2.play();
      setTimeout(()=>{ player.classList.add("d-none");}, 7000);
}

function demo3() {
    audio1.pause();
    audio2.pause();
    audio3.play();
    player.classList.remove("d-none");
    setTimeout(()=>{ player.classList.add("d-none");}, 104000);
  }  



  function playAudio(key, audioURL) {
     const audio = new Audio(audioURL);
    audio.play();
  }
  const keyAudioMap = {
    'e': songE,
    'r': songR,
    'g': songG,
    'i': songI,
    'k': songK,
    'h': songH,
    'j': songJ,
    'f': songF,
    'b': songB,
};
  
  for (const [key, audioURL] of Object.entries(keyAudioMap)) {
 
    document.addEventListener("keydown", function(event) {

      if (event.key === key) {
        playAudio(key, audioURL);
      }
    });
  }

  // click btn
  function btnJ() {
    playAudio('j', songJ);
  }
  function btnE() {
    playAudio('e', songE);
  }
  function btnR() {
    playAudio('r', songR);
  }
  function btnG() {
    playAudio('g', songG);
  }
  function btnI() {
    playAudio('i', songI);
  }
  function btnK() {
    playAudio('k', songK);
  }
  function btnH() {
    playAudio('h', songH);
  }
  function btnF() {
    playAudio('f', songF);
  }
  function btnB() {
    playAudio('b', songB);
  }
  