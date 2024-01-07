let player = document.getElementById('ghost')
const song = document.getElementById('music')
const hSong = document.getElementById('hSong')
let playerPosi = 45
let meteor1 = document.getElementById('m1')
let meteor2 = document.getElementById('m2')
let meteor3 = document.getElementById('m3')
let meteor4 = document.getElementById('m4')
let meteor5 = document.getElementById('m5')
let meteor6 = document.getElementById('m6')
let meteor7 = document.getElementById('m7')
let hurtShield = false
let gamePaused = false

document.addEventListener("keydown", function (e) {
    song.play()
    if (!gamePaused) {
        if (e.key == "ArrowUp") {
            playerPosi--
            if (playerPosi < 0) {
                playerPosi = 0
            }
            player.style.top = `${playerPosi}%`
            player.classList.add('upping')
        } if (e.key == "ArrowDown") {
            playerPosi++
            if (playerPosi >= 84) {
                playerPosi = 84
            }
            player.style.top = `${playerPosi}%`
            player.classList.add('falling')
        } 
    } if (e.key == "Enter") {
        if(!gamePaused) {
            document.body.style.filter = 'grayscale()'
            document.body.style.backgroundImage = 'linear-gradient(to bottom, #000, #000, #000, #000, #000, #000, #000, #888, #fff)'
            meteor1.style.animationPlayState = 'paused'
            meteor2.style.animationPlayState = 'paused'
            meteor3.style.animationPlayState = 'paused'
            meteor4.style.animationPlayState = 'paused'
            meteor5.style.animationPlayState = 'paused'
            meteor6.style.animationPlayState = 'paused'
            meteor7.style.animationPlayState = 'paused'
            player.classList.add('playerPaused')
            document.querySelector('.background').style.animationPlayState = 'paused'
            song.pause()
            gamePaused = true
        } else {
            document.body.removeAttribute('style')
            meteor1.style.animationPlayState = 'running'
            meteor2.style.animationPlayState = 'running'
            meteor3.style.animationPlayState = 'running'
            meteor4.style.animationPlayState = 'running'
            meteor5.style.animationPlayState = 'running'
            meteor6.style.animationPlayState = 'running'
            meteor7.style.animationPlayState = 'running'
            player.classList.remove('playerPaused')
            document.querySelector('.background').removeAttribute('style')
            gamePaused = false
            song.play()
        }
    }
})

song.addEventListener('ended', function() {
    song.currentTime = 2
    song.play()
})

document.addEventListener("keyup", function (e) {
    if (!gamePaused) {
        player.removeAttribute('class')
        player.className = 'player'
        if (hurtShield) {
            player.classList.add('hShield')
        }
    }
})

meteor1.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let delayNum = Math.random() * 10
    let typeOf = Math.floor((Math.random() * 3) + 1)
    meteor1.removeAttribute('class')
    meteor1.className = 'meteor'
    meteor1.classList.add(`mt${typeOf}`)
    randomNum = parseInt(randomNum)
    meteor1.style.top = `${randomNum}%`
    meteor1.style.animationDelay = `${delayNum}%`
})

meteor2.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let delayNum = Math.random() * 10
    let typeOf = Math.floor((Math.random() * 3) + 1)

    meteor2.removeAttribute('class')
    meteor2.className = 'meteor'
    meteor2.classList.add(`mt${typeOf}`)
    randomNum = parseInt(randomNum)
    meteor2.style.top = `${randomNum}%`
    meteor2.style.animationDelay = `${delayNum}%`
})

meteor3.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let delayNum = Math.random() * 10
    let typeOf = Math.floor((Math.random() * 3) + 1)

    meteor3.removeAttribute('class')
    meteor3.className = 'meteor'
    meteor3.classList.add(`mt${typeOf}`)
    randomNum = parseInt(randomNum)
    meteor3.style.top = `${randomNum}%`
    meteor3.style.animationDelay = `${delayNum}%`
})

meteor4.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let delayNum = Math.random() * 10
    let typeOf = Math.floor((Math.random() * 3) + 1)

    meteor4.removeAttribute('class')
    meteor4.className = 'meteor'
    meteor4.classList.add(`mt${typeOf}`)
    randomNum = parseInt(randomNum)
    meteor4.style.top = `${randomNum}%`
    meteor4.style.animationDelay = `${delayNum}%`
})

meteor5.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let delayNum = Math.random() * 10
    let typeOf = Math.floor((Math.random() * 3) + 1)

    meteor5.removeAttribute('class')
    meteor5.className = 'meteor'
    meteor5.classList.add(`mt${typeOf}`)
    randomNum = parseInt(randomNum)
    meteor5.style.top = `${randomNum}%`
    meteor5.style.animationDelay = `${delayNum}%`
})

