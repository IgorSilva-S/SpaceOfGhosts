let objects = document.getElementsByClassName('planetObj')
Array.from(objects).forEach((o) => {
    let speed, delay, posi
    if (actualPlanet == 0 || actualPlanet == 1 || actualPlanet == 4) {
        speed = Math.floor(Math.random() * 3) + 5
    } else {
        speed = 7
    }

    delay = Math.floor(Math.random() * 6)
    posi = Math.floor(Math.random() * 2)

    o.classList.remove('lane1')
    o.classList.remove('lane2')
    o.style.display = 'none'
    o.className = 'planetObj'
    if (actualPlanet == 0) {
        o.classList.add('VVP')
    } else if (actualPlanet == 1) {
        o.classList.add('DDP')
    } else if (actualPlanet == 2) {
        o.classList.add('MMP')
    } else if (actualPlanet == 3) {
        o.classList.add('BBP')
    } else if (actualPlanet == 4) {
        o.classList.add('RRP')
    }
    setTimeout(() => {
        o.removeAttribute('style')
        o.style.animationDuration = `${speed}s`
        o.style.animationDelay = `${delay}s`
        o.classList.add(`lane${posi + 1}`)
    }, 1);


    o.addEventListener('animationiteration', () => {
        o.removeAttribute('noHurt')
        let speed, delay, posi
        if (actualPlanet == 0 || actualPlanet == 1 || actualPlanet == 4) {
            speed = Math.floor(Math.random() * 3) + 5
        } else {
            speed = 7
        }

        delay = Math.floor(Math.random() * 6)
        posi = Math.floor(Math.random() * 2)

        o.classList.remove('lane1')
        o.classList.remove('lane2')
        o.style.display = 'none'
        o.className = 'planetObj'
        if (actualPlanet == 0) {
            o.classList.add('VVP')
        } else if (actualPlanet == 1) {
            o.classList.add('DDP')
        } else if (actualPlanet == 2) {
            o.classList.add('MMP')
        } else if (actualPlanet == 3) {
            o.classList.add('BBP')
        } else if (actualPlanet == 4) {
            o.classList.add('RRP')
        }
        setTimeout(() => {
            o.removeAttribute('style')
            o.style.animationDuration = `${speed}s`
            o.style.animationDelay = `${delay}s`
            o.classList.add(`lane${posi + 1}`)
        }, 1);
    })

    setInterval(() => {
        let objBR = o.getBoundingClientRect();
        let objLeft = objBR.left
        let lane
        if (o.classList.contains('lane1')) {
            lane = 0;
        } else if (o.classList.contains('lane2')) {
            lane = 1;
        }
        let noHurt = o.getAttribute('noHurt')
        if (objLeft >= 123 && objLeft <= 223 && lane == actualLane && !instaShield && !cannotHurt && life > 0 && noHurt != 'true' && !shieldBoost) {
            instaShield = true
            life--
            checkLife()
            restartPGif(hurtPAnim)
            hurtPlayerSFX.play()
            setTimeout(() => {
                PGShadow.style.display = 'none'
                restartPGif(slimeAnim)
                setTimeout(() => {
                    restartPGif(backSlimeAnim)
                    setTimeout(() => {
                        restartPGif(fly)
                        PGShadow.style.display = 'block'
                        instaShield = false
                    }, 560);
                }, 6000);
            }, 790);
        }

        if (objLeft >= 123 && objLeft <= 223 && lane == actualLane && !instaShield && !cannotHurt && life > 0 && noHurt != 'true' && shieldBoost) {
            shieldToggle('disable')
            instaShield = true
            setTimeout(() => {
                instaShield = false
            }, 1000);
        }

        if (objLeft >= 123 && objLeft <= 223 && lane == actualLane && !instaShield && !cannotHurt && life <= 0 && noHurt != 'true') {
            instaShield = true
            life--
            checkLife()
            hurtPlayerSFX.play()
            setTimeout(() => {
                instaShield = false
            }, 6000);
        }


    }, 16);
})

function renameObj() {
    Array.from(objects).forEach((o) => {

        let speed, delay, posi
        if (actualPlanet == 0 || actualPlanet == 1 || actualPlanet == 4) {
            speed = Math.floor(Math.random() * 3) + 5
        } else {
            speed = 7
        }

        delay = Math.floor(Math.random() * 6)
        posi = Math.floor(Math.random() * 2)

        o.classList.remove('lane1')
        o.classList.remove('lane2')
        o.style.display = 'none'
        o.className = 'planetObj'
        if (actualPlanet == 0) {
            o.classList.add('VVP')
        } else if (actualPlanet == 1) {
            o.classList.add('DDP')
        } else if (actualPlanet == 2) {
            o.classList.add('MMP')
        } else if (actualPlanet == 3) {
            o.classList.add('BBP')
        } else if (actualPlanet == 4) {
            o.classList.add('RRP')
        }
        setTimeout(() => {
            o.removeAttribute('style')
            o.style.animationDuration = `${speed}s`
            o.style.animationDelay = `${delay}s`
            o.classList.add(`lane${posi + 1}`)
        }, 1);
    })
}