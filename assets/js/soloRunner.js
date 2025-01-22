function pauseSoloRunner() {
    if (!pausedRunnerSolo) {
        document.getElementById('pauseRunner').style.right = '10px'
        
       ufoB1.style.animationPlayState = 'paused'
       ufoB2.style.animationPlayState = 'paused'
       ufoB3.style.animationPlayState = 'paused'
       ufoT1.style.animationPlayState = 'paused'
       ufoT2.style.animationPlayState = 'paused'
       ufoT3.style.animationPlayState = 'paused'
        document.getElementById('srTR').style.animationPlayState = 'paused'
        document.getElementById('srBR').style.animationPlayState = 'paused'
        document.getElementById('srBCKG1').style.animationPlayState = 'paused'
        document.getElementById('srBCKG2').style.animationPlayState = 'paused'
        playerRunner.classList.add('playerPaused')
        soloRunnerPage.classList.add('pausedSR')
        pausedRunnerSolo = true
    } 
}

function checkSRLives() {
    if (soloRunnerLife == 100) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h100')
    }

    if (soloRunnerLife == 90 || soloRunnerLife == 95) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h90')
    }

    if (soloRunnerLife == 80 || soloRunnerLife == 85) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h80')
    }

    if (soloRunnerLife == 70 || soloRunnerLife == 75) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h70')
    }

    if (soloRunnerLife == 60 || soloRunnerLife == 65) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h60')
    }

    if (soloRunnerLife == 50 || soloRunnerLife == 55) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h50')
    }

    if (soloRunnerLife == 40 || soloRunnerLife == 45) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h40')
    }

    if (soloRunnerLife == 30 || soloRunnerLife == 35) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h30')
    }

    if (soloRunnerLife == 20 || soloRunnerLife == 25) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h20')
    }

    if (soloRunnerLife == 10 || soloRunnerLife == 15) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h10')
    }

    if (soloRunnerLife == 5) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h0')
    }
}

// Ufos sorter
ufoB1.addEventListener('animationiteration', () => {
    const aUfo = ufoB1

    UB1T = Math.floor(Math.random() * 6 + 1)
    let uSpeed = Math.floor(Math.random() * 3 + 3.4)
    aUfo.className = 'ufo'
    aUfo.classList.add(`uType${UB1T}`)
    aUfo.style.display = 'none'
    setTimeout(() => {
        aUfo.removeAttribute('style')
        setTimeout(() => {
                    aUfo.style.animationDuration = `${uSpeed}s`
        }, 1);
    }, 1);
})

ufoB2.addEventListener('animationiteration', () => {
    const aUfo = ufoB2

    UB2T = Math.floor(Math.random() * 6 + 1)
    let uSpeed = Math.floor(Math.random() * 3 + 3.4)
    aUfo.className = 'ufo'
    aUfo.classList.add(`uType${UB2T}`)
    aUfo.style.display = 'none'
    setTimeout(() => {
        aUfo.removeAttribute('style')
        setTimeout(() => {
                    aUfo.style.animationDuration = `${uSpeed}s`
        }, 1);
    }, 1);
})

ufoB3.addEventListener('animationiteration', () => {
    const aUfo = ufoB3

    UB3T = Math.floor(Math.random() * 6 + 1)
    let uSpeed = Math.floor(Math.random() * 3 + 3.4)
    aUfo.className = 'ufo'
    aUfo.classList.add(`uType${UB3T}`)
    aUfo.style.display = 'none'
    setTimeout(() => {
        aUfo.removeAttribute('style')
        setTimeout(() => {
                    aUfo.style.animationDuration = `${uSpeed}s`
        }, 1);
    }, 1);
})

ufoT1.addEventListener('animationiteration', () => {
    const aUfo = ufoT1

    UT1T = Math.floor(Math.random() * 6 + 1)
    let uSpeed = Math.floor(Math.random() * 3 + 3.4)
    aUfo.className = 'ufoT'
    aUfo.classList.add(`uType${UT1T}`)
    aUfo.style.display = 'none'
    setTimeout(() => {
        aUfo.removeAttribute('style')
        setTimeout(() => {
                    aUfo.style.animationDuration = `${uSpeed}s`
        }, 1);
    }, 1);
})

ufoT2.addEventListener('animationiteration', () => {
    const aUfo = ufoT2

    UT2T = Math.floor(Math.random() * 6 + 1)
    let uSpeed = Math.floor(Math.random() * 3 + 3.4)
    aUfo.className = 'ufoT'
    aUfo.classList.add(`uType${UT2T}`)
    aUfo.style.display = 'none'
    setTimeout(() => {
        aUfo.removeAttribute('style')
        setTimeout(() => {
                    aUfo.style.animationDuration = `${uSpeed}s`
        }, 1);
    }, 1);
})

ufoT3.addEventListener('animationiteration', () => {
    const aUfo = ufoT3

    UT3T = Math.floor(Math.random() * 6 + 1)
    let uSpeed = Math.floor(Math.random() * 3 + 5.4)
    aUfo.className = 'ufoT'
    aUfo.classList.add(`uType${UT3T}`)
    aUfo.style.display = 'none'
    setTimeout(() => {
        aUfo.removeAttribute('style')
        setTimeout(() => {
                    aUfo.style.animationDuration = `${uSpeed}s`
        }, 1);
    }, 1);
})

/*Collision Detection*/

// Ufo Bottom
// 1
