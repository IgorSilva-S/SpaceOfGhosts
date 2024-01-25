//Variables

const player = document.getElementById('ghost')
let keysSolo = []
const p1Run = document.getElementById('player1Run')
const p2Run = document.getElementById('player2Run')
const invencible = document.getElementById('Inv')
let trail, kill
const trailsElms = document.querySelectorAll('.trail')
const song = document.getElementById('music')
const hSong = document.getElementById('hSong')
const duoRSong = document.getElementById('duoRunSong')
let playerPosi = 45
let p1Posi = 45
let p2Posi = 45
let hurtShield = false
let hurtShieldTimer = 0
let shield = false
let shieldActive = false
let hurtAnim = false
var gamePaused = false
let boostOn = false
const pauseBack = document.querySelector('.pauseContainer')
const pauseGui = document.querySelector('.pauseAlert')
let playerBeforePause
let pageType = 0
/*Pages Types
0 - Disclaimer
1 - Home
1.1 - Game Mode
2 - Game : 1p Style
2.1 - 1p style points
3 - Game : 2p VS (Infinite Mode)
3.1 - Game : 2p VS (Battle! Mode)
4 - Store
5 - Settings
6 - Skins
7 - Credits
*/
const disButton = document.getElementById('exitDisclaimer')
const disPage = document.getElementById('disclaimer')
const soloPage = document.getElementById('soloMode')
const soloScorePage = document.getElementById('soloScoreMark')
const homePage = document.getElementById('homeScreen')
const gameMPage = document.getElementById('gameModeScreen')
const duoRunPage = document.getElementById('duoRun')
const duoRunScorePage = document.getElementById('duoRunScore')
const playButton = document.getElementById('playGame')
const soloButton = document.getElementById('soloPlay')
const duoButton = document.getElementById('duoPlay')
const homeSong = document.getElementById('homeSong')
const superSong = document.getElementById('superSong')
const invSong = document.getElementById('invSong')
const boostItem = document.getElementById('bst')
let shieldSlot = 0
let superSlot = 0
let invSlot = 0
let fullHealSlot = 0
let healSlot = 0
const shieldSW = document.getElementById('shieldS')
const superSW = document.getElementById('superS')
const invSW = document.getElementById('invS')
const ShealSW = document.getElementById('SlifeS')
const healSW = document.getElementById('lifeS')
let lives1p = 0
const lives1pAlert = document.getElementById('live1p')
let boostStyle
let superP1 = false
let superTimer = 0
let invTimer = 0
let invStts = false
const mControlUp = document.getElementById('upBlock')
const mControlDown = document.getElementById('downBlock')
let superWaiter, hurtSWaiter, invWaiter
let scoreCounter
let scoreNum = 0
let scoreSpeed = 500
const sScore = document.getElementById('soloDistance')
let finalScore
let p1RHS = false, p2RHS = false
let p1HurtAnim = false, p2HurtAnim = false
let keysDuoRun = []
let duoRunPaused = false
const duoRunLiveP1Alert = document.getElementById('dRunP1Live')
const duoRunLiveP2Alert = document.getElementById('dRunP2Live')
let duoLiveP1 = 0, duoLiveP2 = 0
let duoRunK1 = false, duoRunK2 = false
let p1RunShield = false, p2RunShield = false
let p1RSA = false, p2RSA = false
let p1RFire = false, p2RFire = false
let P1DRShieldSlot = 0, P2DRShieldSlot = 0
let P1DRGunSlot = 0, P2DRGunSlot = 0
let P1DRInvSlot = 0, P2DRInvSlot = 0
let P1DRHealSlot = 0, P2DRHealSlot = 0
let plusSpeed = 0
let addSpeed
const p1RInv = document.getElementById('InvP1R')
const p2RInv = document.getElementById('InvP2R')
let duoRunP1Inv = false, duoRunP2Inv = false
let p1RInvWaiter, p2RInvWaiter
let p1RInvNum = 0, p2RInvNum = 0
let p1RHSWaiter, p2RHSWaiter
let p1RHSTimer = 0, p2RHSTimer = 0
const p1RBoost = document.getElementById('p1RBst')
const p2RBoost = document.getElementById('p2RBst')
let p1RBoostOn = false, p2RBoostOn = false
let p1RBStyle, p2RBstyle

