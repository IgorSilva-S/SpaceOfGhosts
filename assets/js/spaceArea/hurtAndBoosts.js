let instaShield = false
function colisionMeteorite() {
    if (!instaShield && !cannotHurt && !shieldBoost && !paused && !quickMoving) {
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
    if (what == 'enable' && energy > 3) {
        shield.style.display = 'block'
        shieldBoost = true
        energy = energy - 4
        startShieldSFX.play()
    } else if (what == 'disable') {
        shield.removeAttribute('style')
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

function goToPlanet(specific) {
    let plan = Math.floor(Math.random() * 5)
    if (specific !== undefined && typeof specific === "number" && !isNaN(specific)) {
        plan = specific
    }
    const bckg = document.getElementById('planBckg')
    const laneU = document.getElementById('planLaneU')
    const laneD = document.getElementById('planLaneD')
    bckg.className = 'bckg'
    laneU.className = 'lane up'
    laneD.className = 'lane down'
    blackout.style.display = 'block'
    stopAllMusics()
    setTimeout(() => {
        blackout.style.opacity = '0'
        closeAllScreens()
        setTimeout(() => {
            screenIdentifier = 3
            switch (plan) {
                case 0:
                    document.getElementById('planetArea').style.backgroundColor = '#5A2A2A'
                    bckg.classList.add('volcanic')
                    laneU.classList.add('VVP')
                    laneD.classList.add('VVP')
                    VVPMusic.play()
                    break
                case 1:
                    document.getElementById('planetArea').style.backgroundColor = '#3E5F7A'
                    bckg.classList.add('desert')
                    laneU.classList.add('DDP')
                    laneD.classList.add('DDP')
                    DDPMusic.play()
                    break
                case 2:
                    document.getElementById('planetArea').style.backgroundColor = '#2F445E'
                    bckg.classList.add('city')
                    laneU.classList.add('MMP')
                    laneD.classList.add('MMP')
                    MMPMusic.play()
                    break
                case 3:
                    document.getElementById('planetArea').style.backgroundColor = '#4F8FA8'
                    bckg.classList.add('beach')
                    laneU.classList.add('BBP')
                    laneD.classList.add('BBP')
                    BBPMusic.play()
                    break
                case 4:
                    document.getElementById('planetArea').style.backgroundColor = '#2C3F5A'
                    bckg.classList.add('ruins')
                    laneU.classList.add('RRP')
                    laneD.classList.add('RRP')
                    RRPMusic.play()
                    break
                default:
                    document.getElementById('planetArea').style.backgroundColor = '#000'
                    laneU.classList.add('err')
                    laneD.classList.add('err')
                    spaceshipMusic.play()
            }
            document.getElementById('planetArea').style.display = 'block'
        }, 1);
        setTimeout(() => {
            blackout.removeAttribute('style')
        }, 300);
    }, 600);
}