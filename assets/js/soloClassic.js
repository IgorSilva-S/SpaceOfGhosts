function pauseSoloClassic() {
    if (!pausedClassicSolo) {
        soloCPBack.style.right = '0'
        soloCPGUI.style.right = '0'
        crystal1.style.animationPlayState = 'paused'
        crystal2.style.animationPlayState = 'paused'
        crystal3.style.animationPlayState = 'paused'
        crystal4.style.animationPlayState = 'paused'
        let bScore = localStorage.getItem('classicBestScore')
        if (bScore == undefined) {
            bScore = 0
        }
        document.getElementById('bestScoreClassic').innerText = bScore
        playerClassic.classList.add('playerPaused')
        document.querySelector('.classicSoil').style.animationPlayState = 'paused'
        document.getElementById('classicClouds').style.animationPlayState = 'paused'
        playerClassic.style.animationPlayState = 'paused'
        pausedClassicSolo = true
        soloClassicSong.pause()
        clearInterval(scHurtWaiter)
        clearInterval(canFlyWaiter)
        if (canFly) {
            document.getElementById('canFly').innerText = 'Sim'
            if (flyingNow) {
                document.getElementById('canFly').innerText = 'No ar'
            }
        } else {
            document.getElementById('canFly').innerText = 'Não'
        }
        clearInterval(scScoreCounter)
    } else {
        soloCPBack.removeAttribute('style')
        soloCPGUI.removeAttribute('style')
        crystal1.style.animationPlayState = 'running'
        crystal2.style.animationPlayState = 'running'
        crystal3.style.animationPlayState = 'running'
        crystal4.style.animationPlayState = 'running'
        playerClassic.classList.remove('playerPaused')
        document.querySelector('.classicSoil').removeAttribute('style')
        document.getElementById('classicClouds').removeAttribute('style')
        playerClassic.style.animationPlayState = 'running'
        pausedClassicSolo = false
        soloClassicSong.play()
        if (scHurted) {
            scHurtWaiter = setInterval(() => {
                scHurtTimer++
                if (scHurtTimer == 5) {
                    scHurtTimer = 0
                    scHurted = false
                    clearInterval(scHurtWaiter)
                    playerClassic.classList.remove('hShield')
                }
            }, 1000);
        }
        if (!canFly) {
            makePlayerFlyAgain()
            player.classList.remove('fly')
        }
        makeSCScoreCounter()
    }
}

function removeEnd() {
    crystal1.style.animationPlayState = 'running'
    crystal2.style.animationPlayState = 'running'
    crystal3.style.animationPlayState = 'running'
    crystal4.style.animationPlayState = 'running'
    playerClassic.classList.remove('playerPaused')
    playerClassic.removeAttribute('style')
    canFly = true
    document.querySelector('.classicSoil').removeAttribute('style')
    document.getElementById('classicClouds').removeAttribute('style')
    pausedClassicSolo = false
    if (canFly) {
        document.getElementById('canFly').innerText = 'Sim'
        if (flyingNow) {
            document.getElementById('canFly').innerText = 'No ar'
        }
    } else {
        document.getElementById('canFly').innerText = 'Não'
    }
}

function backSelectSC() {
    pageType = 1.1
    classicSoloPage.style.opacity = '0'
    document.getElementById('actualScore').innerText = '0'
    setTimeout(() => {
        classicSoloPage.removeAttribute('style')
        gameMPage.style.display = 'flex'
        scScore = 0
        homeSong.play()
        if (pausedClassicSolo) {
            pauseSoloClassic()
            setTimeout(() => {
                clearInterval(scScoreCounter)
                soloClassicSong.currentTime = 0
                soloClassicSong.pause()
            }, 1);
        }
    }, 500);
}

