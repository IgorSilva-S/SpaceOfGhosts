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
    }
}

function returnHomeDuoClassic() {
    classicDuoPage.style.opacity = '0'
    duoClassicSong.pause()
    setTimeout(() => {
        classicDuoPage.removeAttribute('style')
        pageType = 1.1
        duoClassicSong.currentTime = 0
        homeSong.play()
        gameMPage.style.display = 'flex'
    }, 500);
}

document.getElementById('DCretHome').addEventListener('click', () => {
    returnHomeDuoClassic()
})

document.getElementById('DCRestart').addEventListener('click', () => {
    restartDuoClassic()
})

function restartDuoClassic() {
    classicDuoPage.removeAttribute('style')
    duoClassicSong.currentTime = 0
    setTimeout(() => {
        classicDuoPage.style.display = 'flex'
    }, 1);
}

let duoClassicControls = setInterval(() => {
    moveCharsClassic()
}, 40);

function duoClassicKeyDown(e) {
    let keyType = e.key
    keysDuoClassic[keyType] = true
}

function duoClassicKeyUp(e) {
    let keyType = e.key
    keysDuoClassic[keyType] = false
}

function moveCharsClassic() {
    if (keysDuoClassic['ArrowUp'] == true && (keysDuoClassic['w'] == true || keysDuoClassic['W'] == true)) {
        p1Classic.classList.add('jump')
        p1Classic.addEventListener('animationend', () => {
            setTimeout(() => {
                p1Classic.className = 'player'
            }, 200);
        })

        p2Classic.classList.add('jump')
        p2Classic.addEventListener('animationend', () => {
            setTimeout(() => {
                p2Classic.className = 'player'
            }, 200);
        })
    }

    if (keysDuoClassic['ArrowUp'] == true) {
        p2Classic.classList.add('jump')
        p2Classic.addEventListener('animationend', () => {
            setTimeout(() => {
                p2Classic.className = 'player'
            }, 200);
        })
    }

    
    if (keysDuoClassic['w'] == true || keysDuoClassic['W'] == true) {
        p1Classic.classList.add('jump')
        p1Classic.addEventListener('animationend', () => {
            setTimeout(() => {
                p1Classic.className = 'player'
            }, 200);
        })
    }
}

function randCrystals() {
    let c1rand = Math.floor(Math.random() * 6) + 1
    let c2rand = Math.floor(Math.random() * 6) + 1
    let c3rand = Math.floor(Math.random() * 6) + 1
    let c4rand = Math.floor(Math.random() * 6) + 1
    let c5rand = Math.floor(Math.random() * 6) + 1
    let c6rand = Math.floor(Math.random() * 6) + 1
    document.getElementById('p1cr1').className = 'crystal'
    document.getElementById('p1cr2').className = 'crystal'
    document.getElementById('p1cr3').className = 'crystal'
    document.getElementById('p2cr1').className = 'crystal'
    document.getElementById('p2cr2').className = 'crystal'
    document.getElementById('p2cr3').className = 'crystal'
    document.getElementById('p1cr1').classList.add(`cType${c1rand}`)
    document.getElementById('p1cr2').classList.add(`cType${c2rand}`)
    document.getElementById('p1cr3').classList.add(`cType${c3rand}`)
    document.getElementById('p2cr1').classList.add(`cType${c4rand}`)
    document.getElementById('p2cr2').classList.add(`cType${c5rand}`)
    document.getElementById('p2cr3').classList.add(`cType${c6rand}`)
}

randCrystals()

