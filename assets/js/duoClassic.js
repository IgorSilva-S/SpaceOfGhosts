function pauseClassicDuo() {
    if (!pausedDClassic) {
        p1Classic.classList.add('playerPaused')
        p2Classic.classList.add('playerPaused')
        document.getElementById('duoClassicControls').style.top = '20px'
        duoClassicSong.pause()
        document.getElementById('p1cr1').style.animationPlayState = 'paused'
        document.getElementById('p1cr2').style.animationPlayState = 'paused'
        document.getElementById('p1cr3').style.animationPlayState = 'paused'
        document.getElementById('p2cr1').style.animationPlayState = 'paused'
        document.getElementById('p2cr2').style.animationPlayState = 'paused'
        document.getElementById('p2cr3').style.animationPlayState = 'paused'
        document.getElementById('p1Soil').style.animationPlayState = 'paused'
        document.getElementById('p2Soil').style.animationPlayState = 'paused'
        document.getElementById('duoClassicClouds').style.animationPlayState = 'paused'
        pausedDClassic = true
        clearInterval(p1CHSCounter)
        clearInterval(p2CHSCounter)
    } else {
        p1Classic.classList.remove('playerPaused')
        p2Classic.classList.remove('playerPaused')
        document.getElementById('duoClassicControls').removeAttribute('style')
        duoClassicSong.play()
        document.getElementById('p1cr1').style.animationPlayState = 'running'
        document.getElementById('p1cr2').style.animationPlayState = 'running'
        document.getElementById('p1cr3').style.animationPlayState = 'running'
        document.getElementById('p2cr1').style.animationPlayState = 'running'
        document.getElementById('p2cr2').style.animationPlayState = 'running'
        document.getElementById('p2cr3').style.animationPlayState = 'running'
        document.getElementById('p1Soil').style.animationPlayState = 'running'
        document.getElementById('p2Soil').style.animationPlayState = 'running'
        document.getElementById('duoClassicClouds').style.animationPlayState = 'running'
        pausedDClassic = false
        if (p1CHS) {
            p1CHSCounter = setInterval(() => {
                p1CHSTimer++
                if (p1CHSTimer == 5) {
                    p1CHSTimer = 0
                    p1Classic.classList.remove('hShield')
                    clearInterval(p1CHSCounter)
                    p1CHS = false
                }
            }, 1000);
        }
        if (p2CHS) {
            p2CHSCounter = setInterval(() => {
                p2CHSTimer++
                if (p2CHSTimer == 5) {
                    p2CHSTimer = 0
                    p2Classic.classList.remove('hShield')
                    clearInterval(p2CHSCounter)
                    p2CHS = false
                }
            }, 1000);
        }
    }
}

let duoClassicControls = setInterval(() => {
    moveCharsClassic()
}, 40);

function duoClassicKeyDown(e) {
    let keyType = e.key
    keysDuoClassic[keyType] = true
}

function duoClassicKeyUp(e) {
    keysDuoClassic = []
}

function moveCharsClassic() {
    if (keysDuoClassic['ArrowUp'] == true && (keysDuoClassic['w'] == true || keysDuoClassic['W'] == true)) {
        p1Classic.classList.add('jump')
        p1Classic.addEventListener('animationend', () => {
            setTimeout(() => {
                p1Classic.className = 'player'
                if (p1CHS) {
                    p1Classic.classList.add('hShield')
                }
            }, 200);
        })

        p2Classic.classList.add('jump')
        p2Classic.addEventListener('animationend', () => {
            setTimeout(() => {
                p2Classic.className = 'player'
                if (p2CHS) {
                    p2Classic.classList.add('hShield')
                }
            }, 200);
        })
    }

    if (keysDuoClassic['ArrowUp'] == true) {
        p2Classic.classList.add('jump')
        p2Classic.addEventListener('animationend', () => {
            setTimeout(() => {
                p2Classic.className = 'player'
                if (p2CHS) {
                    p2Classic.classList.add('hShield')
                }
            }, 200);
        })
    }

    
    if (keysDuoClassic['w'] == true || keysDuoClassic['W'] == true) {
        p1Classic.classList.add('jump')
        p1Classic.addEventListener('animationend', () => {
            setTimeout(() => {
                p1Classic.className = 'player'
                if (p1CHS) {
                    p1Classic.classList.add('hShield')
                }
            }, 200);
        })
    }
}