function restartSoloClassic() {
    classicSoloPage.removeAttribute('style')
    soloClassicSong.currentTime = 0
    document.getElementById('actualScore').innerText = '0'
    setTimeout(() => {
        classicSoloPage.style.display = 'block'
        if (pausedClassicSolo) {
            pauseSoloClassic()
        }
        canFly = true
        scScore = 0
        if (canFly) {
            document.getElementById('canFly').innerText = 'Sim'
            if (flyingNow) {
                document.getElementById('canFly').innerText = 'No ar'
            }
        } else {
            document.getElementById('canFly').innerText = 'Não'
        }
    }, 1);
}

document.getElementById('backSoloClassic').addEventListener('click', () => {
    backSelectSC()
})

document.getElementById('resetSoloClassic').addEventListener('click', () => {
    restartSoloClassic()
})

function checkLivesSoloClassic() {
    if (soloClassicLive == 6) {
        soloClassicHearts.className = 'hearts'
        soloClassicHearts.classList.add('h100')
    }

    if (soloClassicLive == 5) {
        soloClassicHearts.className = 'hearts'
        soloClassicHearts.classList.add('h80')
    }

    if (soloClassicLive == 4) {
        soloClassicHearts.className = 'hearts'
        soloClassicHearts.classList.add('h60')
    }

    if (soloClassicLive == 3) {
        soloClassicHearts.className = 'hearts'
        soloClassicHearts.classList.add('h40')
    }

    if (soloClassicLive == 2) {
        soloClassicHearts.className = 'hearts'
        soloClassicHearts.classList.add('h20')
    }

    if (soloClassicLive == 1) {
        soloClassicHearts.className = 'hearts'
        soloClassicHearts.classList.add('h0')
    }
    if (soloClassicLive == 0) {
        crystal1.style.animationPlayState = 'paused'
        crystal2.style.animationPlayState = 'paused'
        crystal3.style.animationPlayState = 'paused'
        crystal4.style.animationPlayState = 'paused'
        playerClassic.classList.add('playerPaused')
        playerClassic.style.transitionDuration = '.3s'
        playerClassic.style.rotate = '90deg'
        if (scScore > localStorage.getItem('classicBestScore')) {
            localStorage.setItem('classicBestScore', scScore)
        }
        document.querySelector('.classicSoil').style.animationPlayState = 'paused'
        document.getElementById('classicClouds').style.animationPlayState = 'paused'
        playerClassic.style.animationPlayState = 'paused'
        clearInterval(scHurtWaiter)
        scHurted = false
        player.classList.remove('hShield')
        pausedClassicSolo = true
        clearInterval(scHurtWaiter)
        clearInterval(canFlyWaiter)
        if (canFly) {
            document.getElementById('canFly').innerText = 'Sim'
            if (flyingNow) {
                document.getElementById('canFly').innerText = 'No ar'
            }
        } else {
            document.getElementById('canFly').innerText = 'Não'
        }
        clearInterval(scScoreCounter)
        setTimeout(() => {
            pageType = 1
            classicSoloPage.style.opacity = '0'
            setTimeout(() => {
                classicSoloPage.removeAttribute('style')
                soloClassicSong.currentTime = 0
                soloClassicSong.pause()
                homeSong.play()
                homePage.style.display = 'flex'
                scScore = 0
            }, 500);
        }, 200);
    }
}

function makePlayerFlyAgain() {
    canFlyWaiter = setInterval(() => {
        flyTimer++
        if (flyTimer == 30) {
            canFly = true
            flyTimer = 0
            document.getElementById('canFly').innerText = 'Sim'
            clearInterval(canFlyWaiter)
        }
    }, 1000);
}

function makeSCScoreCounter() {
    scScoreCounter = setInterval(() => {
        scScore++
        document.getElementById('actualScore').innerText = scScore
    }, 500);
}

crystal1.addEventListener("animationiteration", () => {
    let typeCrystal = Math.floor((Math.random() * 6) + 1)
    let delayCrystal = Math.floor(Math.random() * 5)
    crystal1.className = 'crystal'
    crystal1.style.display = 'none'
    setTimeout(() => {
        crystal1.style.display = 'block'
        crystal1.classList.add(`cType${typeCrystal}`)
        crystal1.style.animationDelay = `${delayCrystal}s`
    }, 1);
})

