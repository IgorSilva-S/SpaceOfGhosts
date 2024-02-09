//Variables

const player = document.getElementById('ghost')
let keysSolo = []
const p1Run = document.getElementById('player1Run')
const p2Run = document.getElementById('player2Run')
const playerClassic = document.getElementById('classicPlayer')
const invencible = document.getElementById('Inv')
let trail = NaN, kill
let trailHome
const trailsElms = document.querySelectorAll('.trail')
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
const pauseBack = document.getElementById('soloPauseBCKG')
const pauseGui = document.getElementById('soloPauseGui')
const soloCPGUI = document.getElementById('soloCPauseGui')
const soloCPBack = document.getElementById('soloCPauseBCKG')
let playerBeforePause
let pageType = 0
/*Pages Types
0 - Disclaimer
1 - Home
1.1 - Game Mode
2 - Game : 1p Style
2.1- Game : Classic 1p Mode
3 - Game : 2p VS (Infinite Mode)
3.1 - Game : 2p VS (Battle! Mode)
3.2 - Game : 2p VS (Classic Mode)
4 - Shop
4.1 - Skin Changer
5 - Settings
6 - Credits
*/
const disButton = document.getElementById('exitDisclaimer')

//Pages
const disPage = document.getElementById('disclaimer')
const soloPage = document.getElementById('soloMode')
const soloScorePage = document.getElementById('soloScoreMark')
const homePage = document.getElementById('homeScreen')
const gameMPage = document.getElementById('gameModeScreen')
const duoRunPage = document.getElementById('duoRun')
const duoRunScorePage = document.getElementById('duoRunScore')
const shopPage = document.getElementById('shop')
const skinChangerPage = document.getElementById('skinChanger')
const settingsPage = document.getElementById('settings')
const creditsPage = document.getElementById('credits')
const classicSoloPage = document.getElementById('soloClassic')
//End Pages

//Songs
const homeSong = document.getElementById('homeSong') // by Artificial Music
const song = document.getElementById('soloSong') // by Prod. Riddiman
const duoRSong = document.getElementById('duoRunSong') // by Pieces
const hSong = document.getElementById('hSong') // by SEGA and Sonic Team (1992)
const shopSong = document.getElementById('shopSong') // by dyu / Official by Nintendo
const settingsSong = document.getElementById('settingsSong') // by dyu / Official by Nintendo
const creditsSong = document.getElementById('creditsSong') // by After The Fall 

//End Songs
const playButton = document.getElementById('playGame')
const shopButton = document.getElementById('goShop')
const settingsButton = document.getElementById('editSettings')
const creditsButton = document.getElementById('viewCredits')
const soloButton = document.getElementById('soloPlay')
const soloClassicButton = document.getElementById('soloClassicPlay')
const duoButton = document.getElementById('duoPlay')
const boostItem = document.getElementById('bst')
let shieldSlot = 0
let acceleratorSlot = 0
let relaxSlot = 0
let fullHealSlot = 0
let healSlot = 0
const shieldSW = document.getElementById('shieldS')
const acceleratorSW = document.getElementById('acceleratorS')
const relaxSW = document.getElementById('relaxS')
const ShealSW = document.getElementById('SlifeS')
const healSW = document.getElementById('lifeS')
let lives1p = 0
const lives1pAlert = document.getElementById('live1p')
let boostStyle
let acceleratorP1 = false
let acceleratorTimer = 0
let relaxStts = false
const mControlUp = document.getElementById('upBlock')
const mControlDown = document.getElementById('downBlock')
let acceleratorWaiter, hurtSWaiter
let scoreCounter
let scoreNum = 0
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
let type2Controls = false
let muted = false
let scHurted = false
let pausedClassicSolo = false
let scHurtWaiter, scHurtTimer = 0
let soloClassicLive = 0
const soloClassicHearts = document.getElementById('classicLifes')
let canFly = true
let canFlyWaiter, flyTimer = 0
let flyingNow = false
let scScoreCounter
let scScore = 0

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

//Classic Solo Crystals
const crystal1 = document.getElementById('cr1')
const crystal2 = document.getElementById('cr2')
const crystal3 = document.getElementById('cr3')
const crystal4 = document.getElementById('cr4')

//Skin changer button
const s0b = document.getElementById('cs0')
const sAb = document.getElementById('csA')
const s1b = document.getElementById('cs1')
const s2b = document.getElementById('cs2')
const s3b = document.getElementById('cs3')

//Skin purchased checker
let skinABuy = localStorage.getItem('purchasedA')
let skin1Buy = localStorage.getItem('purchased1')
let skin2Buy = localStorage.getItem('purchased2')
let skin3Buy = localStorage.getItem('purchased3')

//End Variables

