const player = document.getElementById('ghost')
const invencible = document.getElementById('Inv')
let trail
const trailsElms = document.querySelectorAll('.trail')
const song = document.getElementById('music')
const hSong = document.getElementById('hSong')
let playerPosi = 45
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
const infintePage = document.getElementById('infiniteMode')
const homePage = document.getElementById('homeScreen')
const infiniteButton = document.getElementById('infinitePlay')
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


disButton.addEventListener("click", function () {
    pageType = 1
    disPage.style.display = 'none'
    homePage.style.display = 'flex'
    infintePage.style.display = 'none'
    homeSong.play()
    song.pause()
    song.currentTime = 0
})

document.getElementById('hgh1').addEventListener("click", () => {
    document.getElementById('hgh1').classList.add('roundHome')
    setTimeout(() => {
        document.getElementById('hgh1').classList.remove('roundHome')
    }, 5000);
})

homeSong.addEventListener("ended", () => {
    homeSong.currentTime = 0
    homeSong.play()
})

infiniteButton.addEventListener("click", function () {
    let vol = 1
    pageType = 2
    lives1p = 100
    checkLive1p()
    disPage.style.display = 'none'
    homePage.style.opacity = '0'
    waiter = setInterval(() => {
        homeSong.volume = vol - .2
    }, 100);
    setTimeout(() => {
        homePage.removeAttribute('style')
        homePage.style.display = 'none'
        infintePage.style.display = 'block'
        homeSong.pause()
        clearInterval(waiter)
        song.play()
        homeSong.volume = 1
        homeSong.currentTime = 0
        superP1 = false
        superSong.pause()
        superSong.currentTime = 0
        superTimer = 0
        hurtShieldTimer = 0
        displaySlots()
    }, 500);
})

function sortMeteorStart() {
    let typeOf1 = Math.floor((Math.random() * 3) + 1)
    meteor1.removeAttribute('class')
    meteor1.className = 'meteor'
    meteor1.classList.add(`mt${typeOf1}`)
    let typeOf2 = Math.floor((Math.random() * 3) + 1)
    meteor2.removeAttribute('class')
    meteor2.className = 'meteor'
    meteor2.classList.add(`mt${typeOf2}`)
    let typeOf3 = Math.floor((Math.random() * 3) + 1)
    meteor3.removeAttribute('class')
    meteor3.className = 'meteor'
    meteor3.classList.add(`mt${typeOf3}`)
    let typeOf4 = Math.floor((Math.random() * 3) + 1)
    meteor4.removeAttribute('class')
    meteor4.className = 'meteor'
    meteor4.classList.add(`mt${typeOf4}`)
    let typeOf5 = Math.floor((Math.random() * 3) + 1)
    meteor5.removeAttribute('class')
    meteor5.className = 'meteor'
    meteor5.classList.add(`mt${typeOf5}`)
    let typeOf6 = Math.floor((Math.random() * 3) + 1)
    meteor6.removeAttribute('class')
    meteor6.className = 'meteor'
    meteor6.classList.add(`mt${typeOf6}`)
    let typeOf7 = Math.floor((Math.random() * 3) + 1)
    meteor7.removeAttribute('class')
    meteor7.className = 'meteor'
    meteor7.classList.add(`mt${typeOf7}`)
}

sortMeteorStart()

function displaySlots() {
    shieldSW.innerText = shieldSlot
    superSW.innerText = superSlot
    invSW.innerText = invSlot
    ShealSW.innerText = fullHealSlot
    healSW.innerText = healSlot
}

document.addEventListener("keydown", function (e) {
    if (pageType == 0) {
        if (e.key == "Enter") {
            pageType = 1
            disPage.style.display = 'none'
            homePage.style.display = 'flex'
            infintePage.style.display = 'none'
            homeSong.play()
            song.pause()
            song.currentTime = 0
        }
    }
    if (pageType == 2 && !gamePaused && !hurtAnim) {
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
                } else if(shieldSlot == 0) {
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
                        infintePage.insertAdjacentElement('beforeend', trailElm)
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
                } else if (invSlot == 0 ){
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
            }
            displaySlots()
        }
    }

    if (pageType == 2) {
        if (e.key == "Enter") {
            pauseGame()
        }
    }
})

