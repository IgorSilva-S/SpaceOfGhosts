let soundId = 0;
let soundIdCode = [];
const ghost = document.getElementById("soundGhost");
const songName = document.getElementById("soundName");
const songCredit = document.getElementById("soundCredit");
let isReloadable = true;
//Buttons
const playButton = document.getElementById("playControl");
const resetButton = document.getElementById("resetControl");
const pauseButton = document.getElementById("pauseControl");
const prevID = document.getElementById("prevID");
const afterID = document.getElementById("afterID");
const reloadButton = document.getElementById("reloadButton");
//End Buttons

//Song vars
const homeSong = document.getElementById("homeSong"); // by Artificial Music - Alone Two Days Ago
const song = document.getElementById("soloSong"); // by Prod. Riddiman - Deep Space
const soloXtremeSong = document.getElementById("soloXtremeSong"); // by Tiểu Long
const duoRSong = document.getElementById("duoRunSong"); // by After The Fall - Pieces
const shopSong = document.getElementById("shopSong"); // by Snivys / Official by Nintendo - Boutique (Pokémon X and Y)
const settingsSong = document.getElementById("settingsSong"); // by dyu / Official by Nintendo - Nintendo 3DS Internet Settings
const creditsSong = document.getElementById("creditsSong"); // by After The Fall - Winter Lights
const soloClassicSong = document.getElementById("soloClassicSong"); // by Chillpeach - 2:00 AM
const duoClassicSong = document.getElementById("duoClassicSong"); // by Chillpeach - On The Top
const devKeysCentralSong = document.getElementById("devKeysCentralSong"); // By Nintendo - Tomodachi Life Introduction / Local Share
//End song vars

reloadButton.addEventListener("click", () => {
  if (isReloadable) {
    alert("No reload");
    window.onbeforeunload = function () {
      return "isReloadable is set to false";
    };
    isReloadable = false;
  } else {
    alert("Reload");
    window.onbeforeunload = undefined;
    isReloadable = true;
  }
});

prevID.addEventListener("click", () => {
  if (soundId == 0) {
    soundId = 9;
  } else {
    soundId--;
  }
  homeSong.pause();
  song.pause();
  soloXtremeSong.pause();
  duoRSong.pause();
  shopSong.pause();
  settingsSong.pause();
  creditsSong.pause();
  soloClassicSong.pause();
  duoClassicSong.pause();
  devKeysCentralSong.pause();

  homeSong.currentTime = 0;
  song.currentTime = 0;
  soloXtremeSong.currentTime = 0;
  duoRSong.currentTime = 0;
  shopSong.currentTime = 0;
  settingsSong.currentTime = 0;
  creditsSong.currentTime = 0;
  soloClassicSong.currentTime = 0;
  duoClassicSong.currentTime = 0;
  devKeysCentralSong.currentTime = 0;
  ghost.classList.remove("playing");
  ghost.classList.add("stopped");
  checkSong();
});

afterID.addEventListener("click", () => {
  if (soundId == 9) {
    soundId = 0;
  } else {
    soundId++;
  }
  homeSong.pause();
  song.pause();
  soloXtremeSong.pause();
  duoRSong.pause();
  shopSong.pause();
  settingsSong.pause();
  creditsSong.pause();
  soloClassicSong.pause();
  duoClassicSong.pause();
  devKeysCentralSong.pause();

  homeSong.currentTime = 0;
  song.currentTime = 0;
  soloXtremeSong.currentTime = 0;
  duoRSong.currentTime = 0;
  shopSong.currentTime = 0;
  settingsSong.currentTime = 0;
  creditsSong.currentTime = 0;
  soloClassicSong.currentTime = 0;
  duoClassicSong.currentTime = 0;
  devKeysCentralSong.currentTime = 0;
  ghost.classList.remove("playing");
  ghost.classList.add("stopped");
  checkSong();
});

