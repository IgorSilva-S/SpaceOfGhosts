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

function checkLifeP1DClassic() {
    if (p1DuoClassicLife > 90) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h100')
    } else if (p1DuoClassicLife > 80) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h90')
    }  else if (p1DuoClassicLife > 70) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h80')
    }  else if (p1DuoClassicLife > 60) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h70')
    }  else if (p1DuoClassicLife > 50) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h60')
    }  else if (p1DuoClassicLife > 40) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h50')
    }  else if (p1DuoClassicLife > 30) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h40')
    }  else if (p1DuoClassicLife > 20) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h30')
    } else if (p1DuoClassicLife > 10) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h20')
    } else if (p1DuoClassicLife > 5) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h10')
    } else if (p1DuoClassicLife > 0) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h0')
    }  else if (p1DuoClassicLife <= 0) {

    }
}

function checkLifeP2DClassic() {
    if (p2DuoClassicLife > 90) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h100')
    } else if (p2DuoClassicLife > 80) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h90')
    }  else if (p2DuoClassicLife > 70) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h80')
    }  else if (p2DuoClassicLife > 60) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h70')
    }  else if (p2DuoClassicLife > 50) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h60')
    }  else if (p2DuoClassicLife > 40) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h50')
    }  else if (p2DuoClassicLife > 30) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h40')
    }  else if (p2DuoClassicLife > 20) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h30')
    } else if (p2DuoClassicLife > 10) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h20')
    } else if (p2DuoClassicLife > 5) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h10')
    } else if (p2DuoClassicLife > 0) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h0')
    }  else if (p2DuoClassicLife <= 0) {

    }
}

setInterval(() => {
    checkLifeP1DClassic()
    let checkerCrystal = document.getElementById('p1cr1')
    let crystalLeft = parseInt(
        window.getComputedStyle(checkerCrystal).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(p1Classic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !p1CHS && !pausedDClassic) {
        p1DuoClassicLife = p1DuoClassicLife - 5
        p1CHS = true
        p1Classic.classList.add('hShield')
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
}, 1);

setInterval(() => {
    checkLifeP1DClassic()
    let checkerCrystal = document.getElementById('p1cr2')
    let crystalLeft = parseInt(
        window.getComputedStyle(checkerCrystal).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(p1Classic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !p1CHS && !pausedDClassic) {
        p1DuoClassicLife = p1DuoClassicLife - 5
        p1CHS = true
        p1Classic.classList.add('hShield')
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
}, 1);

setInterval(() => {
    checkLifeP1DClassic()
    let checkerCrystal = document.getElementById('p1cr3')
    let crystalLeft = parseInt(
        window.getComputedStyle(checkerCrystal).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(p1Classic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !p1CHS && !pausedDClassic) {
        p1DuoClassicLife = p1DuoClassicLife - 5
        p1CHS = true
        p1Classic.classList.add('hShield')
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
}, 1);

setInterval(() => {
    checkLifeP2DClassic()
    let checkerCrystal = document.getElementById('p2cr1')
    let crystalLeft = parseInt(
        window.getComputedStyle(checkerCrystal).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(p2Classic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !p2CHS && !pausedDClassic) {
        p2DuoClassicLife = p2DuoClassicLife - 5
        p2CHS = true
        p2Classic.classList.add('hShield')
        p2CHSCounter = setInterval(() => {
            p2CHSTimer++
            if (p2CHSTimer == 5) {
                p2CHSTimer = 0
                clearInterval(p2CHSCounter)
                p2Classic.classList.remove('hShield')
                p2CHS = false
            }
        }, 1000);
    }
}, 1);

setInterval(() => {
    checkLifeP2DClassic()
    let checkerCrystal = document.getElementById('p2cr2')
    let crystalLeft = parseInt(
        window.getComputedStyle(checkerCrystal).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(p1Classic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !p2CHS && !pausedDClassic) {
        p2DuoClassicLife = p2DuoClassicLife - 5
        p2CHS = true
        p2Classic.classList.add('hShield')
        p2CHSCounter = setInterval(() => {
            p2CHSTimer++
            if (p2CHSTimer == 5) {
                p2CHSTimer = 0
                clearInterval(p2CHSCounter)
                p2Classic.classList.remove('hShield')
                p2CHS = false
            }
        }, 1000);
    }
}, 1);

setInterval(() => {
    checkLifeP2DClassic()
    let checkerCrystal = document.getElementById('p2cr3')
    let crystalLeft = parseInt(
        window.getComputedStyle(checkerCrystal).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(p2Classic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !p2CHS && !pausedDClassic) {
        p2DuoClassicLife = p2DuoClassicLife - 5
        p2CHS = true
        p2Classic.classList.add('hShield')
        p2CHSCounter = setInterval(() => {
            p2CHSTimer++
            if (p2CHSTimer == 5) {
                p2CHSTimer = 0
                clearInterval(p2CHSCounter)
                p2Classic.classList.remove('hShield')
                p2CHS = false
            }
        }, 1000);
    }
}, 1);