function pauseGame() {
    if (!gamePaused) {
        pauseGui.style.right = '0'
        pauseBack.style.right = '0'
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
        gamePaused = true
        playerBeforePause = playerPosi
        superSong.pause()
        invSong.pause()
        clearInterval(superWaiter)
        clearInterval(hurtSWaiter)
        clearInterval(invWaiter)
        if (!invStts) {
            invTimer = 0
        } if (!superP1) {
            superTimer = 0
        } if (!hurtShield) {
            hurtShieldTimer = 0
        }
    } else {
        pauseGui.style.right = '-25%'
        pauseBack.style.right = '-130%'
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
        player.style.top = `${playerBeforePause}%`
        playerPosi = playerBeforePause
        if (superP1) {
            song.pause()
            superSong.play()
            if (shieldActive) {
                player.classList.remove('shield')
            }
            document.getElementById('gameBckg').style.display = 'none'
            document.getElementById('gameBckg').style.animationDuration = '7.5s'
            setTimeout(() => {
                document.getElementById('gameBckg').style.display = 'block'
            }, 1);
            superWaiter = setInterval(() => {
                superTimer++
                if (superTimer == 50) {
                    clearInterval(superWaiter)
                    superP1 = false
                    superSong.pause()
                    superSong.currentTime = 0
                    song.play()
                    superTimer = 0
                    document.getElementById('gameBckg').removeAttribute('style')
                    invencible.removeAttribute('style')
                    //trail.removeAttribute('style')
                    clearInterval(trail)
                    if (shieldActive) {
                        player.classList.add('shield')
                    }
                }
            }, 1000);
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

        if (invStts) {
            song.pause()
            invSong.play()
            invWaiter = setInterval(() => {
                invTimer++
                if (invTimer == 30) {
                    invencible.removeAttribute('style')
                    invSong.pause()
                    song.play()
                    invSong.currentTime = 0
                    invStts = false
                    invTimer = 0
                }
            }, 1000);
        }
    }
}

document.getElementById('continueInf').addEventListener("click", function () {
    pauseGame()
})

document.getElementById('restartInf').addEventListener("click", function () {
    pauseGame()
    song.currentTime = 0
    infintePage.style.display = 'none'
    player.classList.remove('shield')
    shield = false
    shieldActive = false
    player.style.top = `45%`
    playerPosi = 45
    shieldSlot = 0
    superP1 = false
    invStts = false
    superSong.pause()
    superSong.currentTime = 0
    lives1p = 100
    checkLive1p()
    setTimeout(() => {
        infintePage.style.display = 'block'
    }, 1);
})

document.getElementById('backInf').addEventListener("click", function () {
    infintePage.style.opacity = '0'
    let vol = 1
    waiter = setInterval(() => {
        if (superP1) {
            superSong.volume = vol - .2
        } else {
            homeSong.volume = vol - .2
        }
    }, 100);
    setTimeout(() => {
        infintePage.removeAttribute('style')
        infintePage.style.display = 'none'
        homePage.style.display = 'flex'
        if (superP1) {
            superSong.pause()
            superSong.volume = 1
        } else {
            song.pause()
            song.volume = 1
        }
        clearInterval(waiter)
        homeSong.play()
        homeSong.currentTime = 0
        superP1 = false
        invStts = false
        superSong.currentTime = 0
        song.currentTime = 0
        superTimer = 0
        hurtShieldTimer = 0
        playerPosi = 45
        player.removeAttribute('style')
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
    }, 500);
})

/*song.addEventListener('ended', function () {
    song.currentTime = 0
    song.play()
})*/

superSong.addEventListener('ended', () => {
    superSong.currentTime = 0
    superSong.play()
})

document.addEventListener("keyup", function (e) {
    if (!hurtAnim) {
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
})

meteor1.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let speedNum = Math.floor((Math.random() * 3) + 3)
    let typeOf = Math.floor((Math.random() * 3) + 1)
    if (superP1) {
        speedNum--
    }
    meteor1.removeAttribute('class')
    meteor1.className = 'meteor'
    meteor1.classList.add(`mt${typeOf}`)
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
    let typeOf = Math.floor((Math.random() * 3) + 1)
    if (superP1) {
        speedNum--
    }
    meteor2.removeAttribute('class')
    meteor2.className = 'meteor'
    meteor2.classList.add(`mt${typeOf}`)
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
    let typeOf = Math.floor((Math.random() * 3) + 1)
    if (superP1) {
        speedNum--
    }
    meteor3.removeAttribute('class')
    meteor3.className = 'meteor'
    meteor3.classList.add(`mt${typeOf}`)
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
    let typeOf = Math.floor((Math.random() * 3) + 1)
    if (superP1) {
        speedNum--
    }
    meteor4.removeAttribute('class')
    meteor4.className = 'meteor'
    meteor4.classList.add(`mt${typeOf}`)
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
    let typeOf = Math.floor((Math.random() * 3) + 1)
    if (superP1) {
        speedNum--
    }
    meteor5.removeAttribute('class')
    meteor5.className = 'meteor'
    meteor5.classList.add(`mt${typeOf}`)
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
    let typeOf = Math.floor((Math.random() * 3) + 1)
    if (superP1) {
        speedNum--
    }
    meteor6.removeAttribute('class')
    meteor6.className = 'meteor'
    meteor6.classList.add(`mt${typeOf}`)
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
    let typeOf = Math.floor((Math.random() * 3) + 1)
    if (superP1) {
        speedNum--
    }
    meteor7.removeAttribute('class')
    meteor7.className = 'meteor'
    meteor7.classList.add(`mt${typeOf}`)
    randomNum = parseInt(randomNum)
    meteor7.style.top = `${randomNum}%`
    meteor7.style.display = 'none'
    setTimeout(() => {
        meteor7.style.display = 'block'
        meteor7.style.animationDuration = `${speedNum}s`
    }, 1);
})