function checkSong() {
  if (soundId == 0) {
    songName.innerText = "Alone Two Days Ago - Home";
    songCredit.innerText = "Artificial Music";
  } else if (soundId == 1) {
    songName.innerText = "Deep Space - Solo Normal";
    songCredit.innerText = "Prod. Riddiman";
  } else if (soundId == 2) {
    songName.innerText = "Pieces - Duo Normal";
    songCredit.innerText = "After The Fall";
  } else if (soundId == 3) {
    songName.innerText = "eShop - 3DS and WiiU (LoFi)";
    songCredit.innerText = "dyu/Nintendo";
  } else if (soundId == 4) {
    songName.innerText = "Nintendo 3DS Config. Internet (LoFi) - Configurações";
    songCredit.innerText = "dyu/Nintendo";
  } else if (soundId == 5) {
    songName.innerText = "Winter Lights - Créditos";
    songCredit.innerText = "After The Fall";
  } else if (soundId == 6) {
    songName.innerText = "2:00 AM - Solo Clássico";
    songCredit.innerText = "Chillpeach";
  } else if (soundId == 7) {
    songName.innerText = "On The Top - Duo Clássico";
    songCredit.innerText = "Chillpeach";
  } else if (soundId == 8) {
    let isDev = localStorage.getItem("devMode");
    if (isDev == "1") {
      songName.innerText = "Introduction / Send and Receive - DevKeys Central";
    } else {
      songName.innerText = "Introduction / Send and Receive";
    }
    songCredit.innerText = "Nintendo (Tomodachi Life OST)";
  } else if (soundId == 9) {
    songName.innerText = "Winter Whispers - Solo Extremo";
    songCredit.innerText = "Tiểu Long";
  }
}

playButton.addEventListener("click", () => {
  if (soundId == 0) {
    homeSong.play();
    soundIdCode.push(0);
  } else if (soundId == 1) {
    song.play();
    soundIdCode.push(1);
  } else if (soundId == 2) {
    duoRSong.play();
    soundIdCode.push(2);
  } else if (soundId == 3) {
    shopSong.play();
    soundIdCode.push(3);
  } else if (soundId == 4) {
    settingsSong.play();
    soundIdCode.push(4);
  } else if (soundId == 5) {
    creditsSong.play();
    soundIdCode.push(5);
  } else if (soundId == 6) {
    soloClassicSong.play();
    soundIdCode.push(6);
  } else if (soundId == 7) {
    duoClassicSong.play();
    soundIdCode.push(7);
  } else if (soundId == 8) {
    devKeysCentralSong.play();
    soundIdCode.push(8);
  } else if (soundId == 9) {
    soloXtremeSong.play();
    soundIdCode.push(9);
  }

  ghost.classList.remove("stopped");
  ghost.classList.add("playing");
  checkSecretCode();
});

resetButton.addEventListener("click", () => {
  homeSong.currentTime = 0;
  song.currentTime = 0;
  soloXtremeSong.currentTime = 0;
  duoRSong.currentTime = 0;
  shopSong.currentTime = 0;
  settingsSong.currentTime = 0;
  creditsSong.currentTime = 0;
  soloClassicSong.currentTime = 0;
  duoClassicSong.currentTime = 0;
  devKeysCentralSong.currentTime = 0;
  soundIdCode = [];

  if (soundId == 0) {
    homeSong.play();
    soundIdCode.push(0);
  } else if (soundId == 1) {
    song.play();
    soundIdCode.push(1);
  } else if (soundId == 2) {
    duoRSong.play();
    soundIdCode.push(2);
  } else if (soundId == 3) {
    shopSong.play();
    soundIdCode.push(3);
  } else if (soundId == 4) {
    settingsSong.play();
    soundIdCode.push(4);
  } else if (soundId == 5) {
    creditsSong.play();
    soundIdCode.push(5);
  } else if (soundId == 6) {
    soloClassicSong.play();
    soundIdCode.push(6);
  } else if (soundId == 7) {
    duoClassicSong.play();
    soundIdCode.push(7);
  } else if (soundId == 8) {
    devKeysCentralSong.play();
    soundIdCode.push(8);
  } else if (soundId == 9) {
    soloXtremeSong.play();
    soundIdCode.push(9);
  }

  ghost.classList.remove("stopped");
  ghost.classList.add("playing");
  checkSecretCode();
});

pauseButton.addEventListener("click", () => {
  if (soundId == 0) {
    homeSong.pause();
  } else if (soundId == 1) {
    song.pause();
  } else if (soundId == 2) {
    duoRSong.pause();
  } else if (soundId == 3) {
    shopSong.pause();
  } else if (soundId == 4) {
    settingsSong.pause();
  } else if (soundId == 5) {
    creditsSong.pause();
  } else if (soundId == 6) {
    soloClassicSong.pause();
  } else if (soundId == 7) {
    duoClassicSong.pause();
  } else if (soundId == 8) {
    devKeysCentralSong.pause();
  }  else if (soundId == 9) {
    soloXtremeSong.pause();
  }
  ghost.classList.remove("playing");
  ghost.classList.add("stopped");
});

