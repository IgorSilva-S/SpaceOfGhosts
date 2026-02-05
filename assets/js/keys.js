document.addEventListener('keydown', (e) => {
    if (screenIdentifier == -1 && canStart) {
        navToMainMenu()
    }

    if (e.key.toLowerCase() == 'm') {
        if (muted) {
            muted = false
            inputNotify.innerText = 'Sons: Ligados'
            inputNotify.style.bottom = '0'
            clearTimeout(INtimeout)
            INtimeout = setTimeout(() => {
                inputNotify.removeAttribute('style')
            }, 5000);
        } else {
            muted = true
            inputNotify.innerText = 'Sons: Desligados'
            inputNotify.style.bottom = '0'
            clearTimeout(INtimeout)
            INtimeout = setTimeout(() => {
                inputNotify.removeAttribute('style')
            }, 5000);
        }
    }

    if (e.repeat) return

    if (e.key.toLowerCase() == 'd') {
        devKeysToggle()
    }

    if (e.key == 'Enter') {
        pauseGame()
    }

    if ((e.key === "ArrowUp" || e.key.toLowerCase() == 'w') && screenIdentifier == 2) {
        pressing = true
        keyPressing = 'ArrowUp'
        if (!paused) {
            restartGif(upAnim);
        }
    } else if ((e.key === "ArrowUp" || e.key.toLowerCase() == 'w') && screenIdentifier == 3) {
        laneMovement('up')
    }

    if ((e.key === "ArrowDown" || e.key.toLowerCase() == 's') && screenIdentifier == 2) {
        pressing = true
        keyPressing = 'ArrowDown'
        if (!paused) {
            restartGif(downAnim);
        }
    } else if ((e.key === "ArrowDown" || e.key.toLowerCase() == 's') && screenIdentifier == 3) {
        laneMovement('down')
    }

    if (e.key == '1') {
        if (screenIdentifier == 2) {
            if (energy > 7 && life < 10) {
                energy = energy - 8
                life = life + 2
                if (life > 10) {
                    life = 10
                }
                checkLife()
            }
        } else if (screenIdentifier == 3) {
            if (pEnergy > 7 && life < 10) {
                pEnergy = pEnergy - 8
                life = life + 2
                if (life > 10) {
                    life = 10
                }
                checkLife()
                checkPEnergy()
            }
        }
    }

    if (e.key == '2') {
        shieldToggle('enable')
    }

    if (e.key == '3' && screenIdentifier == 2) {
        startQuickMove(keyPressing)
    } else if (e.key == '3' && screenIdentifier == 3) {
        if (pEnergy > 9) {
            pEnergy = pEnergy - 10
            checkPEnergy()
            startSpecialMove()
        }
    }

    if (e.key == '4') {
        if (energy > 9) {
            energy = energy - 10
            goToPlanet()
        }
    }

    if (e.key.toLowerCase() == 'l' && screenIdentifier == 2) {
        laneSwitcher()
    }

    if (e.key.toLowerCase() == ' ' && screenIdentifier == 3) {
        laneMovement('space')
    }

    checkEnergy()
});

document.addEventListener('keyup', (e) => {
    if (!paused) {
        restartGif(fly)
    } else {
        restartGif(stopImg)
    }
    pressing = false
    keyPressing = undefined
});