boostItem.addEventListener("animationiteration", () => {
    boostOn = false
    boostItem.style.opacity = '0'
    let appearBoost = Math.floor((Math.random() * 2))
    if (appearBoost != 0) {
        let boostTop = Math.random() * 84
        boostStyle = Math.floor(Math.random() * 5)
        boostTop = parseInt(boostTop)
        boostItem.style.opacity = '1'
        boostItem.style.top = `${boostTop}%`
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
            boostItem.classList.add('superBoost')
        }

        if (boostStyle == 4) {
            boostItem.classList.add('invBoost')
        }
    } else {
        boostItem.style.opacity = '0'
        boostOn = false
    }
})

function checkLive1p() {
    if (lives1p == 100) {
        lives1pAlert.removeAttribute('class')
        lives1pAlert.className = 'hearts'
        lives1pAlert.classList.add('h100')
    }

    if (lives1p == 90) {
        lives1pAlert.removeAttribute('class')
        lives1pAlert.className = 'hearts'
        lives1pAlert.classList.add('h90')
    }

    if (lives1p == 80) {
        lives1pAlert.removeAttribute('class')
        lives1pAlert.className = 'hearts'
        lives1pAlert.classList.add('h80')
    }

    if (lives1p == 70) {
        lives1pAlert.removeAttribute('class')
        lives1pAlert.className = 'hearts'
        lives1pAlert.classList.add('h70')
    }

    if (lives1p == 60) {
        lives1pAlert.removeAttribute('class')
        lives1pAlert.className = 'hearts'
        lives1pAlert.classList.add('h60')
    }

    if (lives1p == 50) {
        lives1pAlert.removeAttribute('class')
        lives1pAlert.className = 'hearts'
        lives1pAlert.classList.add('h50')
    }

    if (lives1p == 40) {
        lives1pAlert.removeAttribute('class')
        lives1pAlert.className = 'hearts'
        lives1pAlert.classList.add('h40')
    }

    if (lives1p == 30) {
        lives1pAlert.removeAttribute('class')
        lives1pAlert.className = 'hearts'
        lives1pAlert.classList.add('h30')
    }

    if (lives1p == 20) {
        lives1pAlert.removeAttribute('class')
        lives1pAlert.className = 'hearts'
        lives1pAlert.classList.add('h20')
    }

    if (lives1p == 10) {
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
        alert('Game Over')
        pageType = 1
        disPage.style.display = 'none'
        homePage.style.display = 'flex'
        infintePage.style.display = 'none'
        hSong.pause()
        hSong.currentTime = 0
        homeSong.play()
        song.pause()
        song.currentTime = 0
    }
}

