
function sortMeteorStartSolo() {
    typeOf1 = Math.floor((Math.random() * 3) + 1)
    meteor1.removeAttribute('class')
    meteor1.className = 'meteor'
    meteor1.classList.add(`mt${typeOf1}`)
    typeOf2 = Math.floor((Math.random() * 3) + 1)
    meteor2.removeAttribute('class')
    meteor2.className = 'meteor'
    meteor2.classList.add(`mt${typeOf2}`)
    typeOf3 = Math.floor((Math.random() * 3) + 1)
    meteor3.removeAttribute('class')
    meteor3.className = 'meteor'
    meteor3.classList.add(`mt${typeOf3}`)
    typeOf4 = Math.floor((Math.random() * 3) + 1)
    meteor4.removeAttribute('class')
    meteor4.className = 'meteor'
    meteor4.classList.add(`mt${typeOf4}`)
    typeOf5 = Math.floor((Math.random() * 3) + 1)
    meteor5.removeAttribute('class')
    meteor5.className = 'meteor'
    meteor5.classList.add(`mt${typeOf5}`)
    typeOf6 = Math.floor((Math.random() * 3) + 1)
    meteor6.removeAttribute('class')
    meteor6.className = 'meteor'
    meteor6.classList.add(`mt${typeOf6}`)
    typeOf7 = Math.floor((Math.random() * 3) + 1)
    meteor7.removeAttribute('class')
    meteor7.className = 'meteor'
    meteor7.classList.add(`mt${typeOf7}`)
}

sortMeteorStartSolo()

function displaySlotsSolo() {
    shieldSW.innerText = shieldSlot
    acceleratorSW.innerText = acceleratorSlot
    relaxSW.innerText = relaxSlot
    ShealSW.innerText = fullHealSlot
    healSW.innerText = healSlot
}

//Pause Game

function pauseGameSolo() {
    if (!gamePaused && !relaxStts) {
        document.getElementById('pauseSolo').style.right = '10px'
        /*pauseGui.style.right = '0'
        pauseBack.style.right = '0'*/
        meteor1.style.animationPlayState = 'paused'
        meteor2.style.animationPlayState = 'paused'
        meteor3.style.animationPlayState = 'paused'
        meteor4.style.animationPlayState = 'paused'
        meteor5.style.animationPlayState = 'paused'
        meteor6.style.animationPlayState = 'paused'
        meteor7.style.animationPlayState = 'paused'
        boostItem.style.animationPlayState = 'paused'
        player.classList.add('playerPaused')
        invencible.classList.add('pinv')
        document.getElementById('gameBckg').style.animationPlayState = 'paused'
        song.pause()
        soloXtremeSong.pause()
        gamePaused = true
        playerBeforePause = playerPosi
        clearInterval(acceleratorWaiter)
        clearInterval(hurtSWaiter)
        clearInterval(trail)
        clearInterval(scoreCounter)
        clearInterval(addSpeed)
        if (!acceleratorP1) {
            acceleratorTimer = 0
        } if (!hurtShield) {
            hurtShieldTimer = 0
        }
        soloPage.classList.add('paused')
    } else {
        document.getElementById('pauseSolo').removeAttribute('style')
        /*pauseGui.style.right = '-25%'
        pauseBack.style.right = '-130%'*/
        meteor1.style.animationPlayState = 'running'
        meteor2.style.animationPlayState = 'running'
        meteor3.style.animationPlayState = 'running'
        meteor4.style.animationPlayState = 'running'
        meteor5.style.animationPlayState = 'running'
        meteor6.style.animationPlayState = 'running'
        meteor7.style.animationPlayState = 'running'
        boostItem.style.animationPlayState = 'running'
        player.classList.remove('playerPaused')
        invencible.classList.remove('pinv')
        document.getElementById('gameBckg').removeAttribute('style')
        gamePaused = false
        song.play()
        if (challengeType == 'extreme') {
            song.pause()
            soloXtremeSong.play()
        }
        player.style.top = `${playerBeforePause}%`
        playerPosi = playerBeforePause
        if (acceleratorP1) {
            if (shieldActive) {
                player.classList.remove('shield')
            }
            document.getElementById('gameBckg').style.display = 'none'
            document.getElementById('gameBckg').style.animationDuration = '7.5s'
            setTimeout(() => {
                document.getElementById('gameBckg').style.display = 'block'
            }, 1);
            acceleratorWaiter = setInterval(() => {
                acceleratorTimer++
                if (acceleratorTimer >= 10 && acceleratorTimer < 15) {
                    document.getElementById('acceleratorAlert').classList.add('almostEnd')
                }
                if (acceleratorTimer == 15) {
                    clearInterval(acceleratorWaiter)
                    acceleratorP1 = false
                    acceleratorTimer = 0
                    invencible.removeAttribute('style')
                    //trail.removeAttribute('style')

                    clearInterval(trail)

                    if (shieldActive) {
                        player.classList.add('shield')
                    }
                    document.getElementById('gameBckg').style.display = 'none'
                    setTimeout(() => {
                        document.getElementById('gameBckg').removeAttribute('style')
                    }, 1);
                    document.getElementById('acceleratorAlert').classList.remove('almostEnd')
                }
            }, 1000);
            trail = setInterval(() => {
                let trailElm = document.createElement('div')
                trailElm.setAttribute('class', 'trail')
                trailElm.setAttribute('style', `top: ${playerPosi}%`)
                trailElm.addEventListener("animationend", () => {
                    trailElm.remove()
                })
                soloPage.insertAdjacentElement('beforeend', trailElm)
            }, 100);
        }
        if (hurtShield) {
            hurtSWaiter = setInterval(() => {
                hurtShieldTimer++
                if (hurtShieldTimer == 5) {
                    hurtShield = false
                    player.classList.remove('hShield')
                    hurtShieldTimer = 0
                    clearInterval(hurtSWaiter)
                }
            }, 1000);
        }
        soloPage.classList.remove('paused')
        scoreCounter = setInterval(() => {
            scoreNum++
            sScore.innerText = scoreNum
            if (scoreNum != 0 && scoreNum % 100 == 0) {
                let biomeType = Math.floor(Math.random() * 11)
                soloPage.className = ''
                soloPage.className = `biome${biomeType}`
            }
        }, 500);
        addSpeed = setInterval(() => {
            if (challengeType == null) {
                if (scoreNum % 250 == 0 && scoreNum != 0) {
                    plusSpeed = plusSpeed + 0.25
                    document.getElementById('plusSpeedAlert').innerText = `${plusSpeed * 100}%`
                }
            } else if (challengeType == 'extreme') {
                if (scoreNum % 100 == 0 && scoreNum != 0) {
                    plusSpeed = plusSpeed + 0.5
                    document.getElementById('plusSpeedAlert').innerText = `${plusSpeed * 100}%`
                }
            }
        }, 600);
    }
}
//Pause Controls

