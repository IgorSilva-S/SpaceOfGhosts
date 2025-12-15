// SFX

// GUI
const clickSound = new Audio('assets/sounds/sfx/select.wav')
const doorMove = new Audio('assets/sounds/sfx/doorMovement.wav')

// Game
const hurtPlayerSFX = new Audio('assets/sounds/sfx/hurtPlayer.wav')
const stardustPickerSFX = new Audio('assets/sounds/sfx/stardustPicker.wav');
const startShieldSFX = new Audio('assets/sounds/sfx/newShield.wav')
const breakShieldSFX = new Audio('assets/sounds/sfx/breakShield.wav')
const breakMeteoriteSFX = new Audio('assets/sounds/sfx/breakMeteorite.wav')

Array.from(document.getElementsByTagName('button')).forEach((b) => {
    b.addEventListener('click', () => {
        clickSound.pause()
        clickSound.currentTime = 0
        clickSound.play()
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

// LOOPS
GIDManagerMusic.loop = true
spaceshipMusic.loop = true
spaceAreaMusic.loop = true

function stopAllMusics() {
    setTimeout(() => {
        GIDManagerMusic.pause()
        spaceshipMusic.pause()
        spaceAreaMusic.pause()
        GIDManagerMusic.currentTime = 0
        spaceshipMusic.currentTime = 0
        spaceAreaMusic.currentTime = 0
    }, 300);
}