//Check if meteor hit player
setInterval(() => {
    let meteorTop = meteor1.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor1).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield || gamePaused || superP1 || invStts) {

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
    let meteorTop = meteor2.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor2).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield || gamePaused || superP1 || invStts) {
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
    let meteorTop = meteor3.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor3).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield || gamePaused || superP1 || invStts) {
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
    let meteorTop = meteor4.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor4).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield || gamePaused || superP1 || invStts) {
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
    let meteorTop = meteor5.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor5).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield || gamePaused || superP1 || invStts) {
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
    let meteorTop = meteor6.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor6).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield || gamePaused || superP1 || invStts) {
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
    let meteorTop = meteor7.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor7).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield || gamePaused || superP1 || invStts) {
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
    let boostTop = boostItem.style.top
    boostTop = parseInt(boostTop)
    let boostLeft = parseInt(
        window.getComputedStyle(boostItem).getPropertyValue("left")
    );
    if ((boostTop <= playerPosi || boostTop >= playerPosi) && (boostLeft <= 250 && boostLeft >= 150)) {
        if (boostTop >= playerPosi + 15 || boostTop <= playerPosi - 8 || gamePaused || !boostOn) {
        } else {

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
                }trail
                if (superP1 || invStts) {
                    player.classList.remove('shield')
                    shield = true
                    shieldActive = true
                    boostItem.style.opacity = '0'
                    boostOn = false
                }
            } else if (boostStyle == 1) {
                boostItem.style.opacity = '0'
                boostOn = false
                
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

                checkLive1p()
            } else if (boostStyle == 2) {
                boostItem.style.opacity = '0'
                boostOn = false
                if (lives1p < 100) {
                    lives1p = 100
                    checkLive1p()
                } else {
                    fullHealSlot++
                }
            } else if (boostStyle == 3) {
                boostItem.style.opacity = '0'
                boostOn = false
                if (!superP1) {
                    song.pause()
                    superSong.play()
                    if (shieldActive) {
                        player.classList.remove('shield')
                    }
                    if (invStts) {
                        clearInterval(invWaiter)
                        invStts = false
                        invSong.pause()
                        invSong.currentTime = 0
                    }
                    superP1 = true
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
                        infintePage.insertAdjacentElement('beforeend', trailElm)
                    }, 100);
                    document.getElementById('gameBckg').style.animationDuration = '7.5s'
                    setTimeout(() => {
                        document.getElementById('gameBckg').style.display = 'block'
                    }, 1);
                    superWaiter = setInterval(() => {
                        superTimer++
                        if (superTimer == 50) {
                            clearInterval(superWaiter)
                            superP1 = false
                            superSong.pause()
                            superSong.currentTime = 0
                            song.play()
                            superTimer = 0
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
                        }
                    }, 1000);
                } else {
                    superSlot++
                }
                /*setTimeout(() => {
                    superSong.pause()
                    superSong.currentTime = 0
                    song.play()
                    superP1 = false
                }, 150000);*/
            } else if (boostStyle == 4) {
                boostItem.style.opacity = '0'
                boostOn = false
                if (!superP1 && !invStts) {
                    if (invTimer > 0) {
                        invTimer = 0
                    }
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
                } else {
                    invSlot++
                }
            }
            displaySlots()
        }
    }
}, 1);

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
            if (shieldActive && superP1 == false) {
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
            if (shieldActive && superP1 == false) {
                player.classList.add('shield')
            }
            if (gamePaused) {
                player.classList.add('playerPaused')
            }
        }
    }
})