document.getElementById('restartInf').addEventListener("click", () => {
    pauseGameSolo()
    song.currentTime = 0
    soloPage.style.display = 'none'
    soloPage.className = ''
    soloPage.className = 'biome0'
    if (acceleratorP1) {
        acceleratorP1 = false
        clearInterval(trail)
        invencible.style.display = 'none'
    } else {
        acceleratorP1 = false
    }
    if (hurtShield) {
        hurtShield = false
        player.classList.remove('hShield')
    } else {
        hurtShield = false
    } if (shieldActive) {
        shieldActive = false
        shield = false
        player.classList.remove('shield')
    } else {
        shieldActive = false
        shield = false
    }
    player.style.top = `45%`
    playerPosi = 45
    shieldSlot = 0
    lives1p = 100
    checkLive1p()
    setTimeout(() => {
        soloPage.style.display = 'block'
    }, 1);
    clearSlotSolo()
    clearInterval(acceleratorWaiter)
    clearInterval(hurtSWaiter)
    acceleratorTimer = 0
    hurtSWaiter = 0
    song.play()
    scoreNum = 0
    sScore.innerText = '0'
    clearInterval(scoreCounter)
    setTimeout(() => {
        scoreCounter = setInterval(() => {
            scoreNum++
            sScore.innerText = scoreNum
            if (scoreNum != 0 && scoreNum % 100 == 0) {
                let biomeType = Math.floor(Math.random() * 11)
                soloPage.className = ''
                soloPage.className = `biome${biomeType}`
            }
        }, 500);
    }, 1)
    plusSpeed = 0
    playerPXPosi = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    if (challengeType = 'extreme') {
        plusSpeed = 0.5
        lives1p = 20
        song.pause()
        song.currentTime = 0
        soloXtremeSong.play()
    }
})

document.getElementById('backInf').addEventListener("click", () => {
    soloPage.style.opacity = '0'
    setTimeout(() => {
        soloPage.removeAttribute('style')
        soloPage.style.display = 'none'
        homePage.style.display = 'flex'
        homeSong.play()
        homeSong.currentTime = 0
        if (acceleratorP1) {
            acceleratorP1 = false
            clearInterval(trail)
            invencible.style.display = 'none'
        } else {
            acceleratorP1 = false
        }
        if (hurtShield) {
            hurtShield = false
            player.classList.remove('hShield')
        } else {
            hurtShield = false
        } if (shieldActive) {
            shieldActive = false
            shield = false
            player.classList.remove('shield')
        } else {
            shieldActive = false
            shield = false
        }
        song.currentTime = 0
        soloXtremeSong.currentTime = 0
        acceleratorTimer = 0
        hurtShieldTimer = 0
        playerPosi = 45
        player.removeAttribute('style')
        clearInterval(acceleratorWaiter)
        clearInterval(hurtSWaiter)
        clearInterval(addSpeed)
        plusSpeed = 0
        acceleratorTimer = 0
        hurtSWaiter = 0
        scoreNum = 0
        //Pause
        pauseGui.style.right = '-25%'
        pauseBack.style.right = '-130%'
        meteor1.style.animationPlayState = 'running'
        meteor2.style.animationPlayState = 'running'
        meteor3.style.animationPlayState = 'running'
        meteor4.style.animationPlayState = 'running'
        meteor5.style.animationPlayState = 'running'
        meteor6.style.animationPlayState = 'running'
        meteor7.style.animationPlayState = 'running'
        player.classList.remove('playerPaused')
        document.getElementById('gameBckg').removeAttribute('style')
        gamePaused = false
        pageType = 1
        clearSlotSolo()
        sScore.innerText = '0'
    }, 500);
})

document.getElementById('retHomeSolo').addEventListener("click", () => {
    soloPage.style.opacity = '0'
    setTimeout(() => {
        soloPage.removeAttribute('style')
        soloPage.style.display = 'none'
        homePage.style.display = 'flex'
        homeSong.play()
        homeSong.currentTime = 0
        if (acceleratorP1) {
            acceleratorP1 = false
            clearInterval(trail)
            invencible.style.display = 'none'
        } else {
            acceleratorP1 = false
        }
        if (hurtShield) {
            hurtShield = false
            player.classList.remove('hShield')
        } else {
            hurtShield = false
        } if (shieldActive) {
            shieldActive = false
            shield = false
            player.classList.remove('shield')
        } else {
            shieldActive = false
            shield = false
        }
        song.currentTime = 0
        soloXtremeSong.currentTime = 0
        acceleratorTimer = 0
        hurtShieldTimer = 0
        playerPosi = 45
        player.removeAttribute('style')
        clearInterval(acceleratorWaiter)
        clearInterval(hurtSWaiter)
        clearInterval(addSpeed)
        plusSpeed = 0
        acceleratorTimer = 0
        hurtSWaiter = 0
        scoreNum = 0
        //Pause
        document.getElementById('pauseSolo').removeAttribute('style')
        pauseGui.style.right = '-25%'
        pauseBack.style.right = '-130%'
        meteor1.style.animationPlayState = 'running'
        meteor2.style.animationPlayState = 'running'
        meteor3.style.animationPlayState = 'running'
        meteor4.style.animationPlayState = 'running'
        meteor5.style.animationPlayState = 'running'
        meteor6.style.animationPlayState = 'running'
        meteor7.style.animationPlayState = 'running'
        player.classList.remove('playerPaused')
        document.getElementById('gameBckg').removeAttribute('style')
        gamePaused = false
        pageType = 1
        clearSlotSolo()
        sScore.innerText = '0'
    }, 500);
})

