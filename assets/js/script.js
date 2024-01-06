let player = document.getElementById('ghost')
let playerPosi = 45
let meteor1 = document.getElementById('m1')
let meteor2 = document.getElementById('m2')
let meteor3 = document.getElementById('m3')
let meteor4 = document.getElementById('m4')
let meteor5 = document.getElementById('m5')
let meteor6 = document.getElementById('m5')
let meteor7 = document.getElementById('m5')


document.addEventListener("keydown", function (e) {
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
})

document.addEventListener("keyup", function () {
    player.removeAttribute('class')
    player.className = 'player'
})

meteor1.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let delayNum = Math.random() * 10
    randomNum = parseInt(randomNum)
    meteor1.style.top = `${randomNum}%`
    meteor1.style.animationDelay = `${delayNum}%`
} )

meteor2.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let delayNum = Math.random() * 10
    randomNum = parseInt(randomNum)
    meteor2.style.top = `${randomNum}%`
    meteor2.style.animationDelay = `${delayNum}%`
})

meteor3.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let delayNum = Math.random() * 10
    randomNum = parseInt(randomNum)
    meteor3.style.top = `${randomNum}%`
    meteor3.style.animationDelay = `${delayNum}%`
})

meteor4.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let delayNum = Math.random() * 10
    randomNum = parseInt(randomNum)
    meteor4.style.top = `${randomNum}%`
    meteor4.style.animationDelay = `${delayNum}%`
})

meteor5.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let delayNum = Math.random() * 10
    randomNum = parseInt(randomNum)
    meteor5.style.top = `${randomNum}%`
    meteor5.style.animationDelay = `${delayNum}%`
})

meteor6.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let delayNum = Math.random() * 10
    randomNum = parseInt(randomNum)
    meteor6.style.top = `${randomNum}%`
    meteor6.style.animationDelay = `${delayNum}%`
})

meteor7.addEventListener('animationiteration', () => {
    let randomNum = Math.random() * 84
    let delayNum = Math.random() * 10
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
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8) {
        } else {
            console.log('mORREU')
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
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8) {
        } else {
            console.log('mORREU')
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
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8) {
        } else {
            console.log('mORREU')
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
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8) {
        } else {
            console.log('mORREU')
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
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8) {
        } else {
            console.log('mORREU')
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
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8) {
        } else {
            console.log('mORREU')
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
        if (meteorTop >= playerPosi + 15 || meteorTop <= playerPosi - 8) {
        } else {
            console.log('mORREU')
        }
    }
}, 1);