function checkSecretCode() {
  if (
    soundIdCode[0] == 0 &&
    soundIdCode[1] == 5 &&
    soundIdCode[2] == 0 &&
    soundIdCode[3] == 1 &&
    soundIdCode[4] == 2 &&
    soundIdCode[5] == 4
  ) {
    alert("DevMode");
    localStorage.setItem("devMode", "1");
    localStorage.setItem("collisionView", "false");
    localStorage.setItem("gameDevSys", true);
    localStorage.setItem("noDevTitle", false);
    soundIdCode = [];
  } else if (
    soundIdCode[0] == 0 &&
    soundIdCode[1] == 1 &&
    soundIdCode[2] == 1 &&
    soundIdCode[3] == 2 &&
    soundIdCode[4] == 2 &&
    soundIdCode[5] == 3
  ) {
    alert("classicMode");
    localStorage.setItem("classicPurchased", true);
    soundIdCode = [];
  } else if (
    soundIdCode[0] == 4 &&
    soundIdCode[1] == 1 &&
    soundIdCode[2] == 2 &&
    soundIdCode[3] == 7
  ) {
    alert("allSkinsBuy");
    soundIdCode = [];
    localStorage.setItem("purchasedA", "true");
    localStorage.setItem("purchased1", "true");
    localStorage.setItem("purchased2", "true");
    localStorage.setItem("purchased3", "true");
    localStorage.setItem("purchased4", "true");
    localStorage.setItem("purchased5", "true");
    localStorage.setItem("purchased6", "true");
  } /*else if (soundIdCode[0] == 0 && soundIdCode[1] == 2 && soundIdCode[2] == 0 && soundIdCode[3] == 2 && soundIdCode[4] == 2 && soundIdCode[5] == 3) {
        alert('noLifeMode')
        localStorage.setItem('noLife', 1)
    }*/
}

// Volume script
let muteButton = document.getElementById("volAlertCont");
let muteButtonAlert = document.getElementById("volAlert");
let volRange = document.getElementById("quickVol");
let volRangeAlert = document.getElementById("quickVolNum");
let isMuted = false;

muteButton.addEventListener("click", () => {
  if (isMuted) {
    isMuted = false;
    homeSong.volume = 1;
    song.volume = 1;
    soloXtremeSong.volume = 1;
    duoRSong.volume = 1;
    shopSong.volume = 1;
    settingsSong.volume = 1;
    creditsSong.volume = 1;
    soloClassicSong.volume = 1;
    duoClassicSong.volume = 1;
    devKeysCentralSong.volume = 1;
    muteButtonAlert.innerText = "volume_up";
    volRange.value = 100;
    volRangeAlert.innerText = "100%";
  } else {
    isMuted = true;
    homeSong.volume = 0;
    song.volume = 0;
    soloXtremeSong.volume = 0;
    duoRSong.volume = 0;
    shopSong.volume = 0;
    settingsSong.volume = 0;
    creditsSong.volume = 0;
    soloClassicSong.volume = 0;
    duoClassicSong.volume = 0;
    devKeysCentralSong.volume = 0;
    muteButtonAlert.innerText = "volume_off";
    volRange.value = 0;
    volRangeAlert.innerText = "0%";
  }
});

volRange.addEventListener("change", () => {
  let actualVol = volRange.value;
  let actualVolSong = actualVol / 100;
  volRangeAlert.innerText = `${actualVol}%`;
  homeSong.volume = actualVolSong;
  song.volume = actualVolSong;
  soloXtremeSong.volume = actualVolSong;
  duoRSong.volume = actualVolSong;
  shopSong.volume = actualVolSong;
  settingsSong.volume = actualVolSong;
  creditsSong.volume = actualVolSong;
  soloClassicSong.volume = actualVolSong;
  duoClassicSong.volume = actualVolSong;
  devKeysCentralSong.volume = actualVolSong;
  if (actualVol == 0) {
    isMuted = true;
    muteButtonAlert.innerText = "volume_off";
  } else {
    isMuted = false;
    muteButtonAlert.innerText = "volume_up";
  }
});