document.getElementById('soloRestart').addEventListener('click', () => {
    pauseGameSolo()
    song.currentTime = 0
    soloPage.style.display = 'none'
    soloPage.className = ''
    soloPage.className = 'biome0'
    if (acceleratorP1) {
        acceleratorP1 = false
        clearInterval(trail)
        invencible.style.display = 'none'
    } else {
        acceleratorP1 = false
    }
    if (hurtShield) {
        hurtShield = false
        player.classList.remove('hShield')
    } else {
        hurtShield = false
    } if (shieldActive) {
        shieldActive = false
        shield = false
        player.classList.remove('shield')
    } else {
        shieldActive = false
        shield = false
    }
    player.style.top = `45%`
    playerPosi = 45
    shieldSlot = 0
    lives1p = 100
    checkLive1p()
    setTimeout(() => {
        soloPage.style.display = 'block'
    }, 1);
    clearSlotSolo()
    clearInterval(acceleratorWaiter)
    clearInterval(hurtSWaiter)
    acceleratorTimer = 0
    hurtSWaiter = 0
    song.play()
    scoreNum = 0
    sScore.innerText = '0'
    clearInterval(scoreCounter)
    setTimeout(() => {
        scoreCounter = setInterval(() => {
            scoreNum++
            sScore.innerText = scoreNum
            if (scoreNum != 0 && scoreNum % 100 == 0) {
                let biomeType = Math.floor(Math.random() * 11)
                soloPage.className = ''
                soloPage.className = `biome${biomeType}`
            }
        }, 500);
    }, 1)
    plusSpeed = 0
    playerPXPosi = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    if (challengeType = 'extreme') {
        plusSpeed = 0.5
        lives1p = 20
        song.pause()
        song.currentTime = 0
        soloXtremeSong.play()
        soloXtremeSong.currentTime = 0
    }
})

document.getElementById('soloConfig').addEventListener('click', () => {
    lastPage = 2
    pageType = 5
    soloPage.style.opacity = '0'
    setTimeout(() => {
        soloPage.removeAttribute('style')
        settingsPage.style.display = 'block'
        settingsSong.play()
        document.getElementById('settingsHome').className = 'returnGame'
    }, 500);
})

document.getElementById('soloDevKeys').addEventListener('click', () => {
    lastPage = 2
    pageType = 7
    soloPage.style.opacity = '0'
    setTimeout(() => {
        soloPage.removeAttribute('style')
        devKeysCentralPage.style.display = 'block'
        devKeysCentralSong.play()
        document.getElementById('DKCHome').className = 'returnGame'
    }, 500);
})
//End Pause Controls
//End Pause Game

//Clear Slot
function clearSlotSolo() {
    shieldSlot = 0
    acceleratorSlot = 0
    relaxSlot = 0
    fullHealSlot = 0
    healSlot = 0
    displaySlotsSolo()
}
//End Clear Slot

//Relax Function
function relaxWithSuccess() {
    plusSpeed = plusSpeed - 0.25
    document.getElementById('plusSpeedAlert').innerText = `${plusSpeed * 100}%`
    player.classList.remove('relaxing')
    meteor1.style.animationPlayState = 'running'
    meteor2.style.animationPlayState = 'running'
    meteor3.style.animationPlayState = 'running'
    meteor4.style.animationPlayState = 'running'
    meteor5.style.animationPlayState = 'running'
    meteor6.style.animationPlayState = 'running'
    meteor7.style.animationPlayState = 'running'
    boostItem.style.animationPlayState = 'running'
    document.getElementById('gameBckg').style.animationPlayState = 'running'
    relaxStts = false
}

//End Relax Function

//Sort Meteors

meteor1.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let speedNum = Math.floor((Math.random() * 3) + 3)
    let typeOf1 = Math.floor((Math.random() * 3) + 1)
    if (acceleratorP1) {
        speedNum--
    }
    if (plusSpeed > 0) {
        speedNum = speedNum - plusSpeed
    }
    if (speedNum <= 0) {
        speedNum = 0.5
    }
    meteor1.removeAttribute('class')
    meteor1.className = 'meteor'
    meteor1.classList.add(`mt${typeOf1}`)
    randomNum = parseInt(randomNum)
    meteor1.style.top = `${randomNum}%`
    meteor1.style.display = 'none'
    setTimeout(() => {
        meteor1.style.display = 'block'
        meteor1.style.animationDuration = `${speedNum}s`
    }, 1);
})

meteor2.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let speedNum = Math.floor((Math.random() * 3) + 3)
    typeOf2 = Math.floor((Math.random() * 3) + 1)
    if (acceleratorP1) {
        speedNum--
    }
    if (plusSpeed > 0) {
        speedNum = speedNum - plusSpeed
    }
    if (speedNum <= 0) {
        speedNum = 0.5
    }
    meteor2.removeAttribute('class')
    meteor2.className = 'meteor'
    meteor2.classList.add(`mt${typeOf2}`)
    randomNum = parseInt(randomNum)
    meteor2.style.top = `${randomNum}%`
    meteor2.style.display = 'none'
    setTimeout(() => {
        meteor2.style.display = 'block'
        meteor2.style.animationDuration = `${speedNum}s`
    }, 1);
})

meteor3.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let speedNum = Math.floor((Math.random() * 3) + 3)
    typeOf3 = Math.floor((Math.random() * 3) + 1)
    if (acceleratorP1) {
        speedNum--
    }
    if (plusSpeed > 0) {
        speedNum = speedNum - plusSpeed
    }
    if (speedNum <= 0) {
        speedNum = 0.5
    }
    meteor3.removeAttribute('class')
    meteor3.className = 'meteor'
    meteor3.classList.add(`mt${typeOf3}`)
    randomNum = parseInt(randomNum)
    meteor3.style.top = `${randomNum}%`
    meteor3.style.display = 'none'
    setTimeout(() => {
        meteor3.style.display = 'block'
        meteor3.style.animationDuration = `${speedNum}s`
    }, 1);
})

