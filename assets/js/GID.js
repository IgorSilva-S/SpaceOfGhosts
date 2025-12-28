let GID = null
let saveArray = null
let loadedGID = null
let loadedGIDNum = -1

let freeGID = 0

let instaGID = null
let isInstaGIDValid = false

const GIDCards = [...document.getElementsByClassName('card')]
const GIDCards_M = [...document.getElementsByClassName('card-m')]

function GIDCardsAnim() {
    GIDCards_M.forEach((c) => {
        c.removeAttribute('style')
    })

    GIDCards_M[instaGID].style.marginBottom = '-120px'

    GIDCards.forEach((c) => {
        c.removeAttribute('style')
    })

    GIDCards[instaGID].style.marginBottom = '-120px'

    try {
        GIDCards_M[loadedGIDNum].style.marginBottom = '-240px'
        GIDCards[loadedGIDNum].style.marginBottom = '-240px'
    } catch { }
}

function loadGID() {
    freeGID = 0
    GIDCards.forEach((g, i) => {
        try {
            saveArray = localStorage.getItem(`gid${i}`)
            saveArray = JSON.parse(saveArray)
            g.querySelector('.saveName').innerText = saveArray.saveName
            g.querySelector('.cardPic').style.backgroundColor = saveArray.pic
        } catch {
            g.querySelector('.saveName').innerText = `Ghost ID - ${i + 1}`
            g.querySelector('.cardPic').removeAttribute('style')
            freeGID++
        }
    })

    GIDCards_M.forEach((g, i) => {
        try {
            saveArray = localStorage.getItem(`gid${i}`)
            saveArray = JSON.parse(saveArray)
            g.querySelector('.saveName').innerText = saveArray.saveName
            g.querySelector('.cardPic').style.backgroundColor = saveArray.pic
        } catch {
            g.querySelector('.saveName').innerText = `Ghost ID - ${i + 1}`
            g.querySelector('.cardPic').removeAttribute('style')
        }
    })
}

loadGID()

for (let i = 0; i < GIDCards_M.length; i++) {
    GIDCards_M[i].addEventListener('click', () => {
        try {
            saveArray = localStorage.getItem(`gid${i}`)
            saveArray = JSON.parse(saveArray)
            document.getElementById('GIDSkin-M').style.backgroundImage = "url('./assets/sprites/skins/ghost/idle.gif')"
            document.getElementById('saveName-M').innerHTML = saveArray.saveName
            document.getElementById('lastSave-M').innerHTML = `Último uso: ${saveArray.lastUse}`
            document.getElementById('saveStardusts-M').innerHTML = `Stardusts: ${saveArray.stardusts}`
            document.getElementById('museumPieces-M').innerHTML = `Peças do museu: ${saveArray.museum}`
            document.getElementById('worldExplored-M').innerHTML = `Mundos explorados: ${saveArray.worlds}`
            instaGID = i
            isInstaGIDValid = true
        } catch {
            document.getElementById('GIDSkin-M').style.backgroundImage = "url('./assets/sprites/skins/blank.png')"
            document.getElementById('saveName-M').innerHTML = 'NO SAVE'
            document.getElementById('lastSave-M').innerHTML = `NO SAVE`
            document.getElementById('saveStardusts-M').innerHTML = 'NO SAVE'
            document.getElementById('museumPieces-M').innerHTML = 'NO SAVE'
            document.getElementById('worldExplored-M').innerHTML = 'NO SAVE'
            instaGID = i
            isInstaGIDValid = false
        }

        GIDCardsAnim()
    })
}

for (let i = 0; i < GIDCards.length; i++) {
    GIDCards[i].addEventListener('click', () => {
        try {
            saveArray = localStorage.getItem(`gid${i}`)
            saveArray = JSON.parse(saveArray)
            document.getElementById('GIDSkin').style.backgroundImage = "url('./assets/sprites/skins/ghost/idle.gif')"
            document.getElementById('saveName').innerHTML = saveArray.saveName
            document.getElementById('lastSave').innerHTML = `Último uso: ${saveArray.lastUse}`
            document.getElementById('saveStardusts').innerHTML = `Stardusts: ${saveArray.stardusts}`
            document.getElementById('museumPieces').innerHTML = `Peças do museu: ${saveArray.museum}`
            document.getElementById('worldExplored').innerHTML = `Mundos explorados: ${saveArray.worlds}`
            document.getElementById('gidManager').innerText = 'Carregar GID'
            instaGID = i
            isInstaGIDValid = true
        } catch {
            document.getElementById('GIDSkin').style.backgroundImage = "url('./assets/sprites/skins/blank.png')"
            document.getElementById('saveName').innerHTML = 'NO SAVE'
            document.getElementById('lastSave').innerHTML = `NO SAVE`
            document.getElementById('saveStardusts').innerHTML = 'NO SAVE'
            document.getElementById('museumPieces').innerHTML = 'NO SAVE'
            document.getElementById('worldExplored').innerHTML = 'NO SAVE'
            document.getElementById('gidManager').innerText = 'Criar GID'
            instaGID = i
            isInstaGIDValid = false
        }

        if (instaGID == loadedGIDNum) {
            document.getElementById('gidManager').innerText = 'Descarregar GID'
        }

        GIDCardsAnim()
    })
}

