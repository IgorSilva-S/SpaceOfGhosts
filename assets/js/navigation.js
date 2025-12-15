let screenIdentifier = 0
/* 
    Screens:
    0: Main Menu
    1: Spaceship
    2: Game
*/
const blackout = document.getElementById('blackout')

function closeAllScreens() {
    document.getElementById('mainMenu').removeAttribute('style')
    document.getElementById('gidM').removeAttribute('style')
    document.getElementById('spaceShipTop').removeAttribute('style')
    document.getElementById('spaceShip').removeAttribute('style')
    document.getElementById('ghostId').removeAttribute('style')
    document.getElementById('spaceArea').removeAttribute('style')
}

function b2bSpaceShip() {
    blackout.style.display = 'block'
    setTimeout(() => {
        blackout.style.opacity = '0'
        closeAllScreens()
        setTimeout(() => {
            document.getElementById('spaceShip').style.display = 'block'
        }, 1);
        setTimeout(() => {
            blackout.removeAttribute('style')
        }, 300);
    }, 600);
}

document.getElementById('play').addEventListener('click', () => {
    if (freeGID == 5) {
        blackout.style.display = 'block'
        stopAllMusics()
        setTimeout(() => {
            blackout.style.opacity = '0'
            closeAllScreens()
            GIDManagerMusic.play()
            setTimeout(() => {
                document.getElementById('gidM').style.display = 'block'
            }, 1);
            setTimeout(() => {
                blackout.removeAttribute('style')
            }, 300);
        }, 600);
    } else {
        blackout.style.display = 'block'
        stopAllMusics()
        setTimeout(() => {
            blackout.style.opacity = '0'
            closeAllScreens()
            setTimeout(() => {
                document.getElementById('spaceShipTop').style.display = 'block'
                spaceshipMusic.play()
            }, 1);
            setTimeout(() => {
                blackout.removeAttribute('style')
            }, 300);
        }, 600);
    }
})

document.getElementById('backMenu').addEventListener('click', () => {
    blackout.style.display = 'block'
    stopAllMusics()
    setTimeout(() => {
        blackout.style.opacity = '0'
        closeAllScreens()
        setTimeout(() => {
            document.getElementById('mainMenu').style.display = 'flex'
        }, 1);
        setTimeout(() => {
            blackout.removeAttribute('style')
        }, 300);
    }, 600);
})

document.getElementById('innerShip').addEventListener('click', () => {
    b2bSpaceShip()
})

document.getElementById('gid2menu').addEventListener('click', () => {
    blackout.style.display = 'block'
    stopAllMusics()
    setTimeout(() => {
        blackout.style.opacity = '0'
        closeAllScreens()
        setTimeout(() => {
            document.getElementById('mainMenu').style.display = 'flex'
        }, 1);
        setTimeout(() => {
            blackout.removeAttribute('style')
        }, 300);
    }, 600);
})

document.getElementById('gid2ssp').addEventListener('click', () => {
    b2bSpaceShip()
})

document.getElementById('outterShip').addEventListener('click', () => {
    blackout.style.display = 'block'
    setTimeout(() => {
        blackout.style.opacity = '0'
        closeAllScreens()
        setTimeout(() => {
            document.getElementById('spaceShipTop').style.display = 'block'
        }, 1);
        setTimeout(() => {
            blackout.removeAttribute('style')
        }, 300);
    }, 600);
})

document.getElementById('startGame').addEventListener('click', () => {
    blackout.style.display = 'block'
    stopAllMusics()
    setTimeout(() => {
        blackout.style.opacity = '0'
        closeAllScreens()
        setTimeout(() => {
            startGame()
        }, 1);
        setTimeout(() => {
            blackout.removeAttribute('style')
        }, 300);
    }, 600);
})

document.getElementById('gidmNav').addEventListener('click', () => {
    blackout.style.display = 'block'
    stopAllMusics()
    setTimeout(() => {
        blackout.style.opacity = '0'
        closeAllScreens()
        GIDManagerMusic.play()
        setTimeout(() => {
            document.getElementById('gidM').style.display = 'block'
        }, 1);
        setTimeout(() => {
            blackout.removeAttribute('style')
        }, 300);
    }, 600);
})

document.getElementById('GIDoor').addEventListener('click', () => {
    blackout.style.display = 'block'
    setTimeout(() => {
        blackout.style.opacity = '0'
        closeAllScreens()
        setTimeout(() => {
            document.getElementById('ghostId').style.display = 'block'
        }, 1);
        setTimeout(() => {
            blackout.removeAttribute('style')
        }, 300);
    }, 600);
})