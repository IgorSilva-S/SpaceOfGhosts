document.getElementById('retHome').addEventListener('click', () => {
    duoRunPage.style.opacity = '0'
    setTimeout(() => {
        duoRunPage.removeAttribute('style')
        homePage.style.display = 'flex'
        duoRSong.pause()
        duoRSong.currentTime = 0
        homeSong.currentTime = 0
        homeSong.play()
        p1RHS = false
        p2RHS = false
    }, 500);
})

//Player 1 Meteor

p1Rm1.addEventListener('animationiteration', () => {
    let randMet = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p1Rm1.removeAttribute('class')
    p1Rm1.className = 'meteor'
    p1Rm1.classList.add(`mt${randMet}`)
    p1Rm1.style.display = 'none'
    p1Rm1.style.animationDuration = `${randSpeed}s`
    p1Rm1.style.top = `${randTop}%`
    setTimeout(() => {
        p1Rm1.style.display = 'block'
    }, 1);
})

p1Rm2.addEventListener('animationiteration', () => {
    let randMet = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p1Rm2.removeAttribute('class')
    p1Rm2.className = 'meteor'
    p1Rm2.classList.add(`mt${randMet}`)
    p1Rm2.style.display = 'none'
    p1Rm2.style.animationDuration = `${randSpeed}s`
    p1Rm2.style.top = `${randTop}%`
    setTimeout(() => {
        p1Rm2.style.display = 'block'
    }, 1);
})

p1Rm3.addEventListener('animationiteration', () => {
    let randMet = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p1Rm3.removeAttribute('class')
    p1Rm3.className = 'meteor'
    p1Rm3.classList.add(`mt${randMet}`)
    p1Rm3.style.display = 'none'
    p1Rm3.style.animationDuration = `${randSpeed}s`
    p1Rm3.style.top = `${randTop}%`
    setTimeout(() => {
        p1Rm3.style.display = 'block'
    }, 1);
})

p1Rm4.addEventListener('animationiteration', () => {
    let randMet = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p1Rm4.removeAttribute('class')
    p1Rm4.className = 'meteor'
    p1Rm4.classList.add(`mt${randMet}`)
    p1Rm4.style.display = 'none'
    p1Rm4.style.animationDuration = `${randSpeed}s`
    p1Rm4.style.top = `${randTop}%`
    setTimeout(() => {
        p1Rm4.style.display = 'block'
    }, 1);
})

p1Rm5.addEventListener('animationiteration', () => {
    let randMet = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p1Rm5.removeAttribute('class')
    p1Rm5.className = 'meteor'
    p1Rm5.classList.add(`mt${randMet}`)
    p1Rm5.style.display = 'none'
    p1Rm5.style.animationDuration = `${randSpeed}s`
    p1Rm5.style.top = `${randTop}%`
    setTimeout(() => {
        p1Rm5.style.display = 'block'
    }, 1);
})

//Player 2 Meteor

p2Rm1.addEventListener('animationiteration', () => {
    let randMet = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p2Rm1.removeAttribute('class')
    p2Rm1.className = 'meteor'
    p2Rm1.classList.add(`mt${randMet}`)
    p2Rm1.style.display = 'none'
    p2Rm1.style.animationDuration = `${randSpeed}s`
    p2Rm1.style.top = `${randTop}%`
    setTimeout(() => {
        p2Rm1.style.display = 'block'
    }, 1);
})

p2Rm2.addEventListener('animationiteration', () => {
    let randMet = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p2Rm2.removeAttribute('class')
    p2Rm2.className = 'meteor'
    p2Rm2.classList.add(`mt${randMet}`)
    p2Rm2.style.display = 'none'
    p2Rm2.style.animationDuration = `${randSpeed}s`
    p2Rm2.style.top = `${randTop}%`
    setTimeout(() => {
        p2Rm2.style.display = 'block'
    }, 1);
})

p2Rm3.addEventListener('animationiteration', () => {
    let randMet = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p2Rm3.removeAttribute('class')
    p2Rm3.className = 'meteor'
    p2Rm3.classList.add(`mt${randMet}`)
    p2Rm3.style.display = 'none'
    p2Rm3.style.animationDuration = `${randSpeed}s`
    p2Rm3.style.top = `${randTop}%`
    setTimeout(() => {
        p2Rm3.style.display = 'block'
    }, 1);
})

p2Rm4.addEventListener('animationiteration', () => {
    let randMet = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p2Rm4.removeAttribute('class')
    p2Rm4.className = 'meteor'
    p2Rm4.classList.add(`mt${randMet}`)
    p2Rm4.style.display = 'none'
    p2Rm4.style.animationDuration = `${randSpeed}s`
    p2Rm4.style.top = `${randTop}%`
    setTimeout(() => {
        p2Rm4.style.display = 'block'
    }, 1);
})

