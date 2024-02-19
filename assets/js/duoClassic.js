function pauseClassicDuo() {
    p1Classic.classList.add('playerPaused')
    p2Classic.classList.add('playerPaused')
    
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
