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
    document.getElementById('spaceShipTop').removeAttribute('style')
    document.getElementById('spaceShip').removeAttribute('style')
    document.getElementById('spaceArea').removeAttribute('style')
}
document.getElementById('play').addEventListener('click', () => {
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