//Solo Meteors
const meteor1 = document.getElementById('m1')
const meteor2 = document.getElementById('m2')
const meteor3 = document.getElementById('m3')
const meteor4 = document.getElementById('m4')
const meteor5 = document.getElementById('m5')
const meteor7 = document.getElementById('m7')
const meteor6 = document.getElementById('m6')

//Duo : Run! Meteors
const p1Rm1 = document.getElementById('p1Rm1')
const p1Rm2 = document.getElementById('p1Rm2')
const p1Rm3 = document.getElementById('p1Rm3')
const p1Rm4 = document.getElementById('p1Rm4')
const p1Rm5 = document.getElementById('p1Rm5')
const p2Rm1 = document.getElementById('p2Rm1')
const p2Rm2 = document.getElementById('p2Rm2')
const p2Rm3 = document.getElementById('p2Rm3')
const p2Rm4 = document.getElementById('p2Rm4')
const p2Rm5 = document.getElementById('p2Rm5')

//End Variables

//Navigations Functions
disButton.addEventListener("click", function () {
    pageType = 1
    disPage.style.display = 'none'
    homePage.style.display = 'flex'
    soloPage.style.display = 'none'
    homeSong.play()
    song.pause()
    song.currentTime = 0
})

playButton.addEventListener("click", function () {
    pageType = 1.1
    homePage.style.opacity = '0'
    setTimeout(() => {
        homePage.removeAttribute('style')
        gameMPage.style.display = 'flex'
    }, 500);
})

