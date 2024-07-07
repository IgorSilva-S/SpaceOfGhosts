document.getElementById('retHome').addEventListener('click', () => {
    duoRunPage.style.opacity = '0'
    setTimeout(() => {
        duoRunPage.removeAttribute('style')
        gameMPage.style.display = 'flex'
        duoRSong.currentTime = 0
        homeSong.currentTime = 0
        P1DRShieldSlot = 0
        P1DRGunSlot = 0
        P1DRInvSlot = 0
        P1DRHealSlot = 0
        P2DRShieldSlot = 0
        P2DRGunSlot = 0
        P2DRInvSlot = 0
        P2DRHealSlot = 0
        displaySlotsAllDuoR()
        p1Run.classList.remove('shield')
        p2Run.classList.remove('shield')
        p1RInv.style.display = 'none'
        p2RInv.style.display = 'none'
        p1RSA = false
        p2RSA = false
        p1RInvNum = 0
        p2RInvNum = 0
        p1RHSTimer = 0
        p2RHSTimer = 0
        p1RHS = false
        p2RHS = false
        p1Posi = 45
        p2Posi = 45
        p1Run.style.top = `${p1Posi}%`
        p2Run.style.top = `${p2Posi}%`
        homeSong.play()
        p1RHS = false
        p2RHS = false
        if (duoRunPaused) {
            pauseDuoRun()
        }
        setTimeout(() => {
            duoRSong.pause()
        }, 1);
        clearInterval(duoBiomeChanger)
    }, 500);
})

document.getElementById('duoRestart').addEventListener('click', () => {
    duoRunPage.style.display = 'none'
    setTimeout(() => {
        duoRunPage.style.display = 'flex'
    }, 1);
    duoRSong.pause()
    duoRSong.currentTime = 0
    p1Posi = 45
    p2Posi = 45
    P1DRShieldSlot = 0
    P1DRGunSlot = 0
    P1DRInvSlot = 0
    P1DRHealSlot = 0
    P2DRShieldSlot = 0
    P2DRGunSlot = 0
    P2DRInvSlot = 0
    P2DRHealSlot = 0
    displaySlotsAllDuoR()
    p1Run.classList.remove('shield')
    p2Run.classList.remove('shield')
    p1RInv.style.display = 'none'
    p2RInv.style.display = 'none'
    p1RSA = false
    p2RSA = false
    p1RInvNum = 0
    p2RInvNum = 0
    p1RHSTimer = 0
    p2RHSTimer = 0
    p1RHS = false
    p2RHS = false
    p1Run.style.top = `${p1Posi}%`
    p2Run.style.top = `${p2Posi}%`
    duoRSong.play()
    duoLiveP1 = 100
    duoLiveP2 = 100
    checkLiveDRun1()
    checkLiveDRun2()
    p1Run.removeAttribute('class')
    p1Run.className = 'player'
    p2Run.removeAttribute('class')
    p2Run.className = 'player'
    duoRSortMeteors()
    clearInterval(duoBiomeChanger)
    if (duoRunPaused) {
        pauseDuoRun()
    }
    setTimeout(() => {
        duoBiomeChanger = setInterval(() => {
            let biomeType = Math.floor(Math.random() * 11)
            duoRunPage.className = ''
            duoRunPage.className = `biome${biomeType}`
        }, 50000);
    }, 1);
})

document.getElementById('duoSettings').addEventListener('click', () => {
    lastPage = 3
    pageType = 5
    duoRunPage.style.opacity = '0'
    setTimeout(() => {
        duoRunPage.removeAttribute('style')
        settingsPage.style.display = 'block'
        settingsSong.play()
        document.getElementById('settingsHome').className = 'returnGame'
    }, 500);
})

document.getElementById('duoDevKeys').addEventListener('click', () => {
    lastPage = 3
    pageType = 7
    duoRunPage.style.opacity = '0'
    setTimeout(() => {
        duoRunPage.removeAttribute('style')
        devKeysCentralPage.style.display = 'block'
        devKeysCentralSong.play()
        document.getElementById('DKCHome').className = 'returnGame'
    }, 500);
})

function duoRunKeyDown(e) {
    let keyType = e.key
    keysDuoRun[keyType] = true
}

function duoRunKeyUp(e) {
    let keyType = e.key
    keysDuoRun[keyType] = false
}

function moveChars() {
    if (!duoRunPaused && !duoRunK1 && !duoRunK2) {
        if (keysDuoRun['ArrowUp'] == true && !p2RFire) {
            p2Posi--
            if (p2Posi < 0) {
                p2Posi = 0
            }
            p2Run.style.top = `${p2Posi}%`
            p2Run.classList.add('upping')
        }
        if (keysDuoRun['ArrowDown'] == true && !p2RFire) {
            p2Posi++
            if (p2Posi >= 84) {
                p2Posi = 84
            }
            p2Run.style.top = `${p2Posi}%`
            p2Run.classList.add('falling')
        }
        if (keysDuoRun['w'] == true || keysDuoRun['W'] == true && !p1RFire) {
            p1Posi--
            if (p1Posi < 0) {
                p1Posi = 0
            }
            p1Run.style.top = `${p1Posi}%`
            p1Run.classList.add('upping')
        }
        if (keysDuoRun['s'] == true || keysDuoRun['S'] == true && !p1RFire) {
            p1Posi++
            if (p1Posi >= 84) {
                p1Posi = 84
            }
            p1Run.style.top = `${p1Posi}%`
            p1Run.classList.add('falling')
        }
    }
}

let duoRunControls = setInterval(() => {
    moveChars()
}, 40);

