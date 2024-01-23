
function sortMeteorStartSolo() {
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

sortMeteorStartSolo()

function displaySlotsSolo() {
    shieldSW.innerText = shieldSlot
    superSW.innerText = superSlot
    invSW.innerText = invSlot
    ShealSW.innerText = fullHealSlot
    healSW.innerText = healSlot
}

//Pause Game

function pauseGameSolo() {
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
        clearInterval(trail)
        clearInterval(scoreCounter)
        if (!invStts) {
            invTimer = 0
        } if (!superP1) {
            superTimer = 0
        } if (!hurtShield) {
            hurtShieldTimer = 0
        }
        soloPage.classList.add('paused')
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
        soloPage.classList.remove('paused')
        scoreCounter = setInterval(() => {
            scoreNum++
            sScore.innerText = scoreNum
        }, 500);
    }
}
//Pause Controls
document.getElementById('continueInf').addEventListener("click", function () {
    pauseGameSolo()
})

document.getElementById('restartInf').addEventListener("click", function () {
    pauseGameSolo()
    song.currentTime = 0
    soloPage.style.display = 'none'
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
    }
    player.style.top = `45%`
    playerPosi = 45
    shieldSlot = 0
    superSong.pause()
    superSong.currentTime = 0
    lives1p = 100
    checkLive1p()
    setTimeout(() => {
        soloPage.style.display = 'block'
    }, 1);
    clearSlotSolo()
    invSong.pause()
    superSong.pause()
    invSong.currentTime = 0
    superSong.currentTime = 0
    clearInterval(superWaiter)
    clearInterval(invWaiter)
    clearInterval(hurtSWaiter)
    superTimer = 0
    invTimer = 0
    hurtSWaiter = 0
    song.play()
    scoreNum = 0
    sScore.innerText = '0'
    clearInterval(scoreCounter)
    setTimeout(() => {
        scoreCounter = setInterval(() => {
            scoreNum++
            sScore.innerText = scoreNum
        }, 500);
    }, 1);

})

document.getElementById('backInf').addEventListener("click", function () {
    soloPage.style.opacity = '0'
    setTimeout(() => {
        soloPage.removeAttribute('style')
        soloPage.style.display = 'none'
        homePage.style.display = 'flex'
        homeSong.play()
        homeSong.currentTime = 0
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
        }
        superSong.currentTime = 0
        invSong.pause()
        superSong.pause()
        invSong.currentTime = 0
        song.currentTime = 0
        superTimer = 0
        hurtShieldTimer = 0
        playerPosi = 45
        player.removeAttribute('style')
        clearInterval(superWaiter)
        clearInterval(invWaiter)
        clearInterval(hurtSWaiter)
        superTimer = 0
        invTimer = 0
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
//End Pause Controls
//End Pause Game

//Clear Slot
function clearSlotSolo() {
    shieldSlot = 0
    superSlot = 0
    invSlot = 0
    fullHealSlot = 0
    healSlot = 0
    displaySlotsSolo()
}
//End Clear Slot

//Sort Meteors

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
//End Sort Meteors

//Sort Boost 
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
//End Sort Boost

//Check Lives

function checkLive1p() {
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
        clearInterval(superWaiter)
        clearInterval(invWaiter)
        clearInterval(hurtSWaiter)
        clearInterval(scoreCounter)
        setTimeout(() => {
            soloPage.style.opacity = '0'
            player.style.top = '120%'
            setTimeout(() => {
                pageType = 2.1
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
                player.classList.remove('deathAnim')
                player.removeAttribute('style')
                playerPosi = 45
                kill = false
                sScore.innerText = '0'
                superTimer = 0
                invTimer = 0
                hurtSWaiter = 0
                finalScore = scoreNum + ((shieldSlot + superSlot + invSlot + fullHealSlot + healSlot) * 10)
                document.getElementById('distance').innerText = scoreNum
                document.getElementById('slots').innerText = (shieldSlot + superSlot + invSlot + fullHealSlot + healSlot)
                document.getElementById('finalScore').innerText = finalScore
                let highScore = localStorage.getItem('highScore')
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
}
//End Check Lives

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
//End check meteor

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
                        soloPage.insertAdjacentElement('beforeend', trailElm)
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
    let keyType = e.key
    keysSolo[keyType] = false
}

let soloControls = setInterval(() => {
    moveChar()
}, 60);
function moveChar() {
    if (keysSolo['ArrowUp'] == true) {
        if(!hurtAnim) {
            playerPosi--
            if (playerPosi < 0) {
                playerPosi = 0
            }
            player.style.top = `${playerPosi}%`
            player.classList.add('upping')
        } else {
            keysSolo['ArrowUp'] = false
        }
    }
    if (keysSolo['ArrowDown'] == true) {
        if (!hurtAnim) {
            playerPosi++
            if (playerPosi >= 84) {
                playerPosi = 84
            }
            player.style.top = `${playerPosi}%`
            player.classList.add('falling')
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
//End Mobile Controls : Solo