meteor4.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let speedNum = Math.floor((Math.random() * 3) + 3)
    typeOf4 = Math.floor((Math.random() * 3) + 1)
    if (acceleratorP1) {
        speedNum--
    }
    if (plusSpeed > 0) {
        speedNum = speedNum - plusSpeed
    }
    if (speedNum <= 0) {
        speedNum = 0.5
    }
    meteor4.removeAttribute('class')
    meteor4.className = 'meteor'
    meteor4.classList.add(`mt${typeOf4}`)
    randomNum = parseInt(randomNum)
    meteor4.style.top = `${randomNum}%`
    meteor4.style.display = 'none'
    setTimeout(() => {
        meteor4.style.display = 'block'
        meteor4.style.animationDuration = `${speedNum}s`
    }, 1);
})

meteor5.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let speedNum = Math.floor((Math.random() * 3) + 3)
    typeOf5 = Math.floor((Math.random() * 3) + 1)
    if (acceleratorP1) {
        speedNum--
    }
    if (plusSpeed > 0) {
        speedNum = speedNum - plusSpeed
    }
    if (speedNum <= 0) {
        speedNum = 0.5
    }
    meteor5.removeAttribute('class')
    meteor5.className = 'meteor'
    meteor5.classList.add(`mt${typeOf5}`)
    randomNum = parseInt(randomNum)
    meteor5.style.top = `${randomNum}%`
    meteor5.style.display = 'none'
    setTimeout(() => {
        meteor5.style.display = 'block'
        meteor5.style.animationDuration = `${speedNum}s`
    }, 1);
})

meteor6.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let speedNum = Math.floor((Math.random() * 3) + 3)
    typeOf6 = Math.floor((Math.random() * 3) + 1)
    if (acceleratorP1) {
        speedNum--
    }
    if (plusSpeed > 0) {
        speedNum = speedNum - plusSpeed
    }
    if (speedNum <= 0) {
        speedNum = 0.5
    }
    meteor6.removeAttribute('class')
    meteor6.className = 'meteor'
    meteor6.classList.add(`mt${typeOf6}`)
    randomNum = parseInt(randomNum)
    meteor6.style.top = `${randomNum}%`
    meteor6.style.display = 'none'
    setTimeout(() => {
        meteor6.style.display = 'block'
        meteor6.style.animationDuration = `${speedNum}s`
    }, 1);
})

meteor7.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let speedNum = Math.floor((Math.random() * 3) + 3)
    typeOf7 = Math.floor((Math.random() * 3) + 1)
    if (acceleratorP1) {
        speedNum--
    }
    if (plusSpeed > 0) {
        speedNum = speedNum - plusSpeed
    }
    if (speedNum <= 0) {
        speedNum = 0.5
    }
    meteor7.removeAttribute('class')
    meteor7.className = 'meteor'
    meteor7.classList.add(`mt${typeOf7}`)
    randomNum = parseInt(randomNum)
    meteor7.style.top = `${randomNum}%`
    meteor7.style.display = 'none'
    setTimeout(() => {
        meteor7.style.display = 'block'
        meteor7.style.animationDuration = `${speedNum}s`
    }, 1);
})
//End Sort Meteors

//Sort Boost 
boostItem.addEventListener("animationiteration", () => {
    boostOn = false
    let baseSpeed = 10
    boostItem.style.opacity = '0'
    if (challengeType == 'extreme') {
        let appearBoost = Math.floor((Math.random() * 5))
    if (appearBoost == 2) {
        if (plusSpeed > 0) {
            baseSpeed = baseSpeed - plusSpeed
        }
        boostItem.style.display = 'none'
        setTimeout(() => {
            boostItem.style.display = 'block'
        }, 1);
        let boostTop = Math.random() * 84
        boostStyle = Math.floor(Math.random() * 5)
        boostTop = parseInt(boostTop)
        boostItem.style.opacity = '1'
        boostItem.style.top = `${boostTop}%`
        boostItem.style.animationDuration = `${baseSpeed}s`
        boostOn = true
        boostItem.removeAttribute('class')
        boostItem.className = 'boost'
        if (boostStyle == 0) {
            boostItem.classList.add('shieldBoost')
        }
        if (boostStyle == 1) {
            boostItem.classList.add('lifeBoost')
        }
        if (boostStyle == 2) {
            boostItem.classList.add('SlifeBoost')
        }

        if (boostStyle == 3) {
            boostItem.classList.add('acceleratorBoost')
        }

        if (boostStyle == 4) {
            boostItem.classList.add('relaxBoost')
        }
    } else {
        boostItem.style.opacity = '0'
        boostOn = false
    }
    } else {
        let appearBoost = Math.floor((Math.random() * 2))
    if (appearBoost != 0) {
        if (plusSpeed > 0) {
            baseSpeed = baseSpeed - plusSpeed
        }
        boostItem.style.display = 'none'
        setTimeout(() => {
            boostItem.style.display = 'block'
        }, 1);
        let boostTop = Math.random() * 84
        boostStyle = Math.floor(Math.random() * 5)
        boostTop = parseInt(boostTop)
        boostItem.style.opacity = '1'
        boostItem.style.top = `${boostTop}%`
        boostItem.style.animationDuration = `${baseSpeed}s`
        boostOn = true
        boostItem.removeAttribute('class')
        boostItem.className = 'boost'
        if (boostStyle == 0) {
            boostItem.classList.add('shieldBoost')
        }
        if (boostStyle == 1) {
            boostItem.classList.add('lifeBoost')
        }
        if (boostStyle == 2) {
            boostItem.classList.add('SlifeBoost')
        }

        if (boostStyle == 3) {
            boostItem.classList.add('acceleratorBoost')
        }

        if (boostStyle == 4) {
            boostItem.classList.add('relaxBoost')
        }
    } else {
        boostItem.style.opacity = '0'
        boostOn = false
    }
    }
})
//End Sort Boost

//Check Lives