function duoRSortMeteors() {
    //Player 1
    let P1TO1 = Math.floor((Math.random() * 3) + 1)
    let randTopP11 = Math.random() * 84
    let randSpeedP11 = Math.floor((Math.random() * 3) + 2)
    p1Rm1.removeAttribute('class')
    p1Rm1.className = 'meteor'
    p1Rm1.classList.add(`mt${P1TO1}`)
    p1Rm1.style.display = 'none'
    p1Rm1.style.animationDuration = `${randSpeedP11}s`
    p1Rm1.style.top = `${randTopP11}%`
    setTimeout(() => {
        p1Rm1.style.display = 'block'
    }, 1);
    let P1TO2 = Math.floor((Math.random() * 3) + 1)
    let randTopP12 = Math.random() * 84
    let randSpeedP12 = Math.floor((Math.random() * 3) + 2)
    p1Rm2.removeAttribute('class')
    p1Rm2.className = 'meteor'
    p1Rm2.classList.add(`mt${P1TO2}`)
    p1Rm2.style.display = 'none'
    p1Rm2.style.animationDuration = `${randSpeedP12}s`
    p1Rm2.style.top = `${randTopP12}%`
    setTimeout(() => {
        p1Rm2.style.display = 'block'
    }, 1);
    let P1TO3 = Math.floor((Math.random() * 3) + 1)
    let randTopP13 = Math.random() * 84
    let randSpeedP13 = Math.floor((Math.random() * 3) + 2)
    p1Rm3.removeAttribute('class')
    p1Rm3.className = 'meteor'
    p1Rm3.classList.add(`mt${P1TO3}`)
    p1Rm3.style.display = 'none'
    p1Rm3.style.animationDuration = `${randSpeedP13}s`
    p1Rm3.style.top = `${randTopP13}%`
    setTimeout(() => {
        p1Rm3.style.display = 'block'
    }, 1);
    let P1TO4 = Math.floor((Math.random() * 3) + 1)
    let randTopP14 = Math.random() * 84
    let randSpeedP14 = Math.floor((Math.random() * 3) + 2)
    p1Rm4.removeAttribute('class')
    p1Rm4.className = 'meteor'
    p1Rm4.classList.add(`mt${P1TO4}`)
    p1Rm4.style.display = 'none'
    p1Rm4.style.animationDuration = `${randSpeedP14}s`
    p1Rm4.style.top = `${randTopP14}%`
    setTimeout(() => {
        p1Rm4.style.display = 'block'
    }, 1);
    let P1TO5 = Math.floor((Math.random() * 3) + 1)
    let randTopP15 = Math.random() * 84
    let randSpeedP15 = Math.floor((Math.random() * 3) + 2)
    p1Rm5.removeAttribute('class')
    p1Rm5.className = 'meteor'
    p1Rm5.classList.add(`mt${P1TO5}`)
    p1Rm5.style.display = 'none'
    p1Rm5.style.animationDuration = `${randSpeedP15}s`
    p1Rm5.style.top = `${randTopP15}%`
    setTimeout(() => {
        p1Rm5.style.display = 'block'
    }, 1);

    //Player 2
    let P2TO1 = Math.floor((Math.random() * 3) + 1)
    let randTopP21 = Math.random() * 84
    let randSpeedP21 = Math.floor((Math.random() * 3) + 2)
    p2Rm1.removeAttribute('class')
    p2Rm1.className = 'meteor'
    p2Rm1.classList.add(`mt${P2TO1}`)
    p2Rm1.style.display = 'none'
    p2Rm1.style.animationDuration = `${randSpeedP21}s`
    p2Rm1.style.top = `${randTopP21}%`
    setTimeout(() => {
        p2Rm1.style.display = 'block'
    }, 1);
    let P2TO2 = Math.floor((Math.random() * 3) + 1)
    let randTopP22 = Math.random() * 84
    let randSpeedP22 = Math.floor((Math.random() * 3) + 2)
    p2Rm2.removeAttribute('class')
    p2Rm2.className = 'meteor'
    p2Rm2.classList.add(`mt${P2TO2}`)
    p2Rm2.style.display = 'none'
    p2Rm2.style.animationDuration = `${randSpeedP22}s`
    p2Rm2.style.top = `${randTopP22}%`
    setTimeout(() => {
        p2Rm2.style.display = 'block'
    }, 1);
    let P2TO3 = Math.floor((Math.random() * 3) + 1)
    let randTopP23 = Math.random() * 84
    let randSpeedP23 = Math.floor((Math.random() * 3) + 2)
    p2Rm3.removeAttribute('class')
    p2Rm3.className = 'meteor'
    p2Rm3.classList.add(`mt${P2TO3}`)
    p2Rm3.style.display = 'none'
    p2Rm3.style.animationDuration = `${randSpeedP23}s`
    p2Rm3.style.top = `${randTopP23}%`
    setTimeout(() => {
        p2Rm3.style.display = 'block'
    }, 1);
    let P2TO4 = Math.floor((Math.random() * 3) + 1)
    let randTopP24 = Math.random() * 84
    let randSpeedP24 = Math.floor((Math.random() * 3) + 2)
    p2Rm4.removeAttribute('class')
    p2Rm4.className = 'meteor'
    p2Rm4.classList.add(`mt${P2TO4}`)
    p2Rm4.style.display = 'none'
    p2Rm4.style.animationDuration = `${randSpeedP24}s`
    p2Rm4.style.top = `${randTopP24}%`
    setTimeout(() => {
        p2Rm4.style.display = 'block'
    }, 1);
    let P2TO5 = Math.floor((Math.random() * 3) + 1)
    let randTopP25 = Math.random() * 84
    let randSpeedP25 = Math.floor((Math.random() * 3) + 2)
    p2Rm5.removeAttribute('class')
    p2Rm5.className = 'meteor'
    p2Rm5.classList.add(`mt${P2TO5}`)
    p2Rm5.style.display = 'none'
    p2Rm5.style.animationDuration = `${randSpeedP25}s`
    p2Rm5.style.top = `${randTopP25}%`
    setTimeout(() => {
        p2Rm5.style.display = 'block'
    }, 1);
}

