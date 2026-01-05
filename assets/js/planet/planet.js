// Planet moviment
let actualPlanet = -1

function goToPlanet(specific) {
    let plan = Math.floor(Math.random() * 5)
    if (specific !== undefined && typeof specific === "number" && !isNaN(specific)) {
        plan = specific
    }
    let worldSaveArray = loadedGID.worlds
    worldSaveArray = JSON.parse(worldSaveArray)
    if (plan == 0) {
        worldSaveArray.VVP = true
    } else if (plan == 1) {
        worldSaveArray.DDP = true
    } else if (plan == 2) {
        worldSaveArray.MMP = true
    } else if (plan == 3) {
        worldSaveArray.BBP = true
    } else if (plan == 4) {
        worldSaveArray.RRP = true
    }
    loadedGID.worlds = JSON.stringify(worldSaveArray)
    localStorage.setItem(`gid${loadedGIDNum}`, JSON.stringify(loadedGID))
    const bckg = document.getElementById('planBckg')
    const laneU = document.getElementById('planLaneU')
    const laneD = document.getElementById('planLaneD')
    bckg.className = 'bckg'
    laneU.className = 'lane up'
    laneD.className = 'lane down'
    blackout.style.display = 'block'
    stopAllMusics()
    setTimeout(() => {
        actualPlanet = plan
        blackout.style.opacity = '0'
        closeAllScreens()
        renameObj()
        setTimeout(() => {
            screenIdentifier = 3
            switch (plan) {
                case 0:
                    document.getElementById('planetArea').style.backgroundColor = '#5A2A2A'
                    bckg.classList.add('volcanic')
                    laneU.classList.add('VVP')
                    laneD.classList.add('VVP')
                    VVPMusic.play()
                    break
                case 1:
                    document.getElementById('planetArea').style.backgroundColor = '#3E5F7A'
                    bckg.classList.add('desert')
                    laneU.classList.add('DDP')
                    laneD.classList.add('DDP')
                    DDPMusic.play()
                    break
                case 2:
                    document.getElementById('planetArea').style.backgroundColor = '#2F445E'
                    bckg.classList.add('city')
                    laneU.classList.add('MMP')
                    laneD.classList.add('MMP')
                    MMPMusic.play()
                    break
                case 3:
                    document.getElementById('planetArea').style.backgroundColor = '#4F8FA8'
                    bckg.classList.add('beach')
                    laneU.classList.add('BBP')
                    laneD.classList.add('BBP')
                    BBPMusic.play()
                    break
                case 4:
                    document.getElementById('planetArea').style.backgroundColor = '#2C3F5A'
                    bckg.classList.add('ruins')
                    laneU.classList.add('RRP')
                    laneD.classList.add('RRP')
                    RRPMusic.play()
                    break
                default:
                    document.getElementById('planetArea').style.backgroundColor = '#000'
                    laneU.classList.add('err')
                    laneD.classList.add('err')
                    spaceshipMusic.play()
            }
            document.getElementById('planetArea').style.display = 'block'
            clearInterval(energyInterval)
            energyInterval = null
            pEnergy = 20
            checkPEnergy()
            energyInterval = setInterval(() => {
                pEnergy--
                checkPEnergy()
                if (pEnergy <= 0) {
                    let isWorthBattle = Math.floor(Math.random() * 50) + 1
                    if (isWorthBattle > 44 && isWorthBattle < 51) {
                        console.log('IsWorthBattle')
                    }
                    clearInterval(energyInterval)
                    blackout.style.display = 'block'
                    stopAllMusics()
                    setTimeout(() => {
                        blackout.style.opacity = '0'
                        closeAllScreens()
                        spaceAreaMusic.play()
                        setTimeout(() => {
                            screenIdentifier = 2
                            energy = 0
                            instaShield = false
                            shieldBoost = false
                            shield.removeAttribute('style')
                            shieldBoost = false
                            checkEnergy()
                            checkLife()
                            energyInterval = setInterval(() => {
                                energy++
                                if (energy > 10) {
                                    energy = 10
                                }
                                checkEnergy()
                            }, 7500);
                            checkEnergy()
                            document.getElementById('spaceArea').style.display = 'block'
                        }, 1);
                        setTimeout(() => {
                            blackout.removeAttribute('style')
                        }, 300);
                    }, 600);
                }
            }, 10000);
        }, 1);
        setTimeout(() => {
            blackout.removeAttribute('style')
        }, 300);
    }, 600);
}