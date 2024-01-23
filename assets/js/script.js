//Variables

const player = document.getElementById('ghost')
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
const meteor1 = document.getElementById('m1')
const meteor2 = document.getElementById('m2')
const meteor3 = document.getElementById('m3')
const meteor4 = document.getElementById('m4')
const meteor5 = document.getElementById('m5')
const meteor7 = document.getElementById('m7')
const meteor6 = document.getElementById('m6')
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
    }, 500);
})

duoButton.addEventListener("click", function () {
    pageType = 3
    gameMPage.style.opacity = '0'
    setTimeout(() => {
        gameMPage.removeAttribute('style')
        duoRunPage.style.display = 'flex'
        homeSong.pause()
        duoRSong.play()
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
            if (e.key == "ArrowUp") {
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
            }
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
                    trail = setInterval(() => {
                        let trailElm = document.createElement('div')
                        trailElm.setAttribute('class', 'trail')
                        trailElm.setAttribute('style', `top: ${playerPosi}%`)
                        trailElm.addEventListener("animationend", () => {
                            trailElm.remove()
                        })
                        soloPage.insertAdjacentElement('beforeend', trailElm)
                    }, 100);
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
                            clearInterval(trail)
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
    }
    //End Solo Game Restore
    
    //Duo : Run! Restore
    if (pageType == 3) {
        if (!p1HurtAnim) {
            p1Run.removeAttribute('class')
            p1Run.className = 'player'
        }
        p2Run.removeAttribute('class')
        p2Run.className = 'player'
        if (p1RHS) {
            p1Run.classList.add('hShield')
        }
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