function pauseDuoRun() {
    if (!duoRunPaused) {
        p1Run.classList.add('playerPaused')
        p2Run.classList.add('playerPaused')
        p1Rm1.style.animationPlayState = 'paused'
        p1Rm2.style.animationPlayState = 'paused'
        p1Rm3.style.animationPlayState = 'paused'
        p1Rm4.style.animationPlayState = 'paused'
        p1Rm5.style.animationPlayState = 'paused'
        p2Rm1.style.animationPlayState = 'paused'
        p2Rm2.style.animationPlayState = 'paused'
        p2Rm3.style.animationPlayState = 'paused'
        p2Rm4.style.animationPlayState = 'paused'
        p2Rm5.style.animationPlayState = 'paused'
        p1RBoost.style.animationPlayState = 'paused'
        p2RBoost.style.animationPlayState = 'paused'
        document.getElementById('dRunBckg').style.animationPlayState = 'paused'
        document.getElementById('pauseDuoControls').style.top = '10px'
        duoRunPaused = true
        duoRSong.pause()
        p1RInv.classList.add('pinv')
        p2RInv.classList.add('pinv')
        clearInterval(p1RInvWaiter)
        clearInterval(p2RInvWaiter)
        clearInterval(p1RHSWaiter)
        clearInterval(p2RHSWaiter)
        clearInterval(duoBiomeChanger)
    } else {
        p1Rm1.style.animationPlayState = 'running'
        p1Rm2.style.animationPlayState = 'running'
        p1Rm3.style.animationPlayState = 'running'
        p1Rm4.style.animationPlayState = 'running'
        p1Rm5.style.animationPlayState = 'running'
        p2Rm1.style.animationPlayState = 'running'
        p2Rm2.style.animationPlayState = 'running'
        p2Rm3.style.animationPlayState = 'running'
        p2Rm4.style.animationPlayState = 'running'
        p2Rm5.style.animationPlayState = 'running'
        p1RBoost.style.animationPlayState = 'running'
        p2RBoost.style.animationPlayState = 'running'
        document.getElementById('dRunBckg').removeAttribute('style')
        document.getElementById('pauseDuoControls').removeAttribute('style')
        duoRunPaused = false
        duoRSong.play()
        p1RInv.classList.remove('pinv')
        p2RInv.classList.remove('pinv')
        if (duoRunP1Inv) {
            p1RInvWaiter = setInterval(() => {
                p1RInvNum++
                if (p1RInvNum == 30) {
                    p1RInv.removeAttribute('style')
                    duoRunP1Inv = false
                    clearInterval(p1RInvWaiter)
                    p1RInvNum = 0
                    if (p1RunShield) {
                        p1Run.classList.add('shield')
                    }
                }
            }, 1000);
        }
        if (duoRunP2Inv) {
            p2RInvWaiter = setInterval(() => {
                p2RInvNum++
                if (p2RInvNum == 30) {
                    p2RInv.removeAttribute('style')
                    duoRunP2Inv = false
                    clearInterval(p1RInvWaiter)
                    p2RInvNum = 0
                    if (p2RunShield) {
                        p2Run.classList.add('shield')
                    }
                }
            }, 1000);
        }
        if (p1RHS) {
            p1RHSWaiter = setInterval(() => {
                p1RHSTimer++
                if (p1RHSTimer == 5) {
                    p1RHS = false
                    p1Run.removeAttribute('class')
                    p1Run.className = 'player'
                    p1RHSTimer = 0
                    clearInterval(p1RHSWaiter)
                }
            }, 1000);
        }
        if (p2RHS) {
            p2RHSWaiter = setInterval(() => {
                p2RHSTimer++
                if (p2RHSTimer == 5) {
                    p2RHS = false
                    p2Run.removeAttribute('class')
                    p2Run.className = 'player'
                    p2RHSTimer = 0
                    clearInterval(p2RHSWaiter)
                }
            }, 1000);
        }
        duoBiomeChanger = setInterval(() => {
            let biomeType = Math.floor(Math.random() * 11)
            duoRunPage.className = ''
            duoRunPage.className = `biome${biomeType}`
        }, 50000);
    }
}

function checkLiveDRun1() {
    if (duoLiveP1 == 100) {
        duoRunLiveP1Alert.removeAttribute('class')
        duoRunLiveP1Alert.className = 'hearts'
        duoRunLiveP1Alert.classList.add('h100')
    }

    if (duoLiveP1 == 90 || duoLiveP1 == 95) {
        duoRunLiveP1Alert.removeAttribute('class')
        duoRunLiveP1Alert.className = 'hearts'
        duoRunLiveP1Alert.classList.add('h90')
    }

    if (duoLiveP1 == 80 || duoLiveP1 == 85) {
        duoRunLiveP1Alert.removeAttribute('class')
        duoRunLiveP1Alert.className = 'hearts'
        duoRunLiveP1Alert.classList.add('h80')
    }

    if (duoLiveP1 == 70 || duoLiveP1 == 75) {
        duoRunLiveP1Alert.removeAttribute('class')
        duoRunLiveP1Alert.className = 'hearts'
        duoRunLiveP1Alert.classList.add('h70')
    }

    if (duoLiveP1 == 60 || duoLiveP1 == 65) {
        duoRunLiveP1Alert.removeAttribute('class')
        duoRunLiveP1Alert.className = 'hearts'
        duoRunLiveP1Alert.classList.add('h60')
    }

    if (duoLiveP1 == 50 || duoLiveP1 == 55) {
        duoRunLiveP1Alert.removeAttribute('class')
        duoRunLiveP1Alert.className = 'hearts'
        duoRunLiveP1Alert.classList.add('h50')
    }

    if (duoLiveP1 == 40 || duoLiveP1 == 45) {
        duoRunLiveP1Alert.removeAttribute('class')
        duoRunLiveP1Alert.className = 'hearts'
        duoRunLiveP1Alert.classList.add('h40')
    }

    if (duoLiveP1 == 30 || duoLiveP1 == 35) {
        duoRunLiveP1Alert.removeAttribute('class')
        duoRunLiveP1Alert.className = 'hearts'
        duoRunLiveP1Alert.classList.add('h30')
    }

    if (duoLiveP1 == 20 || duoLiveP1 == 25) {
        duoRunLiveP1Alert.removeAttribute('class')
        duoRunLiveP1Alert.className = 'hearts'
        duoRunLiveP1Alert.classList.add('h20')
    }

    if (duoLiveP1 == 10 || duoLiveP1 == 15) {
        duoRunLiveP1Alert.removeAttribute('class')
        duoRunLiveP1Alert.className = 'hearts'
        duoRunLiveP1Alert.classList.add('h10')
    }

    if (duoLiveP1 == 5) {
        duoRunLiveP1Alert.removeAttribute('class')
        duoRunLiveP1Alert.className = 'hearts'
        duoRunLiveP1Alert.classList.add('h0')
    }
    if (duoLiveP1 <= 0) {
        p1Run.classList.remove('hurted')
        p1Run.classList.remove('hShield')
        p1Run.classList.add('deathAnim')
        duoRunK1 = true
        document.getElementById('playerNum').innerText = '2'
        let p1BoostSum = P1DRShieldSlot + P1DRGunSlot + P1DRInvSlot + P1DRHealSlot
        let p2BoostSum = P2DRShieldSlot + P2DRGunSlot + P2DRInvSlot + P2DRHealSlot
        let allSum = p1BoostSum + p2BoostSum
        document.getElementById('p1BstS').innerText = p1BoostSum
        document.getElementById('p2BstS').innerText = p2BoostSum
        document.getElementById('BstSumDuoRun').innerText = allSum
        setTimeout(() => {
            duoRunPage.style.opacity = '0'
            p1Run.style.top = '120%'
            setTimeout(() => {
                duoRunK2 = false
                duoRunK1 = false
                duoRunPage.removeAttribute('style')
                duoRunScorePage.style.display = 'block'
                duoRSong.pause()
                duoRSong.currentTime = 0
                homeSong.currentTime = 0
                p1Posi = 45
                p2Posi = 45
                p1Run.style.top = `${p1Posi}%`
                p2Run.style.top = `${p2Posi}%`
                homeSong.play()
                p1RHS = false
                p2RHS = false
                if (duoRunPaused) {
                    pauseDuoRun()
                }
            }, 500);
        }, 3000);
    }

}

