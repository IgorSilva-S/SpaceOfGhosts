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

function duoRunKeyDown(e) {
    let keyType = e.key
    keysDuoRun[keyType] = true
}

function duoRunKeyUp(e) {
    let keyType = e.key
    keysDuoRun[keyType] = false
}

function moveChars() {
    if (!duoRunPaused) {
        if (keysDuoRun['ArrowUp'] == true) {
            p2Posi--
            if (p2Posi < 0) {
                p2Posi = 0
            }
            p2Run.style.top = `${p2Posi}%`
            p2Run.classList.add('upping')
        }
        if (keysDuoRun['ArrowDown'] == true) {
            p2Posi++
            if (p2Posi >= 84) {
                p2Posi = 84
            }
            p2Run.style.top = `${p2Posi}%`
            p2Run.classList.add('falling')
        }
        if (keysDuoRun['w'] == true || keysDuoRun['W'] == true) {
            p1Posi--
            if (p1Posi < 0) {
                p1Posi = 0
            }
            p1Run.style.top = `${p1Posi}%`
            p1Run.classList.add('upping')
        }
        if (keysDuoRun['s'] == true || keysDuoRun['S'] == true) {
            p1Posi++
            if (p1Posi >= 84) {
                p1Posi = 84
            }
            p1Run.style.top = `${p1Posi}%`
            p1Run.classList.add('falling')
        }
    }
}

let duoRunControls = setInterval(() => {
    moveChars()
}, 60);

function pauseDuoRun() {
    if (!duoRunPaused) {
        p1Run.classList.add('playerPaused')
        p2Run.classList.add('playerPaused')
        p1Rm1.style.animationPlayState = 'paused'
        p1Rm2.style.animationPlayState = 'paused'
        p1Rm3.style.animationPlayState = 'paused'
        p1Rm4.style.animationPlayState = 'paused'
        p1Rm5.style.animationPlayState = 'paused'
        p2Rm1.style.animationPlayState = 'paused'
        p2Rm2.style.animationPlayState = 'paused'
        p2Rm3.style.animationPlayState = 'paused'
        p2Rm4.style.animationPlayState = 'paused'
        p2Rm5.style.animationPlayState = 'paused'
        duoRunPaused = true
    } else {
        p1Rm1.style.animationPlayState = 'running'
        p1Rm2.style.animationPlayState = 'running'
        p1Rm3.style.animationPlayState = 'running'
        p1Rm4.style.animationPlayState = 'running'
        p1Rm5.style.animationPlayState = 'running'
        p2Rm1.style.animationPlayState = 'running'
        p2Rm2.style.animationPlayState = 'running'
        p2Rm3.style.animationPlayState = 'running'
        p2Rm4.style.animationPlayState = 'running'
        p2Rm5.style.animationPlayState = 'running'
        duoRunPaused = false
    }
}

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
        if (meteorTop >= p1Posi + 15 || meteorTop <= p1Posi - 8 || p1RHS || duoRunPaused) {

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
                if (duoRunPaused) {
                    p1Run.classList.add('playerPaused')
                }
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
        if (meteorTop >= p1Posi + 15 || meteorTop <= p1Posi - 8 || p1RHS || duoRunPaused) {

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
                if (duoRunPaused) {
                    p1Run.classList.add('playerPaused')
                }
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
        if (meteorTop >= p1Posi + 15 || meteorTop <= p1Posi - 8 || p1RHS || duoRunPaused) {

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
                if (duoRunPaused) {
                    p1Run.classList.add('playerPaused')
                }
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
        if (meteorTop >= p1Posi + 15 || meteorTop <= p1Posi - 8 || p1RHS || duoRunPaused) {

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
                if (duoRunPaused) {
                    p1Run.classList.add('playerPaused')
                }
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
        if (meteorTop >= p1Posi + 15 || meteorTop <= p1Posi - 8 || p1RHS || duoRunPaused) {

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
                if (duoRunPaused) {
                    p1Run.classList.add('playerPaused')
                }
            }, 5000);
        }
    }
}, 1);

//Check Meteor PLayer 2

