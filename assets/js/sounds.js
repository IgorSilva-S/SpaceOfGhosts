// GUI
const clickSound = new Audio('assets/sounds/sfx/select.wav')

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
        clickSound.pause()
        clickSound.currentTime = 0
        clickSound.play()
    })
})