function displaySlotsAllDuoR() {
    document.getElementById('p1RSS').innerText = P1DRShieldSlot
    document.getElementById('p1RGS').innerText = P1DRGunSlot
    document.getElementById('p1RIS').innerText = P1DRInvSlot
    document.getElementById('p1RLS').innerText = P1DRHealSlot
    document.getElementById('p2RSS').innerText = P2DRShieldSlot
    document.getElementById('p2RGS').innerText = P2DRGunSlot
    document.getElementById('p2RIS').innerText = P2DRInvSlot
    document.getElementById('p2RLS').innerText = P2DRHealSlot
}

function checkLiveDRun2() {
    if (duoLiveP2 == 100) {
        duoRunLiveP2Alert.removeAttribute('class')
        duoRunLiveP2Alert.className = 'hearts'
        duoRunLiveP2Alert.classList.add('h100')
    }

    if (duoLiveP2 == 90 || duoLiveP2 == 95) {
        duoRunLiveP2Alert.removeAttribute('class')
        duoRunLiveP2Alert.className = 'hearts'
        duoRunLiveP2Alert.classList.add('h90')
    }

    if (duoLiveP2 == 80 || duoLiveP2 == 85) {
        duoRunLiveP2Alert.removeAttribute('class')
        duoRunLiveP2Alert.className = 'hearts'
        duoRunLiveP2Alert.classList.add('h80')
    }

    if (duoLiveP2 == 70 || duoLiveP2 == 75) {
        duoRunLiveP2Alert.removeAttribute('class')
        duoRunLiveP2Alert.className = 'hearts'
        duoRunLiveP2Alert.classList.add('h70')
    }

    if (duoLiveP2 == 60 || duoLiveP2 == 65) {
        duoRunLiveP2Alert.removeAttribute('class')
        duoRunLiveP2Alert.className = 'hearts'
        duoRunLiveP2Alert.classList.add('h60')
    }

    if (duoLiveP2 == 50 || duoLiveP2 == 55) {
        duoRunLiveP2Alert.removeAttribute('class')
        duoRunLiveP2Alert.className = 'hearts'
        duoRunLiveP2Alert.classList.add('h50')
    }

    if (duoLiveP2 == 40 || duoLiveP2 == 45) {
        duoRunLiveP2Alert.removeAttribute('class')
        duoRunLiveP2Alert.className = 'hearts'
        duoRunLiveP2Alert.classList.add('h40')
    }

    if (duoLiveP2 == 30 || duoLiveP2 == 35) {
        duoRunLiveP2Alert.removeAttribute('class')
        duoRunLiveP2Alert.className = 'hearts'
        duoRunLiveP2Alert.classList.add('h30')
    }

    if (duoLiveP2 == 20 || duoLiveP2 == 25) {
        duoRunLiveP2Alert.removeAttribute('class')
        duoRunLiveP2Alert.className = 'hearts'
        duoRunLiveP2Alert.classList.add('h20')
    }

    if (duoLiveP2 == 10 || duoLiveP2 == 15) {
        duoRunLiveP2Alert.removeAttribute('class')
        duoRunLiveP2Alert.className = 'hearts'
        duoRunLiveP2Alert.classList.add('h10')
    }

    if (duoLiveP2 == 5) {
        duoRunLiveP2Alert.removeAttribute('class')
        duoRunLiveP2Alert.className = 'hearts'
        duoRunLiveP2Alert.classList.add('h0')
    }

    if (duoLiveP2 <= 0) {
        p2Run.classList.remove('hurted')
        p2Run.classList.remove('hShield')
        p2Run.classList.add('deathAnim')
        duoRunK2 = true
        document.getElementById('playerNum').innerText = '1'
        setTimeout(() => {
            duoRunPage.style.opacity = '0'
            p2Run.style.top = '120%'
            setTimeout(() => {
                duoRunPage.removeAttribute('style')
                duoRunK2 = false
                duoRunK1 = false
                duoRunScorePage.style.display = 'block'
                duoRSong.pause()
                duoRSong.currentTime = 0
                homeSong.currentTime = 0
                p1Posi = 45
                p2Posi = 45
                p1Run.style.top = `${p1Posi}%`
                p2Run.style.top = `${p2Posi}%`
                homeSong.play()
                p1RHS = false
                p2RHS = false
                if (duoRunPaused) {
                    pauseDuoRun()
                }
            }, 500);
        }, 3000);
    }

}

//Player 1 Meteor

p1Rm1.addEventListener('animationiteration', () => {
     P1TO1 = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p1Rm1.removeAttribute('class')
    p1Rm1.className = 'meteor'
    p1Rm1.classList.add(`mt${P1TO1}`)
    p1Rm1.style.display = 'none'
    p1Rm1.style.animationDuration = `${randSpeed}s`
    p1Rm1.style.top = `${randTop}%`
    setTimeout(() => {
        p1Rm1.style.display = 'block'
    }, 1);
})

p1Rm2.addEventListener('animationiteration', () => {
     P1TO2 = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p1Rm2.removeAttribute('class')
    p1Rm2.className = 'meteor'
    p1Rm2.classList.add(`mt${P1TO2}`)
    p1Rm2.style.display = 'none'
    p1Rm2.style.animationDuration = `${randSpeed}s`
    p1Rm2.style.top = `${randTop}%`
    setTimeout(() => {
        p1Rm2.style.display = 'block'
    }, 1);
})

p1Rm3.addEventListener('animationiteration', () => {
     P1TO3 = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p1Rm3.removeAttribute('class')
    p1Rm3.className = 'meteor'
    p1Rm3.classList.add(`mt${P1TO3}`)
    p1Rm3.style.display = 'none'
    p1Rm3.style.animationDuration = `${randSpeed}s`
    p1Rm3.style.top = `${randTop}%`
    setTimeout(() => {
        p1Rm3.style.display = 'block'
    }, 1);
})

p1Rm4.addEventListener('animationiteration', () => {
     P1TO4 = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p1Rm4.removeAttribute('class')
    p1Rm4.className = 'meteor'
    p1Rm4.classList.add(`mt${P1TO4}`)
    p1Rm4.style.display = 'none'
    p1Rm4.style.animationDuration = `${randSpeed}s`
    p1Rm4.style.top = `${randTop}%`
    setTimeout(() => {
        p1Rm4.style.display = 'block'
    }, 1);
})