function checkLive1p() {
    let noLifeMode = localStorage.getItem('noLife')
    if (noLifeMode != 1) {
        if (lives1p == 100) {
            lives1pAlert.removeAttribute('class')
            lives1pAlert.className = 'hearts'
            lives1pAlert.classList.add('h100')
        }

        if (lives1p == 90 || lives1p == 95) {
            lives1pAlert.removeAttribute('class')
            lives1pAlert.className = 'hearts'
            lives1pAlert.classList.add('h90')
        }

        if (lives1p == 80 || lives1p == 85) {
            lives1pAlert.removeAttribute('class')
            lives1pAlert.className = 'hearts'
            lives1pAlert.classList.add('h80')
        }

        if (lives1p == 70 || lives1p == 75) {
            lives1pAlert.removeAttribute('class')
            lives1pAlert.className = 'hearts'
            lives1pAlert.classList.add('h70')
        }

        if (lives1p == 60 || lives1p == 65) {
            lives1pAlert.removeAttribute('class')
            lives1pAlert.className = 'hearts'
            lives1pAlert.classList.add('h60')
        }

        if (lives1p == 50 || lives1p == 55) {
            lives1pAlert.removeAttribute('class')
            lives1pAlert.className = 'hearts'
            lives1pAlert.classList.add('h50')
        }

        if (lives1p == 40 || lives1p == 45) {
            lives1pAlert.removeAttribute('class')
            lives1pAlert.className = 'hearts'
            lives1pAlert.classList.add('h40')
        }

        if (lives1p == 30 || lives1p == 35) {
            lives1pAlert.removeAttribute('class')
            lives1pAlert.className = 'hearts'
            lives1pAlert.classList.add('h30')
        }

        if (lives1p == 20 || lives1p == 25) {
            lives1pAlert.removeAttribute('class')
            lives1pAlert.className = 'hearts'
            lives1pAlert.classList.add('h20')
        }

        if (lives1p == 10 || lives1p == 15) {
            lives1pAlert.removeAttribute('class')
            lives1pAlert.className = 'hearts'
            lives1pAlert.classList.add('h10')
        }

        if (lives1p == 5) {
            lives1pAlert.removeAttribute('class')
            lives1pAlert.className = 'hearts'
            lives1pAlert.classList.add('h0')
        }


        if (lives1p <= 0) {
            player.classList.remove('hurted')
            player.classList.remove('hShield')
            player.classList.add('deathAnim')
            kill = true
            clearInterval(acceleratorWaiter)
            clearInterval(hurtSWaiter)
            clearInterval(scoreCounter)
            clearInterval(addSpeed)
            plusSpeed = 0
            setTimeout(() => {
                soloPage.style.opacity = '0'
                player.style.top = '120%'
                setTimeout(() => {
                    disPage.style.display = 'none'
                    homePage.style.display = 'none'
                    soloPage.style.display = 'none'
                    soloScorePage.style.display = 'block'
                    soloPage.style.opacity = '1'
                    hSong.pause()
                    hSong.currentTime = 0
                    homeSong.play()
                    song.pause()
                    song.currentTime = 0
                    soloXtremeSong.pause()
                    soloXtremeSong.currentTime = 0
                    player.classList.remove('deathAnim')
                    player.removeAttribute('style')
                    playerPosi = 45
                    kill = false
                    sScore.innerText = '0'
                    acceleratorTimer = 0
                    hurtSWaiter = 0
                    finalScore = scoreNum + ((shieldSlot + acceleratorSlot + relaxSlot + fullHealSlot + healSlot) * 10)
                    document.getElementById('distance').innerText = scoreNum
                    document.getElementById('slots').innerText = (shieldSlot + acceleratorSlot + relaxSlot + fullHealSlot + healSlot)
                    document.getElementById('finalScore').innerText = finalScore
                    finalScore = parseInt(finalScore)
                    let localMoney = localStorage.getItem('money')
                    localMoney = parseInt(localMoney)
                    let actualMoney = localMoney + finalScore
                    localStorage.setItem('money', actualMoney)
                    let highScore = localStorage.getItem('highScore')
                    document.getElementById('moneyAlert').innerText = actualMoney
                    if (finalScore > highScore) {
                        document.getElementById('soloHighAlert').style.display = 'block'
                        localStorage.setItem('highScore', finalScore)
                        document.getElementById('highScore').innerText = finalScore
                    } else {
                        document.getElementById('highScore').innerText = highScore
                    }
                }, 500);
            }, 3000);
        }
    } else {
        console.log('noLifeMode')
    }
}
//End Check Lives


//Check Meteor Type
setInterval(() => {
    if (typeOf1 == 1) {
        mt1Type = 40
        if (screenWidth <= 1366) {
            mt1Type = 32
        }
    } else if (typeOf1 == 2) {
        mt1Type = 62
        if (screenWidth <= 1366) {
            mt1Type = 50
        }
    } else if (typeOf1 == 3) {
        mt1Type = 125
        if (screenWidth <= 1366) {
            mt1Type = 100
        }
    }

    if (typeOf2 == 1) {
        mt2Type = 40
        if (screenWidth <= 1366) {
            mt2Type = 32
        }
    } else if (typeOf2 == 2) {
        mt2Type = 62
        if (screenWidth <= 1366) {
            mt2Type = 50
        }
    } else if (typeOf2 == 3) {
        mt2Type = 125
        if (screenWidth <= 1366) {
            mt2Type = 100
        }
    }

    if (typeOf3 == 1) {
        mt3Type = 40
        if (screenWidth <= 1366) {
            mt3Type = 32
        }
    } else if (typeOf3 == 2) {
        mt3Type = 62
        if (screenWidth <= 1366) {
            mt3Type = 50
        }
    } else if (typeOf3 == 3) {
        mt3Type = 125
        if (screenWidth <= 1366) {
            mt3Type = 100
        }
    }

    if (typeOf4 == 1) {
        mt4Type = 40
        if (screenWidth <= 1366) {
            mt4Type = 32
        }
    } else if (typeOf4 == 2) {
        mt4Type = 62
        if (screenWidth <= 1366) {
            mt4Type = 50
        }
    } else if (typeOf4 == 3) {
        mt4Type = 125
        if (screenWidth <= 1366) {
            mt4Type = 100
        }
    }

    if (typeOf5 == 1) {
        mt5Type = 40
        if (screenWidth <= 1366) {
            mt5Type = 32
        }
    } else if (typeOf5 == 2) {
        mt5Type = 62
        if (screenWidth <= 1366) {
            mt5Type = 50
        }
    } else if (typeOf5 == 3) {
        mt5Type = 125
        if (screenWidth <= 1366) {
            mt5Type = 100
        }
    }

    if (typeOf6 == 1) {
        mt6Type = 40
        if (screenWidth <= 1366) {
            mt6Type = 32
        }
    } else if (typeOf6 == 2) {
        mt6Type = 62
        if (screenWidth <= 1366) {
            mt6Type = 50
        }
    } else if (typeOf6 == 3) {
        mt6Type = 125
        if (screenWidth <= 1366) {
            mt6Type = 100
        }
    }

    if (typeOf7 == 1) {
        mt7Type = 40
        if (screenWidth <= 1366) {
            mt7Type = 32
        }
    } else if (typeOf7 == 2) {
        mt7Type = 62
        if (screenWidth <= 1366) {
            mt7Type = 50
        }
    } else if (typeOf7 == 3) {
        mt7Type = 125
        if (screenWidth <= 1366) {
            mt7Type = 100
        }
    }
}, 1);