document.getElementById('gidManager').addEventListener('click', () => {
    if (isInstaGIDValid) {
        if (instaGID == loadedGIDNum) {
            clickSound.pause()
            clickSound.currentTime = 0
            loadedGID = null
            loadedGIDNum = -1
            document.getElementById('outGIDTxt').innerText = `GID: NÃO ATRIBUÍDO`
            document.getElementById('inGIDTxt').innerText = `GID: NÃO ATRIBUÍDO`
            document.getElementById('pauseGIDTxt').innerText = `GID: NÃO ATRIBUÍDO`
            GIDCardsAnim()
            backSound.pause()
            backSound.currentTime = 0
            backSound.play()
            localStorage.removeItem('loadedGID')
            document.getElementById('gidManager').innerText = 'Carregar GID'
            document.getElementById('startGame').classList.add('GIDError')
        } else {
            clickSound.pause()
            clickSound.currentTime = 0
            loadedGID = localStorage.getItem(`gid${instaGID}`)
            loadedGID = JSON.parse(loadedGID)
            loadedGIDNum = instaGID
            document.getElementById('outGIDTxt').innerText = `GID: ${loadedGID.saveName}`
            document.getElementById('inGIDTxt').innerText = `GID: ${loadedGID.saveName}`
            document.getElementById('pauseGIDTxt').innerText = `GID: ${loadedGID.saveName}`
            GIDCardsAnim()
            cardInsert.pause()
            cardInsert.currentTime = 0
            setTimeout(() => {
                localStorage.setItem('loadedGID', loadedGIDNum)
                cardInsert.play()
            }, 1);
            document.getElementById('gidManager').innerText = 'Descarregar GID'
            document.getElementById('startGame').classList.remove('GIDError')
        }
    } else {
        let d = new Date
        let AZ = (n) => {
            return ('0' + n).slice(-2)
        }
        let now = `${AZ(d.getDate())}/${AZ(d.getMonth() + 1)}/${d.getFullYear()}`
        let name = prompt('Insert a name')
        if (name.trim() == '') {
            alert('Sem nome, nome padrão colocado')
            name = 'Ghost'
        }
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        let quickGID = {
            "saveName": name,
            "lastUse": now,
            "stardusts": 0,
            "museum": 0,
            "worlds": 0,
            "pic": `rgb(${r}, ${g}, ${b})`
        }

        localStorage.setItem(`gid${instaGID}`, JSON.stringify(quickGID))
        GIDCards[instaGID].click()
        clickSound.pause()
        clickSound.currentTime = 0
        clickSound.play()
    }

    loadGID()
})

document.getElementById('lacGID').addEventListener('click', () => {
    if (isInstaGIDValid) {
        if (instaGID == loadedGIDNum) {
            clickSound.pause()
            clickSound.currentTime = 0
            loadedGID = null
            loadedGIDNum = -1
            document.getElementById('outGIDTxt').innerText = `GID: NÃO ATRIBUÍDO`
            document.getElementById('inGIDTxt').innerText = `GID: NÃO ATRIBUÍDO`
            document.getElementById('pauseGIDTxt').innerText = `GID: NÃO ATRIBUÍDO`
            GIDCardsAnim()
            backSound.pause()
            backSound.currentTime = 0
            backSound.play()
            localStorage.removeItem('loadedGID')
            document.getElementById('startGame').classList.add('GIDError')
        } else {
            clickSound.pause()
            clickSound.currentTime = 0
            loadedGID = localStorage.getItem(`gid${instaGID}`)
            loadedGID = JSON.parse(loadedGID)
            loadedGIDNum = instaGID
            document.getElementById('outGIDTxt').innerText = `GID: ${loadedGID.saveName}`
            document.getElementById('inGIDTxt').innerText = `GID: ${loadedGID.saveName}`
            document.getElementById('pauseGIDTxt').innerText = `GID: ${loadedGID.saveName}`
            GIDCardsAnim()
            cardInsert.pause()
            cardInsert.currentTime = 0
            setTimeout(() => {
                localStorage.setItem('loadedGID', loadedGIDNum)
                cardInsert.play()
            }, 1);
            document.getElementById('startGame').classList.remove('GIDError')
        }
    } else {
        let d = new Date
        let AZ = (n) => {
            return ('0' + n).slice(-2)
        }
        let now = `${AZ(d.getDate())}/${AZ(d.getMonth() + 1)}/${d.getFullYear()}`
        let name = prompt('Insert a name')
        if (name.trim() == '') {
            alert('Sem nome, nome padrão colocado')
            name = 'Ghost'
        }
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        let quickGID = {
            "saveName": name,
            "lastUse": now,
            "stardusts": 0,
            "museum": 0,
            "worlds": 0,
            "pic": `rgb(${r}, ${g}, ${b})`
        }

        localStorage.setItem(`gid${instaGID}`, JSON.stringify(quickGID))
        GIDCards_M[instaGID].click()
        clickSound.pause()
        clickSound.currentTime = 0
        clickSound.play()
    }

    loadGID()
})

// Auto Load GID
function autoLoadGID() {
    let lsGID = localStorage.getItem('loadedGID')
    try {
        lsGID = parseInt(lsGID)
    } catch {
        console.log('LSGID isnt a number')
        return;
    }
    if (typeof lsGID == 'number' && !isNaN(lsGID)) {
        loadedGID = localStorage.getItem(`gid${lsGID}`)
        loadedGID = JSON.parse(loadedGID)
        loadedGIDNum = lsGID
        instaGID = lsGID
        document.getElementById('outGIDTxt').innerText = `GID: ${loadedGID.saveName}`
        document.getElementById('inGIDTxt').innerText = `GID: ${loadedGID.saveName}`
        document.getElementById('pauseGIDTxt').innerText = `GID: ${loadedGID.saveName}`
        cardInsert.pause()
        cardInsert.currentTime = 0
        GIDCardsAnim()
        setTimeout(() => {
            localStorage.setItem('loadedGID', loadedGIDNum)
            cardInsert.play()
        }, 1);
        document.getElementById('gidManager').innerText = 'Descarregar GID'
        document.getElementById('startGame').classList.remove('GIDError')
    } else {
        return;
    }
}