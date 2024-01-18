let player = document.getElementById('ghost')
const song = document.getElementById('music')
const hSong = document.getElementById('hSong')
let playerPosi = 45
let meteor1 = document.getElementById('m1')
let meteor2 = document.getElementById('m2')
let meteor3 = document.getElementById('m3')
let meteor4 = document.getElementById('m4')
let meteor5 = document.getElementById('m5')
let meteor6 = document.getElementById('m6')
let meteor7 = document.getElementById('m7')
let hurtShield = false
let shield = false
let shieldActive = false
let hurtAnim = false
var gamePaused = false
let boostOn = false
let pauseBack = document.querySelector('.pauseContainer')
let pauseGui = document.querySelector('.pauseAlert')
let playerBeforePause
let pageType = 0
/*Tipos de página
0 - Avisos
1 - Início
2 - Jogo : 1p
3 - Jogo : 2p VS
4 - Loja
5 - Config
6 - Personalização
7 - Créditos
*/
const disButton = document.getElementById('exitDisclaimer')
const disPage = document.getElementById('disclaimer')
const infintePage = document.getElementById('infiniteMode')
const homePage = document.getElementById('homeScreen')
const infiniteButton = document.getElementById('infinitePlay')
const homeSong = document.getElementById('homeSong')
const boostItem = document.getElementById('bst')
let shieldSlot = 0


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
            if (e.key == "s" || e.key == "S") {
                if (shieldSlot > 0) {
                player.classList.add('shield')
                shield = true
                shieldActive = true
                shieldSlot--
                }
            }
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
        document.getElementById('gameBckg').style.animationPlayState = 'paused'
        song.pause()
        gamePaused = true
        playerBeforePause = playerPosi
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
        document.getElementById('gameBckg').removeAttribute('style')
        gamePaused = false
        song.play()
        player.style.top = `${playerBeforePause}%`
        playerPosi = playerBeforePause
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
    setTimeout(() => {
        infintePage.style.display = 'block'
    }, 1);
})

document.getElementById('backInf').addEventListener("click", function () {
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
    player.classList.remove('shield')
    shield = false
    shieldActive = false
    player.style.top = `45%`
    playerPosi = 45
    homeSong.play()
    song.currentTime = 0
    pageType = 1
    shieldSlot = 0
    disPage.style.display = 'none'
    homePage.style.display = 'flex'
    infintePage.style.display = 'none'
})

song.addEventListener('ended', function () {
    song.currentTime = 0
    song.play()
})

document.addEventListener("keyup", function (e) {
    if (!hurtAnim) {
        player.removeAttribute('class')
        player.className = 'player'
        if (hurtShield) {
            player.classList.add('hShield')
        }
        if (shieldActive) {
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
    let appearBoost = Math.floor((Math.random() * 2))
    if (appearBoost != 0) {
        let boostTop = Math.random() * 84
        boostTop = parseInt(boostTop)
        boostItem.style.opacity = '1'
        boostItem.style.top = `${boostTop}%`
        boostOn = true
    } else {
        boostItem.style.opacity = '0'
        boostOn = false
    }
})

//Check if meteor hit player
setInterval(() => {
    let meteorTop = meteor1.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor1).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield || gamePaused) {

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
                setTimeout(() => {
                    hurtShield = false
                    player.classList.remove('hShield')
                }, 5000);
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
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield || gamePaused) {
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
                setTimeout(() => {
                    hurtShield = false
                    player.classList.remove('hShield')
                }, 5000);
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
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield || gamePaused) {
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
                setTimeout(() => {
                    hurtShield = false
                    player.classList.remove('hShield')
                }, 5000);
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
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield || gamePaused) {
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
                setTimeout(() => {
                    hurtShield = false
                    player.classList.remove('hShield')
                }, 5000);
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
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield || gamePaused) {
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
                setTimeout(() => {
                    hurtShield = false
                    player.classList.remove('hShield')
                }, 5000);
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
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield || gamePaused) {
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
                setTimeout(() => {
                    hurtShield = false
                    player.classList.remove('hShield')
                }, 5000);
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
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield || gamePaused) {
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
                setTimeout(() => {
                    hurtShield = false
                    player.classList.remove('hShield')
                }, 5000);
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
            if (!shieldActive) {
                player.classList.add('shield')
                shield = true
                shieldActive = true
                boostItem.style.display = 'none'
            } else {
                shieldSlot++
                boostItem.style.display = 'none'
            }
        }
    }
}, 1);