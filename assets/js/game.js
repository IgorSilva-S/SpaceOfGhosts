

// Hud
setInterval(() => {
    if (posi <= 4) {
        document.getElementById('infoBar').style.opacity = 0.4
    } else {
        document.getElementById('infoBar').removeAttribute('style')
    }
}, 100);

setInterval(() => {
    if (energy < 4) {
        document.getElementById('shieldBoost').style.opacity = 0.4
    } else {
        document.getElementById('shieldBoost').removeAttribute('style')
    }

    if (energy < 10) {
        document.getElementById('lifeBoost').style.opacity = 0.4
    } else {
        document.getElementById('lifeBoost').removeAttribute('style')
    }

}, 100);

// Life
let life = 10

const lifeView = document.getElementById('lifeView')
const lifeImagesPath = './assets/sprites/GUI/hearts'

const checkLife = () => {
    switch (life) {
        case 10:
            lifeView.removeAttribute('style')
            break;
        case 9:
            lifeView.style.backgroundImage = `url(${lifeImagesPath}/ninety.png)`
            break;
        case 8:
            lifeView.style.backgroundImage = `url(${lifeImagesPath}/eighty.png)`
            break;
        case 7:
            lifeView.style.backgroundImage = `url(${lifeImagesPath}/seventy.png)`
            break;
        case 6:
            lifeView.style.backgroundImage = `url(${lifeImagesPath}/sixty.png)`
            break;
        case 5:
            lifeView.style.backgroundImage = `url(${lifeImagesPath}/fifty.png)`
            break;
        case 4:
            lifeView.style.backgroundImage = `url(${lifeImagesPath}/fourty.png)`
            break;
        case 3:
            lifeView.style.backgroundImage = `url(${lifeImagesPath}/thirty.png)`
            break;
        case 2:
            lifeView.style.backgroundImage = `url(${lifeImagesPath}/twenty.png)`
            break;
        case 1:
            lifeView.style.backgroundImage = `url(${lifeImagesPath}/ten.png)`
            break;
        case 0:
            lifeView.style.backgroundImage = `url(${lifeImagesPath}/zero.png)`
            break;
        case -1:
            clearInterval(energyInterval)
            energyInterval = null
            closeAllScreens()
            document.getElementById('mainMenu').style.display = 'flex'
            screenIdentifier = 1
            break;
    }
}

// Energy
let energy = 0
const energyView = document.getElementById('energyView')
const energyImagesPath = './assets/sprites/GUI/energy'
// let energyInterval = setInterval(() => {
//     energy++
//     if (energy > 10) {
//         energy = 10
//     }
//     checkEnergy()
// }, 5000);
let energyInterval = null

const checkEnergy = () => {
    switch (energy) {
        case 10:
            energyView.style.backgroundImage = `url(${energyImagesPath}/full.png)`
            break;
        case 9:
            energyView.style.backgroundImage = `url(${energyImagesPath}/ninety.png)`
            break;
        case 8:
            energyView.style.backgroundImage = `url(${energyImagesPath}/eighty.png)`
            break;
        case 7:
            energyView.style.backgroundImage = `url(${energyImagesPath}/seventy.png)`
            break;
        case 6:
            energyView.style.backgroundImage = `url(${energyImagesPath}/sixty.png)`
            break;
        case 5:
            energyView.style.backgroundImage = `url(${energyImagesPath}/fifty.png)`
            break;
        case 4:
            energyView.style.backgroundImage = `url(${energyImagesPath}/fourty.png)`
            break;
        case 3:
            energyView.style.backgroundImage = `url(${energyImagesPath}/thirty.png)`
            break;
        case 2:
            energyView.style.backgroundImage = `url(${energyImagesPath}/twenty.png)`
            break;
        case 1:
            energyView.style.backgroundImage = `url(${energyImagesPath}/ten.png)`
            break;
        default:
            energyView.removeAttribute('style')
            break;
    }
}

function startGame() {
    screenIdentifier = 2
    life = 10
    energy = 0
    instaShield = false
    shieldBoost = false
    shieldToggle('disable')
    checkEnergy()
    checkLife()
    energyInterval = setInterval(() => {
        energy++
        if (energy > 10) {
            energy = 10
        }
    }, 5000);
    checkEnergy()
    closeAllScreens()
    document.getElementById('spaceArea').style.display = 'block'
}

// Pause Functions
let paused = false
function pauseGame(parameter) {
    if (screenIdentifier == 2) {
        if (!paused) {
            document.getElementById('pauseMenu').style.display = 'block'
            setTimeout(() => {
                document.getElementById('topPause').style.top = '0%'
                document.getElementById('pauseContainer').style.bottom = '0%'
            }, 1);
            manipulableMeteorites.forEach((meteorite) => {
                meteorite.style.animationPlayState = 'paused'
            })
            document.getElementById('spaceBckg').style.animationPlayState = 'paused'
            manipulableStardusts.forEach((stardust) => {
                stardust.style.animationPlayState = 'paused'
            })
            clearInterval(energyInterval)
            energyInterval = null
            restartGif(stopImg)
            paused = true
        } else {
            document.getElementById('topPause').removeAttribute('style')
            document.getElementById('pauseContainer').removeAttribute('style')
            setTimeout(() => {
                manipulableMeteorites.forEach((meteorite) => {
                    meteorite.style.animationPlayState = 'running'
                })
                document.getElementById('spaceBckg').style.animationPlayState = 'running'
                manipulableStardusts.forEach((stardust) => {
                    stardust.style.animationPlayState = 'running'
                })
                document.getElementById('pauseMenu').removeAttribute('style')
                if (parameter !== 'noEnergy') {
                    energyInterval = setInterval(() => {
                        energy++
                        if (energy > 10) {
                            energy = 10
                        }
                    }, 5000);
                }
                restartGif(fly)
                paused = false
            }, 400);
        }
    }
}

// Pause Screen Buttons
document.getElementById('unpause').addEventListener('click', pauseGame)

document.getElementById('restartGame').addEventListener('click', () => {
    closeAllScreens()
    setTimeout(() => {
        pauseGame('noEnergy')
        posi = 48
        ghost.removeAttribute('style')
        startGame()
    }, 1);
})

document.getElementById('return').addEventListener('click', () => {
    pauseGame('noEnergy')
    setTimeout(() => {
        clearInterval(energyInterval)
        energyInterval = null
        closeAllScreens()
        document.getElementById('mainMenu').style.display = 'flex'
        screenIdentifier = 1
    }, 200);
})