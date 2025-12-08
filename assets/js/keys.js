document.addEventListener('keydown', (e) => {

    if (e.repeat) return

    if (e.key.toLowerCase() == 'd') {
        devKeysToggle()
    }

    if (e.key == 'Enter') {
        pauseGame()
    }

    if (e.key === "ArrowUp") {
        pressing = true
        keyPressing = 'ArrowUp'
        if (!paused) {
            restartGif(upAnim);
        }
    }

    if (e.key === "ArrowDown") {
        pressing = true
        keyPressing = 'ArrowDown'
        if (!paused) {
            restartGif(downAnim);
        }
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