setInterval(() => {
    let meteorTop = p2Rm1.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(p2Rm1).getPropertyValue("left")
    );
    if ((meteorTop <= p2Posi || meteorTop >= p2Posi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= p2Posi + 15 || meteorTop <= p2Posi - 8 || p2RHS || duoRunPaused) {

        } else {
            hSong.play()
            p2Run.removeAttribute('class')
            p2Run.className = 'player'
            p2Run.classList.add('hurted')
            p2Run.classList.add('hShield')
            p2RHS = true
            p2HurtAnim = true
            setTimeout(() => {
                p2HurtAnim = false
            }, 1000);
            setTimeout(() => {
                p2RHS = false
                p2Run.removeAttribute('class')
                p2Run.className = 'player'
                if (duoRunPaused) {
                    p2Run.classList.add('playerPaused')
                }
            }, 5000);
        }
    }
}, 1);

setInterval(() => {
    let meteorTop = p2Rm2.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(p2Rm2).getPropertyValue("left")
    );
    if ((meteorTop <= p2Posi || meteorTop >= p2Posi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= p2Posi + 15 || meteorTop <= p2Posi - 8 || p2RHS || duoRunPaused) {

        } else {
            hSong.play()
            p2Run.removeAttribute('class')
            p2Run.className = 'player'
            p2Run.classList.add('hurted')
            p2Run.classList.add('hShield')
            p2RHS = true
            p2HurtAnim = true
            setTimeout(() => {
                p2HurtAnim = false
            }, 1000);
            setTimeout(() => {
                p2RHS = false
                p2Run.removeAttribute('class')
                p2Run.className = 'player'
                if (duoRunPaused) {
                    p2Run.classList.add('playerPaused')
                }
            }, 5000);
        }
    }
}, 1);

setInterval(() => {
    let meteorTop = p2Rm3.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(p2Rm3).getPropertyValue("left")
    );
    if ((meteorTop <= p2Posi || meteorTop >= p2Posi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= p2Posi + 15 || meteorTop <= p2Posi - 8 || p2RHS || duoRunPaused) {

        } else {
            hSong.play()
            p2Run.removeAttribute('class')
            p2Run.className = 'player'
            p2Run.classList.add('hurted')
            p2Run.classList.add('hShield')
            p2RHS = true
            p2HurtAnim = true
            setTimeout(() => {
                p2HurtAnim = false
            }, 1000);
            setTimeout(() => {
                p2RHS = false
                p2Run.removeAttribute('class')
                p2Run.className = 'player'
                if (duoRunPaused) {
                    p2Run.classList.add('playerPaused')
                }
            }, 5000);
        }
    }
}, 1);

setInterval(() => {
    let meteorTop = p2Rm4.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(p2Rm4).getPropertyValue("left")
    );
    if ((meteorTop <= p2Posi || meteorTop >= p2Posi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= p2Posi + 15 || meteorTop <= p2Posi - 8 || p2RHS || duoRunPaused) {

        } else {
            hSong.play()
            p2Run.removeAttribute('class')
            p2Run.className = 'player'
            p2Run.classList.add('hurted')
            p2Run.classList.add('hShield')
            p2RHS = true
            p2HurtAnim = true
            setTimeout(() => {
                p2HurtAnim = false
            }, 1000);
            setTimeout(() => {
                p2RHS = false
                p2Run.removeAttribute('class')
                p2Run.className = 'player'
                if (duoRunPaused) {
                    p2Run.classList.add('playerPaused')
                }
            }, 5000);
        }
    }
}, 1);

setInterval(() => {
    let meteorTop = p2Rm5.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(p2Rm5).getPropertyValue("left")
    );
    if ((meteorTop <= p2Posi || meteorTop >= p2Posi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= p2Posi + 15 || meteorTop <= p2Posi - 8 || p2RHS || duoRunPaused) {

        } else {
            hSong.play()
            p2Run.removeAttribute('class')
            p2Run.className = 'player'
            p2Run.classList.add('hurted')
            p2Run.classList.add('hShield')
            p2RHS = true
            p2HurtAnim = true
            setTimeout(() => {
                p2HurtAnim = false
            }, 1000);
            setTimeout(() => {
                p2RHS = false
                p2Run.removeAttribute('class')
                p2Run.className = 'player'
                if (duoRunPaused) {
                    p2Run.classList.add('playerPaused')
                }
            }, 5000);
        }
    }
}, 1);