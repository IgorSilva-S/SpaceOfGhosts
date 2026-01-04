let actualLane = 0
const pGhost = document.getElementById('pGhost')
const PGShadow = document.getElementById('PGShadow')
const lanePosi = {
    0: 110,
    1: 250
}

function restartPGif(src) {
    pGhost.src = src + "?t=" + Date.now();
}

function laneMovement(direction) {
    if (direction == 'up') {
        actualLane = 1
        pGhost.style.bottom = '300px'
        PGShadow.style.bottom = '280px'
        setTimeout(() => {
            pGhost.style.bottom = `${lanePosi[actualLane]}px`
            PGShadow.style.bottom = `${lanePosi[actualLane] - 20}px`
        }, 100);
    }

    if (direction == 'down') {
        actualLane = 0
        pGhost.style.bottom = '80px'
        PGShadow.style.bottom = '60px'
        setTimeout(() => {
            pGhost.style.bottom = `${lanePosi[actualLane]}px`
            PGShadow.style.bottom = `${lanePosi[actualLane] - 20}px`
        }, 100);
    }
}