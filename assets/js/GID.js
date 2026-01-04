let GID = null
let saveArray = null
let loadedGID = null
let loadedGIDNum = -1

let freeGID = 0

let instaGID = null
let isInstaGIDValid = false

const GIDCards = [...document.getElementsByClassName('card')]
const GIDCards_M = [...document.getElementsByClassName('card-m')]

const cardPic = {
    0: 'assets/sprites/GID/images/pic.png',
    1: 'assets/sprites/GID/images/VVP.png',
    2: 'assets/sprites/GID/images/DDP.png',
    3: 'assets/sprites/GID/images/MMP.png',
    4: 'assets/sprites/GID/images/BBP.png',
    5: 'assets/sprites/GID/images/RRP.png',
    6: 'assets/sprites/GID/images/PlanetPic.png',
}

function GIDCardsAnim() {
    GIDCards_M.forEach((c) => {
        c.removeAttribute('style')
    })

    try {
        GIDCards_M[instaGID].style.marginBottom = '-120px'
    } catch {

    }

    GIDCards.forEach((c) => {
        c.removeAttribute('style')
    })

    try {
        GIDCards[instaGID].style.marginBottom = '-120px'
    } catch {

    }

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
            g.querySelector('.cardPic').style.backgroundImage = `url(${cardPic[saveArray.pic]})`
            if (typeof saveArray.pic !== "number") {
                g.querySelector('.cardPic').style.backgroundImage = `url(${saveArray.pic})`
            }
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
            g.querySelector('.cardPic').style.backgroundImage = `url(${cardPic[saveArray.pic]})`
            if (typeof saveArray.pic !== "number") {
                g.querySelector('.cardPic').style.backgroundImage = `url(${saveArray.pic})`
            }
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
            document.getElementById('saveName-M').innerHTML = saveArray.saveName
            document.getElementById('lastSave-M').innerHTML = `Último uso: ${saveArray.lastUse}`
            document.getElementById('saveStardusts-M').innerHTML = `Stardusts: ${saveArray.stardusts}`
            document.getElementById('museumPieces-M').innerHTML = `Peças do museu: ${saveArray.museum}`
            document.getElementById('worldExplored-M').innerHTML = `Mundos explorados: ${saveArray.worlds}`
            instaGID = i
            isInstaGIDValid = true
        } catch {
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
            document.getElementById('saveName').innerHTML = saveArray.saveName
            document.getElementById('lastSave').innerHTML = `Último uso: ${saveArray.lastUse}`
            document.getElementById('saveStardusts').innerHTML = `Stardusts: ${saveArray.stardusts}`
            document.getElementById('museumPieces').innerHTML = `Peças do museu: ${saveArray.museum}`
            document.getElementById('worldExplored').innerHTML = `Mundos explorados: ${saveArray.worlds}`
            document.getElementById('gidManager').innerText = 'Carregar GID'
            instaGID = i
            isInstaGIDValid = true
        } catch {
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
        let pic = Math.floor(Math.random() * 7)
        let quickGID = {
            "saveName": name,
            "lastUse": now,
            "stardusts": 0,
            "museum": 0,
            "worlds": 0,
            "pic": pic
        }

        localStorage.setItem(`gid${instaGID}`, JSON.stringify(quickGID))
        GIDCards[instaGID].click()
        clickSound.pause()
        clickSound.currentTime = 0
        clickSound.play()
    }

    loadGID()
})

document.getElementById('gidPhotoChanger').addEventListener('click', () => {
    if (loadedGID) {
        let pic = Math.floor(Math.random() * 7)
        loadedGID.pic = pic
        localStorage.setItem(`gid${loadedGIDNum}`, JSON.stringify(loadedGID))
        loadGID()
    } else {
        alert('Carregue um GID antes de alterar a foto')
    }
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
        let pic = Math.floor(Math.random() * 7)
        let quickGID = {
            "saveName": name,
            "lastUse": now,
            "stardusts": 0,
            "museum": 0,
            "worlds": 0,
            "pic": pic
        }

        localStorage.setItem(`gid${instaGID}`, JSON.stringify(quickGID))
        GIDCards_M[instaGID].click()
        clickSound.pause()
        clickSound.currentTime = 0
        clickSound.play()
    }

    loadGID()
})

document.getElementById('exportGID').addEventListener('click', () => {
    if (typeof instaGID == "number" && isInstaGIDValid) {
        let data = localStorage.getItem(`gid${instaGID}`)
        data = JSON.parse(data)
        let fileName = data.saveName
        const dataString = JSON.stringify(data);
        const blob = new Blob([dataString], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${fileName}.gid`;
        link.click();
    } else {
        alert('Selecione um GID válido antes')
    }
})

document.getElementById('importGID').addEventListener('click', () => {
    if (typeof instaGID == "number") {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = ".gid"; // só aceita arquivos .gid 
        fileInput.onchange = () => {
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                let data = reader.result
                localStorage.setItem(`gid${instaGID}`, data)
                GIDCards_M[instaGID].click()
                GIDCardsAnim()
                loadGID()
            };
            reader.readAsText(file); // lê como texto, mesmo que seja .gid 
        };
        fileInput.click();
        loadGID()
    } else {
        alert('Selecione um cartão antes')
    }
})

document.getElementById('delGID').addEventListener('click', () => {
    localStorage.removeItem(`gid${instaGID}`)
    GIDCards_M[instaGID].click()
    GIDCardsAnim()
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
        if (loadedGID == undefined) {
            return
        }
        loadedGIDNum = lsGID
        instaGID = lsGID
        isInstaGIDValid = true
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