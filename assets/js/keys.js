document.addEventListener('keydown', (e) => {

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
        if (energy > 9) {
            energy = energy - 10
            life = life + 2
            checkLife()
        }
    }

    if (e.key == '2') {
        shieldToggle('enable')
    }

    if (e.key == '3' && screenIdentifier == 2) {
        startQuickMove(keyPressing)
    }

    if (e.key.toLowerCase() == 'l' && screenIdentifier == 2) {
        laneSwitcher()
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