//Check if meteor hit player
setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor1).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(meteor1).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - mt1Type && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (hurtShield || gamePaused || acceleratorP1) {

        } else {
            player.removeAttribute('class')
            player.className = 'player'
            if (shield == false) {
                player.classList.add('hurted')
                player.classList.add('hShield')
                hSong.play()
                hurtShield = true
                hurtAnim = true
                setTimeout(() => {
                    player.classList.remove('hurted')
                    hurtAnim = false
                }, 1000);
                hurtSWaiter = setInterval(() => {
                    hurtShieldTimer++
                    if (hurtShieldTimer == 5) {
                        hurtShield = false
                        player.classList.remove('hShield')
                        hurtShieldTimer = 0
                        clearInterval(hurtSWaiter)
                    }
                }, 1000);
                if (lives1p > 10) {
                    lives1p = lives1p - 10
                } else {
                    lives1p = lives1p - 5
                }

                checkLive1p()
            } else {
                shieldActive = false
                setTimeout(() => {
                    shield = false
                }, 1000);
            }
        }
    }
}, 1);

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor2).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(meteor2).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - mt2Type && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (hurtShield || gamePaused || acceleratorP1) {
        } else {
            player.removeAttribute('class')
            player.className = 'player'
            if (shield == false) {
                player.classList.add('hurted')
                player.classList.add('hShield')
                hSong.play()
                hurtShield = true
                hurtAnim = true
                setTimeout(() => {
                    player.classList.remove('hurted')
                    hurtAnim = false
                }, 1000);
                hurtSWaiter = setInterval(() => {
                    hurtShieldTimer++
                    if (hurtShieldTimer == 5) {
                        hurtShield = false
                        player.classList.remove('hShield')
                        hurtShieldTimer = 0
                        clearInterval(hurtSWaiter)
                    }
                }, 1000);
                if (lives1p > 10) {
                    lives1p = lives1p - 10
                } else {
                    lives1p = lives1p - 5
                }
                checkLive1p()
            } else {
                shieldActive = false
                setTimeout(() => {
                    shield = false
                }, 1000);
            }
        }
    }
}, 1);

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor3).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(meteor3).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - mt3Type && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (hurtShield || gamePaused || acceleratorP1) {
        } else {
            player.removeAttribute('class')
            player.className = 'player'
            if (shield == false) {
                player.classList.add('hurted')
                player.classList.add('hShield')
                hSong.play()
                hurtShield = true
                hurtAnim = true
                setTimeout(() => {
                    player.classList.remove('hurted')
                    hurtAnim = false
                }, 1000);
                hurtSWaiter = setInterval(() => {
                    hurtShieldTimer++
                    if (hurtShieldTimer == 5) {
                        hurtShield = false
                        player.classList.remove('hShield')
                        hurtShieldTimer = 0
                        clearInterval(hurtSWaiter)
                    }
                }, 1000);
                if (lives1p > 10) {
                    lives1p = lives1p - 10
                } else {
                    lives1p = lives1p - 5
                }
                checkLive1p()
            } else {
                shieldActive = false
                setTimeout(() => {
                    shield = false
                }, 1000);
            }
        }
    }
}, 1);

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor4).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(meteor4).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - mt4Type && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (hurtShield || gamePaused || acceleratorP1) {
        } else {
            player.removeAttribute('class')
            player.className = 'player'
            if (shield == false) {
                player.classList.add('hurted')
                player.classList.add('hShield')
                hSong.play()
                hurtShield = true
                hurtAnim = true
                setTimeout(() => {
                    player.classList.remove('hurted')
                    hurtAnim = false
                }, 1000);
                hurtSWaiter = setInterval(() => {
                    hurtShieldTimer++
                    if (hurtShieldTimer == 5) {
                        hurtShield = false
                        player.classList.remove('hShield')
                        hurtShieldTimer = 0
                        clearInterval(hurtSWaiter)
                    }
                }, 1000);
                if (lives1p > 10) {
                    lives1p = lives1p - 10
                } else {
                    lives1p = lives1p - 5
                }
                checkLive1p()
            } else {
                shieldActive = false
                setTimeout(() => {
                    shield = false
                }, 1000);
            }
        }
    }
}, 1);

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor5).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(meteor5).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - mt5Type && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (hurtShield || gamePaused || acceleratorP1) {
        } else {
            player.removeAttribute('class')
            player.className = 'player'
            if (shield == false) {
                player.classList.add('hurted')
                player.classList.add('hShield')
                hSong.play()
                hurtShield = true
                hurtAnim = true
                setTimeout(() => {
                    player.classList.remove('hurted')
                    hurtAnim = false
                }, 1000);
                hurtSWaiter = setInterval(() => {
                    hurtShieldTimer++
                    if (hurtShieldTimer == 5) {
                        hurtShield = false
                        player.classList.remove('hShield')
                        hurtShieldTimer = 0
                        clearInterval(hurtSWaiter)
                    }
                }, 1000);
                if (lives1p > 10) {
                    lives1p = lives1p - 10
                } else {
                    lives1p = lives1p - 5
                }
                checkLive1p()
            } else {
                shieldActive = false
                setTimeout(() => {
                    shield = false
                }, 1000);
            }
        }
    }
}, 1);

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor6).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(meteor6).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - mt6Type && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (hurtShield || gamePaused || acceleratorP1) {
        } else {
            player.removeAttribute('class')
            player.className = 'player'
            if (shield == false) {
                player.classList.add('hurted')
                player.classList.add('hShield')
                hSong.play()
                hurtShield = true
                hurtAnim = true
                setTimeout(() => {
                    player.classList.remove('hurted')
                    hurtAnim = false
                }, 1000);
                hurtSWaiter = setInterval(() => {
                    hurtShieldTimer++
                    if (hurtShieldTimer == 5) {
                        hurtShield = false
                        player.classList.remove('hShield')
                        hurtShieldTimer = 0
                        clearInterval(hurtSWaiter)
                    }
                }, 1000);
                if (lives1p > 10) {
                    lives1p = lives1p - 10
                } else {
                    lives1p = lives1p - 5
                }
                checkLive1p()
            } else {
                shieldActive = false
                setTimeout(() => {
                    shield = false
                }, 1000);
            }
        }
    }
}, 1);

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor7).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(meteor7).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - mt7Type && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (hurtShield || gamePaused || acceleratorP1) {
        } else {
            player.removeAttribute('class')
            player.className = 'player'
            if (shield == false) {
                player.classList.add('hurted')
                player.classList.add('hShield')
                hSong.play()
                hurtShield = true
                hurtAnim = true
                setTimeout(() => {
                    player.classList.remove('hurted')
                    hurtAnim = false
                }, 1000);
                hurtSWaiter = setInterval(() => {
                    hurtShieldTimer++
                    if (hurtShieldTimer == 5) {
                        hurtShield = false
                        player.classList.remove('hShield')
                        hurtShieldTimer = 0
                        clearInterval(hurtSWaiter)
                    }
                }, 1000);
                if (lives1p > 10) {
                    lives1p = lives1p - 10
                } else {
                    lives1p = lives1p - 5
                }
                checkLive1p()
            } else {
                shieldActive = false
                setTimeout(() => {
                    shield = false
                }, 1000);
            }
        }
    }
}, 1);
//End check meteor