p1Rm5.addEventListener('animationiteration', () => {
     P1TO5 = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p1Rm5.removeAttribute('class')
    p1Rm5.className = 'meteor'
    p1Rm5.classList.add(`mt${P1TO5}`)
    p1Rm5.style.display = 'none'
    p1Rm5.style.animationDuration = `${randSpeed}s`
    p1Rm5.style.top = `${randTop}%`
    setTimeout(() => {
        p1Rm5.style.display = 'block'
    }, 1);
})

//Player 1 Boost
p1RBoost.addEventListener('animationiteration', () => {
    p1RBoost.removeAttribute('class')
    p1RBoost.className = 'boost'
    let isAppear = Math.floor(Math.random() * 2)
    p1RBoost.style.opacity = '0'
    p1RBoostOn = false
    if (isAppear == 1) {
        p1RBoost.style.opacity = '1'
        p1RBoostOn = true
        let BRandTop = Math.random() * 84
        BRandTop = parseInt(BRandTop)
        p1RBoost.style.top = `${BRandTop}%`
        p1RBStyle = Math.floor(Math.random() * 4)
        if (p1RBStyle == 0) {
            p1RBoost.classList.add('shieldBoost')
        }
        if (p1RBStyle == 1) {
            p1RBoost.classList.add('gunBoost')
        }
        if (p1RBStyle == 2) {
            p1RBoost.classList.add('invBoost')
        }
        if (p1RBStyle == 3) {
            p1RBoost.classList.add('lifeBoost')
        }

    }
})


//Player 2 Meteor

p2Rm1.addEventListener('animationiteration', () => {
     P2TO1 = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p2Rm1.removeAttribute('class')
    p2Rm1.className = 'meteor'
    p2Rm1.classList.add(`mt${P2TO1}`)
    p2Rm1.style.display = 'none'
    p2Rm1.style.animationDuration = `${randSpeed}s`
    p2Rm1.style.top = `${randTop}%`
    setTimeout(() => {
        p2Rm1.style.display = 'block'
    }, 1);
})

p2Rm2.addEventListener('animationiteration', () => {
     P2TO2 = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p2Rm2.removeAttribute('class')
    p2Rm2.className = 'meteor'
    p2Rm2.classList.add(`mt${P2TO2}`)
    p2Rm2.style.display = 'none'
    p2Rm2.style.animationDuration = `${randSpeed}s`
    p2Rm2.style.top = `${randTop}%`
    setTimeout(() => {
        p2Rm2.style.display = 'block'
    }, 1);
})

p2Rm3.addEventListener('animationiteration', () => {
     P2TO3 = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p2Rm3.removeAttribute('class')
    p2Rm3.className = 'meteor'
    p2Rm3.classList.add(`mt${P2TO3}`)
    p2Rm3.style.display = 'none'
    p2Rm3.style.animationDuration = `${randSpeed}s`
    p2Rm3.style.top = `${randTop}%`
    setTimeout(() => {
        p2Rm3.style.display = 'block'
    }, 1);
})

p2Rm4.addEventListener('animationiteration', () => {
     P2TO4 = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p2Rm4.removeAttribute('class')
    p2Rm4.className = 'meteor'
    p2Rm4.classList.add(`mt${P2TO4}`)
    p2Rm4.style.display = 'none'
    p2Rm4.style.animationDuration = `${randSpeed}s`
    p2Rm4.style.top = `${randTop}%`
    setTimeout(() => {
        p2Rm4.style.display = 'block'
    }, 1);
})

p2Rm5.addEventListener('animationiteration', () => {
     P2TO5 = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p2Rm5.removeAttribute('class')
    p2Rm5.className = 'meteor'
    p2Rm5.classList.add(`mt${P2TO5}`)
    p2Rm5.style.display = 'none'
    p2Rm5.style.animationDuration = `${randSpeed}s`
    p2Rm5.style.top = `${randTop}%`
    setTimeout(() => {
        p2Rm5.style.display = 'block'
    }, 1);
})

//Player 2 Boost
p2RBoost.addEventListener('animationiteration', () => {
    p2RBoost.removeAttribute('class')
    p2RBoost.className = 'boost'
    let isAppear = Math.floor(Math.random() * 2)
    p2RBoost.style.opacity = '0'
    p2RBoostOn = false
    if (isAppear == 1) {
        p2RBoost.style.opacity = '1'
        p2RBoostOn = true
        let BRandTop = Math.random() * 84
        BRandTop = parseInt(BRandTop)
        p2RBoost.style.top = `${BRandTop}%`
        p2RBStyle = Math.floor(Math.random() * 4)
        if (p2RBStyle == 0) {
            p2RBoost.classList.add('shieldBoost')
        }
        if (p2RBStyle == 1) {
            p2RBoost.classList.add('gunBoost')
        }
        if (p2RBStyle == 2) {
            p2RBoost.classList.add('invBoost')
        }
        if (p2RBStyle == 3) {
            p2RBoost.classList.add('lifeBoost')
        }

    }
})

