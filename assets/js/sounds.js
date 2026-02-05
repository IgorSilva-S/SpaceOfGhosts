// Extra
const noWayMusic = new Audio('assets/sounds/music/noWay.mp3')
noWayMusic.loop = true

// SFX

// GUI
const clickSound = new Audio('assets/sounds/sfx/select.wav')
const backSound = new Audio('assets/sounds/sfx/backButton.wav')
const cardInsert = new Audio('assets/sounds/sfx/cardInsert.mp3')
const doorMove = new Audio('assets/sounds/sfx/doorMovement.wav')

// Game
const hurtPlayerSFX = new Audio('assets/sounds/sfx/hurtPlayer.wav')
const stardustPickerSFX = new Audio('assets/sounds/sfx/stardustPicker.wav');
const startShieldSFX = new Audio('assets/sounds/sfx/newShield.wav')
const breakShieldSFX = new Audio('assets/sounds/sfx/breakShield.wav')
const breakMeteoriteSFX = new Audio('assets/sounds/sfx/breakMeteorite.wav')

Array.from(document.getElementsByTagName('button')).forEach((b) => {
    b.addEventListener('click', () => {
        if (b.getAttribute('backButton') == 'yep') {
            backSound.pause()
            backSound.currentTime = 0
            backSound.play()
        } else {
            if (b.getAttribute("playSFX") != 'no') {
                clickSound.pause()
                clickSound.currentTime = 0
                clickSound.play()
            }
        }
    })
})

Array.from(document.getElementsByClassName('door')).forEach((d) => {
    d.addEventListener('click', () => {
        doorMove.pause()
        doorMove.currentTime = 0
        doorMove.play()
    })
})

// Musics
const GIDManagerMusic = new Audio('assets/sounds/music/ghostIdManager.mp3')
const spaceshipMusic = new Audio('assets/sounds/music/spaceship.ogg')

// Game
const spaceAreaMusic = new Audio('assets/sounds/music/spaceArea.mp3')

const VVPMusic = new Audio('assets/sounds/music/VVP.mp3')
const DDPMusic = new Audio('assets/sounds/music/DDP.mp3')
const MMPMusic = new Audio('assets/sounds/music/MMP.mp3')
const BBPMusic = new Audio('assets/sounds/music/BBP.mp3')
const RRPMusic = new Audio('assets/sounds/music/RRP.mp3')

// LOOPS
GIDManagerMusic.loop = true
spaceshipMusic.loop = true
spaceAreaMusic.loop = true
VVPMusic.loop = true
DDPMusic.loop = true
MMPMusic.loop = true
BBPMusic.loop = true
RRPMusic.loop = true

function stopAllMusics() {
    setTimeout(() => {
        GIDManagerMusic.pause()
        spaceshipMusic.pause()
        spaceAreaMusic.pause()
        VVPMusic.pause()
        DDPMusic.pause()
        MMPMusic.pause()
        BBPMusic.pause()
        RRPMusic.pause()
        GIDManagerMusic.currentTime = 0
        spaceshipMusic.currentTime = 0
        spaceAreaMusic.currentTime = 0
        VVPMusic.currentTime = 0
        DDPMusic.currentTime = 0
        MMPMusic.currentTime = 0
        BBPMusic.currentTime = 0
        RRPMusic.currentTime = 0
    }, 300);
}

function pausePlanetMusic() {
    VVPMusic.pause()
    DDPMusic.pause()
    MMPMusic.pause()
    BBPMusic.pause()
    RRPMusic.pause()
}

function playPlanetMusic() {
    if (actualPlanet == 0) {
        VVPMusic.play()
    } else if (actualPlanet == 1) {
        DDPMusic.play()
    } else if (actualPlanet == 2) {
        MMPMusic.play()
    } else if (actualPlanet == 3) {
        BBPMusic.play()
    } else if (actualPlanet == 4) {
        RRPMusic.play()
    } else {
        spaceshipMusic.play()
    }
}

// Sound System
let muted = false
setInterval(() => {
    if (muted) {
        clickSound.volume = 0
        backSound.volume = 0
        doorMove.volume = 0
        cardInsert.volume = 0

        hurtPlayerSFX.volume = 0
        stardustPickerSFX.volume = 0
        startShieldSFX.volume = 0
        breakShieldSFX.volume = 0
        breakMeteoriteSFX.volume = 0

        noWayMusic.volume = 0
        GIDManagerMusic.volume = 0
        spaceshipMusic.volume = 0
        spaceAreaMusic.volume = 0
        VVPMusic.volume = 0
        DDPMusic.volume = 0
        MMPMusic.volume = 0
        BBPMusic.volume = 0
        RRPMusic.volume = 0
    } else {
        clickSound.volume = 1
        backSound.volume = 1
        doorMove.volume = 1
        cardInsert.volume = 1

        hurtPlayerSFX.volume = 1
        stardustPickerSFX.volume = 1
        startShieldSFX.volume = 1
        breakShieldSFX.volume = 1
        breakMeteoriteSFX.volume = 1

        noWayMusic.volume = 1
        GIDManagerMusic.volume = 1
        spaceshipMusic.volume = 1
        spaceAreaMusic.volume = 1
        VVPMusic.volume = 1
        DDPMusic.volume = 1
        MMPMusic.volume = 1
        BBPMusic.volume = 1
        RRPMusic.volume = 1
    }
}, 10);