//Beta tester bug report: Shield "active" but not working - Correction
setInterval(() => {
    if (!shieldActive) {
        player.classList.remove('shield')
    }
}, 10);

//Check if boosts hit player
setInterval(() => {
    let boostTop = boostItem.style.top
    boostTop = parseInt(boostTop)
    let boostLeft = parseInt(
        window.getComputedStyle(boostItem).getPropertyValue("left")
    );
    if ((boostTop <= playerPosi || boostTop >= playerPosi) && (boostLeft <= 250 && boostLeft >= 150)) {
        if (boostTop >= playerPosi + 15 || boostTop <= playerPosi - 8 || gamePaused || !boostOn || kill) {
        } else {

            if (!soloSlots) {
                if (boostStyle == 0) {
                    if (!shieldActive) {
                        player.classList.add('shield')
                        shield = true
                        shieldActive = true
                        boostItem.style.opacity = '0'
                        boostOn = false
                    } else {
                        shieldSlot++
                        boostItem.style.opacity = '0'
                        boostOn = false
                    } trail
                    if (acceleratorP1 || relaxStts) {
                        player.classList.remove('shield')
                        shield = true
                        shieldActive = true
                        boostItem.style.opacity = '0'
                        boostOn = false
                    }
                } else if (boostStyle == 1) {
                    boostItem.style.opacity = '0'
                    boostOn = false

                    if (challengeType == null) {
                        if (lives1p < 90) {
                            lives1p = lives1p + 20
                            if (lives1p > 100) {
                                lives1p = 100
                            }
                        } else {
                            lives1p = lives1p + 20
                            healSlot++
                            if (lives1p > 100) {
                                lives1p = 100
                            }
                        }
                    } else {
                        if (lives1p < 20) {
                            lives1p = lives1p + 5
                            if (lives1p > 20) {
                                lives1p = 20
                            }
                        } else {
                            lives1p = lives1p + 5
                            healSlot++
                            if (lives1p > 20) {
                                lives1p = 20
                            }
                        }
                    }

                    checkLive1p()
                } else if (boostStyle == 2) {
                    boostItem.style.opacity = '0'
                    boostOn = false
                    if (lives1p < 100) {
                        lives1p = 100
                        checkLive1p()
                        if (challengeType == 'extreme') {
                            lives1p = 20
                            checkLive1p()
                        }
                    } else {
                        fullHealSlot++
                    }
                } else if (boostStyle == 3) {
                    boostItem.style.opacity = '0'
                    boostOn = false
                    if (!acceleratorP1) {
                        if (shieldActive) {
                            player.classList.remove('shield')
                        }
                        acceleratorP1 = true
                        document.getElementById('gameBckg').style.display = 'none'
                        invencible.style.display = 'block'
                        //.style.display = 'block'

                        trail = setInterval(() => {
                            let trailElm = document.createElement('div')
                            trailElm.setAttribute('class', 'trail')
                            trailElm.setAttribute('style', `top: ${playerPosi}%`)
                            trailElm.addEventListener("animationend", () => {
                                trailElm.remove()
                            })
                            soloPage.insertAdjacentElement('beforeend', trailElm)
                        }, 100);

                        document.getElementById('gameBckg').style.animationDuration = '7.5s'
                        setTimeout(() => {
                            document.getElementById('gameBckg').style.display = 'block'
                        }, 1);
                        plusSpeed = plusSpeed + 0.25
                        document.getElementById('plusSpeedAlert').innerText = `${plusSpeed * 100}%`
                        acceleratorWaiter = setInterval(() => {
                            acceleratorTimer++
                            if (acceleratorTimer >= 10 && acceleratorTimer < 15) {
                                document.getElementById('acceleratorAlert').classList.add('almostEnd')
                            }
                            if (acceleratorTimer == 15) {
                                clearInterval(acceleratorWaiter)
                                acceleratorP1 = false
                                acceleratorTimer = 0
                                invencible.removeAttribute('style')
                                //trail.removeAttribute('style')

                                clearInterval(trail)

                                if (shieldActive) {
                                    player.classList.add('shield')
                                }
                                document.getElementById('gameBckg').style.display = 'none'
                                setTimeout(() => {
                                    document.getElementById('gameBckg').removeAttribute('style')
                                }, 1);
                                document.getElementById('acceleratorAlert').classList.remove('almostEnd')
                            }
                        }, 1000);
                    } else {
                        acceleratorSlot++
                    }
                } else if (boostStyle == 4) {
                    boostItem.style.opacity = '0'
                    boostOn = false
                    if (plusSpeed < 1 || !acceleratorP1 || !relaxStts) {
                        relaxSlot++
                    } else {
                        player.classList.add('relaxing')
                        relaxStts = true
                        meteor1.style.animationPlayState = 'paused'
                        meteor2.style.animationPlayState = 'paused'
                        meteor3.style.animationPlayState = 'paused'
                        meteor4.style.animationPlayState = 'paused'
                        meteor5.style.animationPlayState = 'paused'
                        meteor6.style.animationPlayState = 'paused'
                        meteor7.style.animationPlayState = 'paused'
                        boostItem.style.animationPlayState = 'paused'
                        document.getElementById('gameBckg').style.animationPlayState = 'paused'
                        setTimeout(() => {
                            plusSpeed = plusSpeed - 0.25
                            document.getElementById('plusSpeedAlert').innerText = `${plusSpeed * 100}%`
                            player.classList.remove('relaxing')
                            meteor1.style.animationPlayState = 'running'
                            meteor2.style.animationPlayState = 'running'
                            meteor3.style.animationPlayState = 'running'
                            meteor4.style.animationPlayState = 'running'
                            meteor5.style.animationPlayState = 'running'
                            meteor6.style.animationPlayState = 'running'
                            meteor7.style.animationPlayState = 'running'
                            boostItem.style.animationPlayState = 'running'
                            document.getElementById('gameBckg').style.animationPlayState = 'running'
                            relaxStts = false
                        }, 2000);
                    }
                }
            } else {
                if (boostStyle == 0) {
                    shieldSlot++
                    boostItem.style.opacity = '0'
                    boostOn = false
                } else if (boostStyle == 1) {
                    healSlot++
                    boostItem.style.opacity = '0'
                    boostOn = false
                } else if (boostStyle == 2) {
                    fullHealSlot++
                    boostItem.style.opacity = '0'
                    boostOn = false
                } else if (boostStyle == 3) {
                    acceleratorSlot++
                    boostItem.style.opacity = '0'
                    boostOn = false
                } else if (boostStyle == 4) {
                    relaxSlot++
                    boostItem.style.opacity = '0'
                    boostOn = false
                }
            }
            displaySlotsSolo()
        }
    }
}, 1);
//End check boost

