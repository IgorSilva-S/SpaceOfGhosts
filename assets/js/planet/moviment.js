let actualLane = 0
let lastLane = 0
let pShield = document.getElementById('pGhostShield')
const pGhost = document.getElementById('pGhost')
const PGShadow = document.getElementById('PGShadow')
const lanePosi = {
    0: 110,
    1: 250,
    2: 450
}

function restartPGif(src) {
    pGhost.src = src + "?t=" + Date.now();
}

function laneMovement(direction) {
    if (direction == 'up' && !usingSpecialMove) {
        if (actualLane != 2) {
            actualLane = 1
            pGhost.style.bottom = '300px'
            pShield.style.bottom = `${300 - 25}px`
            PGShadow.style.bottom = '280px'
            setTimeout(() => {
                pGhost.style.bottom = `${lanePosi[actualLane]}px`
                pShield.style.bottom = `${lanePosi[actualLane] - 25}px`
                PGShadow.style.bottom = `${lanePosi[actualLane] - 20}px`
            }, 100);
        } else {
            lastLane = 1
            PGShadow.style.bottom = '280px'
            setTimeout(() => {
                PGShadow.style.bottom = `${lanePosi[lastLane] - 20}px`
            }, 100);
        }
    }

    if (direction == 'down') {
        if (actualLane != 2 && !usingSpecialMove) {
            actualLane = 0
            pGhost.style.bottom = '80px'
            pShield.style.bottom = `${80 - 25}px`
            PGShadow.style.bottom = '60px'
            setTimeout(() => {
                pGhost.style.bottom = `${lanePosi[actualLane]}px`
                pShield.style.bottom = `${lanePosi[actualLane] - 25}px`
                PGShadow.style.bottom = `${lanePosi[actualLane] - 20}px`
            }, 100);
        } else {
            lastLane = 0
            PGShadow.style.bottom = '60px'
            setTimeout(() => {
                PGShadow.style.bottom = `${lanePosi[lastLane] - 20}px`
            }, 100);
        }
    }

    if (direction == 'space' && actualLane != 2 && !instaShield && !usingSpecialMove) {
        pEnergy = pEnergy - 2
        checkPEnergy()
        lastLane = actualLane
        actualLane = 2
        setTimeout(() => {
            pGhost.style.bottom = `${lanePosi[actualLane]}px`
            pShield.style.bottom = `${lanePosi[actualLane] - 25}px`
            PGShadow.style.bottom = `${lanePosi[lastLane] - 20}px`
        }, 100);
        setTimeout(() => {
            actualLane = lastLane
            if (lastLane == 0) {
                laneMovement('down')
            } else {
                laneMovement('up')
            }
        }, 6000);
    }
}