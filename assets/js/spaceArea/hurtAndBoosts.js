let instaShield = false
function colisionMeteorite() {
    if (!instaShield && !cannotHurt && !shieldBoost && !paused) {
        instaShield = true
        ghost.classList.add('aLittleHurt')
        ghost.style.opacity = '0.5'
        life--
        checkLife()
        setTimeout(() => {
            ghost.classList.remove('aLittleHurt')
        }, 1000);
        setTimeout(() => {
            instaShield = false
            ghost.style.opacity = '1'
        }, 5000);
    } else if (shieldBoost) {
        shieldToggle('disable')
        instaShield = true
        setTimeout(() => {
            instaShield = false
        }, 1000);
    }
}

// Stardusts
let disableStardust = false

function colisionStardust() {
    if (!disableStardust && !paused) {
        disableStardust = true
        stardustsNum++
        if (!cannotPlaysound) {
            stardustPicker.play()
        }
        setTimeout(() => {
            disableStardust = false
        }, 750);
    }
}

// Energy Required Boosts

let shieldBoost = false
function shieldToggle(what) {
    if (what == 'enable' && energy > 3) {
        shield.style.display = 'block'
        shieldBoost = true
        energy = energy - 4
    } else if (what == 'disable') {
        shield.removeAttribute('style')
        shieldBoost = false
    }
}