crystal2.addEventListener("animationiteration", () => {
    let typeCrystal = Math.floor((Math.random() * 6) + 1)
    let delayCrystal = Math.floor(Math.random() * 5)
    crystal2.className = 'crystal'
    crystal2.style.display = 'none'
    setTimeout(() => {
        crystal2.style.display = 'block'
        crystal2.classList.add(`cType${typeCrystal}`)
        crystal2.style.animationDelay = `${delayCrystal}s`
    }, 1);
})

crystal3.addEventListener("animationiteration", () => {
    let typeCrystal = Math.floor((Math.random() * 6) + 1)
    let delayCrystal = Math.floor(Math.random() * 5)
    crystal3.className = 'crystal'
    crystal3.style.display = 'none'
    setTimeout(() => {
        crystal3.style.display = 'block'
        crystal3.classList.add(`cType${typeCrystal}`)
        crystal3.style.animationDelay = `${delayCrystal}s`
    }, 1);
})

crystal4.addEventListener("animationiteration", () => {
    let typeCrystal = Math.floor((Math.random() * 6) + 1)
    let delayCrystal = Math.floor(Math.random() * 5)
    crystal4.className = 'crystal'
    crystal4.style.display = 'none'
    setTimeout(() => {
        crystal4.style.display = 'block'
        crystal4.classList.add(`cType${typeCrystal}`)
        crystal4.style.animationDelay = `${delayCrystal}s`
    }, 1);
})

setInterval(() => {
    let crystalLeft = parseInt(
        window.getComputedStyle(crystal1).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(playerClassic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !scHurted) {
        scHurted = true
        soloClassicLive--
        checkLivesSoloClassic()
        playerClassic.classList.add('hShield')
        scHurtWaiter = setInterval(() => {
            scHurtTimer++
            if (scHurtTimer == 5) {
                scHurtTimer = 0
                scHurted = false
                clearInterval(scHurtWaiter)
                playerClassic.classList.remove('hShield')
            }
        }, 1000);
    }
}, 1);

setInterval(() => {
    let crystalLeft = parseInt(
        window.getComputedStyle(crystal2).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(playerClassic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !scHurted) {
        scHurted = true
        soloClassicLive--
        checkLivesSoloClassic()
        playerClassic.classList.add('hShield')
        scHurtWaiter = setInterval(() => {
            scHurtTimer++
            if (scHurtTimer == 5) {
                scHurtTimer = 0
                scHurted = false
                clearInterval(scHurtWaiter)
                playerClassic.classList.remove('hShield')
            }
        }, 1000);
    }
}, 1);

setInterval(() => {
    let crystalLeft = parseInt(
        window.getComputedStyle(crystal3).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(playerClassic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !scHurted) {
        scHurted = true
        soloClassicLive--
        checkLivesSoloClassic()
        playerClassic.classList.add('hShield')
        scHurtWaiter = setInterval(() => {
            scHurtTimer++
            if (scHurtTimer == 5) {
                scHurtTimer = 0
                scHurted = false
                clearInterval(scHurtWaiter)
                playerClassic.classList.remove('hShield')
            }
        }, 1000);
    }
}, 1);

setInterval(() => {
    let crystalLeft = parseInt(
        window.getComputedStyle(crystal4).getPropertyValue("left")
    );
    let playerBottom = parseInt(
        window.getComputedStyle(playerClassic).getPropertyValue("bottom")
    );
    if ((crystalLeft <= 200 && crystalLeft >= 101) && playerBottom == 50 && !scHurted) {
        scHurted = true
        soloClassicLive--
        checkLivesSoloClassic()
        playerClassic.classList.add('hShield')
        scHurtWaiter = setInterval(() => {
            scHurtTimer++
            if (scHurtTimer == 5) {
                scHurtTimer = 0
                scHurted = false
                clearInterval(scHurtWaiter)
                playerClassic.classList.remove('hShield')
            }
        }, 1000);
    }
}, 1);