//Organize LocalStorage items
if (localStorage.getItem('money') == undefined) {
    localStorage.setItem('money', 0)
}

function organizeSound() {
    let gameVolume = localStorage.getItem('volume')
    if (gameVolume != undefined) {
        homeSong.volume = gameVolume
        song.volume = gameVolume
        duoRSong.volume = gameVolume
        hSong.volume = gameVolume
        shopSong.volume = gameVolume
        settingsSong.volume = gameVolume
        creditsSong.volume = gameVolume
        document.getElementById('volumeNum').innerText = `${gameVolume * 100}%`
        document.getElementById('vol').value = gameVolume * 100
    } if (gameVolume == 0) {
        muted = true
    }
}

function enableOldControls() {
    let oldEnabled = localStorage.getItem('oldControls')
    if (oldEnabled != undefined) {
        type2Controls = oldEnabled
        if (oldEnabled) {
            document.getElementById('oldControls').checked = true
        } else {
            document.getElementById('oldControls').checked = false
        }
    }
}

function skinChanger() {
    let skinTypo = localStorage.getItem('actualSkin')
    if (skinTypo != undefined) {
        document.body.className = skinTypo
    }
}

organizeSound()
enableOldControls()
skinChanger()
//End Organize localStorage Items

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

shopButton.addEventListener("click", function () {
    pageType = 4
    homePage.style.opacity = '0'
    setTimeout(() => {
        homePage.removeAttribute('style')
        shopPage.style.display = 'block'
        homeSong.pause()
        homeSong.currentTime = 0
        shopSong.play()
        document.getElementById('moneyShopView').innerText = localStorage.getItem('money')
    }, 500);
})

document.getElementById('skins').addEventListener("click", () => {
    pageType = 4.1
    shopPage.style.opacity = '0'
    setTimeout(() => {
        shopPage.removeAttribute('style')
        skinChangerPage.style.display = 'block'
    }, 500);
})

settingsButton.addEventListener("click", function () {
    pageType = 5
    homePage.style.opacity = '0'
    setTimeout(() => {
        homePage.removeAttribute('style')
        settingsPage.style.display = 'block'
        homeSong.pause()
        homeSong.currentTime = 0
        settingsSong.play()
    }, 500);
})

creditsButton.addEventListener("click", () => {
    pageType = 6
    homePage.style.opacity = '0'
    setTimeout(() => {
        homePage.removeAttribute('style')
        creditsPage.style.display = 'block'
        homeSong.pause()
        homeSong.currentTime = 0
        creditsSong.play()
        setTimeout(() => {
            creditsPage.style.opacity = '0'
            pageType = 1
            setTimeout(() => {
                creditsPage.removeAttribute('style')
                homePage.style.display = 'flex'
                creditsSong.pause()
                creditsSong.currentTime = 0
                homeSong.play()
            }, 500);
        }, 20000);
    }, 500);
})

document.getElementById('GMRHome').addEventListener("click", () => {
    gameMPage.style.opacity = '0'
    setTimeout(() => {
        pageType = 1
        homePage.style.display = 'flex'
        gameMPage.removeAttribute('style')
    }, 500);
})

document.getElementById('shopHome').addEventListener("click", () => {
    pageType = 1
    shopPage.style.opacity = '0'
    setTimeout(() => {
        shopPage.removeAttribute('style')
        homePage.style.display = 'flex'
        shopSong.pause()
        shopSong.currentTime = 0
        homeSong.play()
    }, 500);
})