meteor6.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let delayNum = Math.random() * 10
    let typeOf = Math.floor((Math.random() * 3) + 1)

    meteor6.removeAttribute('class')
    meteor6.className = 'meteor'
    meteor6.classList.add(`mt${typeOf}`)
    randomNum = parseInt(randomNum)
    meteor6.style.top = `${randomNum}%`
    meteor6.style.animationDelay = `${delayNum}%`
})

meteor7.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let delayNum = Math.random() * 10
    let typeOf = Math.floor((Math.random() * 3) + 1)

    meteor7.removeAttribute('class')
    meteor7.className = 'meteor'
    meteor7.classList.add(`mt${typeOf}`)
    randomNum = parseInt(randomNum)
    meteor7.style.top = `${randomNum}%`
    meteor7.style.animationDelay = `${delayNum}%`
})

//Check if meteor hit player
setInterval(() => {
    let meteorTop = meteor1.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor1).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield) {
        } else {
            player.removeAttribute('class')
            player.className = 'player'
            player.classList.add('hurted')
            player.classList.add('hShield')
            hSong.play()
            hurtShield = true
            setTimeout(() => {
                player.classList.remove('hurted')
            }, 1000);
            setTimeout(() => {
                hurtShield = false
                player.classList.remove('hShield')
            }, 5000);
        }
    }
}, 1);

setInterval(() => {
    let meteorTop = meteor2.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor2).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield) {
        } else {
            player.removeAttribute('class')
            player.className = 'player'
            player.classList.add('hurted')
            player.classList.add('hShield')
            hSong.play()
            hurtShield = true
            setTimeout(() => {
                player.classList.remove('hurted')
            }, 500);
            setTimeout(() => {
                hurtShield = false
                player.classList.remove('hShield')
            }, 5000);
        }
    }
}, 1);

setInterval(() => {
    let meteorTop = meteor3.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor3).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield) {
        } else {
            player.removeAttribute('class')
            player.className = 'player'
            player.classList.add('hurted')
            player.classList.add('hShield')
            hSong.play()
            hurtShield = true
            setTimeout(() => {
                player.classList.remove('hurted')
            }, 1000);
            setTimeout(() => {
                hurtShield = false
                player.classList.remove('hShield')
            }, 5000);
        }
    }
}, 1);

setInterval(() => {
    let meteorTop = meteor4.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor4).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield) {
        } else {
            player.removeAttribute('class')
            player.className = 'player'
            player.classList.add('hurted')
            player.classList.add('hShield')
            hSong.play()
            hurtShield = true
            setTimeout(() => {
                player.classList.remove('hurted')
            }, 1000);
            setTimeout(() => {
                hurtShield = false
                player.classList.remove('hShield')
            }, 5000);
        }
    }
}, 1);

setInterval(() => {
    let meteorTop = meteor5.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor5).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield) {
        } else {
            player.removeAttribute('class')
            player.className = 'player'
            player.classList.add('hurted')
            player.classList.add('hShield')
            hSong.play()
            hurtShield = true
            setTimeout(() => {
                player.classList.remove('hurted')
            }, 1000);
            setTimeout(() => {
                hurtShield = false
                player.classList.remove('hShield')
            }, 5000);
        }
    }
}, 1);

setInterval(() => {
    let meteorTop = meteor6.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor6).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield) {
        } else {
            player.removeAttribute('class')
            player.className = 'player'
            player.classList.add('hurted')
            player.classList.add('hShield')
            hSong.play()
            hurtShield = true
            setTimeout(() => {
                player.classList.remove('hurted')
            }, 1000);
            setTimeout(() => {
                hurtShield = false
                player.classList.remove('hShield')
            }, 5000);
        }
    }
}, 1);

setInterval(() => {
    let meteorTop = meteor7.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(meteor7).getPropertyValue("left")
    );
    if ((meteorTop <= playerPosi || meteorTop >= playerPosi) && (meteorLeft <= 250 && meteorLeft >= 150)) {
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8 || hurtShield) {
        } else {
            player.removeAttribute('class')
            player.className = 'player'
            player.classList.add('hurted')
            player.classList.add('hShield')
            hSong.play()
            hurtShield = true
            setTimeout(() => {
                player.classList.remove('hurted')
            }, 1000);
            setTimeout(() => {
                hurtShield = false
                player.classList.remove('hShield')
            }, 5000);
        }
    }
}, 1);