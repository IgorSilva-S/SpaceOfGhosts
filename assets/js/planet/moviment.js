let actualLane = 0
let lastLane = 0
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
    if (direction == 'up') {
        if (actualLane != 2) {
            actualLane = 1
            pGhost.style.bottom = '300px'
            PGShadow.style.bottom = '280px'
            setTimeout(() => {
                pGhost.style.bottom = `${lanePosi[actualLane]}px`
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
        if (actualLane != 2) {
            actualLane = 0
            pGhost.style.bottom = '80px'
            PGShadow.style.bottom = '60px'
            setTimeout(() => {
                pGhost.style.bottom = `${lanePosi[actualLane]}px`
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

    if (direction == 'space' && actualLane != 2 && !instaShield) {
        pEnergy = pEnergy - 2
        checkPEnergy()
        lastLane = actualLane
        actualLane = 2
        setTimeout(() => {
            pGhost.style.bottom = `${lanePosi[actualLane]}px`
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