p2Rm5.addEventListener('animationiteration', () => {
    let randMet = Math.floor((Math.random() * 3) + 1)
    let randTop = Math.random() * 84
    let randSpeed = Math.floor((Math.random() * 3) + 2)
    p2Rm5.removeAttribute('class')
    p2Rm5.className = 'meteor'
    p2Rm5.classList.add(`mt${randMet}`)
    p2Rm5.style.display = 'none'
    p2Rm5.style.animationDuration = `${randSpeed}s`
    p2Rm5.style.top = `${randTop}%`
    setTimeout(() => {
        p2Rm5.style.display = 'block'
    }, 1);
})

//Check hit Player 1

setInterval(() => {
    let meteorTop = p1Rm1.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(p1Rm1).getPropertyValue("left")
    );
    if ((meteorTop <= p1Posi || meteorTop >= p1Posi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= p1Posi + 15 || meteorTop <= p1Posi - 8 || p1RHS) {

        } else {
            hSong.play()
            p1Run.removeAttribute('class')
            p1Run.className = 'player'
            p1Run.classList.add('hurted')
            p1Run.classList.add('hShield')
            p1RHS = true
            p1HurtAnim = true
            setTimeout(() => {
                p1HurtAnim = false
            }, 1000);
            setTimeout(() => {
                p1RHS = false
                p1Run.removeAttribute('class')
                p1Run.className = 'player'
            }, 5000);
        }
    }
}, 1);

setInterval(() => {
    let meteorTop = p1Rm2.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(p1Rm2).getPropertyValue("left")
    );
    if ((meteorTop <= p1Posi || meteorTop >= p1Posi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= p1Posi + 15 || meteorTop <= p1Posi - 8 || p1RHS) {

        } else {
            hSong.play()
            p1Run.removeAttribute('class')
            p1Run.className = 'player'
            p1Run.classList.add('hurted')
            p1Run.classList.add('hShield')
            p1RHS = true
            p1HurtAnim = true
            setTimeout(() => {
                p1HurtAnim = false
            }, 1000);
            setTimeout(() => {
                p1RHS = false
                p1Run.removeAttribute('class')
                p1Run.className = 'player'
            }, 5000);
        }
    }
}, 1);

setInterval(() => {
    let meteorTop = p1Rm3.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(p1Rm3).getPropertyValue("left")
    );
    if ((meteorTop <= p1Posi || meteorTop >= p1Posi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= p1Posi + 15 || meteorTop <= p1Posi - 8 || p1RHS) {

        } else {
            hSong.play()
            p1Run.removeAttribute('class')
            p1Run.className = 'player'
            p1Run.classList.add('hurted')
            p1Run.classList.add('hShield')
            p1RHS = true
            p1HurtAnim = true
            setTimeout(() => {
                p1HurtAnim = false
            }, 1000);
            setTimeout(() => {
                p1RHS = false
                p1Run.removeAttribute('class')
                p1Run.className = 'player'
            }, 5000);
        }
    }
}, 1);

setInterval(() => {
    let meteorTop = p1Rm4.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(p1Rm4).getPropertyValue("left")
    );
    if ((meteorTop <= p1Posi || meteorTop >= p1Posi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= p1Posi + 15 || meteorTop <= p1Posi - 8 || p1RHS) {

        } else {
            hSong.play()
            p1Run.removeAttribute('class')
            p1Run.className = 'player'
            p1Run.classList.add('hurted')
            p1Run.classList.add('hShield')
            p1RHS = true
            p1HurtAnim = true
            setTimeout(() => {
                p1HurtAnim = false
            }, 1000);
            setTimeout(() => {
                p1RHS = false
                p1Run.removeAttribute('class')
                p1Run.className = 'player'
            }, 5000);
        }
    }
}, 1);

setInterval(() => {
    let meteorTop = p1Rm5.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(p1Rm5).getPropertyValue("left")
    );
    if ((meteorTop <= p1Posi || meteorTop >= p1Posi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= p1Posi + 15 || meteorTop <= p1Posi - 8 || p1RHS) {

        } else {
            hSong.play()
            p1Run.removeAttribute('class')
            p1Run.className = 'player'
            p1Run.classList.add('hurted')
            p1Run.classList.add('hShield')
            p1RHS = true
            p1HurtAnim = true
            setTimeout(() => {
                p1HurtAnim = false
            }, 1000);
            setTimeout(() => {
                p1RHS = false
                p1Run.removeAttribute('class')
                p1Run.className = 'player'
            }, 5000);
        }
    }
}, 1);