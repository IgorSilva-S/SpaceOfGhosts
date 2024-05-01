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

function removePauseDuoClassic() {
    p1Classic.classList.remove('playerPaused')
    p2Classic.classList.remove('playerPaused')
    document.getElementById('duoClassicControls').removeAttribute('style')
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

function returnHomeDuoClassic() {
    classicDuoPage.style.opacity = '0'
    duoClassicSong.pause()
    setTimeout(() => {
        classicDuoPage.removeAttribute('style')
        pageType = 1.1
        duoClassicSong.currentTime = 0
        homeSong.play()
        gameMPage.style.display = 'flex'
        removePauseDuoClassic()
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
        removePauseDuoClassic()
        duoClassicSong.play()
        p1DuoClassicLife = 100
        p2DuoClassicLife = 100
        checkLifeAllDClassic()
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

document.getElementById('p1cr1').addEventListener("animationiteration", () => {
  document.getElementById('p1cr1').style.display = 'none'
  setTimeout(() => {
    document.getElementById('p1cr1').style.display = 'block'
    let cRand = Math.floor(Math.random() * 6) + 1
    let cDelay = Math.floor(Math.random() * 4)
    document.getElementById('p1cr1').className = 'crystal'
    document.getElementById('p1cr1').classList.add(`cType${cRand}`)
    document.getElementById('p1cr1').style.animationDelay = `${cDelay}s`
  }, 1);
})

document.getElementById('p1cr2').addEventListener("animationiteration", () => {
    document.getElementById('p1cr2').style.display = 'none'
    setTimeout(() => {
      document.getElementById('p1cr2').style.display = 'block'
    let cRand = Math.floor(Math.random() * 6) + 1
    let cDelay = Math.floor(Math.random() * 4)
    document.getElementById('p1cr2').className = 'crystal'
    document.getElementById('p1cr2').classList.add(`cType${cRand}`)
    document.getElementById('p1cr2').style.animationDelay = `${cDelay}s`
    }, 1)
})

document.getElementById('p1cr3').addEventListener("animationiteration", () => {
    document.getElementById('p1cr3').style.display = 'none'
    setTimeout(() => {
      document.getElementById('p1cr3').style.display = 'block'
    let cRand = Math.floor(Math.random() * 6) + 1
    let cDelay = Math.floor(Math.random() * 4)
    document.getElementById('p1cr3').className = 'crystal'
    document.getElementById('p1cr3').classList.add(`cType${cRand}`)
    document.getElementById('p1cr3').style.animationDelay = `${cDelay}s`
    }, 1)
})

document.getElementById('p2cr1').addEventListener("animationiteration", () => {
    document.getElementById('p2cr1').style.display = 'none'
    setTimeout(() => {
      document.getElementById('p2cr1').style.display = 'block'
    let cRand = Math.floor(Math.random() * 6) + 1
    let cDelay = Math.floor(Math.random() * 4)
    document.getElementById('p2cr1').className = 'crystal'
    document.getElementById('p2cr1').classList.add(`cType${cRand}`)
    document.getElementById('p2cr1').style.animationDelay = `${cDelay}s`
    }, 1)
})

document.getElementById('p2cr2').addEventListener("animationiteration", () => {
    document.getElementById('p2cr2').style.display = 'none'
    setTimeout(() => {
      document.getElementById('p2cr2').style.display = 'block'
    let cRand = Math.floor(Math.random() * 6) + 1
    let cDelay = Math.floor(Math.random() * 4)
    document.getElementById('p2cr2').className = 'crystal'
    document.getElementById('p2cr2').classList.add(`cType${cRand}`)
    document.getElementById('p2cr2').style.animationDelay = `${cDelay}s`
    }, 1)
})

document.getElementById('p2cr3').addEventListener("animationiteration", () => {
    document.getElementById('p2cr3').style.display = 'none'
    setTimeout(() => {
      document.getElementById('p2cr3').style.display = 'block'
    let cRand = Math.floor(Math.random() * 6) + 1
    let cDelay = Math.floor(Math.random() * 4)
    document.getElementById('p2cr3').className = 'crystal'
    document.getElementById('p2cr3').classList.add(`cType${cRand}`)
    document.getElementById('p2cr3').style.animationDelay = `${cDelay}s`
    }, 1)
})

function checkLifeAllDClassic() {
    // Player 1 Check
    if (p1DuoClassicLife >= 91) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h100')
    } else if (p1DuoClassicLife >= 81) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h90')
    } else if (p1DuoClassicLife >= 71) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h80')
    } else if (p1DuoClassicLife >= 61) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h70')
    } else if (p1DuoClassicLife >= 51) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h60')
    } else if (p1DuoClassicLife >= 41) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h50')
    } else if (p1DuoClassicLife >= 31) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h40')
    } else if (p1DuoClassicLife >= 21) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h30')
    } else if (p1DuoClassicLife >= 11) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h20')
    } else if (p1DuoClassicLife >= 6) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h10')
    } else if (p1DuoClassicLife <= 5) {
        p1DuoClassicLifeAlert.className = 'hearts'
        p1DuoClassicLifeAlert.classList.add('h0')
    } else if (p1DuoClassicLife >= 0) {
        p1Classic.classList.add('playerPaused')
        p2Classic.classList.add('playerPaused')
        document.getElementById('p1cr1').style.animationPlayState = 'paused'
        document.getElementById('p1cr2').style.animationPlayState = 'paused'
        document.getElementById('p1cr3').style.animationPlayState = 'paused'
        document.getElementById('p2cr1').style.animationPlayState = 'paused'
        document.getElementById('p2cr2').style.animationPlayState = 'paused'
        document.getElementById('p2cr3').style.animationPlayState = 'paused'
        document.getElementById('p1Soil').style.animationPlayState = 'paused'
        document.getElementById('p2Soil').style.animationPlayState = 'paused'
        clearInterval(p1CHSCounter)
        clearInterval(p2CHSCounter)
        p1Classic.style.rotate = '90deg'
    }

    // Player 2
    if (p2DuoClassicLife >= 91) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h100')
    } else if (p2DuoClassicLife >= 81) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h90')
    } else if (p2DuoClassicLife >= 71) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h80')
    } else if (p2DuoClassicLife >= 61) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h70')
    } else if (p2DuoClassicLife >= 51) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h60')
    } else if (p2DuoClassicLife >= 41) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h50')
    } else if (p2DuoClassicLife >= 31) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h40')
    } else if (p2DuoClassicLife >= 21) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h30')
    } else if (p2DuoClassicLife >= 11) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h20')
    } else if (p2DuoClassicLife >= 6) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h10')
    } else if (p2DuoClassicLife <= 5) {
        p2DuoClassicLifeAlert.className = 'hearts'
        p2DuoClassicLifeAlert.classList.add('h0')
    } else if (p2DuoClassicLife >= 0) {
        p1Classic.classList.add('playerPaused')
        p2Classic.classList.add('playerPaused')
        document.getElementById('p1cr1').style.animationPlayState = 'paused'
        document.getElementById('p1cr2').style.animationPlayState = 'paused'
        document.getElementById('p1cr3').style.animationPlayState = 'paused'
        document.getElementById('p2cr1').style.animationPlayState = 'paused'
        document.getElementById('p2cr2').style.animationPlayState = 'paused'
        document.getElementById('p2cr3').style.animationPlayState = 'paused'
        document.getElementById('p1Soil').style.animationPlayState = 'paused'
        document.getElementById('p2Soil').style.animationPlayState = 'paused'
        clearInterval(p1CHSCounter)
        clearInterval(p2CHSCounter)
        p2Classic.style.rotate = '90deg'
    }
}