soloButton.addEventListener("click", function () {
    pageType = 2
    lives1p = 100
    checkLive1p()
    gameMPage.style.opacity = '0'
    setTimeout(() => {
        gameMPage.removeAttribute('style')
        soloPage.style.display = 'block'
        homeSong.pause()
        song.play()
        homeSong.volume = 1
        homeSong.currentTime = 0
        superP1 = false
        superSong.pause()
        superSong.currentTime = 0
        superTimer = 0
        hurtShieldTimer = 0
        displaySlotsSolo()
        scoreCounter = setInterval(() => {
            scoreNum++
            sScore.innerText = scoreNum
        }, scoreSpeed);
        addSpeed = setInterval(() => {
            if (scoreNum % 250 == 0 && scoreNum != 0) {
                plusSpeed = plusSpeed + 0.25
                if (plusSpeed >= 1) {
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
            }
        }, 600);
    }, 500);
})

duoButton.addEventListener("click", function () {
    pageType = 3
    gameMPage.style.opacity = '0'
    duoLiveP1 = 100
    duoLiveP2 = 100
    setTimeout(() => {
        gameMPage.removeAttribute('style')
        duoRunPage.style.display = 'flex'
        homeSong.pause()
        duoRSong.play()
        checkLiveDRun1()
        checkLiveDRun2()
    }, 500);
})




document.addEventListener("keydown", function (e) {
    if (pageType == 0) {
        if (e.key == "Enter") {
            pageType = 1
            disPage.style.display = 'none'
            homePage.style.display = 'flex'
            soloPage.style.display = 'none'
            homeSong.play()
            song.pause()
            song.currentTime = 0
        }
    }

    //Solo Game Controls
    if (pageType == 2 && !gamePaused && !hurtAnim && !kill) {
        if (!gamePaused || !hurtAnim) {
            soloKeyDown(e)
            /*if (e.key == "ArrowUp") {
                playerPosi--
                if (playerPosi < 0) {
                    playerPosi = 0
                }
                player.style.top = `${playerPosi}%`
                player.classList.add('upping')
            } if (e.key == "ArrowDown") {
                playerPosi++
                if (playerPosi >= 84) {
                    playerPosi = 84
                }
                player.style.top = `${playerPosi}%`
                player.classList.add('falling')
            }*/
            if (e.key == "1") {
                if (shieldSlot > 0 && !shieldActive) {
                    player.classList.add('shield')
                    shield = true
                    shieldActive = true
                    shieldSlot--
                    if (superP1 || invStts) {
                        player.classList.remove('shield')
                    }
                } else if (shieldSlot == 0) {
                    document.getElementById('shieldAlert').classList.add('emptySlot')
                    setTimeout(() => {
                        document.getElementById('shieldAlert').classList.remove('emptySlot')
                    }, 1500);
                }
            }

            if (e.key == "2") {
                if (superSlot > 0 && !superP1) {
                    superSlot--
                    invencible.style.display = 'block'
                    //trail.style.display = 'block'
                    if (plusSpeed < 1) {
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
                    song.pause()
                    superSong.play()
                    superP1 = true
                    document.getElementById('gameBckg').style.display = 'none'
                    document.getElementById('gameBckg').style.animationDuration = '7.5s'
                    setTimeout(() => {
                        document.getElementById('gameBckg').style.display = 'block'
                    }, 1);
                    if (shieldActive) {
                        player.classList.remove('shield')
                    }
                    if (invStts) {
                        clearInterval(invWaiter)
                        invStts = false
                        invSong.pause()
                        invSong.currentTime = 0
                    }
                    scoreSpeed = 250
                    clearInterval(scoreCounter)
                    scoreCounter = setInterval(() => {
                        scoreNum++
                        sScore.innerText = scoreNum
                    }, scoreSpeed);
                    superWaiter = setInterval(() => {
                        superTimer++
                        if (superTimer == 50) {
                            clearInterval(superWaiter)
                            superP1 = false
                            superSong.pause()
                            superSong.currentTime = 0
                            song.play()
                            superTimer = 0
                            document.getElementById('gameBckg').style.display = 'none'
                            invencible.removeAttribute('style')
                            //trail.removeAttribute('style')
                            if (plusSpeed < 1) {
                                clearInterval(trail)
                            }
                            if (shieldActive) {
                                player.classList.add('shield')
                            }
                            setTimeout(() => {
                                document.getElementById('gameBckg').removeAttribute('style')
                            }, 1);
                            scoreSpeed = 500
                            clearInterval(scoreCounter)
                            scoreCounter = setInterval(() => {
                                scoreNum++
                                sScore.innerText = scoreNum
                            }, scoreSpeed)
                        }
                    }, 1000);
                } else if (superSlot == 0) {
                    document.getElementById('superAlert').classList.add('emptySlot')
                    setTimeout(() => {
                        document.getElementById('superAlert').classList.remove('emptySlot')
                    }, 1500);
                }
            }

            if (e.key == "3") {
                if (!superP1 && !invStts && invSlot > 0) {
                    if (invTimer > 0) {
                        invTimer = 0
                    }
                    invSlot--
                    invencible.style.display = 'block'
                    song.pause()
                    invSong.play()
                    invStts = true
                    if (shieldActive) {
                        player.classList.remove('shield')
                    }
                    invWaiter = setInterval(() => {
                        invTimer++
                        if (invTimer == 30) {
                            clearInterval(invWaiter)
                            invencible.removeAttribute('style')
                            invSong.pause()
                            song.play()
                            invSong.currentTime = 0
                            invStts = false
                            invTimer = 0
                        }
                    }, 1000);
                    invTimer = 0
                } else if (invSlot == 0) {
                    document.getElementById('invAlert').classList.add('emptySlot')
                    setTimeout(() => {
                        document.getElementById('invAlert').classList.remove('emptySlot')
                    }, 1500);
                }
            } if (e.key == "4") {
                if (fullHealSlot > 0 && lives1p != 100) {
                    fullHealSlot--
                    lives1p = 100
                    checkLive1p()
                } else if (fullHealSlot == 0) {
                    document.getElementById('FhealAlert').classList.add('emptySlot')
                    setTimeout(() => {
                        document.getElementById('FhealAlert').classList.remove('emptySlot')
                    }, 1500);
                }
            } if (e.key == "5") {
                if (healSlot > 0 && lives1p < 100) {
                    healSlot--
                    lives1p = lives1p + 20
                    if (lives1p > 100) {
                        lives1p = 100
                    }
                    checkLive1p()
                } else if (healSlot == 0) {
                    document.getElementById('healAlert').classList.add('emptySlot')
                    setTimeout(() => {
                        document.getElementById('healAlert').classList.remove('emptySlot')
                    }, 1500);
                }
            } if (e.key == 'k') {
                lives1p = 5
                checkLive1p()
            }
            displaySlotsSolo()
        }
    }

    if (pageType == 2 && !kill) {
        if (e.key == "Enter") {
            pauseGameSolo()
        }
    }
    //End Solo Game Controls

    //Duo Game : Run! Controls
    if (pageType == 3) {
        duoRunKeyDown(e)
        /*if (!p2HurtAnim) {
            if (e.key == "ArrowUp") {
                p2Posi--
                if (p2Posi < 0) {
                    p2Posi = 0
                }
                p2Run.style.top = `${p2Posi}%`
                p2Run.classList.add('upping')
            } if (e.key == "ArrowDown") {
                p2Posi++
                if (p2Posi >= 84) {
                    p2Posi = 84
                }
                p2Run.style.top = `${p2Posi}%`
                p2Run.classList.add('falling')
            }
        }
        if (!p1HurtAnim) {
            if (e.key == "w" || e.key == "W") {
                p1Posi--
                if (p1Posi < 0) {
                    p1Posi = 0
                }
                p1Run.style.top = `${p1Posi}%`
                p1Run.classList.add('upping')
            } if (e.key == "s" || e.key == "S") {
                p1Posi++
                if (p1Posi >= 84) {
                    p1Posi = 84
                }
                p1Run.style.top = `${p1Posi}%`
                p1Run.classList.add('falling')
            }
        }*/
        if(e.key == 'Enter') {
            pauseDuoRun()
        }
        if (e.key == 'k') {
            duoLiveP1 = 5
            checkLiveDRun1()
        }
        if (e.key == 'K') {
            duoLiveP2 = 5
            checkLiveDRun2()
        }
        if (e.key == '1') {
            if (!p1RSA && P1DRShieldSlot > 0) {
                P1DRShieldSlot--
                p1Run.classList.add('shield')
                p1RunShield = true
                p1RSA = true
            }
            displaySlotsAllDuoR()
        } 
        if (e.key == '6') {
            if (!p2RSA && P2DRShieldSlot > 0) {
                P2DRShieldSlot--
                p2Run.classList.add('shield')
                p2RunShield = true
                p2RSA = true  
            }
            displaySlotsAllDuoR()
        }

        if (e.key == '2') {
            if (!p2RHS && !p1RFire && P1DRGunSlot > 0) {
                P1DRGunSlot--
                p1Run.classList.add('fire')
                p1RFire = true
                p1Run.classList.remove('shield')
                p1Rm1.style.animationPlayState = 'paused'
                p1Rm2.style.animationPlayState = 'paused'
                p1Rm3.style.animationPlayState = 'paused'
                p1Rm4.style.animationPlayState = 'paused'
                p1Rm5.style.animationPlayState = 'paused'
                setTimeout(() => {
                    p1Run.style.display = 'none'
                    setTimeout(() => {
                        p1Run.classList.remove('fire')
                        p1Run.style.display = 'block'
                        p1RFire = false
                    }, 1);
                    if (p1RunShield) {
                        p1Run.classList.add('shield')
                    }
                    p2Run.removeAttribute('class')
                    p2Run.className = 'player'
                    if (p2RSA) {
                        p2Run.classList.remove('shield')
                        p2RunShield = false
                        setTimeout(() => {
                            p2RSA = false
                        }, 1000);
                    } else {
                        hSong.play()
                        p2Run.classList.add('hurted')
                        p2Run.classList.add('hShield')
                        p2RHS = true
                        p2HurtAnim = true
                        if (duoLiveP2 > 10) {
                            duoLiveP2 = duoLiveP2 - 10
                        } else {
                            duoLiveP2 = duoLiveP2 - 5
                        }
                        setTimeout(() => {
                            p2HurtAnim = false
                        }, 1000);
                        setTimeout(() => {
                            p2RHS = false
                            p2Run.removeAttribute('class')
                            p2Run.className = 'player'
                            if (duoRunPaused) {
                                p2Run.classList.add('playerPaused')
                            }
                        }, 5000);
                    }
                    checkLiveDRun2()
                    p1Rm1.style.animationPlayState = 'running'
                    p1Rm2.style.animationPlayState = 'running'
                    p1Rm3.style.animationPlayState = 'running'
                    p1Rm4.style.animationPlayState = 'running'
                    p1Rm5.style.animationPlayState = 'running'
                }, 1400);
            }
            displaySlotsAllDuoR()
        }

        if (e.key == '7') {
            if (!p1RHS && !p2RFire && P2DRGunSlot > 0) {
                P2DRGunSlot--
                p2Run.classList.add('fire')
                p2RFire = true
                p2Run.classList.remove('shield')
                p2Rm1.style.animationPlayState = 'paused'
                p2Rm2.style.animationPlayState = 'paused'
                p2Rm3.style.animationPlayState = 'paused'
                p2Rm4.style.animationPlayState = 'paused'
                p2Rm5.style.animationPlayState = 'paused'
                setTimeout(() => {
                    p2Run.style.display = 'none'
                    setTimeout(() => {
                        p2Run.classList.remove('fire')
                        p2Run.style.display = 'block'
                        p2RFire = false
                    }, 1);
                    if (p2RunShield) {
                        p2Run.classList.add('shield')
                    }
                    p1Run.removeAttribute('class')
                    p1Run.className = 'player'
                    if (p1RSA) {
                        p1Run.classList.remove('shield')
                        p1RunShield = false
                        setTimeout(() => {
                            p1RSA = false
                        }, 1000);
                    } else {
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
                        setTimeout(() => {
                            p1HurtAnim = false
                        }, 1000);
                        setTimeout(() => {
                            p1RHS = false
                            p1Run.removeAttribute('class')
                            p1Run.className = 'player'
                            if (duoRunPaused) {
                                p1Run.classList.add('playerPaused')
                            }
                        }, 5000);
                    }
                    checkLiveDRun1()
                    p2Rm1.style.animationPlayState = 'running'
                    p2Rm2.style.animationPlayState = 'running'
                    p2Rm3.style.animationPlayState = 'running'
                    p2Rm4.style.animationPlayState = 'running'
                    p2Rm5.style.animationPlayState = 'running'
                }, 1400);
            }
            displaySlotsAllDuoR()
        }
        if (e.key == '3') {
            if (!duoRunP1Inv && P1DRInvSlot > 0) {
                P1DRInvSlot--
                p1RInv.style.display = 'block'
                duoRunP1Inv = true
                p1Run.classList.remove('shield')
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
            displaySlotsAllDuoR()
        }
        if (e.key == '8') {
            if (!duoRunP2Inv && P2DRInvSlot > 0){
                P2DRInvSlot--
                p2RInv.style.display = 'block'
                duoRunP2Inv = true
                p2Run.classList.remove('shield')
                p2RInvWaiter = setInterval(() => {
                    p2RInvNum++
                    if (p2RInvNum == 30) {
                        p2RInv.removeAttribute('style')
                        duoRunP2Inv = false
                        clearInterval(p2RInvWaiter)
                        p2RInvNum = 0
                        if (p2RunShield) {
                            p2Run.classList.add('shield')
                        }
                    }
                }, 1000);
            }
            displaySlotsAllDuoR()
        }
        if (e.key == '4') {
            if (duoLiveP1 < 100 && P1DRHealSlot > 0) {
                P1DRHealSlot--
                duoLiveP1 = duoLiveP1 + 10
                if (duoLiveP1 > 100) {
                    duoLiveP1 = 100
                }
                checkLiveDRun1()
            }
            displaySlotsAllDuoR()
        }
        if (e.key == '9') {
            if (duoLiveP2 < 100 && P2DRHealSlot > 0) {
                P2DRHealSlot--
                duoLiveP2 = duoLiveP2 + 10
                if (duoLiveP2 > 100) {
                    duoLiveP2 = 100
                }
                checkLiveDRun2()
            }
            displaySlotsAllDuoR()
        }
    }
})

document.addEventListener("keyup", function (e) {
    //Solo Game Restore
    if (!hurtAnim && !kill && pageType == 2) {
        player.removeAttribute('class')
        player.className = 'player'
        if (hurtShield) {
            player.classList.add('hShield')
        }
        if (shieldActive && superP1 == false && invStts == false) {
            player.classList.add('shield')
        }
        if (gamePaused) {
            player.classList.add('playerPaused')
        }
        soloKeyUp(e)
    }
    //End Solo Game Restore
    
    //Duo : Run! Restore
    if (pageType == 3) {
        if (!duoRunPaused && !duoRunK1 && !duoRunK2) {
            if (!p1HurtAnim && !p1RFire) {
                p1Run.removeAttribute('class')
                p1Run.className = 'player'
            }
            if (!p2HurtAnim && !p2RFire) {
                p2Run.removeAttribute('class')
                p2Run.className = 'player'
            }
            if (p1RHS) {
                p1Run.classList.add('hShield')
            }
            if (p2RHS) {
                p2Run.classList.add('hShield')
            }
            if (p1RunShield) {
                p1Run.classList.add('shield')
            }
            if (p2RunShield) {
                p2Run.classList.add('shield')
            }
        }
        duoRunKeyUp(e)
    }
    //End Duo : Run! Restore
})

//Solo Score Nav Buttons
document.getElementById('soloSHome').addEventListener("click", () => {
    soloScorePage.style.opacity = '0'
    scoreNum = 0
    setTimeout(() => {
        lives1p = 100
        soloScorePage.removeAttribute('style')
        soloScorePage.style.display = 'none'
        homePage.style.display = 'flex'
        superSong.currentTime = 0
        song.currentTime = 0
        superTimer = 0
        hurtShieldTimer = 0
        playerPosi = 45
        player.removeAttribute('style')
        pageType = 1
        if (superP1) {
            superP1 = false
            clearInterval(trail)
            invencible.style.display = 'none'
        } else {
            superP1 = false
        } if (invStts) {
            invStts = false
            invencible.style.display = 'none'
        } else {
            invStts = false
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
        } clearSlotSolo()
        clearInterval(scoreCounter)
        document.getElementById('soloHighAlert').removeAttribute('style')
    }, 500)
})

document.getElementById('soloSGame').addEventListener("click", () => {
    soloScorePage.style.opacity = '0'
    scoreNum = 0
    setTimeout(() => {
        lives1p = 100
        soloScorePage.removeAttribute('style')
        soloScorePage.style.display = 'none'
        soloPage.style.display = 'block'
        superSong.currentTime = 0
        song.currentTime = 0
        homeSong.currentTime = 0
        homeSong.pause()
        song.play()
        superTimer = 0
        hurtShieldTimer = 0
        playerPosi = 45
        player.removeAttribute('style')
        pageType = 2
        if (superP1) {
            superP1 = false
            clearInterval(trail)
            invencible.style.display = 'none'
        } else {
            superP1 = false
        } if (invStts) {
            invStts = false
            invencible.style.display = 'none'
        } else {
            invStts = false
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
        } clearSlotSolo()
        checkLive1p()
        clearInterval(scoreCounter)
        scoreCounter = setInterval(() => {
            scoreNum++
            sScore.innerText = scoreNum
        }, scoreSpeed)
        document.getElementById('soloHighAlert').removeAttribute('style')
    }, 500)
})
//End Navigations Functions

//Easter Egg Home
document.getElementById('hgh1').addEventListener("click", () => {
    document.getElementById('hgh1').classList.add('roundHome')
    setTimeout(() => {
        document.getElementById('hgh1').classList.remove('roundHome')
    }, 5000);
})
//End Easter Egg Home