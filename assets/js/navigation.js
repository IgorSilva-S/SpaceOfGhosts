let screenIdentifier = 0
/* 
    Screens:
    0: Main Menu
    1: Spaceship
    2: Game
    3: Planet
*/
const blackout = document.getElementById('blackout')

function closeAllScreens() {
    document.getElementById('mainMenu').removeAttribute('style')
    document.getElementById('gidM').removeAttribute('style')
    document.getElementById('spaceShipTop').removeAttribute('style')
    document.getElementById('spaceShip').removeAttribute('style')
    document.getElementById('ghostId').removeAttribute('style')
    document.getElementById('spaceArea').removeAttribute('style')
    document.getElementById('planetArea').removeAttribute('style')
}

function b2bSpaceShip(posi) {
    if (posi == 'top') {
        blackout.style.display = 'block'
        setTimeout(() => {
            blackout.style.opacity = '0'
            screenIdentifier = 1
            closeAllScreens()
            setTimeout(() => {
                document.getElementById('spaceShipTop').style.display = 'block'
            }, 1);
            setTimeout(() => {
                blackout.removeAttribute('style')
            }, 300);
        }, 600);
    } else {
        blackout.style.display = 'block'
        setTimeout(() => {
            blackout.style.opacity = '0'
            screenIdentifier = 1
            closeAllScreens()
            setTimeout(() => {
                document.getElementById('spaceShip').style.display = 'block'
            }, 1);
            setTimeout(() => {
                blackout.removeAttribute('style')
            }, 300);
        }, 600);
    }
}

document.getElementById('play').addEventListener('click', () => {
    if (freeGID == 5) {
        blackout.style.display = 'block'
        stopAllMusics()
        setTimeout(() => {
            blackout.style.opacity = '0'
            closeAllScreens()
            spaceshipMusic.play()
            setTimeout(() => {
                document.getElementById('ghostId').style.display = 'block'
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
            screenIdentifier = 1
            closeAllScreens()
            setTimeout(() => {
                document.getElementById('spaceShipTop').style.display = 'block'
                autoLoadGID()
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
                document.getElementById('ghostId').style.display = 'flex'
                spaceshipMusic.play()
            }, 1);
            setTimeout(() => {
                blackout.removeAttribute('style')
            }, 300);
        }, 600);
})

document.getElementById('gid2ssp').addEventListener('click', () => {
    if (freeGID < 5) {
        blackout.style.display = 'block'
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
    } else {
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
    }

    instaGID = null
    GIDCardsAnim()
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
    if (loadedGID !== null) {
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
    } else {
        document.getElementById('outGIDTxt').style.backgroundColor = 'red'
        document.getElementById('marqueeMovement').style.backgroundColor = 'red'
        setTimeout(() => {
            document.getElementById('outGIDTxt').removeAttribute('style')
            document.getElementById('marqueeMovement').removeAttribute('style')
        }, 700);
        console.log('Insert a GID')
    }
})

document.getElementById('toGIDM').addEventListener('click', () => {
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
