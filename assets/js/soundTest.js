let soundId = 0
let soundIdCode = []
const ghost = document.getElementById('soundGhost')
const songName = document.getElementById("soundName")
const songCredit = document.getElementById("soundCredit")
//Buttons
const playButton = document.getElementById("playControl")
const resetButton = document.getElementById("resetControl")
const pauseButton = document.getElementById("pauseControl")
const prevID = document.getElementById("prevID")
const afterID = document.getElementById("afterID")
//End Buttons

//Song vars
const homeSong = document.getElementById('homeSong') // by Artificial Music - Alone Two Days Ago
const song = document.getElementById('soloSong') // by Prod. Riddiman - Deep Space
const duoRSong = document.getElementById('duoRunSong') // by After The Fall - Pieces
const shopSong = document.getElementById('shopSong') // by dyu / Official by Nintendo - Nintendo eShop
const settingsSong = document.getElementById('settingsSong') // by dyu / Official by Nintendo - Nintendo 3DS Internet Settings
const creditsSong = document.getElementById('creditsSong') // by After The Fall - Winter Lights
const soloClassicSong = document.getElementById('soloClassicSong') // by Chillpeach - 2:00 AM
const duoClassicSong = document.getElementById('duoClassicSong') // by Chillpeach - On The Top
//End song vars

prevID.addEventListener('click', () => {
    if (soundId == 0) {
        soundId = 7
    } else {
        soundId--
    }
    checkSong()
})

afterID.addEventListener('click', () => {
    if (soundId == 7) {
        soundId = 0
    } else {
        soundId++
    }
    checkSong()
})

function checkSong() {
    if (soundId == 0) {
        songName.innerText = 'Alone Two Days Ago - Home'
        songCredit = 'Artificial Music'
    } else if (soundId == 1) {
        songName.innerText = 'Deep Space - Solo Normal'
        songCredit = 'Prod. Riddiman'
    }
    // NOT FINISHED
}



