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
        playerClassic.classList.add('hShield')
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
        playerClassic.classList.add('hShield')
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
        playerClassic.classList.add('hShield')
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
        playerClassic.classList.add('hShield')
    }
}, 1);