//Check meteor type for all players
setInterval(() => {
    if (P1TO1 == 1) {
        P1WTC1 = 40
        if (screenWidth <= 1366) {
            P1WTC1 = 32
        }
    } else if (P1TO1 == 2) {
        P1WTC1 = 62
        if (screenWidth <= 1366) {
            P1WTC1 = 50
        }
    } else if (P1TO1 == 3) {
        P1WTC1 = 125
        if (screenWidth <= 1366) {
            P1WTC1 = 100
        }
    }

    if (P1TO2 == 1) {
        P1WTC2 = 40
        if (screenWidth <= 1366) {
            P1WTC2 = 32
        }
    } else if (P1TO2 == 2) {
        P1WTC2 = 62
        if (screenWidth <= 1366) {
            P1WTC2 = 50
        }
    } else if (P1TO2 == 3) {
        P1WTC2 = 125
        if (screenWidth <= 1366) {
            P1WTC2 = 100
        }
    }

    if (P1TO3 == 1) {
        P1WTC3 = 40
        if (screenWidth <= 1366) {
            P1WTC3 = 32
        }
    } else if (P1TO3 == 2) {
        P1WTC3 = 62
        if (screenWidth <= 1366) {
            P1WTC3 = 50
        }
    } else if (P1TO3 == 3) {
        P1WTC3 = 125
        if (screenWidth <= 1366) {
            P1WTC3 = 100
        }
    }

    if (P1TO4 == 1) {
        P1WTC4 = 40
        if (screenWidth <= 1366) {
            P1WTC4 = 32
        }
    } else if (P1TO4 == 2) {
        P1WTC4 = 62
        if (screenWidth <= 1366) {
            P1WTC4 = 50
        }
    } else if (P1TO4 == 3) {
        P1WTC4 = 125
        if (screenWidth <= 1366) {
            P1WTC4 = 100
        }
    }

    if (P1TO5 == 1) {
        P1WTC5 = 40
        if (screenWidth <= 1366) {
            P1WTC5 = 32
        }
    } else if (P1TO5 == 2) {
        P1WTC5 = 62
        if (screenWidth <= 1366) {
            P1WTC5 = 50
        }
    } else if (P1TO5 == 3) {
        P1WTC5 = 125
        if (screenWidth <= 1366) {
            P1WTC5 = 100
        }
    }

    if (P2TO1 == 1) {
        P2WTC1 = 40
        if (screenWidth <= 1366) {
            P2WTC1 = 32
        }
    } else if (P2TO1 == 2) {
        P2WTC1 = 62
        if (screenWidth <= 1366) {
            P2WTC1 = 50
        }
    } else if (P2TO1 == 3) {
        P2WTC1 = 125
        if (screenWidth <= 1366) {
            P2WTC1 = 100
        }
    }

    if (P2TO2 == 1) {
        P2WTC2 = 40
        if (screenWidth <= 1366) {
            P2WTC2 = 32
        }
    } else if (P2TO2 == 2) {
        P2WTC2 = 62
        if (screenWidth <= 1366) {
            P2WTC2 = 50
        }
    } else if (P2TO2 == 3) {
        P2WTC2 = 125
        if (screenWidth <= 1366) {
            P2WTC2 = 100
        }
    }

    if (P2TO3 == 1) {
        P2WTC3 = 40
        if (screenWidth <= 1366) {
            P2WTC3 = 32
        }
    } else if (P2TO3 == 2) {
        P2WTC3 = 62
        if (screenWidth <= 1366) {
            P2WTC3 = 50
        }
    } else if (P2TO3 == 3) {
        P2WTC3 = 125
        if (screenWidth <= 1366) {
            P2WTC3 = 100
        }
    }

    if (P2TO4 == 1) {
        P2WTC4 = 40
        if (screenWidth <= 1366) {
            P2WTC4 = 32
        }
    } else if (P2TO4 == 2) {
        P2WTC4 = 62
        if (screenWidth <= 1366) {
            P2WTC4 = 50
        }
    } else if (P2TO4 == 3) {
        P2WTC4 = 125
        if (screenWidth <= 1366) {
            P2WTC4 = 100
        }
    }

    if (P2TO5 == 1) {
        P2WTC5 = 40
        if (screenWidth <= 1366) {
            P2WTC5 = 32
        }
    } else if (P2TO5 == 2) {
        P2WTC5 = 62
        if (screenWidth <= 1366) {
            P2WTC5 = 50
        }
    } else if (P2TO5 == 3) {
        P2WTC5 = 125
        if (screenWidth <= 1366) {
            P2WTC5 = 100
        }
    }
}, 1);

//Check hit Player 1

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(p1Rm1).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(p1Rm1).getPropertyValue('top')
    )
    let playerPXPosi = parseInt(
        window.getComputedStyle(p1Run).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - P1WTC1 && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (p1RHS || duoRunPaused || duoRunK1 || duoRunK2 || duoRunP1Inv) {

        } else {
            p1Run.removeAttribute('class')
            p1Run.className = 'player'
            if (p1RSA) {
                p1Run.classList.remove('shield')
                p1RunShield = false
                setTimeout(() => {
                    p1RSA = false
                }, 1000);
            } else {
                if (duoRunPaused) {
                    p1Run.classList.add('playerPaused')
                }
                hSong.play()
                p1Run.classList.add('hurted')
                p1Run.classList.add('hShield')
                p1RHS = true
                p1HurtAnim = true
                if (duoLiveP1 > 10) {
                    duoLiveP1 = duoLiveP1 - 10
                } else {
                    duoLiveP1 = duoLiveP1 - 5
                }
                checkLiveDRun1()
                setTimeout(() => {
                    p1HurtAnim = false
                }, 1000);
                p1RHSWaiter = setInterval(() => {
                    p1RHSTimer++
                    if (p1RHSTimer == 5) {
                        p1RHS = false
                        p1Run.removeAttribute('class')
                        p1Run.className = 'player'
                        p1RHSTimer = 0
                        clearInterval(p1RHSWaiter)
                    }
                }, 1000);
            }
        }
    }
}, 1);

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(p1Rm2).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(p1Rm2).getPropertyValue('top')
    )
    let playerPXPosi = parseInt(
        window.getComputedStyle(p1Run).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - P1WTC2 && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (p1RHS || duoRunPaused || duoRunK1 || duoRunK2 || duoRunP1Inv) {

        } else {
            p1Run.removeAttribute('class')
            p1Run.className = 'player'
            if (p1RSA) {
                p1Run.classList.remove('shield')
                p1RunShield = false
                setTimeout(() => {
                    p1RSA = false
                }, 1000);
            } else {
                if (duoRunPaused) {
                    p1Run.classList.add('playerPaused')
                }
                hSong.play()
                p1Run.classList.add('hurted')
                p1Run.classList.add('hShield')
                p1RHS = true
                p1HurtAnim = true
                if (duoLiveP1 > 10) {
                    duoLiveP1 = duoLiveP1 - 10
                } else {
                    duoLiveP1 = duoLiveP1 - 5
                }
                checkLiveDRun1()
                setTimeout(() => {
                    p1HurtAnim = false
                }, 1000);
                p1RHSWaiter = setInterval(() => {
                    p1RHSTimer++
                    if (p1RHSTimer == 5) {
                        p1RHS = false
                        p1Run.removeAttribute('class')
                        p1Run.className = 'player'
                        p1RHSTimer = 0
                        clearInterval(p1RHSWaiter)
                    }
                }, 1000);
            }
        }
    }
}, 1);

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(p1Rm3).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(p1Rm3).getPropertyValue('top')
    )
    let playerPXPosi = parseInt(
        window.getComputedStyle(p1Run).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - P1WTC3 && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (p1RHS || duoRunPaused || duoRunK1 || duoRunK2 || duoRunP1Inv) {

        } else {
            p1Run.removeAttribute('class')
            p1Run.className = 'player'
            if (p1RSA) {
                p1Run.classList.remove('shield')
                p1RunShield = false
                setTimeout(() => {
                    p1RSA = false
                }, 1000);
            } else {
                if (duoRunPaused) {
                    p1Run.classList.add('playerPaused')
                }
                hSong.play()
                p1Run.classList.add('hurted')
                p1Run.classList.add('hShield')
                p1RHS = true
                p1HurtAnim = true
                if (duoLiveP1 > 10) {
                    duoLiveP1 = duoLiveP1 - 10
                } else {
                    duoLiveP1 = duoLiveP1 - 5
                }
                checkLiveDRun1()
                setTimeout(() => {
                    p1HurtAnim = false
                }, 1000);
                p1RHSWaiter = setInterval(() => {
                    p1RHSTimer++
                    if (p1RHSTimer == 5) {
                        p1RHS = false
                        p1Run.removeAttribute('class')
                        p1Run.className = 'player'
                        p1RHSTimer = 0
                        clearInterval(p1RHSWaiter)
                    }
                }, 1000);
            }
        }
    }
}, 1);

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(p1Rm4).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(p1Rm4).getPropertyValue('top')
    )
    let playerPXPosi = parseInt(
        window.getComputedStyle(p1Run).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - P1WTC4 && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (p1RHS || duoRunPaused || duoRunK1 || duoRunK2 || duoRunP1Inv) {
        } else {
            p1Run.removeAttribute('class')
            p1Run.className = 'player'
            if (p1RSA) {
                p1Run.classList.remove('shield')
                p1RunShield = false
                setTimeout(() => {
                    p1RSA = false
                }, 1000);
            } else {
                if (duoRunPaused) {
                    p1Run.classList.add('playerPaused')
                }
                hSong.play()
                p1Run.classList.add('hurted')
                p1Run.classList.add('hShield')
                p1RHS = true
                p1HurtAnim = true
                if (duoLiveP1 > 10) {
                    duoLiveP1 = duoLiveP1 - 10
                } else {
                    duoLiveP1 = duoLiveP1 - 5
                }
                checkLiveDRun1()
                setTimeout(() => {
                    p1HurtAnim = false
                }, 1000);
                p1RHSWaiter = setInterval(() => {
                    p1RHSTimer++
                    if (p1RHSTimer == 5) {
                        p1RHS = false
                        p1Run.removeAttribute('class')
                        p1Run.className = 'player'
                        p1RHSTimer = 0
                        clearInterval(p1RHSWaiter)
                    }
                }, 1000);
            }
        }
    }
}, 1);

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(p1Rm5).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(p1Rm5).getPropertyValue('top')
    )
    let playerPXPosi = parseInt(
        window.getComputedStyle(p1Run).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - P1WTC5 && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (p1RHS || duoRunPaused || duoRunK1 || duoRunK2 || duoRunP1Inv) {

        } else {
            p1Run.removeAttribute('class')
            p1Run.className = 'player'
            if (p1RSA) {
                p1Run.classList.remove('shield')
                p1RunShield = false
                setTimeout(() => {
                    p1RSA = false
                }, 1000);
            } else {
                if (duoRunPaused) {
                    p1Run.classList.add('playerPaused')
                }
                hSong.play()
                p1Run.classList.add('hurted')
                p1Run.classList.add('hShield')
                p1RHS = true
                p1HurtAnim = true
                if (duoLiveP1 > 10) {
                    duoLiveP1 = duoLiveP1 - 10
                } else {
                    duoLiveP1 = duoLiveP1 - 5
                }
                checkLiveDRun1()
                setTimeout(() => {
                    p1HurtAnim = false
                }, 1000);
                p1RHSWaiter = setInterval(() => {
                    p1RHSTimer++
                    if (p1RHSTimer == 5) {
                        p1RHS = false
                        p1Run.removeAttribute('class')
                        p1Run.className = 'player'
                        p1RHSTimer = 0
                        clearInterval(p1RHSWaiter)
                    }
                }, 1000);
            }
        }
    }
}, 1);