function endGameDuoClassic() {
    document.getElementById('scoreDC').style.top = '5%'
    document.getElementById('p1cr1').style.animationPlayState = 'paused'
    document.getElementById('p1cr2').style.animationPlayState = 'paused'
    document.getElementById('p1cr3').style.animationPlayState = 'paused'
    document.getElementById('p2cr1').style.animationPlayState = 'paused'
    document.getElementById('p2cr2').style.animationPlayState = 'paused'
    document.getElementById('p2cr3').style.animationPlayState = 'paused'
    document.getElementById('p1Soil').style.animationPlayState = 'paused'
    document.getElementById('p2Soil').style.animationPlayState = 'paused'
    p1Classic.classList.add('playerPaused')
    p2Classic.classList.add('playerPaused')
    
}

setInterval(() => {
    let checkerCrystal = document.getElementById('p1cr1')
    let crystalLeft = parseInt(
        window.getComputedStyle(checkerCrystal).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(p1Classic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !p1CHS && !pausedDClassic) {
        p1DuoClassicLife = p1DuoClassicLife - 5
        checkLifeAllDClassic()
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
    let checkerCrystal = document.getElementById('p1cr2')
    let crystalLeft = parseInt(
        window.getComputedStyle(checkerCrystal).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(p1Classic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !p1CHS && !pausedDClassic) {
        p1DuoClassicLife = p1DuoClassicLife - 5
        checkLifeAllDClassic()
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
    let checkerCrystal = document.getElementById('p1cr3')
    let crystalLeft = parseInt(
        window.getComputedStyle(checkerCrystal).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(p1Classic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !p1CHS && !pausedDClassic) {
        p1DuoClassicLife = p1DuoClassicLife - 5
        checkLifeAllDClassic()
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
    let checkerCrystal = document.getElementById('p2cr1')
    let crystalLeft = parseInt(
        window.getComputedStyle(checkerCrystal).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(p2Classic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !p2CHS && !pausedDClassic) {
        p2DuoClassicLife = p2DuoClassicLife - 5
        checkLifeAllDClassic()
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
    let checkerCrystal = document.getElementById('p2cr2')
    let crystalLeft = parseInt(
        window.getComputedStyle(checkerCrystal).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(p1Classic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !p2CHS && !pausedDClassic) {
        p2DuoClassicLife = p2DuoClassicLife - 5
        checkLifeAllDClassic()
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
    let checkerCrystal = document.getElementById('p2cr3')
    let crystalLeft = parseInt(
        window.getComputedStyle(checkerCrystal).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(p2Classic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !p2CHS && !pausedDClassic) {
        p2DuoClassicLife = p2DuoClassicLife - 5
        checkLifeAllDClassic()
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