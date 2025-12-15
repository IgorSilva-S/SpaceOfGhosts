let actualLane = 1
const pGhost = document.getElementById('pGhost')
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
        setTimeout(() => {
            pGhost.style.bottom = `${lanePosi[actualLane]}px`
        }, 100);
    }

    if (direction == 'down') {
        actualLane = 0
        pGhost.style.bottom = '80px'
        setTimeout(() => {
            pGhost.style.bottom = `${lanePosi[actualLane]}px`
        }, 100);
    }
}