//Check Boost Player 1
setInterval(() => {
    let boostTop = p1RBoost.style.top
    boostTop = parseInt(boostTop)
    let boostLeft = parseInt(
        window.getComputedStyle(p1RBoost).getPropertyValue("left")
    );
    if ((boostTop <= p1Posi || boostTop >= p1Posi) && (boostLeft <= 250 && boostLeft >= 150)) {
        if (boostTop >= p1Posi + 15 || boostTop <= p1Posi - 8 || p1HurtAnim || duoRunPaused || duoRunK1 || duoRunK2 || !p1RBoostOn) {

        } else {
            p1RBoost.style.opacity = '0'
            p1RBoostOn = false
            if (p1RBStyle == 0) {
                P1DRShieldSlot++
            }
            if (p1RBStyle == 1) {
                P1DRGunSlot++
            }
            if (p1RBStyle == 2) {
                P1DRInvSlot++
            }
            if (p1RBStyle == 3) {
                P1DRHealSlot++
            }
            displaySlotsAllDuoR()
        }
    }
}, 1);

//Check Meteor Player 2

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(p2Rm1).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(p2Rm1).getPropertyValue('top')
    )
    let playerPXPosi = parseInt(
        window.getComputedStyle(p2Run).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - P2WTC1 && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (p2RHS || duoRunPaused || duoRunK1 || duoRunK2 || duoRunP2Inv) {

        } else {
           p2Run.removeAttribute('class')
           p2Run.className = 'player'
           if (p2RSA) {
                p2RunShield = false
                setTimeout(() => {
                    p2RSA = false
                }, 1000);
           } else {
               hSong.play()
               if (duoRunPaused) {
                   p2Run.classList.add('playerPaused')
               }
               p2Run.removeAttribute('class')
               p2Run.className = 'player'
               p2Run.classList.add('hurted')
               p2Run.classList.add('hShield')
               p2RHS = true
               p2HurtAnim = true
               if (duoLiveP2 > 10) {
                   duoLiveP2 = duoLiveP2 - 10
               } else {
                   duoLiveP2 = duoLiveP2 - 5
               }
               checkLiveDRun2()
               setTimeout(() => {
                   p2HurtAnim = false
               }, 1000);
               p2RHSWaiter = setInterval(() => {
                   p2RHSTimer++
                   if (p2RHSTimer == 5) {
                       p2RHS = false
                       p2Run.removeAttribute('class')
                       p2Run.className = 'player'
                       p2RHSTimer = 0
                       clearInterval(p2RHSWaiter)
                   }
               }, 1000);
           }
        }
    }
}, 1);

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(p2Rm2).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(p2Rm2).getPropertyValue('top')
    )
    let playerPXPosi = parseInt(
        window.getComputedStyle(p2Run).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - P2WTC2 && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (p2RHS || duoRunPaused || duoRunK1 || duoRunK2 || duoRunP2Inv) {

        } else {
            p2Run.removeAttribute('class')
            p2Run.className = 'player'
            if (p2RSA) {
                p2RunShield = false
                setTimeout(() => {
                    p2RSA = false
                }, 1000);
            } else {
                hSong.play()
                if (duoRunPaused) {
                    p2Run.classList.add('playerPaused')
                }
                p2Run.removeAttribute('class')
                p2Run.className = 'player'
                p2Run.classList.add('hurted')
                p2Run.classList.add('hShield')
                p2RHS = true
                p2HurtAnim = true
                if (duoLiveP2 > 10) {
                    duoLiveP2 = duoLiveP2 - 10
                } else {
                    duoLiveP2 = duoLiveP2 - 5
                }
                checkLiveDRun2()
                setTimeout(() => {
                    p2HurtAnim = false
                }, 1000);
                p2RHSWaiter = setInterval(() => {
                    p2RHSTimer++
                    if (p2RHSTimer == 5) {
                        p2RHS = false
                        p2Run.removeAttribute('class')
                        p2Run.className = 'player'
                        p2RHSTimer = 0
                        clearInterval(p2RHSWaiter)
                    }
                }, 1000);
            }
        }
    }
}, 1);

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(p2Rm3).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(p2Rm3).getPropertyValue('top')
    )
    let playerPXPosi = parseInt(
        window.getComputedStyle(p2Run).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - P2WTC3 && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (p2RHS || duoRunPaused || duoRunK1 || duoRunK2 || duoRunP2Inv) {

        } else {
            p2Run.removeAttribute('class')
            p2Run.className = 'player'
            if (p2RSA) {
                p2RunShield = false
                setTimeout(() => {
                    p2RSA = false
                }, 1000);
            } else {
                hSong.play()
                if (duoRunPaused) {
                    p2Run.classList.add('playerPaused')
                }
                p2Run.removeAttribute('class')
                p2Run.className = 'player'
                p2Run.classList.add('hurted')
                p2Run.classList.add('hShield')
                p2RHS = true
                p2HurtAnim = true
                if (duoLiveP2 > 10) {
                    duoLiveP2 = duoLiveP2 - 10
                } else {
                    duoLiveP2 = duoLiveP2 - 5
                }
                checkLiveDRun2()
                setTimeout(() => {
                    p2HurtAnim = false
                }, 1000);
                p2RHSWaiter = setInterval(() => {
                    p2RHSTimer++
                    if (p2RHSTimer == 5) {
                        p2RHS = false
                        p2Run.removeAttribute('class')
                        p2Run.className = 'player'
                        p2RHSTimer = 0
                        clearInterval(p2RHSWaiter)
                    }
                }, 1000);
            }
        }
    }
}, 1);

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(p2Rm4).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(p2Rm4).getPropertyValue('top')
    )
    let playerPXPosi = parseInt(
        window.getComputedStyle(p2Run).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - P2WTC4 && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (p2RHS || duoRunPaused || duoRunK1 || duoRunK2 || duoRunP2Inv) {

        } else {
            p2Run.removeAttribute('class')
            p2Run.className = 'player'
            if (p2RSA) {
                p2RunShield = false
                setTimeout(() => {
                    p2RSA = false
                }, 1000);
            } else {
                hSong.play()
                if (duoRunPaused) {
                    p2Run.classList.add('playerPaused')
                }
                p2Run.removeAttribute('class')
                p2Run.className = 'player'
                p2Run.classList.add('hurted')
                p2Run.classList.add('hShield')
                p2RHS = true
                p2HurtAnim = true
                if (duoLiveP2 > 10) {
                    duoLiveP2 = duoLiveP2 - 10
                } else {
                    duoLiveP2 = duoLiveP2 - 5
                }
                checkLiveDRun2()
                setTimeout(() => {
                    p2HurtAnim = false
                }, 1000);
                p2RHSWaiter = setInterval(() => {
                    p2RHSTimer++
                    if (p2RHSTimer == 5) {
                        p2RHS = false
                        p2Run.removeAttribute('class')
                        p2Run.className = 'player'
                        p2RHSTimer = 0
                        clearInterval(p2RHSWaiter)
                    }
                }, 1000);
            }
        }
    }
}, 1);

