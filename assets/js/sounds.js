const clickSound = new Audio('assets/sounds/sfx/buttonClicker.mp3')
const stardustPicker = new Audio('assets/sounds/sfx/stardustPicker.mp3');

Array.from(document.getElementsByTagName('button')).forEach((b) => {
    b.addEventListener('click', () => {
        if (!cannotPlaysound) {
            clickSound.play()
        }
    })
})