//New Controls : Solo
function soloKeyDown(e) {
    let keyType = e.key
    keysSolo[keyType] = true
}

function soloKeyUp(e) {
    keysSolo = []
}

let soloControls = setInterval(() => {
    moveChar()
}, 40);
function moveChar() {
    if (keysSolo['ArrowUp'] == true) {
        if (!hurtAnim && !relaxStts) {
            playerPosi--
            if (playerPosi < 0) {
                playerPosi = 0
            }
            player.style.top = `${playerPosi}%`
            player.classList.add('upping')
            setTimeout(() => {
                playerPXPosi = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
            }, 1);
        } else {
            keysSolo['ArrowUp'] = false
        }
    }
    if (keysSolo['ArrowDown'] == true) {
        if (!hurtAnim && !relaxStts) {
            playerPosi++
            if (playerPosi >= 84) {
                playerPosi = 84
            }
            player.style.top = `${playerPosi}%`
            player.classList.add('falling')
            setTimeout(() => {
                playerPXPosi = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
            }, 1);
        } else {
            keysSolo['ArrowDown'] = false
        }
    }
}
//End New Controls : Solo

//Mobile Controls : Solo
mControlUp.addEventListener('touchstart', () => {
    playerPosi--
    if (playerPosi < 0) {
        playerPosi = 0
    }
    player.style.top = `${playerPosi}%`
    player.classList.add('upping')
    upHold = setInterval(() => {
        playerPosi--
        if (playerPosi < 0) {
            playerPosi = 0
        }
        player.style.top = `${playerPosi}%`
    }, 100)
})

mControlUp.addEventListener('touchend', () => {
    clearInterval(upHold)
    if (!gamePaused) {
        if (!hurtAnim) {
            player.removeAttribute('class')
            player.className = 'player'
            if (hurtShield) {
                player.classList.add('hShield')
            }
            if (shieldActive && acceleratorP1 == false) {
                player.classList.add('shield')
            }
            if (gamePaused) {
                player.classList.add('playerPaused')
            }
        }
    }
})

mControlDown.addEventListener('touchstart', () => {
    playerPosi++
    if (playerPosi >= 84) {
        playerPosi = 84
    }
    player.style.top = `${playerPosi}%`
    player.classList.add('falling')
    downHold = setInterval(() => {
        playerPosi++
        if (playerPosi >= 84) {
            playerPosi = 84
        }
        player.style.top = `${playerPosi}%`
    }, 100)
})

mControlDown.addEventListener('touchend', () => {
    clearInterval(downHold)
    if (!gamePaused) {
        if (!hurtAnim) {
            player.removeAttribute('class')
            player.className = 'player'
            if (hurtShield) {
                player.classList.add('hShield')
            }
            if (shieldActive && acceleratorP1 == false) {
                player.classList.add('shield')
            }
            if (gamePaused) {
                player.classList.add('playerPaused')
            }
        }
    }
})
//End Mobile Controls : Solo

// Plus speed real viewer
setInterval(() => {
    document.getElementById('plusSpeedAlert').innerText = `${plusSpeed * 100}%`
}, 1000);

// Plus speed real time speed song
setInterval(() => {
    if (plusSpeed >= 1) {
        if (challengeType == null) {
            song.playbackRate = 1.5;
        } else {
            soloXtremeSong.playbackRate = 1.5;
        }
    } else {
        if (challengeType == null) {
            song.playbackRate = 1;
        } else {
            soloXtremeSong.playbackRate = 1;
        }
    }
}, 1000);