setInterval(() => {
    let meteorLeft = parseInt(
        window.getComputedStyle(p2Rm5).getPropertyValue("left")
    );
    let meteorTop = parseInt(
        window.getComputedStyle(p2Rm5).getPropertyValue('top')
    )
    let playerPXPosi = parseInt(
        window.getComputedStyle(p2Run).getPropertyValue('top')
    )
    if (meteorTop >= playerPXPosi - P2WTC5 && meteorTop < playerPXPosi + 100 && meteorLeft < 250 && meteorLeft > 150) {
        if (p2RHS || duoRunPaused || duoRunK1 || duoRunK2 || duoRunP2Inv) {

        } else {
            p2Run.removeAttribute('class')
            p2Run.className = 'player'
            if (p2RSA) {
                p2RunShield = false
                setTimeout(() => {
                    p2RSA = false
                }, 1000);
            } else {
                hSong.play()
                if (duoRunPaused) {
                    p2Run.classList.add('playerPaused')
                }
                p2Run.removeAttribute('class')
                p2Run.className = 'player'
                p2Run.classList.add('hurted')
                p2Run.classList.add('hShield')
                p2RHS = true
                p2HurtAnim = true
                if (duoLiveP2 > 10) {
                    duoLiveP2 = duoLiveP2 - 10
                } else {
                    duoLiveP2 = duoLiveP2 - 5
                }
                checkLiveDRun2()
                setTimeout(() => {
                    p2HurtAnim = false
                }, 1000);
                p2RHSWaiter = setInterval(() => {
                    p2RHSTimer++
                    if (p2RHSTimer == 5) {
                        p2RHS = false
                        p2Run.removeAttribute('class')
                        p2Run.className = 'player'
                        p2RHSTimer = 0
                        clearInterval(p2RHSWaiter)
                    }
                }, 1000);
            }
        }
    }
}, 1);

//Check Boost Player 2
setInterval(() => {
    let boostTop = p2RBoost.style.top
    boostTop = parseInt(boostTop)
    let boostLeft = parseInt(
        window.getComputedStyle(p2RBoost).getPropertyValue("left")
    );
    if ((boostTop <= p2Posi || boostTop >= p2Posi) && (boostLeft <= 250 && boostLeft >= 150)) {
        if (boostTop >= p2Posi + 15 || boostTop <= p2Posi - 8 || p2HurtAnim || duoRunPaused || duoRunK1 || duoRunK2 || !p2RBoostOn) {

        } else {
            p2RBoost.style.opacity  = '0'
            p2RBoostOn = false
            if (p2RBStyle == 0) {
                P2DRShieldSlot++
            }
            if (p2RBStyle == 1) {
                P2DRGunSlot++
            }
            if (p2RBStyle == 2) {
                P2DRInvSlot++
            }
            if (p2RBStyle == 3) {
                P2DRHealSlot++
            }
            displaySlotsAllDuoR()
        }
    }
}, 1);