document.getElementById('settingsHome').addEventListener("click", () => {
    pageType = 1
    settingsPage.style.opacity = '0'
    setTimeout(() => {
        settingsPage.removeAttribute('style')
        homePage.style.display = 'flex'
        settingsSong.pause()
        settingsSong.currentTime = 0
        homeSong.play()
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

        homeSong.currentTime = 0
        acceleratorP1 = false
        acceleratorTimer = 0
        hurtShieldTimer = 0
        displaySlotsSolo()
        scoreCounter = setInterval(() => {
            scoreNum++
            sScore.innerText = scoreNum
        }, 500);
        addSpeed = setInterval(() => {
            if (scoreNum % 250 == 0 && scoreNum != 0) {
                plusSpeed = plusSpeed + 0.25
                document.getElementById('plusSpeedAlert').innerText = `${plusSpeed * 100}%`
                if (plusSpeed == 1 && trail == NaN) {
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
        }, 501);
    }, 500);
})

soloClassicButton.addEventListener("click", () => {
    pageType = 2.1
    gameMPage.style.opacity = '0'
    setTimeout(() => {
        gameMPage.removeAttribute('style')
        soloClassicLive = 6
        makeSCScoreCounter()
        checkLivesSoloClassic()
        classicSoloPage.style.display = 'block'
        removeEnd()
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
        duoRSortMeteors()
    }, 500);
})




document.addEventListener("keydown", function (e) {
    if (e.key == "m" || e.key == "M") {
        let volAlert = document.getElementById('volAlert')
        let volAlertCont = document.getElementById('volAlertCont')
        if (muted) {
            muted = false
            localStorage.setItem('volume', 1)
            organizeSound()
            volAlert.innerText = 'volume_up'
            volAlertCont.style.bottom = '20px'
            setTimeout(() => {
                volAlertCont.removeAttribute('style')
            }, 2000);
        } else {
            muted = true
            localStorage.setItem('volume', 0)
            organizeSound()
            volAlert.innerText = 'volume_off'
            volAlertCont.style.bottom = '20px'
            setTimeout(() => {
                volAlertCont.removeAttribute('style')
            }, 2000);
        }
    }
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
        if (type2Controls) {
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
        } else {
            soloKeyDown(e)
        }
        if (e.key == "1") {
            if (shieldSlot > 0 && !shieldActive) {
                player.classList.add('shield')
                shield = true
                shieldActive = true
                shieldSlot--
                if (acceleratorP1 || relaxStts) {
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
            if (acceleratorSlot > 0 && !acceleratorP1) {
                acceleratorSlot--
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
                acceleratorP1 = true
                document.getElementById('gameBckg').style.display = 'none'
                document.getElementById('gameBckg').style.animationDuration = '7.5s'
                setTimeout(() => {
                    document.getElementById('gameBckg').style.display = 'block'
                }, 1);
                if (shieldActive) {
                    player.classList.remove('shield')
                }

                clearInterval(scoreCounter)
                scoreCounter = setInterval(() => {
                    scoreNum++
                    sScore.innerText = scoreNum
                }, 500);
                plusSpeed = plusSpeed + 0.25
                document.getElementById('plusSpeedAlert').innerText = `${plusSpeed * 100}%`
                acceleratorWaiter = setInterval(() => {
                    acceleratorTimer++
                    if (acceleratorTimer == 50) {
                        clearInterval(acceleratorWaiter)
                        acceleratorP1 = false
                        acceleratorTimer = 0
                        document.getElementById('gameBckg').style.display = 'none'
                        invencible.removeAttribute('style')
                        //trail.removeAttribute('style')
                        if (plusSpeed < 1) {
                            clearInterval(trail)
                        } else {
                            clearInterval(trail)
                            trail = NaN
                            setTimeout(() => {
                                trail = setInterval(() => {
                                    let trailElm = document.createElement('div')
                                    trailElm.setAttribute('class', 'trail')
                                    trailElm.setAttribute('style', `top: ${playerPosi}%`)
                                    trailElm.addEventListener("animationend", () => {
                                        trailElm.remove()
                                    })
                                    soloPage.insertAdjacentElement('beforeend', trailElm)
                                }, 100);
                            }, 10);
                        }
                        if (shieldActive) {
                            player.classList.add('shield')
                        }
                        setTimeout(() => {
                            document.getElementById('gameBckg').removeAttribute('style')
                        }, 1);

                        clearInterval(scoreCounter)
                        scoreCounter = setInterval(() => {
                            scoreNum++
                            sScore.innerText = scoreNum
                        }, 500)
                    }
                }, 1000);
            } else if (acceleratorSlot == 0) {
                document.getElementById('acceleratorAlert').classList.add('emptySlot')
                setTimeout(() => {
                    document.getElementById('acceleratorAlert').classList.remove('emptySlot')
                }, 1500);
            }
        }

        if (e.key == "3") {
            if (!acceleratorP1 && !relaxStts && relaxSlot > 0 && plusSpeed > 0) {
                relaxSlot--
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
                    if (plusSpeed < 1) {
                        clearInterval(trail)
                        trail = NaN
                    }
                }, 2000);
            } else if (relaxSlot == 0) {
                document.getElementById('relaxAlert').classList.add('emptySlot')
                setTimeout(() => {
                    document.getElementById('relaxAlert').classList.remove('emptySlot')
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

    if (pageType == 2 && !kill) {
        if (e.key == "Enter") {
            pauseGameSolo()
        }
    }

    if (pageType == 2.1) {
        if (e.key == " " && !pausedClassicSolo) {
            playerClassic.classList.add('jump')
            playerClassic.addEventListener('animationend', () => {
                setTimeout(() => {
                    playerClassic.className = 'player'
                    if (scHurted) {
                        playerClassic.classList.add('hShield')
                    }
                }, 200);
            })
        }

        if (e.key == "ArrowUp" && !pausedClassicSolo && canFly) {
            playerClassic.classList.add('fly')
            flyingNow = true
            playerClassic.addEventListener('animationend', () => {
                flyingNow = false
                canFly = false
                makePlayerFlyAgain()
            })
        }
        
        if (e.key == "Enter") {
            pauseSoloClassic()
        }
    }
    //End Solo Game Controls

    //Duo Game : Run! Controls
    if (pageType == 3 && !duoRunPaused) {
        duoRunKeyDown(e)

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
                p1RBoost.style.animationPlayState = 'paused'
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
                    p1RBoost.style.animationPlayState = 'running'
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
                p1RBoost.style.animationPlayState = 'running'
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
                    p1RBoost.style.animationPlayState = 'running'
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
            if (!duoRunP2Inv && P2DRInvSlot > 0) {
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
    if (pageType == 3) {
        if (e.key == 'Enter') {
            pauseDuoRun()
        }
    }

})

document.addEventListener("keyup", function (e) {
    //Solo Game Restore
    if (!hurtAnim && !kill && pageType == 2) {
        if (!relaxStts) {
            player.removeAttribute('class')
            player.className = 'player'
        }

        if (hurtShield) {
            player.classList.add('hShield')
        }
        if (shieldActive && acceleratorP1 == false && relaxStts == false) {
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
        song.currentTime = 0
        acceleratorTimer = 0
        hurtShieldTimer = 0
        playerPosi = 45
        player.removeAttribute('style')
        pageType = 1
        if (acceleratorP1) {
            acceleratorP1 = false
            clearInterval(trail)
            invencible.style.display = 'none'
        } else {
            acceleratorP1 = false
        } if (relaxStts) {
            relaxStts = false
        } else {
            relaxStts = false
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
        song.currentTime = 0
        homeSong.currentTime = 0
        homeSong.pause()
        song.play()
        acceleratorTimer = 0
        hurtShieldTimer = 0
        playerPosi = 45
        player.removeAttribute('style')
        pageType = 2
        if (acceleratorP1) {
            acceleratorP1 = false
            clearInterval(trail)
            invencible.style.display = 'none'
        } else {
            acceleratorP1 = false
        } if (relaxStts) {
            relaxStts = false
        } else {
            relaxStts = false
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
        }, 500)
        document.getElementById('soloHighAlert').removeAttribute('style')
    }, 500)
})

//Duo Run Score Nav Buttons 

document.getElementById('duoRSHome').addEventListener("click", () => {
    duoRunScorePage.style.opacity = '0'
    setTimeout(() => {
        duoRunScorePage.removeAttribute('style')
        homePage.style.display = 'flex'
        duoRSong.currentTime = 0
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
        p1RHS = false
        p2RHS = false
    }, 500);
})

document.getElementById('duoRSGame').addEventListener("click", () => {
    duoRunScorePage.style.opacity = '0'
    setTimeout(() => {
        duoRunScorePage.removeAttribute('style')
        duoRunPage.style.display = 'flex'
        homeSong.pause()
        homeSong.currentTime = 0
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
    }, 500);
})
//End Navigations Functions

//Settings: Enable old Controls 
document.getElementById('oldControls').addEventListener('change', () => {
    if (document.getElementById('oldControls').checked) {
        type2Controls = true
        localStorage.setItem('oldControls', type2Controls)
    } else {
        type2Controls = false
        localStorage.setItem('oldControls', type2Controls)
    }
})
//End Settings: Enable old Controls

//Settings volume Slider

document.getElementById('vol').addEventListener('change', () => {
    let gameVolume = document.getElementById('vol').value / 100
    homeSong.volume = gameVolume
    song.volume = gameVolume
    duoRSong.volume = gameVolume
    hSong.volume = gameVolume
    shopSong.volume = gameVolume
    settingsSong.volume = gameVolume
    creditsSong.volume = gameVolume
    localStorage.setItem('volume', gameVolume)
    document.getElementById('volumeNum').innerText = `${document.getElementById('vol').value}%`
    if (gameVolume == 0) {
        muted = true
    } else {
        muted = false
    }
})

//Easter Egg Home
document.getElementById('hgh1').addEventListener("click", () => {
    document.getElementById('hgh1').classList.add('roundHome')
    setTimeout(() => {
        document.getElementById('hgh1').classList.remove('roundHome')
    }, 5000);
})
//End Easter Egg Home

//Prevent Right Click with name
document.getElementById('gameName').addEventListener("contextmenu", (e) => {
    e.preventDefault()
})
//End prevent Right Click with name

//Delete all button
document.getElementById('deleteSave').addEventListener("click", () => {
    let confirmDel = confirm('Deseja mesmo apagar tudo que há salvo? \n Não há volta!')
    if (confirmDel) {
        alert('Dados apagados! Iremos reiniciar')
        window.location = 'index.html'
        localStorage.clear()
    }
})