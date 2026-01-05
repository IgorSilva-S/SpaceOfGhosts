let instaShield = false
function colisionMeteorite() {
    if (!instaShield && !cannotHurt && !shieldBoost && !paused && !quickMoving && life > 0) {
        instaShield = true
        ghost.classList.add('aLittleHurt')
        ghost.style.opacity = '0.5'
        life--
        hurtPlayerSFX.play()
        checkLife()
        setTimeout(() => {
            ghost.classList.remove('aLittleHurt')
        }, 1000);
        setTimeout(() => {
            instaShield = false
            ghost.style.opacity = '1'
        }, 5000);
    } else if (shieldBoost && !quickMoving) {
        shieldToggle('disable')
        instaShield = true
        setTimeout(() => {
            instaShield = false
        }, 1000);
    } else if (quickMoving) {
        breakMeteoriteSFX.play()
        return 'broked'
    }

    if (!instaShield && !cannotHurt && !shieldBoost && !paused && !quickMoving && life <= 0) {
        instaShield = true
        life--
        hurtPlayerSFX.play()
        checkLife()
        setTimeout(() => {
            instaShield = false
        }, 5000);
    }
}

// Stardusts
let disableStardust = false

function colisionStardust() {
    if (!disableStardust && !paused) {
        disableStardust = true
        stardustsNum++
        if (!cannotPlaysound) {
            stardustPickerSFX.play()
        }
        setTimeout(() => {
            disableStardust = false
        }, 750);
    }
}

// Lane Switcher
function laneSwitcher() {
    if (posi == minTop) {
        posi = maxTop
    } else if (posi == maxTop) {
        posi = minTop
    }

    ghost.style.top = `${posi}%`;
    shield.style.top = `${posi - 3}%`;
}

// Energy Required Boosts

let shieldBoost = false
function shieldToggle(what) {
    if (what == 'enable' && energy > 3 && screenIdentifier == 2) {
        shield.style.display = 'block'
        pShield.style.display = 'block'
        shieldBoost = true
        energy = energy - 4
        startShieldSFX.play()
    } else if (what == 'enable' && pEnergy > 3 && screenIdentifier == 3) {
        shield.style.display = 'block'
        pShield.style.display = 'block'
        shieldBoost = true
        pEnergy = pEnergy - 4
        checkPEnergy()
        startShieldSFX.play()
    } else if (what == 'disable') {
        shield.removeAttribute('style')
        pShield.removeAttribute('style')
        shieldBoost = false
        breakShieldSFX.play()
    }
}

// Quick Move

let quickMoving = false;
let quickMoveInterval = null;
let qmSide = null;

function quickMove() {
    restartGif(quickMoveImg)
    if (qmSide === 'ArrowUp') {
        posi--;
        if (posi < minTop) {
            posi = minTop;
            restartGif(fly)
            document.getElementById('laneSwitcherBoost').removeAttribute('style')
            energy = energy - 6
            stopQuickMove();
        }
    }
    else if (qmSide === 'ArrowDown') {
        posi++;
        if (posi > maxTop) {
            posi = maxTop;
            restartGif(fly)
            document.getElementById('laneSwitcherBoost').removeAttribute('style')
            energy = energy - 6
            stopQuickMove();
        }
    } else {
        restartGif(fly)
        stopQuickMove()
    }

    ghost.style.top = `${posi}%`;
    shield.style.top = `${posi - 3}%`;
}

function startQuickMove(side) {
    if (energy > 5) {
        if (quickMoving) return; // evita interval duplicado

        qmSide = side;
        quickMoving = true;

        quickMoveInterval = setInterval(quickMove, 1);
    }
}

function stopQuickMove() {
    clearInterval(quickMoveInterval);
    quickMoveInterval = null;
    quickMoving = false;
}

